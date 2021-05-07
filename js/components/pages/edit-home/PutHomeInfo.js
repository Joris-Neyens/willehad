import { useForm } from "react-hook-form";
import axios from "axios";
import { BASE_URL } from "../../../api/baseUrl";

export default function PutHomeInfo({
  course_date,
  title,
  subtitle,
  course_title,
  course_description,
}) {
  const { register, handleSubmit } = useForm();
  const url = BASE_URL + "home";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4 className="mt-4 mb-3">Header info</h4>
      <p className="m-0">Titel</p>
      <div className="col-8 px-0 py-2">
        <input
          className="w-100 p-2 rounded"
          defaultValue={title}
          type="text"
          {...register("title")}
        />
      </div>
      <p className="m-0">datum cursus</p>
      <div className="col-8 px-0 py-2">
        <input
          className="w-100 p-2 rounded"
          defaultValue={course_date}
          type="text"
          {...register("course_date")}
        />
      </div>
      <p className="m-0">subtitle</p>
      <div className="col-8 px-0 py-2">
        <input
          className="w-100 p-2 rounded"
          defaultValue={subtitle}
          type="text"
          {...register("subtitle")}
        />
      </div>
      <h4 className="mt-5 mb-3">Homepage cursus info</h4>
      <p className="m-0">Naam cursus</p>
      <div className="col-8 px-0 py-2">
        <input
          className="w-100 p-2 rounded"
          defaultValue={course_title}
          type="text"
          {...register("course_title")}
        />
      </div>
      <p className="m-0">Cursus beschrijving</p>
      <div className="col-8 px-0 py-2">
        <textarea
          className="w-100 rounded"
          rows="8"
          defaultValue={course_description}
          type="text"
          {...register("course_description")}
        />
      </div>
      <button className="button__secondary--dark mt-2">Verander info</button>
    </form>
  );
}
