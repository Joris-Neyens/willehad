import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import { useState } from "react";
import axios from "axios";
import { BASE_URL, REVIEWS_PATH } from "../../../api/baseUrl";
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";

const url = BASE_URL + REVIEWS_PATH

export default function PutReview(){
    
    const [submitting, setSubmitting] = useState(false);
    const [putError, setPutError] = useState(null);
  const [submitButton, setSubmitButton] = useState("upload");
  const [confirmation, setConfirmation] = useState(<p className="d-none">upload succesvol</p>)


    const { getToken } = useContext(AuthContext);
    const token = getToken("auth");

    const schema = yup.object().shape({
      title: yup
        .string()
        .required("Vul aub iets in"),
      rating: yup
        .number()
        .required("vul aub iets in"),
      review: yup
        .string()
        .required("vul aub iets in"),
    });

  
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });

  const onSubmit = async data => {
      
    console.log(data)

      setSubmitting(true);
      setPutError(null);
      setSubmitButton("loading..");

      try {
        const response = await axios({
          method: "POST",
          url: url,
          data: data,
          headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "application/json",
          },
        });
        if (response.status === 200) {
          console.log();
          setSubmitButton("upload");
          setConfirmation(<p>upload succesvol</p>);
        }
        console.log("Success", response);
      } catch (error) {
          setSubmitButton("upload");
        console.log(error);
        setPutError(error.toString());
      } finally {
        setSubmitting(false);
      }
    };


  return (
    <>
      <form className="pt-5 mt-5" onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={submitting}>
          <h4 className="pb-3 pt-5">Review toevoegen</h4>
          <p className="m-0">Review title</p>
          <div className="px-0 py-2">
            <input className="form-control w-100 p-2" type="text" {...register("title")} />
            <p className="error">{errors.title?.message}</p>
          </div>
          <p className="m-0">Review</p>
          <div className="px-0 py-2">
            <textarea className="form-control w-100" rows="8" type="text" {...register("review")} />
            <p className="error">{errors.review?.message}</p>
          </div>
          <div className="px-0 py-2">
            <select className="form-control w-100" rows="8" type="text" {...register("rating")}>
              <option>{1}</option>
              <option>{2}</option>
              <option>{3}</option>
              <option>{4}</option>
              <option>{5}</option>
            </select>
            <p className="error">{errors.review?.message}</p>
          </div>
          <button className="button__primary--dark col-4 px-4 py-1 mt-2">{submitButton}</button>
          {putError && <span>Er is iets misgegaan, probeer het later nog een keer of neem contact op met de admin</span>}
          {confirmation}
        </fieldset>
      </form>
    </>
  );
}
