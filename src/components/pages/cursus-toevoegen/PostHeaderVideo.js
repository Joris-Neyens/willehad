import PropTypes from "prop-types";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { BASE_URL, UPLOAD_PATH } from "../../../api/baseUrl";
import { useContext } from "react";
import AuthContext from "../../../../src/context/AuthContext";

const url = BASE_URL + UPLOAD_PATH;

export default function PostHeaderVideo({ id }) {
  const { register, handleSubmit } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [submitButton, setSubmitButton] = useState(
    <button className="button__primary--dark col-4 mt-3" type="submit">
      upload
    </button>
  );
  const [display, setDisplay] = useState("d-none");
  const [video, setVideo] = useState("");

  const { getToken } = useContext(AuthContext);
  const token = getToken("auth");

  const submitData = async data => {
    setSubmitting(true);
    setSubmitButton(
      <button className="button__primary--dark col-12 col-md-auto mt-3" type="submit" disabled>
        <span className="mr-3 mb-2 spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading...
      </button>
    );
    try {
      const formData = new FormData();
      formData.append("files", data.file[0]);
      formData.append("ref", "courses");
      formData.append("refId", id);
      formData.append("field", "cover_video");
      const response = await axios({
        method: "POST",
        url: url,
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      });
      if (response.status === 200) {
        console.log(response);
        setVideo(
          <video width="100%" controls>
            <source src={response.data[0].url} type="video/mp4" />
          </video>
        );
        setDisplay("d-block");
        setSubmitButton(
          <button className="button__primary--dark col-12 col-md-auto mt-3" type="submit" disabled>
            upload succesvol
          </button>
        );
        setSubmitting(true);
      }
    } catch (error) {
      console.log(error);
      setSubmitButton(
        <div>
          <button className="button__primary--dark col-12 col-md-auto mt-3" type="submit">
            probeer opnieuw
          </button>
          <p className="register__alarm">Opload niet gelukt</p>
        </div>
      );
      setSubmitting(false);
    } finally {
    }
  };

  return (
    <div>
      <div className={display}>{video}</div>
      <div className="FileUpload mb-5">
        <p>Video</p>
        <form className="d-flex flex-column d-lg-block" onSubmit={handleSubmit(submitData)}>
          <fieldset disabled={submitting}>
            <input type="file" {...register("file")} />
          </fieldset>
          {submitButton}
        </form>
      </div>
    </div>
  );
}
