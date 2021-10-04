import PropTypes from "prop-types";
import axios from "axios";
import Link from "next/link";
import { BASE_URL, COURSES_PATH } from "../../../../src/api/baseUrl";
import Head from "../../../../src/components/head/Head";
import AdminLayout from "../../../../src/components/layout/AdminLayout";
import DashboardNav from "../../../../src/components/layout/DashboardNav";
import DeleteCourse from "../../../../src/components/pages/edit-cursus/DeleteCourse";
import PostVideo from "../../../../src/components/pages/edit-cursus/PostVideo";
import PutInfo from "../../../../src/components/pages/edit-cursus/PutInfo";
import SideNav from "../../../../src/components/layout/SideNav";

export default function Course({ course }) {
  const { id, video} = course;

  return (
    <>
      <Head title="edit cursus" description="edit cursus willehad" />
      <DashboardNav />
      <AdminLayout>
        <div className="container w-100 container-lg-fluid">
          <div className="row">
            <SideNav />
            <div className="col-12 col-lg-8 pb-4 mt-5">
              <div className="row w-100 mx-auto">
                <div className="col-lg-12 pl-0 pl-lg-5 pr-0">
                  <h1>Edit cursus</h1>
                  <div className="py-4">
                    <DeleteCourse key={id} id={id} />
                  </div>
                  <PutInfo course={course} />
                  <div className="row">
                    <div className="col-12">
                      <p className="pt-4">Video</p>
                      <PostVideo key={course.title} id={id} video={video} />
                    </div>
                    <div className="col-12">
                      <Link href="/admin/dashboard">
                        <button className="button__alarm mt-5 mb-5 py-1 col-12 col-md-6 col-4 ">Dashboard</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}

export async function getServerSidePaths() {
  try {
    const response = await axios.get(BASE_URL + COURSES_PATH);
    console.log(response.data);
    const courses = response.data;

    const paths = courses.map(course => ({
      params: { id: course.id },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getServerSideProps({ params }) {
  const url = `${BASE_URL}courses/${params.id}`;

  let course = null;

  try {
    const response = await axios.get(url);
    course = response.data;
  } catch (error) {
    console.log(error);
  }
  return {
    props: { course: course },
  };
}

Course.propTypes = {
  course: PropTypes.object.isRequired,
}