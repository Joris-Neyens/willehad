import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { BASE_URL } from '../js/api/baseUrl';
import Head from '../js/components/head/Head';



const schema = yup.object().shape({
  identifier: yup.string().required("vul je naam in").email("vul een geldig emailadres in"),
  password: yup.string().required("vul hier je wachwoord in"),
});

const url = BASE_URL + "auth/local"

export default function admin() {

    const [ submitting, setSubmitting] = useState(false);
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
    console.log(data)
         setSubmitting(true);
         setLoginError(null);

        try {
          const response = await axios.post(url, data);
          const json = response.data
          console.log(json.jwt)
          
          if (json.user) {
            const token = JSON.stringify(json.jwt)
            localStorage.setItem("token", token);
            router.push("/dashboard");
          }
            
        }  catch(error) {
            console.log("error is", error);
            setLoginError(error.toString());
        } finally {
            setSubmitting(false);
        }
    }

  return (
    <>
      <Head
        title="Admin"
        description="login voor admin"
      ></Head>
    <section>
      <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
        <h1>Admin</h1>
        <form className="w-25" onSubmit={handleSubmit(onSubmit)}>
          {loginError && <span>Als je email en wachtwoord niet werkt, neem contact op met de admin</span>}
            <fieldset disabled={submitting}>
          <input className="w-100 p-2" placeholder="email" {...register("identifier")} />
          <p>{errors.identifier?.message}</p>

          <input className="w-100 p-2" placeholder="password" {...register("password")} />
          <p>{errors.password?.message}</p>
          <div className="d-flex justify-content-center">
            <button className="button__primary py-1 px-5" type="submit">
              {submitting ? "momentje.." : "login"}
            </button>
          </div>
          
      </fieldset>
        </form>
      </div>
      </section>
      </>
  );
}
