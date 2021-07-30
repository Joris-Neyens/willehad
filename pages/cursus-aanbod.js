import PropTypes from "prop-types";
import axios from "axios";
import Head from "../src/components/head/Head";
import Layout from "../src/components/layout/Layout";
import Header from "../src/components/layout/header/Header";
import Courses from "../src/components/pages/cursus-aanbod/Courses";
import { BASE_URL, HOME_PATH, COURSES_PATH } from "../src/api/baseUrl";

console.log(BASE_URL + COURSES_PATH);

export default function cursusAanbod({ courses, header }) {
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
                  headerButtonName={"meld je aan"}
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
  const headerUrl = BASE_URL + HOME_PATH;

  let courses = [];
  let header = [];

  try {
    const response = await axios.get(url);
    console.log(response.data);
    courses = response.data;
  } catch (error) {
    console.log(error);
  }
  try {
    const response = await axios.get(headerUrl);
    console.log(response.data);
    header = response.data;
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      courses: courses,
      header: header,
    },
  };
}

cursusAanbod.propTypes = {
  courses: PropTypes.array.isRequired,
}