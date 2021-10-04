import PropTypes from "prop-types";
import SideNav from "../../../../src/components/layout/SideNav";
import DashboardNav from "../../../../src/components/layout/DashboardNav";
import axios from "axios";
import Head from "../../../../src/components/head/Head";
import AdminLayout from "../../../../src/components/layout/AdminLayout";
import PostNewVideo from "../../../../src/components/pages/cursus-toevoegen/PostNewVideo";
import { BASE_URL } from "../../../../src/api/baseUrl";

export default function newCourseMedia({ course }) {
  const id = course.id;

  return (
    <>
      <DashboardNav />
      <Head
        title="nieuwe cursus"
        description="voeg media toe aan nieuwe cursus"
      />
      <AdminLayout>
        <div className="container-fluid">
          <div className="row">
            <SideNav />
            <div className="col-12 col-lg-8 pb-4 mt-5">
              <div className="row">
                <div className="col-12 col-lg-10 pl-lg-5">
                  <h1>Media toevoegen</h1>
                    <PostNewVideo key={id} id={id} />
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
    const response = await axios.get(BASE_URL + "courses");
    console.log(response.data);
    const courses = response.data;

    const paths = courses.map(course => ({
      params: { id: course.id },
    }));

    console.log(paths);

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

newCourseMedia.propTypes = {
  course: PropTypes.object.isRequired,
}