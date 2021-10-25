import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import axios from "axios";
import Reveal from "react-reveal/Reveal";
import Head from "../src/components/head/Head";
import Header from "../src/components/layout/header/Header";
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
          <Header
            url="/contact-1.jpg"
            viewHeight={70}
            textCol="6"
            topic="Willehad cursus platform"
            title="Contact informatie"
            subtitle="Hebt u een vraag of opmering? Schroom niet en laat ons een berichtje achter."
          />
          <main className="contact py-5">
            <div className="container">
              <div className="row w-100 mx-auto pt-3">
                <Reveal>
                  <div className="col-12 p-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <fieldset disabled={submitting}>
                        <div className="row">
                          <div className="col-lg-6">
                            <label>Naam</label>
                            <input {...register("name")} id="naam" type="text" className="form-control"></input>
                            <p className="mb-0">{errors.name?.message}</p>
                            <label className="pt-2">Email</label>
                            <input {...register("email")} id="email" type="text" className="form-control"></input>
                            <p className="mb-0">{errors.email?.message}</p>
                          </div>
                          <div className="col-lg-8 pt-2">
                            <label>Bericht</label>
                            <textarea {...register("message")} className="form-control" id="message" rows="8"></textarea>
                            <p className="mb-0">{errors.message?.message}</p>
                          </div>
                        </div>
                        <button type="submit" className="col-12 col-md-6 col-lg-4 w-100 button__primary mt-3 py-2 px-5">
                          {submitButton}
                        </button>
                        {postError && <span>Sorry er is iets mis gegaan, probeer het later nog een keer</span>}
                      </fieldset>
                    </form>
                  </div>
                </Reveal>
              </div>
            </div>
          </main>
        </Layout>
      </div>
    </>
  );
}
