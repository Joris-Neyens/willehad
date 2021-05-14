import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Form } from "react-bootstrap";
import Head from "../../../src/components/head/Head";
import Menu from "../../../src/components/pages/dashboard/SideMenu";
import DashboardMenu from "../../../src/components/layout/DashboardMenu";
import { BASE_URL } from "../../../src/api/baseUrl";

const url = BASE_URL + "courses";

export default function nieuweCursus() {
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
          <Menu />
          <div className="col-8 pb-4 mt-5">
            <div className="row">
              <div className="col-10 pl-5">
                <h1>Nieuwe cursus</h1>
                <form className="mb-5 pb-5" onSubmit={handleSubmit(onSubmit)}>
                  <fieldset disabled={submitting}>
                    <p>titel</p>
                    <input
                      className="form-control w-100 p-2 rounded"
                      type="text"
                      {...register("title")}
                    />
                    <p className="error"> {errors.title?.message}</p>
                    <p>beschrijving</p>
                    <textarea
                      rows="6"
                      className="form-control w-100 p-2 rounded"
                      type="text"
                      {...register("description")}
                    />
                    <p className="error"> {errors.description?.message}</p>
                    <Form.Check
                      className="col-12 my-3"
                      type="switch"
                      id="featured"
                      label="uitgelicht (er kan maar een cursus uitgelicht worden)"
                      {...register("featured")}
                    />
                    <p>Prijs</p>
                    <input
                      className="form-control w-100 p-2 my-2 rounded"
                      type="number"
                      {...register("price")}
                    />
                    <p className="error"> {errors.price?.message}</p>
                    <p>Praktische informatie</p>
                    <textarea
                      className="form-control w-100 rounded"
                      rows="6"
                      {...register("practical_info")}
                    />
                    <p className="error"> {errors.practical_info?.message}</p>
                    <p>Wat gaan ze leren</p>
                    <textarea
                      className="form-control w-100 rounded"
                      rows="6"
                      {...register("curriculum")}
                    />
                    <p className="error"> {errors.curriculum?.message}</p>
                    <p>Naam docent</p>
                    <input
                      className="form-control w-100 p-2 my-2 rounded"
                      type="text"
                      {...register("teacher")}
                    />
                    <p className="error"> {errors.teacher?.message}</p>
                    <p>over de docent</p>
                    <textarea
                      className="form-control w-100 rounded"
                      rows="6"
                      type="text"
                      {...register("teacher_description")}
                    />
                    <p className="error">
                      {errors.teacher_description?.message}
                    </p>

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
                    />
                    <div className="d-flex justify-content-center">
                      <button
                        className="button__primary--dark mx-5 rounded"
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
