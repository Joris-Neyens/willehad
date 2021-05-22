
import PropTypes from "prop-types";
import axios from "axios";
import { BASE_URL, HOME_PATH, COURSES_PATH } from "../src/api/baseUrl";
import Head from "../src/components/head/Head";
import Header from "../src/components/layout/header/Header";
import Layout from "../src/components/layout/Layout";
import Newsletter from "../src/components/pages/home/Newsletter";
import Reviews from "../src/components/pages/home/Reviews";
import ShortAboutCourse from "../src/components/pages/home/ShortAboutCourse";
import Uitleg from "../src/components/pages/home/Uitleg";

export default function Home({ home, courses }) {

  return (
    <div className="wrapper">
      <Layout>
        <Head
          title="Home"
          description="willehad cursus platform startpagina"
        ></Head>
        <Header
          courses={courses}
          buttonPrimary="/cursus-aabod"
          buttonSecondary="/cursus-aanbod"
          title={home.title}
          url={home.header_image.url}
          modal={false}
          home={home}
          viewHeight={100}
          textCol="4"
          subtitle={home.header_subtitle}
          date={home.course_date}
        />
        <Uitleg />
        <ShortAboutCourse
          courses={courses}
          home={home}
          buttonPrimary="meer info"
          buttonSecondary="meld je aan"
        />
        <Newsletter />
        <Reviews
          title="verassend"
          name="jan jansen"
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        />
      </Layout>
    </div>
  );
}
export async function getServerSideProps() {
  const url = BASE_URL + HOME_PATH;
  const courseUrl = BASE_URL + COURSES_PATH;

  let home = [];
  let courses = []

  try {
    const response = await axios.get(url);
    console.log(response.data);
    home = response.data;
  } catch (error) {
    console.log(error);
  }

  try {
    const response = await axios.get(courseUrl);
    console.log(response.data);
    courses = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      home: home,
      courses: courses,
    },
  };
}

Home.propTypes = {
  home: PropTypes.object,
  courses: PropTypes.object,
}