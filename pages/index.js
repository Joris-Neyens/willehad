import axios from "axios";
import { BASE_URL } from "../src/api/baseUrl";
import Head from "../src/components/head/Head";
import Header from "../src/components/layout/header/Header";
import Layout from "../src/components/layout/Layout";
import Newsletter from "../src/components/pages/home/Newsletter";
import Reviews from "../src/components/pages/home/Reviews";
import ShortAboutCourse from "../src/components/pages/home/ShortAboutCourse";
import Uitleg from "../src/components/pages/home/Uitleg";


export default function Home({ home }) {

  const {id, title, header_subtitle, course_date, header_image, course_title, course_image, course_description} = home


  let primaryLink = "/cursus-aanbod/" + home.id;
  return (
    <div className="wrapper">
      <Layout>
        <Head
          title="Home"
          description="willehad cursus platform startpagina"
        ></Head>
        <Header
          url={header_image.url}
          viewHeight={100}
          textCol="4"
          id={id}
          alt={("cursus afbeelding:", title)}
          title={title}
          header_subtitle={header_subtitle}
          date={course_date}
          buttonPrimary={primaryLink}
          buttonSecondary="/cursus-aanbod/"
        />
        <Uitleg />
        <ShortAboutCourse
          url={course_image.url}
          alt={("afbeelding voor de cursus:", course_title)}
          startDate={course_date}
          title={course_title}
          text={course_description}
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
  const url = BASE_URL + "home";

  let home = [];

  try {
    const response = await axios.get(url);
    console.log(response.data);
    home = response.data;
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      home: home,
    },
  };
}
