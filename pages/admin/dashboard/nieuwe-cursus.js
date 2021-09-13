import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { API_KEY, THINKIFIC_URL } from "../../../src/api/thinkific";
import { BASE_URL, COURSES_PATH } from "../../../src/api/baseUrl";
import AdminLayout from "../../../src/components/layout/AdminLayout";
import Head from "../../../src/components/head/Head";
import SideNav from "../../../src/components/layout/SideNav";
import DashboardNav from "../../../src/components/layout/DashboardNav";
import AuthContext from "../../../src/context/AuthContext";

const url = BASE_URL + COURSES_PATH;

export default function nieuweCursus({ products, strapiCourses }) {

  const schema = yup.object().shape({
    title: yup.string().required("Vul de cursus titel in"),
    description_long: yup
      .string()
      .required("Vul een cursus beschijving toe"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [submitting, setSubmitting] = useState(false);
  const [postError, setPostError] = useState(null);
  const [submitButton, setSubmitButton] = useState("volgende");
  const [existingError, setExistingError] = ("")

  const { getToken } = useContext(AuthContext);
  const token = getToken("auth");
  

  const router = useRouter();

  const onSubmit = async (data) => {

    setSubmitting(true);
    setPostError(null);
    setSubmitButton("loading..");

    try {
      const response = await axios({
        method: "POST",
        url: url,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      });

      const id = response.data._id;
      if (response) {
        setSubmitButton("upload succesvol");
      }
      console.log(response);

      router.push(`/admin/dashboard/nieuwe-cursus/${id}`);
    } catch (error) {
      console.log(error);
      setSubmitButton("upload niet gelukt");
      setPostError(error.toString());
    } finally {
      setSubmitting(false);
    }
  };

  let existingCourses = []

  strapiCourses.map(function (strapiCourse) {
    existingCourses.push(strapiCourse.title)
  })

  const existing = new Map();

  existing.set(existingCourses)

  let options = []

  products.forEach(function (product) {
    options.push(<option value={product.name} key={product.name}>{product.name}</option>)
  });

  const [courseExisting, setCourseExisting] = useState("");
  const [button, setButton] = useState(
    <button className="button__primary--dark px-4 py-1 disabled" type="submit" disabled>
      {submitButton}
    </button>
  );

  function selectTitle(e) {
    const value = e.target.value

    const existing = existingCourses.includes(value)
    if (existing === true) {
      setCourseExisting("Deze cursus is al aangemaakt")
    } if (existing === false) {
      setCourseExisting("")
      setButton(
        <button className="button__primary--dark px-4 py-1" type="submit">
          {submitButton}
        </button>
      );

    }
      
  }


  return (
    <>
      <DashboardNav />
      <AdminLayout>
        <Head title="nieuwe cursus" description="voeg nieuwe cursus toe"></Head>
        <div className="container-fluid">
          <div className="row">
            <SideNav />
            <div className="col-12 col-lg-8 pb-4 mt-5">
              <div className="row">
                <div className="col-12 col-lg-10 pl-lg-5">
                  <h1>Nieuwe cursus</h1>
                  <form className="mb-5 pb-5" onChange={selectTitle} onSubmit={handleSubmit(onSubmit)}>
                    <fieldset disabled={submitting}>
                      <select className="form-select col-12" {...register("title")}>
                        <option>Cursus naam:</option>
                        {options}
                      </select>
                      <p className="error"> {errors.title?.message}</p>
                      <p className="mb-0">Cursus omschrijving voor cursus pagina</p>
                      <div className="py-2">
                        <textarea rows="12" className="form-control w-100 p-2" type="text" placeholder={courseExisting}  {...register("description_long")} />
                      </div>
                      <p className="error"> {errors.description_long?.message}</p>
                      <div className="d-flex">
                          {button}
                        {postError && <span>Er is iets misgegaan, probeer het later nog een keer of neem contact op met de admin</span>}
                        {existingError}
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}

export async function getServerSideProps() {
  const productUrl = THINKIFIC_URL + "/products";
  let products = [];

  const strapiUrl = BASE_URL + COURSES_PATH;
  let strapiCourses = []

  const header = {
    headers: {
      "X-Auth-API-Key": `${API_KEY}`,
      "X-Auth-Subdomain": "willehad",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.get(productUrl, header);
    console.log(response.data);
    products = response.data.items;
  } catch (error) {
    console.log(error);
  }
  
  try {
    const response = await axios.get(strapiUrl);
    console.log(response.data);
    strapiCourses = response.data;
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      products: products,
      strapiCourses: strapiCourses,
    },
  };
}
