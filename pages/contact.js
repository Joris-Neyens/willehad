import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Head from "../src/components/head/Head";
import Layout from "../src/components/layout/Layout";
import { BASE_URL, CONTACT_PATH } from "../src/api/baseUrl";

const url = BASE_URL + CONTACT_PATH

export default function contact() {
  const schema = yup.object().shape({
    name: yup.string().required("Vul aub je naam in"),
    email: yup
      .string()
      .required("vul aub een geldig email adres in")
      .email("vul aub een geldig email adres in"),
    message: yup
      .string()
      .required("Vul aub een bericht in"),
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
        const [submitButton, setSubmitButton] = useState("verstuur");

  const onSubmit = async data => {
    setSubmitting(true);
    setPostError(null);
    setSubmitButton("momentje..");

    try {
      const response = await axios({
        method: "POST",
        url: url,
        data: data,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      setPostError(error.toString());
    } finally {
      setSubmitting(false);
      setSubmitButton("verstuurd");
    }
  };

  return (
    <>
      <Head title="contact" description="wie is Willehad en contactformulier" />
      <div className="wrapper">
        <Layout>
          <main className="contact py-5">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6 offset-lg-3">
                  <h1>Contact</h1>
                  <p>
                    Willehad had is een initiatief van het{" "}
                    <Link href="https://www.thomistischinstituut.nl/">
                      Thomistisch Instituut
                    </Link>{" "}
                    en heeft als doel jongeren en gezinnen aan te moedigen op
                    reis te gaan door de grote intellectuele Traditie van de
                    Katholieke Kerk door het toegankelijk te maken. Voor vragen
                    of opmerkingen kunt u gebruik maken van het onderstaand
                    formulier. Wij doen ons best om u binnen twee werkdagen te
                    antwoorden.
                  </p>
                </div>
              </div>
              <div className="row w-100 mx-auto pt-3">
                <div className="col-12 col-lg-6 offset-lg-3 background-dark  p-3">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset disabled={submitting}>
                      <div className="row">
                        <div className="col-8">
                          <label>Naam</label>
                          <input
                            {...register("name")}
                            id="naam"
                            type="text"
                            className="form-control"
                          ></input>
                          <p className="mb-0">{errors.name?.message}</p>
                          <label>Email</label>
                          <input
                            {...register("email")}
                            id="email"
                            type="text"
                            className="form-control"
                          ></input>
                          <p className="mb-0">{errors.email?.message}</p>
                        </div>
                        <div className="col-12">
                          <label>Bericht</label>
                          <textarea
                            {...register("message")}
                            className="form-control"
                            id="message"
                            rows="6"
                          ></textarea>
                          <p className="mb-0">{errors.message?.message}</p>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="button__primary--dark mt-3 px-4"
                      >
                        {submitButton}
                      </button>
                      {postError && (
                        <span>
                          Sorry er is iets mis gegaan, probeer het later nog een
                          keer
                        </span>
                      )}
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </Layout>
      </div>
    </>
  );
}
