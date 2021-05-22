import axios from 'axios'
import { BASE_URL, COURSES_PATH } from '../../src/api/baseUrl';
import Head from '../../src/components/head/Head';
import Header from '../../src/components/layout/header/Header';
import Layout from '../../src/components/layout/Layout';
import AboutCourse from '../../src/components/pages/cursus/AboutCourse'
import ExplainCourse from '../../src/components/pages/cursus/ExplainCourse';
import PracticalInfo from "../../src/components/pages/cursus/Practicalinfo";
import Docent from "../../src/components/pages/cursus/Docent";
import Curriculum from "../../src/components/pages/cursus/Curriculum";

export default function Course({ course }) {

    const { whitepaper, title, description_long, about_course_image, subtitle, cover, teacher, teacher_description, practical_info_1, practical_info_2, curriculum, teacher_image} = course

  let whitePaperFile
  
  if (whitepaper) {
    whitePaperFile = whitepaper
  }

    return (
      <>
        <Head
          title={course.title}
          description={"course info for " + course.title}
        />
        <div className="wrapper">
          <Layout>
            <Header
              title={title}
              subtitle={subtitle}
              url={cover.url}
              viewHeight={80}
              textCol="12"
              modal="modal"
            />
            <AboutCourse
              course={course}
            />
            <ExplainCourse />
            <PracticalInfo
              course={course}
            />
            <Docent
              teacher={teacher}
              teacherInfo={teacher_description}
              teacherImage={teacher_image}
            />
            <Curriculum curriculum={curriculum} />
          </Layout>
        </div>
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
