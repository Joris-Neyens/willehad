import axios from 'axios';
import Head from '../src/components/head/Head';
import Layout from '../src/components/layout/Layout';
import Header from '../src/components/layout/header/Header';
import Courses from '../src/components/pages/cursus-aanbod/Courses';
import { BASE_URL, COURSES_PATH } from '../src/api/baseUrl';

console.log(BASE_URL + COURSES_PATH)



export default function cursusAanbod({ courses }) {

    return (
        <>
            <Head title="cursus aandbod" description="overzich over alle cursussen vam Willehad" />
            <Layout>
                {courses.map(function (course) {

                    const { id, title, cover, type_audio, type_course, type_video, type_webinar } = course

                    let type = ""

                    if (type_audio === true) {
                        type = "Audio Cursus"
                    } else if (type_course === true) {
                        type = "Cursus Traject"
                    } else if (type_video === true) {
                        type = "Video Cursus"
                    } else if (type_webinar === true) {
                        type = "Webinar"
                    } 

        if (course.featured === true) {
            let primaryLink = "/cursus-aanbod/" + id;
            return (
              <Header
                    viewHeight={35}
                    textCol="8"
                key={id}
                title={title}
                url={cover.url}
                alt={("cursus afbeelding:", title)}
                    buttonPrimary={primaryLink}
                type={type}
              />
            );
        }
                })}
                <Courses key={courses[0].title} courses={courses}/>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
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
