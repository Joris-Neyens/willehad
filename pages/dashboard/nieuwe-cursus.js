import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";
import Menu from "../../js/components/pages/dashboard/Menu";
import DashboardMenu from "../../js/components/layout/DashboardMenu";
import { BASE_URL } from "../../js/api/baseUrl";

export default function nieuweCursus() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const url = BASE_URL + "courses";

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios({
        method: "POST",
        url: url,
        data: data,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOGJmM2RjYzZkYzgzMDAxNWQ3MmUwYSIsImlhdCI6MTYyMDA0MzcwMiwiZXhwIjoxNjIyNjM1NzAyfQ.HDVFp5zd8oC7wjSz4aOZjJORF5ptlL9pOfjgMjqMbNA",
          "content-type": "application/json",
        },
      });

      const id = response.data._id;
      console.log(response);

      router.push(`/dashboard/nieuwe-cursus/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <DashboardMenu />
      <Menu />
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-6 offset-1">
              <h1 className="pb-3">Nieuwe cursus</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <p>titel</p>
                <input className="w-100 p-2 rounded" type="text" {...register("title")} />
                <p>beschrijving</p>
                <textarea rows="6" className="w-100 p-2 rounded" type="text" {...register("description")} />
                <p>Prijs</p>
                <input className="w-100 p-2 my-2 rounded" type="number" {...register("price")} />
                <p>Praktische informatie</p>
                <textarea className="w-100 rounded" rows="6" {...register("practical_info")} />
                <p>Wat gaan ze leren</p>
                <textarea className="w-100 rounded" rows="6" {...register("curriculum")} />
                <p>Naam docent</p>
                <input className="w-100 p-2 my-2 rounded" type="text" {...register("teacher")} />
                <p>over de docent</p>
                <textarea className="w-100 rounded" rows="6" type="text" {...register("teacher_description")} />
                <button type="submit">volgende stap 1/2</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
