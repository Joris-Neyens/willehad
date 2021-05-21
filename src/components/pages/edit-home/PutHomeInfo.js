import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../api/baseUrl";

const url = BASE_URL + "home";

export default function PutHomeInfo({
  course_date,
  title,
  subtitle,
  course_title,
  course_description,
}) {
  const [submitting, setSubmitting] = useState(false);
  const [putError, setPutError] = useState(null);

  const schema = yup.object().shape({
    title: yup
      .string()
      .required("Vul de title in die over de header foto komt"),
    course_date: yup
      .string()
      .required("vul in datum voor de eersvolgende cursus"),
    subtitle: yup.string().required("schijf een zin die de cursus beschrijft"),
    course_title: yup.string().required("Vul cursus titel in"),
    course_description: yup
      .string()
      .required(
        "Schrijf een korte beschijving van de cursus voor de hoofdpagina"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setSubmitting(true);
    setPutError(null);

    try {
      const response = await axios({
        method: "PUT",
        url: url,
        data: data,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOGJmM2RjYzZkYzgzMDAxNWQ3MmUwYSIsImlhdCI6MTYyMDA0MzcwMiwiZXhwIjoxNjIyNjM1NzAyfQ.HDVFp5zd8oC7wjSz4aOZjJORF5ptlL9pOfjgMjqMbNA",
          "content-type": "application/json",
        },
      });
      console.log("Success", response);
    } catch (error) {
      console.log(error);
      setPutError(error.toString());
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset disabled={submitting}>
        <h4 className="mt-4 mb-3">Header info</h4>
        <p className="m-0">Titel</p>
        <div className="col-8 px-0 py-2">
          <input
            className="form-control w-100 p-2 rounded"
            defaultValue={title}
            type="text"
            {...register("title")}
          />
          <p className="error"> {errors.title?.message}</p>
        </div>
        <p className="m-0">datum cursus</p>
        <div className="col-8 px-0 py-2">
          <input
            className="form-control w-100 p-2 rounded"
            defaultValue={course_date}
            type="text"
            {...register("course_date")}
          />
          <p className="error">{errors.course_date?.message}</p>
        </div>
        <p className="m-0">subtitle</p>
        <div className="col-8 px-0 py-2">
          <input
            className="form-control w-100 p-2 rounded"
            defaultValue={subtitle}
            type="text"
            {...register("subtitle")}
          />
          <p className="error">{errors.subtitle?.message}</p>
        </div>
        <h4 className="mt-5 mb-3">Homepage cursus info</h4>
        <p className="m-0">Naam cursus</p>
        <div className="col-8 px-0 py-2">
          <input
            className="form-control w-100 p-2 rounded"
            defaultValue={course_title}
            type="text"
            {...register("course_title")}
          />
          <p className="error">{errors.course_title?.message}</p>
        </div>
        <p className="m-0">Cursus beschrijving</p>
        <div className="col-8 px-0 py-2">
          <textarea
            className="form-control w-100 rounded"
            rows="8"
            defaultValue={course_description}
            type="text"
            {...register("course_description")}
          />
          <p className="error">{errors.course_description?.message}</p>
        </div>
        <div className="d-flex col-8 justify-content-center">
          <button className="button__primary--dark px-4 mt-2">
            {submitting ? "momentje.." : "Submit"}
          </button>
          {putError && (
            <span>
              Er is iets misgegaan, probeer het later nog een keer of neem
              contact op met de admin
            </span>
          )}
        </div>
      </fieldset>
    </form>
  );
}
