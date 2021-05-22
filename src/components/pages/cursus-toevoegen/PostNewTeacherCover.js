import PropTypes from "prop-types";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BASE_URL, UPLOAD_PATH } from "../../../api/baseUrl";
import { useContext } from "react";
import AuthContext from "../../../../src/context/AuthContext";

const url = BASE_URL + UPLOAD_PATH;

export default function PostNewTeacherCover({ id }) {
  const { register, handleSubmit } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [submitButton, setSubmitButton] = useState("upload");

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
      formData.append("field", "teacher_image");
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
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
      setSubmitButton("upload succesvol");
    }
  };

  return (
    <>
      <div className="FileUpload mb-5">
        <p>Foto docent</p>
        <form onSubmit={handleSubmit(submitData)}>
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

PostNewTeacherCover.propTypes = {
  id: PropTypes.string.isRequired,
}
