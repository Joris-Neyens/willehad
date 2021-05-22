import axios from "axios";
import PropTypes from "prop-types";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BASE_URL, UPLOAD_PATH } from "../../../api/baseUrl";
import { useContext } from "react";
import AuthContext from "../../../../src/context/AuthContext";

const postUrl = BASE_URL + UPLOAD_PATH;

export default function PostCover({ id, cover }) {

  const url = cover.url;
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
      formData.append("ref", "courses");
      formData.append("refId", id);
      formData.append("field", "cover");

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
    } catch (error) {
      setSubmitButton("upload niet gelukt");
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <Image src={url} width="3000" height="1500" />
        </div>
      </div>
      <div className="FileUpload mt-2">
        <form onSubmit={handleSubmit(submitData)}>
          <fieldset disabled={submitting}>
            <input type="file" {...register("file")} />
          </fieldset>
          <button className="button__primary--dark col-12 mt-3">
            {submitButton}
          </button>
        </form>
      </div>
    </>
  );
}

PostCover.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.object.isRequired,
}