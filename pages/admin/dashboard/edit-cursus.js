import PropTypes from "prop-types";
import { BASE_URL, COURSES_PATH } from "../../../src/api/baseUrl";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import AdminLayout from "../../../src/components/layout/AdminLayout";
import Head from "../../../src/components/head/Head";
import DashboardNav from "../../../src/components/layout/DashboardNav";
import SideNav from "../../../src/components/layout/SideNav";

export default function editCourse({ courses }) {
  return (
    <>
      <Head title="edit homepage" description="edit homepage willehad" />
      <DashboardNav />
      <AdminLayout>
        <div className="container-fluid">
          <div className="row">
            <SideNav />
            <div className="col-lg-8 pb-4 mt-5">
              <div className="row">
                <div className="col-lg-10 pl-lg-5">
                  <h1>Edit cursus</h1>
                  {courses.map(function (course) {
                    const { id, title, cover } = course;

                    let url = "/public/under-construction.jpg";

                    if (cover) {
                      url = cover.url;
                    }
                    return (
                      <div key={id}>
                        <Link href={`edit-cursus/${id}`}>
                          <div className="p-4 mt-4 course-card shadow-sm">
                            <h4 className="m-0">{title}</h4>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
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
  const url = BASE_URL + COURSES_PATH;

  let courses = [];

  try {
    const response = await axios.get(url);
    console.log(response.data);
    courses = response.data;
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      courses: courses,
      url: url,
    },
  };
}

editCourse.propTypes = {
  courses: PropTypes.array.isRequired,
}