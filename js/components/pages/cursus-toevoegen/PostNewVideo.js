import axios from "axios";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../../api/baseUrl";

const url = BASE_URL + "upload";

export default function PostNewVideo({ id }) {
  const { register, handleSubmit } = useForm();

  const submitData = async (data) => {
    const files = data.file[0];

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
    }
  };

  return (
    <>
      <div className="FileUpload">
        <p>Video</p>
        <form onSubmit={handleSubmit(submitData)}>
          <input type="file" {...register("file")} />
          <button className="button__secondary">Submit</button>
        </form>
      </div>
    </>
  );
}
