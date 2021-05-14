import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { BASE_URL, UPLOAD_PATH } from "../../../api/baseUrl";

const url = BASE_URL + UPLOAD_PATH;

export default function PostNewVideo({ id }) {
  const { register, handleSubmit } = useForm();
  const [submitting, setSubmitting] = useState(false);

  const submitData = async (data) => {
    setSubmitting(true);

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
    }
  };

  return (
    <>
      <div className="FileUpload">
        <p>Video</p>
        <form onSubmit={handleSubmit(submitData)}>
          <fieldset disabled={submitting}>
            <input type="file" {...register("file")} />
          </fieldset>
          <button className="button__primary--dark mx-4 rounded">
            {submitting ? "momentje.." : "upload"}
          </button>
        </form>
      </div>
    </>
  );
}
