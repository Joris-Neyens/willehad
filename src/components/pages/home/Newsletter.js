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
    <section className="newsletter d-flex justify-content-center py-5 mb-5">
      <div className="container">
        <div className="row h-100">
          <div className="col-12 col-md-6 offset-lg-1 pb-4 d-flex flex-column justify-content-center">
            <h2 className="">Nieuwsbrief</h2>
            <p className="text-lg-left m-0 ">
              Blijf op de hoogte van nieuwe cursussen, activiteiten en aanbiedingen.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="col-12 col-md-4 d-flex align-items-center"
          >
            <fieldset className="w-100" disabled={submitting}>
              <div className="row w-100 mx-auto">
                <div className="col-12 col-md-12 offset-md-0 px-0 d-flex align-items-center">
                  <input
                    {...register("email_address")}
                    placeholder="email adres"
                    className="form-control text-center"
                  ></input>
                </div>
                <div className="col-12 col-md-12 pl-0 pl-md-0 mt-md-3 pr-0 d-flex align-items-center">
                  {postError && (
                    <span>
                      Sorry er is iets mis gegaan, probeer het later nog een
                      keer
                    </span>
                  )}
                  <button className="col-12 button__primary w-100 mx-lg-auto mt-3 mt-md-0 pt-2 pb-1 px-4">
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
