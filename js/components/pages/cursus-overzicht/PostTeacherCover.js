import axios from "axios";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../../api/baseUrl";
import Image from "next/image";

const url = BASE_URL + "upload";

export default function PostTeacherCover({ id, teacher_image }) {
  const { register, handleSubmit } = useForm();

  const submitData = async (data) => {
    const files = data.file[0];

    try {
      const formData = new FormData();
      formData.append("files", data.file[0]);
      formData.append("ref", "courses");
      formData.append("refId", id);
      formData.append("field", "teacher_image");
      const response = await axios({
        method: "POST",
        url: url,
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
        <div className="col-4 w-100">
          <Image src={teacher_image.url} width="3000" height="1500" />
        </div>
      </div>
      <div className="FileUpload">
        <form onSubmit={handleSubmit(submitData)}>
          <input type="file" {...register("file")} />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
