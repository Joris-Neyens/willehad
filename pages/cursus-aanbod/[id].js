import PropTypes from "prop-types";
import axios from "axios";
import { THINKIFIC_URL, API_KEY } from "../../src/api/thinkific";
import Head from "../../src/components/head/Head";
import Header from "../../src/components/layout/header/Header";
import Layout from "../../src/components/layout/Layout";
import AboutCourse from "../../src/components/pages/cursus/AboutCourse";
import ExplainCourse from "../../src/components/pages/cursus/ExplainCourse";
import PracticalInfo from "../../src/components/pages/cursus/Practicalinfo";
import Docent from "../../src/components/pages/cursus/Docent";
import Curriculum from "../../src/components/pages/cursus/Curriculum";
import Video from '../../src/components/pages/cursus/Video';
import { faZhihu } from "@fortawesome/free-brands-svg-icons";

export default function Course({ product, instructors, chapters}) {

  const {
    name,
    seo_title,
    card_image_url,
  } = product;

  // let videoArray = ""

  // if (video) {
  //   videoArray = <Video video={video} />;
  // }

  return (
    <>
      <Head title={name} description={"course info for " + seo_title} />
      <div className="wrapper">
        <Layout>
          <Header title={name} subtitle={seo_title} url={card_image_url} viewHeight={60} textCol="12" modal={true} />
          <AboutCourse product={product} />
          <ExplainCourse />
          {/* 
          <PracticalInfo product={product} />
          */}
          <Curriculum chapters={chapters} />
          {/* 
          {videoArray} */}
          <Docent product={product} instructors={instructors} />
        </Layout>
      </div>
    </>
  );
}

const header = {
  headers: {
    "X-Auth-API-Key": `${API_KEY}`,
    "X-Auth-Subdomain": "willehad",
    "Content-Type": "application/json",
  },
};

export async function getServerSidePaths() {

  const url = THINKIFIC_URL + "/products"
  try {
    const response = await axios.get(url, header);
    console.log(response.data);
    const courses = response.data;

    const paths = courses.map(course => ({
      params: { slug: course.id },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getServerSideProps({ params }) {

  const url = `${THINKIFIC_URL}/products/${params.id}`;
  const instructorsUrl = THINKIFIC_URL + "/instructors";
  const coursesUrl = THINKIFIC_URL + "/courses";

  let instructors = [];
  let product = null;
  let chapters = [];
  let courses = null;

  try {
    const response = await axios.get(url, header);
    product = response.data;
  } catch (error) {
    console.log(error);
  }
  try {
    const response = await axios.get(instructorsUrl, header);
    instructors = response.data.items;
  } catch (error) {
    console.log(error);
  }
    try {
      const response = await axios.get(coursesUrl, header);
      courses = response.data.items;
    } catch (error) {
      console.log(error);
    }

  
  const filteredId = courses.filter(function (course) {
    if (course.name === product.name) {
      return course
    }
  })
  const chapterID = filteredId[0].id
  const chaptersUrl = THINKIFIC_URL + "/courses/" + chapterID + "/chapters?page=1&limit=25";

    try {
      const response = await axios.get(chaptersUrl, header);
      chapters = response.data.items;
    } catch (error) {
      console.log(error);
    }

  



  return {
    props: {
      product: product,
      instructors: instructors,
      courses: courses,
      chapters: chapters,
    },
  };
}

Course.propTypes = {
  product: PropTypes.object.isRequired,
  instructors: PropTypes.array.isRequired,
  // chapters: PropTypes.array.isRequired,
}