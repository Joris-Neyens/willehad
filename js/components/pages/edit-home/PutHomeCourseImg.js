import axios from "axios";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../../api/baseUrl";
import Image from "next/image";

const postUrl = BASE_URL + "upload";

export default function PutHomeCourseImg({ id, course_image }) {
  const url = course_image.url;

  const { register, handleSubmit } = useForm();

  const submitData = async (data) => {
    console.log(data.file[0]);
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
              <input type="file" {...register("file")} />
            </div>
            <div className="col-12">
              <button className="button__secondary--dark mt-3">Upload</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
