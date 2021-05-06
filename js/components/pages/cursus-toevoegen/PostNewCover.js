import axios from "axios";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../../api/baseUrl";

const url = BASE_URL + "upload";

export default function PostNewCover({ id }) {
  const { register, handleSubmit } = useForm();

  const submitData = async (data) => {
    try {
      const formData = new FormData();
      formData.append("files", data.file[0]);
      formData.append("ref", "courses");
      formData.append("refId", id);
      formData.append("field", "cover");
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
        <p>Cursus cover foto</p>
        <form onSubmit={handleSubmit(submitData)}>
          <input type="file" {...register("file")} />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
