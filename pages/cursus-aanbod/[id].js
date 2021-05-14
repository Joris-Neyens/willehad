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

    const { title, description, cover, teacher, teacher_description, practical_info, curriculum, teacher_image} = course
    console.log(course)

    return (
      <>
        <Head
          title={course.title}
          description={"course info for " + course.title}
        />
        <Layout>
          <Header
            title={title}
            url={cover.url}
            viewHeight={80}
            textCol="4"
            modal="modal"
          />
          <AboutCourse
            title="Over deze cursus"
            text="description"
            button="whitepaper"
            url={teacher_image.url}
          />
          <ExplainCourse />
          <PracticalInfo info={practical_info} />
                <Docent
                    teacher={teacher}
            teacherInfo={teacher_description}
            teacherImage={teacher_image}
                />
                <Curriculum curriculum={curriculum} />
        </Layout>
      </>
    );
}


export async function getStaticPaths() {
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
