import Menu from "../../../js/components/pages/dashboard/SideMenu";
import DashboardMenu from "../../../js/components/layout/DashboardMenu";
import axios from "axios";
import PostNewVideo from "../../../js/components/pages/cursus-toevoegen/PostNewVideo";
import PostNewCover from "../../../js/components/pages/cursus-toevoegen/PostNewCover";
import PostNewTeacherCover from "../../../js/components/pages/cursus-toevoegen/PostNewTeacherCover";
import { BASE_URL } from "../../../js/api/baseUrl";

export default function newCourseMedia({ course }) {
  console.log(course);

  const id = course.id;

  return (
    <>
      <Menu />
      <DashboardMenu />
      <div className="container">
        <div className="row">
          <div className="col-10 offset-1">
            <h1>Media toevoegen</h1>
            <h4>{course.name}</h4>
            <PostNewCover key={course.title} id={id} />
            <PostNewTeacherCover key={course.teacher} id={id} />
            <PostNewVideo key={id} id={id} />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  try {
    const response = await axios.get(BASE_URL + "courses");
    console.log(response.data);
    const courses = response.data;

    const paths = courses.map((course) => ({
      params: { id: course.id },
    }));

    console.log(paths);

    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
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
