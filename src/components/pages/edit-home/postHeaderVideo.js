import axios from "axios";
import PropTypes from "prop-types";
import React from 'react'
import { useForm } from "react-hook-form";
import { useState } from "react";
import { BASE_URL, UPLOAD_PATH } from "../../../api/baseUrl";
import { useContext } from "react";
import AuthContext from "../../../../src/context/AuthContext";

const url = BASE_URL + UPLOAD_PATH;

export default function PostVideo({ id, videoUrl }) {

  const { register, handleSubmit } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [submitButton, setSubmitButton] = useState(<button className="button__primary--dark col-12 col-md-6 col-4  py-1 mt-3">upload video</button>);
  const [deleteButton, setDeleteButton] = useState("");
   const [videoHtml, setVideoHtml] = useState("");
    const [videoId, setVideoId] = useState(id);


    React.useEffect(() => {
        if (videoUrl) {
            setVideoHtml(<video src={videoUrl.url} width="100%" height="full" controls />);
           setDeleteButton(<button className="button__alarm col-12 col-md-6 col-4  py-1 mt-3">verwijder video</button>);
        }   
        }, [videoUrl])



  const { getToken } = useContext(AuthContext);
    const token = getToken("auth");

  const submitData = async data => {
    setSubmitting(true);
    setSubmitButton(
      <button className="button__primary--dark col-4  py-1 mt-3">
        <span className="mr-3 mb-2 spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading...
      </button>
    );
    try {
      const formData = new FormData();
      formData.append("files", data.file[0]);
      formData.append("ref", "home");
      formData.append("refId", id);
      formData.append("field", "header_video");

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
            setSubmitButton(<button className="button__primary--dark col-4  py-1 mt-3">upload succesvol</button>)
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

        console.log(videoUrl.id)
        const deleteUrl = BASE_URL + "upload/files/" + videoUrl._id

      setDeleteButton(
        <button className="button__alarm col-4  py-1 mt-3">
            <span className="mr-3 mb-2 spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            loading...
          </button>)
        try {
          const response = await axios({
            method: "DELETE",
            url: deleteUrl,
            headers: {
              Authorization: `Bearer ${token}`,
              "content-type": "application/json",
            },
          });
            console.log(response)
        } catch (error) {
            setDeleteButton(<button className="button__alarm col-4  py-1 mt-3">video verwijderd</button>);
            setVideoHtml("");
        } finally {
          setSubmitting(false);
        }


  }
    
  return (
    <>
      <div className="row w-100 px-3">
        <div key={id} className="mb-3">
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

PostVideo.propTypes = {
  id: PropTypes.string.isRequired,
  videoUrl: PropTypes.object,
};
