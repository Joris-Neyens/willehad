import PropTypes from "prop-types";
import axios from "axios";
import Image from 'next/image'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BASE_URL, UPLOAD_PATH } from "../../../api/baseUrl";
import { useContext } from "react";
import AuthContext from "../../../../src/context/AuthContext";


const url = BASE_URL + UPLOAD_PATH;
export default function PostAboutCourseImage({ id }) {
  const { register, handleSubmit } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [submitButton, setSubmitButton] = useState("upload");
  const [display, setDisplay] = useState("d-none");
  const [mediaUrl, setMediaUrl] = useState("/under-construction.jpg");

  const { getToken } = useContext(AuthContext);
  const token = getToken("auth");


  const submitData = async data => {
    setSubmitting(true);
    setSubmitButton("loading..");
    try {
      const formData = new FormData();
      formData.append("files", data.file[0]);
      formData.append("ref", "courses");
      formData.append("refId", id);
      formData.append("field", "about_course_image");
      const response = await axios({
        method: "POST",
        url: url,
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      });
      console.log("Success", response);
      if (response) {
        setMediaUrl(response.data[0].url)
        setDisplay("d-block")
          setSubmitButton("upload succesvol")
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
      
    }
  };



  return (
    <>
      <div className={display}>
        <Image src={mediaUrl} width="450" height="250"/>
      </div>
      <div className="FileUpload mb-5">
        <p className="text-center text-lg-left">Over de cursus afbeelding landingpage</p>
        <form className="d-flex flex-column d-lg-block align-items-center" onSubmit={handleSubmit(submitData)}>
          <fieldset disabled={submitting}>
            <input type="file" {...register("file")} />
          </fieldset>
          <button className="button__primary--dark col-4 mt-3" type="submit">
            {submitButton}
          </button>
        </form>
      </div>
    </>
  );
}

PostAboutCourseImage.propTypes = {
  id: PropTypes.string.isRequired,
}
