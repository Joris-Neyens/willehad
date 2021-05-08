import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import { BASE_URL } from "../../../api/baseUrl";

export default function PutInfo({
  id,
  title,
  description,
  price,
  curriculum,
  teacher,
  teacher_description,
  practical_info,
}) {
  const [submitting, setSubmitting] = useState(false);
  const [putError, setPutError] = useState(null);

  const schema = yup.object().shape({
    title: yup.string().required("Vul de cursus titel in"),
    price: yup.number().required("vul een getal in"),
    description: yup.string().required("Cursus beschijving"),
    curriculum: yup.string().required("Vul in wat een deelnemer zal leren"),
    teacher: yup.string().required("Vul naam van schrijver in"),
    teacher_description: yup.string().required("informatie over de schrijver"),
    practical_info: yup
      .string()
      .required("Schrijf iets over datums, kosten etc."),
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

    const url = BASE_URL + "courses/" + id;
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
      setPutError(error.toString());
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={submitting}>
          <h4 className="mt-4 mb-3">Cursus info</h4>
          <p className="m-0">Titel</p>
          <div className="col-8 px-0 py-2">
            <input
              className="w-100 p-2 rounded"
              defaultValue={title}
              type="text"
              {...register("title")}
            />
            <p className="error"> {errors.title?.message}</p>
          </div>
          <Form.Check
            className="col-12 my-3"
            type="switch"
            id="featured"
            label="uitgelicht (er kan maar een cursus uitgelicht worden)"
            {...register("featured")}
          />
          <p className="m-0 mt-4">Cursus vorm</p>
          <div className="row">
            <div className="col-4">
              <Form.Check
                className="col-12 my-3"
                type="switch"
                id="course"
                label="cursus"
                {...register("type_course")}
              />
              <Form.Check
                className="col-12 my-3"
                type="switch"
                id="video"
                label="video"
                {...register("type_video")}
              />
            </div>
            <div className="col">
              <Form.Check
                className="col-12 my-3"
                type="switch"
                id="audio"
                label="audio"
                {...register("type_audio")}
              />
              <Form.Check
                className="col-12 my-3"
                type="switch"
                id="webinar"
                label="webinar"
                {...register("type_webinar")}
              />
            </div>
          </div>
          <p className="m-0 mt-4">Beschrijving</p>
          <div className="col-8 px-0 py-2">
            <textarea
              className="w-100 rounded"
              rows="6"
              defaultValue={description}
              type="text"
              {...register("description")}
            />
            <p className="error"> {errors.description?.message}</p>
          </div>
          <p className="m-0">Prijs</p>
          <div className="col-8 px-0 py-2">
            <input
              className="w-100 p-2 my-2 rounded"
              defaultValue={price}
              type="number"
              {...register("price")}
            />
          </div>
          <p className="error"> {errors.price?.message}</p>
          <p className="m-0 mt-4">Practische informatie</p>
          <div className="col-8 px-0 py-2">
            <textarea
              className="w-100 rounded"
              rows="6"
              defaultValue={practical_info}
              type="text"
              {...register("practical_info")}
            />
            <p className="error"> {errors.practical_info?.message}</p>
          </div>
          <p className="m-0">Curriculum</p>
          <div className="col-8 px-0 py-2">
            <textarea
              rows="6"
              className="w-100 rounded"
              defaultValue={curriculum}
              {...register("curriculum")}
            />
            <p className="error"> {errors.curriculum?.message}</p>
          </div>
          <p className="m-0">Naam docent</p>
          <div className="col-8 px-0 py-2">
            <input
              className="w-100 p-2 my-2 rounded"
              defaultValue={teacher}
              type="text"
              {...register("teacher")}
            />
            <p className="error"> {errors.teacher?.message}</p>
          </div>
          <p className="m-0">Docent info</p>
          <div className="col-8 px-0 py-2">
            <textarea
              className="w-100 rounded"
              rows="6"
              defaultValue={teacher_description}
              type="text"
              {...register("teacher_description")}
            />
            <p className="error"> {errors.teacher_description?.message}</p>
          </div>
          <h4 className="mt-4">Categorieën</h4>
          <div className="row">
            <div className="col-4">
              <Form.Check
                className="col-3 my-3"
                type="switch"
                id="geschiedenis"
                label="geschiedenis"
                {...register("category_history")}
              />
              <Form.Check
                className="col-3 my-3"
                type="switch"
                id="filosofie"
                label="filosofie"
                {...register("category_philosophy")}
              />
            </div>
            <div className="col-4">
              <Form.Check
                className="col-3 my-3"
                type="switch"
                id="theologie"
                label="theologie"
                {...register("category_theology")}
              />
              <Form.Check
                className="col-3 my-3"
                type="switch"
                id="catechese"
                label="catechese"
                {...register("category_catechesis")}
              />
            </div>
            <div className="col-12">
              <Form.Check
                className="col-4"
                type="switch"
                id="bijbel studie"
                label="bijbel studie"
                {...register("category_bibel_study")}
              />
            </div>
          </div>
          <button className="button__secondary--dark mt-5" type="submit">
            {submitting ? "momentje.." : "Submit"}
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
