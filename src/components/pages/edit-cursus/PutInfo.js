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
  description_long,
  description_short,
  price,
  curriculum,
  teacher,
  teacher_description,
  practical_info_1,
  practical_info_2,
  category,
  type,
  subtitle,
  episodes,
}) {


  const [submitting, setSubmitting] = useState(false);
  const [putError, setPutError] = useState(null);
  const [submitButton, setSubmitButton] = useState("upload");

  const schema = yup.object().shape({
    title: yup.string().required("Vul de cursus titel in"),
    subtitle: yup
      .string()
      .required("korte slagzin voor op de header afbeelding"),
    price: yup.number().typeError("vul een getal in"),
    episodes: yup.number().required("vul een getal in"),
    description_short: yup.string().required("Vul twee zinnen in"),
    description_long: yup
      .string()
      .required("Vul een uitgebreide cursus beschrijving in"),
    curriculum: yup.string().required("Vul in wat een deelnemer zal leren"),
    teacher: yup.string().required("Vul naam van schrijver in"),
    teacher_description: yup.string().required("informatie over de schrijver"),
    practical_info_1: yup.string().required("Vul aub iets in"),
    practical_info_2: yup.string().required("Vul aub iets in"),
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
     setSubmitButton("loading..");

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
      setSubmitButton("upload succesvol");
    }
  };

  return (
    <div className="container px-0">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={submitting}>
          <p className="mb-0">titel</p>
          <input
            className="form-control w-100 p-2 rounder-0"
            type="text"
            defaultValue={title}
            {...register("title")}
          />
          <p className="error"> {errors.title?.message}</p>
          <p className="mb-0">
            uitgelicht, belangrijk dat er altijd maar eén cursus uitgelicht is!
          </p>
          <Form.Check type="switch" id="featured" {...register("featured")} />
          <p className="mb-0 mt-2">
            subtitle voor op de landingpage header image
          </p>
          <input
            className="form-control w-100 p-2 rounder-0"
            type="text"
            defaultValue={subtitle}
            {...register("subtitle")}
          />
          <p className="error"> {errors.title?.message}</p>
          <p className="mb-0">
            Korte beschrijving (twee zinnen) voor de cursus aanbod pagina
          </p>
          <textarea
            rows="2"
            className="form-control w-100 p-2"
            defaultValue={description_short}
            type="text"
            {...register("description_short")}
          />
          <p className="error"> {errors.description_short?.message}</p>
          <p className="mb-0">uitgebreide beschrijving</p>
          <textarea
            rows="6"
            className="form-control w-100 p-2"
            defaultValue={description_long}
            type="text"
            {...register("description_long")}
          />
          <p className="error"> {errors.description_long?.message}</p>
          <p className="mb-0">Prijs</p>
          <input
            className="form-control w-100 p-2"
            defaultValue={price}
            type="number"
            {...register("price")}
          />
          <p className="error"> {errors.price?.message}</p>
          <p className="mb-0">
            Praktische informatie 1 (bv. data, voorbereiding)
          </p>
          <textarea
            className="form-control w-100"
            defaultValue={practical_info_1}
            rows="6"
            {...register("practical_info_1")}
          />
          <p className="error"> {errors.practical_info_1?.message}</p>
          <p className="mb-0">
            Praktische informatie 2 (bv. kosten, hoe aanmelden)
          </p>
          <textarea
            className="form-control w-100"
            defaultValue={practical_info_2}
            rows="6"
            {...register("practical_info_2")}
          />
          <p className="error"> {errors.practical_info_2?.message}</p>
          <p className="mb-0">
            Wat gaan ze leren (Om een lijst te maken gebruik enter om volgende
            regel te schrijven)
          </p>
          <textarea
            className="form-control w-100"
            defaultValue={curriculum}
            rows="6"
            {...register("curriculum")}
          />
          <p className="error"> {errors.curriculum?.message}</p>
          <p className="mb-0">Naam docent</p>
          <input
            className="form-control w-100 p-2"
            type="text"
            defaultValue={teacher}
            {...register("teacher")}
          />
          <p className="error"> {errors.teacher?.message}</p>
          <p className="mb-0">over de docent</p>
          <textarea
            className="form-control w-100"
            defaultValue={teacher_description}
            rows="6"
            type="text"
            {...register("teacher_description")}
          />
          <p className="error">{errors.teacher_description?.message}</p>
          <p className="mb-0">Categorie</p>
          <select
            id="inputState"
            defaultValue={category}
            className="form-control"
            {...register("category")}
          >
            <option defaultValue>Theologie</option>
            <option>Filosofie</option>
            <option>Geschiedenis</option>
            <option>Bijbel studie</option>
            <option>Catechese</option>
            <option>filosofie</option>
          </select>
          <p className="mb-0">Type cursus</p>
          <select
            id="inputState"
            defaultValue={type}
            className="form-control"
            {...register("type")}
          >
            <option defaultValue>Cursus traject</option>
            <option>Video</option>
            <option>Audio</option>
            <option>Webinar</option>
          </select>
          <p className="mb-0">Aantal delen/ hoofdstukken</p>
          <input
            className="form-control w-100 p-2"
            defaultValue={episodes}
            type="number"
            {...register("episodes")}
          />
          <p className="error"> {errors.price?.message}</p>
          <button className="button__primary--dark col-4" type="submit">
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