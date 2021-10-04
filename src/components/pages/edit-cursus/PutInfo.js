import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useContext } from "react";
import axios from "axios";
import { BASE_URL } from "../../../api/baseUrl";
import AuthContext from "../../../../src/context/AuthContext";

export default function PutInfo({ course }) {
  const {
    id,
    title,
    description_long,
  } = course;

  const [submitting, setSubmitting] = useState(false);
  const [putError, setPutError] = useState(null);
  const [submitButton, setSubmitButton] = useState("upload");

  const { getToken } = useContext(AuthContext);
  const token = getToken("auth");

  const schema = yup.object().shape({
    description_long: yup
      .string()
      .required("Vul een uitgebreide cursus beschrijving in"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async data => {

        console.log(data);
    setSubmitting(true);
    setPutError(null);
    setSubmitButton("loading..");

    console.log(data)

    const url = BASE_URL + "courses/" + id;
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
      setSubmitButton("upload niet gelukt");
      setPutError(error.toString());
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="px-0">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={submitting}>
          <h3 className="mb-0">{ title }</h3>
          <p className="mb-0 pt-3">cursus beschrijving</p>
          <div className="py-2">
            <textarea
              rows="8"
              className="form-control w-100 p-2"
              defaultValue={description_long}
              type="text"
              {...register("description_long")}
            />
          </div>
          <p className="error"> {errors.description_long?.message}</p>
          <button className="button__primary--dark col-12 col-md-6 col-lg-4 py-1" type="submit">
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
    </div>
  );
}

PutInfo.protoTypes = {
  course: PropTypes.object.isRequired,
}