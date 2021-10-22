import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { BASE_URL, UPLOAD_PATH } from "../../../api/baseUrl";
import AuthContext from "../../../../src/context/AuthContext";

const url = BASE_URL + UPLOAD_PATH;

export default function PostHeaderVideo({ id, cover_video }) {

  const { register, handleSubmit } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [submitButton, setSubmitButton] = useState(<button className="button__primary--dark col-12 col-md-6 col-4  py-1 mt-3">upload</button>);
  const [videoId, setVideoId] = useState(id);
  const [deleteButton, setDeleteButton] = useState("");
  const [videoHtml, setVideoHtml] = useState("");

  React.useEffect(() => {
    if (cover_video) {
      setVideoHtml(<video src={cover_video.url} width="100%" height="full" controls />);
      setDeleteButton(<button className="button__alarm col-12 col-md-6 col-4  py-1 mt-3">verwijder video</button>);
    }
  }, [cover_video]);

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
      console.log("Success", response);
      if (response.status === 200) {
        setSubmitButton(<button className="button__primary--dark col-4  py-1 mt-3">upload succesvol</button>);
        setVideoHtml(<video src={response.data[0].url} width="100%" height="full" controls />);
        setVideoId(response.data[0]._id);
      }
    } catch (error) {
      setSubmitButton(
        <div>
          <button className="button__primary--dark col-4  py-1 mt-3">probeer opnieuw</button>
          <p className="alert">upload niet gelukt</p>
        </div>
      );
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  const deleteVideo = async data => {
    console.log(cover_video.id);
    const deleteUrl = BASE_URL + "upload/files/" + cover_video._id;

    setDeleteButton(
      <button className="button__alarm col-4  py-1 mt-3">
        <span className="mr-3 mb-2 spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        loading...
      </button>
    );
    try {
      const response = await axios({
        method: "DELETE",
        url: deleteUrl,
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      });
      console.log(response);
    } catch (error) {
      setDeleteButton(<button className="button__alarm col-12 col-md-6 col-4 py-1 mt-3">video verwijderd</button>);
      setVideoHtml("");
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
        <form onSubmit={handleSubmit(deleteVideo)}>
          <input className="d-none" value={videoId} {...register("id")} />
          <fieldset disabled={submitting}>{deleteButton}</fieldset>
        </form>
      </div>
    </>
  );
}

PostHeaderVideo.propTypes = {
  id: PropTypes.string.isRequired,
  cover_video: PropTypes.object,
};
