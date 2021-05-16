import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BASE_URL, UPLOAD_PATH } from "../../../api/baseUrl";

const url = BASE_URL + UPLOAD_PATH;
export default function PostAboutCourseImage({ id, about_course_image }) {
  const { register, handleSubmit } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [submitButton, setSubmitButton] = useState("upload")
  

    const imageUrl = about_course_image.url;

  const submitData = async data => {
    setSubmitting(true);
    setSubmitButton("loading..")
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
      });
      console.log("Success", response);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
      setSubmitButton("upload succesvol");
    }
  };

  return (
    <>
      <div className="row">
        <div id="about-course__image" className="col-12">
          <Image src={imageUrl} width="3000" height="1500" />
        </div>
      </div>
      <div className="FileUpload">
        <form onSubmit={handleSubmit(submitData)}>
          <fieldset disabled={submitting}>
            <input className="col-12" type="file" {...register("file")} />
          </fieldset>
          <button className="button__primary--dark col-12 mt-3">
            {submitButton}
          </button>
        </form>
      </div>
    </>
  );
}
