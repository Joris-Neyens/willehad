import axios from "axios";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { BASE_URL, UPLOAD_PATH } from "../../../api/baseUrl";
import { useContext } from "react";
import AuthContext from "../../../../src/context/AuthContext";

const url = BASE_URL + UPLOAD_PATH;

export default function PostHeaderVideo({ id, cover_video }) {
  let videoUrl = "";
  let videoId = "";

  if (video === undefined) {
    videoUrl = "";
    videoId = "";
  } else {
    videoUrl = video.url;
    videoId = video.id;
  }

  const { register, handleSubmit } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [submitButton, setSubmitButton] = useState(<button className="button__primary--dark col-12 col-md-6 col-4  py-1 mt-3">upload</button>);
  const [videoHtml, setVideoHtml] = useState(<video src={videoUrl} width="100%" height="full" controls />);

  const { getToken } = useContext(AuthContext);
  const token = getToken("auth");

  const submitData = async data => {
    setSubmitting(true);
    setSubmitButton(
      <button className="button__primary--dark col-12 col-md-6 col-4  py-1 mt-3">
        <span className="mr-3 mb-2 spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading...
      </button>
    );
    try {
      const formData = new FormData();
      formData.append("files", data.file[0]);
      formData.append("ref", "courses");
      formData.append("refId", id);
      formData.append("field", "video");

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
      if (response.status === 200) {
        setSubmitButton(<button className="button__primary--dark col-4  py-1 mt-3">upload succesvol</button>);
        setVideoHtml(<video src={response.data[0].url} width="100%" height="full" controls />);
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
      <div className="row w-100 mx-auto ">
        <div key={videoId} className="mb-3">
          <div className="col-lg-12 p-0">{videoHtml}</div>
        </div>
      </div>
      <div className="FileUpload p-0  mt-2 col-lg-12">
        <form onSubmit={handleSubmit(submitData)}>
          <fieldset disabled={submitting}>
            <input type="file" {...register("file")} />
          </fieldset>
          {submitButton}
        </form>
      </div>
    </>
  );
}

PostVideo.propTypes = {
  id: PropTypes.string.isRequired,
  video: PropTypes.object,
};
