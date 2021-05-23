import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useContext } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import { BASE_URL } from "../../../api/baseUrl";
import AuthContext from "../../../../src/context/AuthContext";

export default function PutInfo({ course }) {
  const {
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
  } = course;

  const [submitting, setSubmitting] = useState(false);
  const [putError, setPutError] = useState(null);
  const [submitButton, setSubmitButton] = useState("upload");

  const { getToken } = useContext(AuthContext);
  const token = getToken("auth");

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

  const onSubmit = async data => {
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
          <p className="mb-0">titel</p>
          <div className="py-2">
            <input
              className="form-control w-100 p-2 rounder-0"
              type="text"
              defaultValue={title}
              {...register("title")}
            />
          </div>
          <p className="error"> {errors.title?.message}</p>
          <p className="mb-0">
            uitgelicht, belangrijk dat er altijd maar eén cursus uitgelicht is!
          </p>
          <div className="py-2">
            <Form.Check type="switch" id="featured" {...register("featured")} />
          </div>
          <p className="mb-0 mt-2">
            subtitle voor op de landingpage header image
          </p>
          <div className="py-2">
            <input
              className="form-control w-100 p-2 rounder-0"
              type="text"
              defaultValue={subtitle}
              {...register("subtitle")}
            />
          </div>
          <p className="error"> {errors.title?.message}</p>
          <p className="mb-0">
            Korte beschrijving (twee zinnen) voor de cursus aanbod pagina
          </p>
          <div className="py-2">
            <textarea
              rows="2"
              className="form-control w-100 p-2"
              defaultValue={description_short}
              type="text"
              {...register("description_short")}
            />
          </div>
          <p className="error"> {errors.description_short?.message}</p>
          <p className="mb-0">uitgebreide beschrijving</p>
          <div className="py-2">
            <textarea
              rows="6"
              className="form-control w-100 p-2"
              defaultValue={description_long}
              type="text"
              {...register("description_long")}
            />
          </div>
          <p className="error"> {errors.description_long?.message}</p>
          <p className="mb-0">Prijs</p>
          <div className="py-2">
            <input
              className="form-control w-100 p-2"
              defaultValue={price}
              type="number"
              {...register("price")}
            />
          </div>
          <p className="error"> {errors.price?.message}</p>
          <p className="mb-0">
            Praktische informatie 1 (bv. data, voorbereiding)
          </p>
          <div className="py-2">
            <textarea
              className="form-control w-100"
              defaultValue={practical_info_1}
              rows="6"
              {...register("practical_info_1")}
            />
          </div>
          <p className="error"> {errors.practical_info_1?.message}</p>
          <p className="mb-0">
            Praktische informatie 2 (bv. kosten, hoe aanmelden)
          </p>
          <div className="py-2">
            <textarea
              className="form-control w-100"
              defaultValue={practical_info_2}
              rows="6"
              {...register("practical_info_2")}
            />
          </div>
          <p className="error"> {errors.practical_info_2?.message}</p>
          <p className="mb-0">
            Wat gaan ze leren. Gebruik nieuwe regel voor nieuwe zin!
          </p>
          <div className="py-2">
            <textarea
              className="form-control w-100"
              defaultValue={curriculum}
              rows="6"
              {...register("curriculum")}
            />
          </div>
          <p className="error"> {errors.curriculum?.message}</p>
          <p className="mb-0">Naam docent</p>
          <div className="py-2">
            <input
              className="form-control w-100 p-2"
              type="text"
              defaultValue={teacher}
              {...register("teacher")}
            />
          </div>
          <p className="error"> {errors.teacher?.message}</p>
          <p className="mb-0">over de docent</p>
          <div className="py-2">
            <textarea
              className="form-control w-100"
              defaultValue={teacher_description}
              rows="6"
              type="text"
              {...register("teacher_description")}
            />
          </div>
          <p className="error">{errors.teacher_description?.message}</p>
          <p className="mb-0">Categorie</p>
          <div className="py-2">
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
            </select>
          </div>
          <p className="mb-0">Type cursus</p>
          <div className="py-2">
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
          </div>
          <p className="mb-0">Aantal delen/ hoofdstukken</p>
          <div className="py-2">
            <input
              className="form-control w-100 p-2"
              defaultValue={episodes}
              type="number"
              {...register("episodes")}
            />
          </div>
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

PutInfo.protoTypes = {
  course: PropTypes.object.isRequired,
}