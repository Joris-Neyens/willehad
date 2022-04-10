import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import { useState } from "react";
import axios from "axios";
import { BASE_URL, HOME_PATH } from "../../../api/baseUrl";
import { useContext } from "react";
import AuthContext from "../../../../src/context/AuthContext";

const url = BASE_URL + HOME_PATH;

export default function PutHomeInfo({ home }) {

  const {
    course_date,
    header_title,
    header_subtitle,
  } = home;

  const [submitting, setSubmitting] = useState(false);
  const [putError, setPutError] = useState(null);
  const [submitButton, setSubmitButton] = useState("upload");

  const { getToken } = useContext(AuthContext);
  const token = getToken("auth");

  const schema = yup.object().shape({
    header_title: yup
      .string()
      .required("Vul de titel in die over de header foto komt"),
    course_date: yup
      .string()
      .required("vul in datum voor de eersvolgende cursus"),
    header_subtitle: yup
      .string()
      .required("schijf een zin die de cursus beschrijft"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async data => {

    setSubmitting(true);
    setPutError(null);
    setSubmitButton("loading..");

    try {
      const response = await axios({
        method: "PUT",
        url: url,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      });
      if (response) {
        setSubmitButton("upload succesvol");
      }
      console.log("Success", response);
    } catch (error) {
      console.log(error);
      setPutError(error.toString());
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <form className="pt-5 mt-5" onSubmit={handleSubmit(onSubmit)}>
      <fieldset disabled={submitting}>
        <h4 className="mt-4 mb-3">Header afbeelding/video text</h4>
        <p className="m-0">Titel</p>
        <div className="px-0 py-2">
          <input
            className="form-control w-100 p-2"
            defaultValue={header_title}
            type="text"
            {...register("header_title")}
          />
          <p className="error"> {errors.header_title?.message}</p>
        </div>
        <p className="m-0">datum cursus</p>
        <div className="px-0 py-2">
          <input
            className="form-control w-100 p-2"
            defaultValue={course_date}
            type="text"
            {...register("course_date")}
          />
          <p className="error">{errors.course_date?.message}</p>
        </div>
        <p className="m-0">header subtitle</p>
        <div className="px-0 py-2">
          <input
            className="form-control w-100 p-2"
            defaultValue={header_subtitle}
            type="text"
            {...register("header_subtitle")}
          />
          <p className="error">{errors.header_subtitle?.message}</p>
        </div>
          <button className="button__primary--dark col-4 px-4 py-1 mt-2">
            {submitButton}
          </button>
          {putError && (
            <span>
              Er is iets misgegaan, probeer het later nog een keer of neem
              contact op met de admin
            </span>
          )}
      </fieldset>
    </form>
  );
}
