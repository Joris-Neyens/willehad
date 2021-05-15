import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Form } from "react-bootstrap";
import Head from "../../../src/components/head/Head";
import SideNav from "../../../src/components/pages/dashboard/SideNav";
import DashboardMenu from "../../../src/components/layout/DashboardMenu";
import { BASE_URL, COURSES_PATH} from "../../../src/api/baseUrl";

const url = BASE_URL + COURSES_PATH;

export default function nieuweCursus() {
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

  const [submitting, setSubmitting] = useState(false);
  const [postError, setPostError] = useState(null);

  const router = useRouter();

  const onSubmit = async (data) => {
    setSubmitting(true);
    setPostError(null);
    try {
      const response = await axios({
        method: "POST",
        url: url,
        data: data,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOGJmM2RjYzZkYzgzMDAxNWQ3MmUwYSIsImlhdCI6MTYyMDA0MzcwMiwiZXhwIjoxNjIyNjM1NzAyfQ.HDVFp5zd8oC7wjSz4aOZjJORF5ptlL9pOfjgMjqMbNA",
          "content-type": "application/json",
        },
      });

      const id = response.data._id;
      console.log(response);

      router.push(`/admin/dashboard/nieuwe-cursus/${id}`);
    } catch (error) {
      console.log(error);
      setPostError(error.toString());
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <DashboardMenu />
      <Head title="nieuwe cursus" description="voeg nieuwe cursus toe"></Head>
      <div className="container-fluid">
        <div className="row">
          <SideNav />
          <div className="col-8 pb-4 mt-5">
            <div className="row">
              <div className="col-10 pl-5">
                <h1>Nieuwe cursus</h1>
                <form className="mb-5 pb-5" onSubmit={handleSubmit(onSubmit)}>
                  <fieldset disabled={submitting}>
                    <p className="mb-0">titel</p>
                    <input
                      className="form-control w-100 p-2 rounder-0"
                      type="text"
                      {...register("title")}
                    />
                    <p className="error"> {errors.title?.message}</p>
                    <p className="mb-0">
                      uitgelicht, belangrijk dat er altijd maar eén cursus
                      uitgelicht is!
                    </p>
                    <Form.Check
                      type="switch"
                      id="featured"
                      {...register("featured")}
                    />
                    <p className="mb-0 mt-2">subtitle voor op de landingpage header image</p>
                    <input
                      className="form-control w-100 p-2 rounder-0"
                      type="text"
                      {...register("subtitle")}
                    />
                    <p className="error"> {errors.title?.message}</p>
                    <p className="mb-0">
                      Korte beschrijving (twee zinnen) voor de cursus aanbod
                      pagina
                    </p>
                    <textarea
                      rows="2"
                      className="form-control w-100 p-2"
                      type="text"
                      {...register("description_short")}
                    />
                    <p className="error">
                      {" "}
                      {errors.description_short?.message}
                    </p>
                    <p className="mb-0">uitgebreide beschrijving</p>
                    <textarea
                      rows="6"
                      className="form-control w-100 p-2"
                      type="text"
                      {...register("description_long")}
                    />
                    <p className="error"> {errors.description_long?.message}</p>
                    <p className="mb-0">Prijs</p>
                    <input
                      className="form-control w-100 p-2"
                      type="number"
                      {...register("price")}
                    />
                    <p className="error"> {errors.price?.message}</p>
                    <p className="mb-0">
                      Praktische informatie 1 (bv. data, voorbereiding)
                    </p>
                    <textarea
                      className="form-control w-100"
                      rows="6"
                      {...register("practical_info_1")}
                    />
                    <p className="error"> {errors.practical_info_1?.message}</p>
                    <p className="mb-0">
                      Praktische informatie 2 (bv. kosten, hoe aanmelden)
                    </p>
                    <textarea
                      className="form-control w-100"
                      rows="6"
                      {...register("practical_info_2")}
                    />
                    <p className="error"> {errors.practical_info_2?.message}</p>
                    <p className="mb-0">
                      Wat gaan ze leren (Om een lijst te maken gebruik enter om
                      volgende regel te schrijven)
                    </p>
                    <textarea
                      className="form-control w-100"
                      rows="6"
                      {...register("curriculum")}
                    />
                    <p className="error"> {errors.curriculum?.message}</p>
                    <p className="mb-0">Naam docent</p>
                    <input
                      className="form-control w-100 p-2"
                      type="text"
                      {...register("teacher")}
                    />
                    <p className="error"> {errors.teacher?.message}</p>
                    <p className="mb-0">over de docent</p>
                    <textarea
                      className="form-control w-100"
                      rows="6"
                      type="text"
                      {...register("teacher_description")}
                    />
                    <p className="error">
                      {errors.teacher_description?.message}
                    </p>
                    <p className="mb-0">Categorie</p>
                    <select
                      id="inputState"
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
                      type="number"
                      {...register("episodes")}
                    />
                    <p className="error"> {errors.price?.message}</p>
                    {/* <Form.Check
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
                    <Form.Check
                      className="col-3 my-3"
                      type="switch"
                      id="bijbel studie"
                      label="bijbel studie"
                      {...register("category_bibel_study")}
                    /> */}
                    <div className="d-flex justify-content-center">
                      <button
                        className="button__primary--dark mx-5"
                        type="submit"
                      >
                        {submitting ? "momentje.." : "volgende stap 1/2"}
                      </button>
                      {postError && (
                        <span>
                          Er is iets misgegaan, probeer het later nog een keer
                          of neem contact op met de admin
                        </span>
                      )}
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
