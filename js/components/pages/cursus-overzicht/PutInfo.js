import { useForm } from "react-hook-form";
import axios from "axios";
import { Form } from "react-bootstrap";
import { BASE_URL } from "../../../api/baseUrl";

export default function PutInfo({
  id,
  title,
  description,
  price,
  curriculum,
  teacher,
  teacher_description,
}) {
  const { register, handleSubmit } = useForm();

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
        <h4 className="mt-4 mb-3">Cursus info</h4>
        <p className="m-0">Titel</p>
        <div className="col-8 px-0 py-2">
          <input
            className="w-100 p-2 rounded"
            defaultValue={title}
            type="text"
            {...register("title")}
          />
        </div>
        <Form.Check
          className="col-12 my-3"
          type="switch"
          id="featured"
          label="uitgelicht (er kan maar een cursus uitgelicht worden)"
          {...register("featured")}
        />
        <p className="m-0 mt-4">Cursus vorm</p>
        <div className="row">
          <div className="col-4">
            <Form.Check
              className="col-12 my-3"
              type="switch"
              id="course"
              label="cursus"
              {...register("type_course")}
            />
            <Form.Check
              className="col-12 my-3"
              type="switch"
              id="video"
              label="video"
              {...register("type_video")}
            />
          </div>
          <div className="col">
            <Form.Check
              className="col-12 my-3"
              type="switch"
              id="audio"
              label="audio"
              {...register("type_audio")}
            />
            <Form.Check
              className="col-12 my-3"
              type="switch"
              id="webinar"
              label="webinar"
              {...register("type_webinar")}
            />
          </div>
        </div>
        <p className="m-0 mt-4">Beschrijving</p>
        <div className="col-8 px-0 py-2">
          <textarea
            className="w-100 rounded"
            rows="6"
            defaultValue={description}
            type="text"
            {...register("description")}
          />
        </div>
        <p className="m-0">Prijs</p>
        <div className="col-8 px-0 py-2">
          <input
            className="w-100 p-2 my-2 rounded"
            defaultValue={price}
            type="number"
            {...register("price")}
          />
        </div>
        <p className="m-0">Curriculum</p>
        <div className="col-8 px-0 py-2">
          <textarea
            rows="6"
            className="w-100 rounded"
            defaultValue={curriculum}
            {...register("curriculum")}
          />
        </div>
        <p className="m-0">Naam docent</p>
        <div className="col-8 px-0 py-2">
          <input
            className="w-100 p-2 my-2 rounded"
            defaultValue={teacher}
            type="text"
            {...register("teacher")}
          />
        </div>
        <p className="m-0">Docent info</p>
        <div className="col-8 px-0 py-2">
          <textarea
            className="w-100 rounded"
            rows="6"
            defaultValue={teacher_description}
            type="text"
            {...register("teacher_description")}
          />
        </div>
        <h4 className="mt-4">Categorieën</h4>
        <div className="row">
          <div className="col-4">
            <Form.Check
              className="col-3 my-3"
              type="switch"
              id="geschiedenis"
              label="geschiedenis"
              {...register("category_history")}
            />
            <Form.Check
              className="col-3 my-3"
              type="switch"
              id="filosofie"
              label="filosofie"
              {...register("category_philosophy")}
            />
          </div>
          <div className="col-4">
            <Form.Check
              className="col-3 my-3"
              type="switch"
              id="theologie"
              label="theologie"
              {...register("category_theology")}
            />
            <Form.Check
              className="col-3 my-3"
              type="switch"
              id="catechese"
              label="catechese"
              {...register("category_catechesis")}
            />
          </div>
          <div className="col-12">
            <Form.Check
              className="col-4"
              type="switch"
              id="bijbel studie"
              label="bijbel studie"
              {...register("category_bibel_study")}
            />
          </div>
        </div>
        <button className="button__secondary--dark mt-5" type="submit">
          Pas cursus info aan
        </button>
      </form>
    </div>
  );
}
