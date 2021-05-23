import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../../api/baseUrl";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../../../../src/context/AuthContext";

const postUrl = BASE_URL + "upload";

export default function PutHomeCourseImg({ id, course_image }) {
  const url = course_image.url;
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit } = useForm();
  const [submitButton, setSubmitButton] = useState("upload");
  
  const { getToken } = useContext(AuthContext);
  const token = getToken("auth");


  const submitData = async (data) => {
    setSubmitting(true);
    setSubmitButton("loading..");
    try {
      const formData = new FormData();
      formData.append("files", data.file[0]);
      formData.append("ref", "home");
      formData.append("refId", id);
      formData.append("field", "course_image");

      const response = await axios({
        method: "POST",
        url: postUrl,
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      });
        if (response) {
          setSubmitButton("upload succesvol");
        }
      console.log("Success", response);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="col-12 p-0">
        <Image src={url} width="3000" height="1500" />
      </div>

      <div className="FileUpload mt-2">
        <form className="mb-5" onSubmit={handleSubmit(submitData)}>
          <div className="row">
            <div className="col-12">
              <fieldset disabled={submitting}>
                <input type="file" {...register("file")} />
              </fieldset>
            </div>
            <div className="col-12">
              <button className="button__primary--dark col-4 px-4 mt-3">
                {submitButton}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

PutHomeCourseImg.propTypes = {
  id: PropTypes.string.isRequired,
  course_image: PropTypes.object.isRequired,
};