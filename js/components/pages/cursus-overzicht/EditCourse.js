import { useForm } from "react-hook-form";
import Image from "next/image";

export default function EditCourse({ id, title, cover, description, price, curriculum, teacher, teacher_description, teacher_image, reviews, video }) {
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

      <form onSubmit={handleSubmit(onSubmit)}>
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
