import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import localStorage from "localStorage";
import { BASE_URL } from "../../../../src/api/baseUrl";
import Head from "../../../../src/components/head/Head";

const schema = yup.object().shape({
  identifier: yup
    .string()
    .required("vul je email adres in")
    .email("vul een geldig emailadres in"),
  password: yup.string().required("vul hier je wachwoord in"),
});

const url = BASE_URL + "auth/local";

export default function adminForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    try {
      const response = await axios.post(url, data);
      localStorage.setItem("auth", JSON.stringify(response.data.jwt));
    } catch (error) {
      console.log("error is", error);
      if (error) {
        setLoginError(error.toString());
      }
      
    } finally {
      router.push("/admin/dashboard");
      setSubmitting(false);
    }
  }

  return (
    <>
      <Head title="Admin" description="login voor admin" />
      <section className="admin pb-5">
        <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
          <h1>Admin</h1>
          <div className="row w-100">
            <div className="col-12 col-lg-4 offset-lg-4">
              <form className="background__transparent shadow-sm py-4 px-3" onSubmit={handleSubmit(onSubmit)}>
                {loginError && <span>Als je email en wachtwoord niet werken, neem contact op met de admin</span>}
                <fieldset disabled={submitting}>
                  <input placeholder="email" id="email" className="form-control w-75 mt-3 mx-auto" {...register("identifier")} />

                  <p>{errors.identifier?.message}</p>

                  <input type="password" placeholder="paswoord" id="email" className="form-control w-75 mx-auto" {...register("password")} />

                  <p>{errors.password?.message}</p>
                  <div className="d-flex justify-content-center">
                    <button className="button__primary py-1 px-5" type="submit">
                      {submitting ? "momentje.." : "login"}
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
