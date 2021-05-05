import axios from "axios";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../../api/baseUrl";

const url = BASE_URL + "upload";

export default function PostVideo({ id, video }) {
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
      <div className="row">
        {video.map(function (video_info) {
          return (
            <div key={video_info.id} className="col-4">
              <video src={video_info.url} className="w-100" />
              <p className="mb-1">{video_info.name}</p>
            </div>
          );
        })}
      </div>
      <div className="FileUpload">
        <form onSubmit={handleSubmit(submitData)}>
          <input type="file" {...register("file")} />
          <button className="button__secondary">Submit</button>
        </form>
      </div>
    </>
  );
}
