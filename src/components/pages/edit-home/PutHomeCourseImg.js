import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../../api/baseUrl";
import Image from "next/image";

const postUrl = BASE_URL + "upload";

export default function PutHomeCourseImg({ id, course_image }) {
  const url = course_image.url;
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit } = useForm();

  const submitData = async (data) => {
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("files", data.file[0]);
      formData.append("ref", "home");
      formData.append("refId", id);
      formData.append("field", "course_image");

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
      <div className="col-12 p-0">
        <Image src={url} width="3000" height="1500" />
      </div>

      <div className="FileUpload mt-2">
        <form className="mb-5" onSubmit={handleSubmit(submitData)}>
          <div className="row">
            <div className="col-12">
              <fieldset disabled={submitting}>
                <input type="file" {...register("file")} />
              </fieldset>
            </div>
            <div className="col-12">
              <button className="button__primary--dark px-4 mt-3">
                {submitting ? "momentje.." : "upload"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
