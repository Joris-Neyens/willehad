import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import axios from "axios";
import { BASE_URL, NEWSLETTER_PATH } from "../../../api/baseUrl";

const url = BASE_URL + NEWSLETTER_PATH;

const schema = yup.object().shape({
  email_address: yup
    .string()
    .required("vul aub een geldig email adres in")
    .email("vul aub een geldig email adres in"),
});


export default function Newsletter() {
  
   const [submitting, setSubmitting] = useState(false);
  const [postError, setPostError] = useState(null);
      const [submitButton, setSubmitButton] = useState("Schrijf je in");
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

 async function onSubmit(data) {
   setSubmitting(true);
   setPostError(null);
   setSubmitButton("momentje..");
   try {
     const response = await axios({
       method: "POST",
       url: url,
       data: data,
     });
     console.log(response.data);
   } catch (error) {
     console.log(error);
     setPostError(error.toString());
   } finally {
     setSubmitting(false);
     setSubmitButton("verstuurd");
   }
 };
        
  
  return (
    <section className="newsletter py-5 mb-5">
      <div className="container">
        <div className="row h-100">
          <div className=" col-sm-8 col-md-6 offset-sm-2 offset-md-3 col-lg-4 offset-lg-2 pb-4 py-lg-4">
            <p className="text-center text-lg-left m-0">
              Wekelijkse podcast, nieuws over nieuwe cursussen en
              ontwikkelingen. Ontvang onze nieuwsbrief direct via email.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="col-sm-8 offset-sm-2 offset-lg-0 col-lg-6 d-flex align-items-center"
          >
            <fieldset className="w-100" disabled={submitting}>
              <div className="row w-100 mx-auto">
                <div className="col-12 col-md-6 offset-md-0 px-0 col-lg-5 d-flex align-items-center">
                  <input
                    {...register("email_address")}
                    placeholder="email adres"
                    className="form-control "
                  ></input>
                </div>
                <div className="col-12 col-md-6 col-lg-4 pl-0 pl-md-2 pr-0 d-flex align-items-center">
                  {postError && (
                    <span>
                      Sorry er is iets mis gegaan, probeer het later nog een
                      keer
                    </span>
                  )}
                  <button className="button__primary w-100 mx-auto mt-3 mt-md-0 pt-2 pb-1 px-4">
                    {submitButton}
                  </button>
                </div>
                <div className="col-3">
                  <p className="mb-0">{errors.email_address?.message}</p>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
}
