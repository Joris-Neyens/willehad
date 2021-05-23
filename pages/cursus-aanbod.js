import PropTypes from "prop-types";
import axios from "axios";
import Head from "../src/components/head/Head";
import Layout from "../src/components/layout/Layout";
import Header from "../src/components/layout/header/Header";
import Courses from "../src/components/pages/cursus-aanbod/Courses";
import { BASE_URL, COURSES_PATH } from "../src/api/baseUrl";

console.log(BASE_URL + COURSES_PATH);

export default function cursusAanbod({ courses }) {
  return (
    <>
      <Head
        title="cursus aandbod"
        description="overzich over alle cursussen vam Willehad"
      />
      <div className="wrapper">
        <Layout>
          {courses.map(function (course) {
            const { id, title, cover, type } = course;

            let course_type = "";

            console.log(type);

            if (type === "Audio") {
              course_type = "Audio Cursus";
            } else if (type === "Cursus traject") {
              course_type = "Cursus Traject";
            } else if (type === "Video") {
              course_type = "Video Cursus";
            } else if (type === "Webinar") {
              course_type = "Webinar";
            }

            if (course.featured === true) {
              let primaryLink = "/cursus-aanbod/" + id;
              return (
                <Header
                  viewHeight={50}
                  textCol="8"
                  key={id}
                  title={title}
                  url={cover.url}
                  buttonPrimary={primaryLink}
                  course_type={course_type}
                />
              );
            }
          })}
          <Courses key={courses[0].title} courses={courses} />
        </Layout>
      </div>
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
    },
  };
}

cursusAanbod.propTypes = {
  courses: PropTypes.array.isRequired,
}