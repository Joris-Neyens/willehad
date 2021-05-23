import axios from "axios";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { BASE_URL, UPLOAD_PATH } from "../../../api/baseUrl";
import { useContext } from "react";
import AuthContext from "../../../../src/context/AuthContext";

const url = BASE_URL + UPLOAD_PATH;

export default function PostVideo({ id, video }) {
  const { register, handleSubmit } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [submitButton, setSubmitButton] = useState("upload");
    
  const { getToken } = useContext(AuthContext);
  const token = getToken("auth");

  const deleteData = async (data) => {

    const deleteCourse = confirm("Bevestig of je de video wilt verwijderen");
    const deleteUrl = BASE_URL + `upload/files/${data.id}`
    if (deleteCourse) {
      try {
        const response = await axios({
          method: "DELETE",
          url: deleteUrl,
          headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "application/json",
          },
        });
        console.log("Success", response);
        if (response) {
        }
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
  }

  const submitData = async (data) => {
    setSubmitting(true);
    setSubmitButton("loading..");
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
        {video.map(function (video_info) {
          return (
            <div key={video_info.id} className="background-white mb-3">
              <div className="col-lg-12">
                <video src={video_info.url} width="360px" height="300px" controls />
                <p className="mb-0">{video_info.name}</p>
              </div>
              <form onSubmit={handleSubmit(deleteData)}>
                <input
                  className="d-none"
                  {...register("id")}
                  defaultValue={video_info.id}
                />
                <div className="col-12 d-flex justify-content-end">
                  <button className="button__primary col-1 my-1">
                    x
                  </button>
                </div>
              </form>
            </div>
          );
        })}
      </div>
      <div className="FileUpload p-0  mt-2 col-lg-6">
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

PostVideo.propTypes = {
  id: PropTypes.string.isRequired,
  video: PropTypes.array.isRequired,
}