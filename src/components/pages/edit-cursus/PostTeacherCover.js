import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BASE_URL, UPLOAD_PATH } from "../../../api/baseUrl";
import Image from "next/image";

const postUrl = BASE_URL + UPLOAD_PATH;

export default function PostTeacherCover({ id, teacher_image }) {
  const url = teacher_image.url;
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit } = useForm();

  const submitData = async (data) => {
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("files", data.file[0]);
      formData.append("ref", "courses");
      formData.append("refId", id);
      formData.append("field", "teacher_image");

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
        <div className="col-12 w-100">
          <Image src={url} width="3000" height="1500" />
        </div>
      </div>
      <div className="FileUpload mt-2">
        <form onSubmit={handleSubmit(submitData)}>
          <fieldset disabled={submitting}>
            <input type="file" {...register("file")} />
          </fieldset>
          <button className="button__secondary--dark mt-3">
            {submitting ? "momentje.." : "upload"}
          </button>
        </form>
      </div>
    </>
  );
}
