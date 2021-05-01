import { useForm } from "react-hook-form";

export default function EditCourse({ id, title, cover, description, price, curriculum, teacher, teacher_description, teacher_image, reviews }) {
  const url = cover.url;

  console.log(reviews);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-6 offset-3">
          <input className="w-100 p-2 rounded" defaultValue={title} type="text" {...register("title")} />
        </div>
        <div className="col-6 offset-3 p-2">
          <textarea className="w-100 rounded" rows="2" defaultValue={url} type="text" {...register("url")} />
        </div>
        <div className="col-6 offset-3 p-2">
          <textarea className="w-100 rounded" rows="6" defaultValue={description} type="text" {...register("description")} />
        </div>
        <div className="col-6 offset-3">
          <input className="w-100 p-2 my-2 rounded" defaultValue={price} type="number" {...register("price")} />
        </div>
        <div className="col-6 offset-3">
          <input className="w-100 p-2 my-2 rounded" defaultValue={curriculum} type="text" {...register("curriculum")} />
        </div>
        <div className="col-6 offset-3">
          <input className="w-100 p-2 my-2 rounded" defaultValue={teacher} type="text" {...register("teacher")} />
        </div>
        <div className="col-6 offset-3 p-2">
          <textarea className="w-100 rounded" rows="6" defaultValue={teacher_description} type="text" {...register("teacher_description")} />
        </div>
        <div className="col-6 offset-3 p-2">
          <textarea className="w-100 rounded" rows="2" defaultValue={teacher_image.url} type="text" {...register("teacher_url")} />
        </div>
        <div className="col-6 offset-3">
          <input className="w-100 p-2 my-2 rounded" defaultValue={reviews.review_name} type="text" {...register("reviews_name")} />
        </div>
        <div className="col-6 offset-3">
          <input className="w-100 p-2 my-2 rounded" defaultValue={reviews.review_title} type="text" {...register("reviews_title")} />
        </div>
        <div className="col-6 offset-3">
          <input className="w-100 p-2 my-2 rounded" defaultValue={reviews.review} type="text" {...register("review")} />
        </div>
      </div>
      <button className="button__primary" type="submit">
        submit
      </button>
    </form>
  );
}
