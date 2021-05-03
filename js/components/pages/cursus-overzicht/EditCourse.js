import { useForm } from "react-hook-form";
import Image from "next/image";
import axios from "axios";
import { BASE_URL } from "../../../api/baseUrl";

export default function EditCourse({ id, title, cover, description, price, curriculum, teacher, teacher_description, teacher_image, reviews, video }) {
  const url = cover.url;

  const { register, handleSubmit } = useForm();
  const { register: register2, handleSubmit: handleSubmit2 } = useForm();
  const { register: register3, handleSubmit: handleSubmit3 } = useForm();
  const { register: register4, handleSubmit: handleSubmit4 } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  const onSubmitCover = (data) => {
    alert(JSON.stringify(data));
  };

  const onSubmitTeacherUrl = (data) => {
    alert(JSON.stringify(data));
  };
  const onSubmitVideo = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className="container">
      <h1 className="text-center py-4">Edit {title}</h1>
      <form onSubmit={handleSubmit2(onSubmitCover)}>
        <h4 className="text-center">Media</h4>
        <div className="row">
          <p className="m-0 col-12">Cursus afbeelding</p>
          <div className="col-5 px-0 pb-3">
            <input className="w-100 rounded" rows="2" defaultValue={url} type="file" {...register2("files")} />
          </div>
          <div className="col-5 offset-1">
            <Image src={url} width="3000" height="1500" />
          </div>
        </div>
        <button type="submit">add media</button>
      </form>
      <form onSubmit={handleSubmit3(onSubmitTeacherUrl)}>
        <div className="row">
          <p className="m-0 col-12">Docent afbeelding</p>
          <div className="col-5 px-0 pb-3">
            <textarea className="w-100 rounded" rows="2" defaultValue={teacher_image.url} type="text" {...register3("teacher_url")} />
          </div>
          <div className="col-5 offset-1">
            <Image src={teacher_image.url} width="3000" height="1500" />
          </div>
        </div>
        <button type="submit">add media</button>
      </form>
      <form onSubmit={handleSubmit4(onSubmitVideo)}>
        <p>Cursus video</p>
        {video.map(function (video_info) {
          return (
            <div className="row">
              <div className="col-5 px-0 pb-3">
                <textarea className="w-100 rounded" rows="6" defaultValue={video_info.url} type="text" {...register4("video_url")} />
              </div>
              <div className="col-5 offset-1">
                <video src={video_info.url} className="w-100" />
              </div>
            </div>
          );
        })}
        <button type="submit">add media</button>
      </form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4 className="text-center">Cursus info</h4>
        <p className="m-0">Titel</p>
        <div className="col-6 offset-3 px-0 py-2">
          <input className="w-100 p-2 rounded" defaultValue={title} type="text" {...register("title")} />
        </div>
        <p className="m-0">Uitleg</p>
        <div className="col-6 offset-3 px-0 py-2">
          <textarea className="w-100 rounded" rows="6" defaultValue={description} type="text" {...register("description")} />
        </div>
        <p className="m-0">Prijs</p>
        <div className="col-6 offset-3 px-0 py-2">
          <input className="w-100 p-2 my-2 rounded" defaultValue={price} type="number" {...register("price")} />
        </div>
        <p className="m-0">Curriculum</p>
        <div className="col-6 offset-3 px-0 py-2">
          <input className="w-100 p-2 my-2 rounded" defaultValue={curriculum} type="text" {...register("curriculum")} />
        </div>
        <p className="m-0">Naam docent</p>
        <div className="col-6 offset-3 px-0 py-2">
          <input className="w-100 p-2 my-2 rounded" defaultValue={teacher} type="text" {...register("teacher")} />
        </div>
        <p className="m-0">Docent info</p>
        <div className="col-6 offset-3 px-0 py-2">
          <textarea className="w-100 rounded" rows="6" defaultValue={teacher_description} type="text" {...register("teacher_description")} />
        </div>
        <h4 className="text-center">Review</h4>
        <p className="m-0">Titel</p>
        <div className="col-6 offset-3 px-0 py-2">
          <input className="w-100 p-2 my-2 rounded" defaultValue={reviews.review_title} type="text" {...register("reviews_title")} />
        </div>
        <p className="m-0">Naam</p>
        <div className="col-6 offset-3 px-0 py-2">
          <input className="w-100 p-2 my-2 rounded" defaultValue={reviews.review_name} type="text" {...register("reviews_name")} />
        </div>
        <p className="m-0">Review</p>
        <div className="col-6 offset-3 px-0 py-2">
          <textarea className="w-100 rounded" rows="6" defaultValue={reviews.review} type="text" {...register("review")} />
        </div>
        <button className="col-1 offset-5 button__primary" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}
