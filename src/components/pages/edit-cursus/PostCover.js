import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BASE_URL, UPLOAD_PATH } from "../../../api/baseUrl";
import Image from "next/image";

const postUrl = BASE_URL + UPLOAD_PATH;

export default function PostCover({ id, cover }) {
  const url = cover.url;
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit } = useForm();

  const submitData = async (data) => {
    setSubmitting(true);
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
          <button className="button__primary--dark mx-4 rounded mt-3">
            {submitting ? "momentje.." : "upload"}
          </button>
        </form>
      </div>
    </>
  );
}
