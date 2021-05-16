import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { BASE_URL, UPLOAD_PATH } from "../../../api/baseUrl";

const url = BASE_URL + UPLOAD_PATH;

export default function PostVideo({ id, video }) {
  const { register, handleSubmit } = useForm();
  const [submitting, setSubmitting] = useState(false);
    const [submitButton, setSubmitButton] = useState("upload");

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
        {video.map(function (video_info) {
          return (
            <div key={video_info.id} className="col-6">
              <video src={video_info.url} className="w-100" />
              <p className="mb-1">{video_info.name}</p>
            </div>
          );
        })}
      </div>
      <div className="FileUpload p-0  mt-2 col-6">
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
