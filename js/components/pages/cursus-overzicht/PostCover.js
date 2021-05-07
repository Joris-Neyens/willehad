import axios from "axios";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../../api/baseUrl";
import Image from "next/image";

const postUrl = BASE_URL + "upload";

export default function PostCover({ id, cover }) {
  const url = cover.url;

  const { register, handleSubmit } = useForm();

  const submitData = async (data) => {
    console.log(data.file[0]);
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
          <input type="file" {...register("file")} />
          <button className="button__secondary--dark mt-3">Upload</button>
        </form>
      </div>
    </>
  );
}
