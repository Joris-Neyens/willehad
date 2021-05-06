import { useForm } from "react-hook-form";
import axios from "axios";
import { BASE_URL } from "../../../api/baseUrl";

export default function PutInfo({ id, title, description, price, curriculum, teacher, teacher_description, categories }) {
  const { register, handleSubmit } = useForm();

  console.log(categories);
  console.log(curriculum);

  const url = BASE_URL + "courses/" + id;

  console.log(url);

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await axios({
        method: "PUT",
        url: url,
        data: data,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOGJmM2RjYzZkYzgzMDAxNWQ3MmUwYSIsImlhdCI6MTYyMDA0MzcwMiwiZXhwIjoxNjIyNjM1NzAyfQ.HDVFp5zd8oC7wjSz4aOZjJORF5ptlL9pOfjgMjqMbNA",
          "content-type": "application/json",
        },
      });
      console.log("Success", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
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
        <div className="row">
          <div className="col-3">
            <input />
          </div>
          <div className="col-3 px-0 py-2">
            <textarea defaultValue={curriculum} {...register("curriculum")} />
          </div>
        </div>
        <p className="m-0">Naam docent</p>
        <div className="col-6 offset-3 px-0 py-2">
          <input className="w-100 p-2 my-2 rounded" defaultValue={teacher} type="text" {...register("teacher")} />
        </div>
        <p className="m-0">Docent info</p>
        <div className="col-6 offset-3 px-0 py-2">
          <textarea className="w-100 rounded" rows="6" defaultValue={teacher_description} type="text" {...register("teacher_description")} />
        </div>
        <p className="m-0">Categoties</p>
        <button type="submit">Pas cursus info aan</button>
      </form>
    </div>
  );
}
