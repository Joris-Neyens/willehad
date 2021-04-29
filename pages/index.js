import axios from "axios";

import { BASE_URL } from "../js/constants/Api";
import Head from "../js/components/head/Head";
import Layout from "../js/components/layout/Layout";
import HomeHeader from "../js/components/headers/HomeHeader";
import Uitleg from "../js/components/pages/home/uitleg";
import TextRight from "../js/components/common/TextRight";
import Newsletter from "../js/components/pages/home/Newsletter";
import Reviews from "../js/components/common/Reviews";

export default function Home({ courses }) {
  return (
    <Layout>
      <Head
        title="Home"
        description="willed cursus platform startpagina"
      ></Head>
      {courses.map((course) => {
        let url = course.cover.url;
        return (
          <>
            <HomeHeader
              url={url}
              id={course.id}
              alt={course.image_discription}
            />
          </>
        );
      })}
      <Uitleg />
      <TextRight
        url="https://res.cloudinary.com/dewzqtmii/image/upload/v1619444906/photo_1515378791036_0648a3ef77b2_1c7d07af64.jpg"
        alt="here is an image"
        startDate="5 mei"
        title="Katholieke Catechese"
        text="Hier komt iets te staan over de inhoud van deze cursus. Wat zijn de belangrijkste themas die behandeld zullen worden. Waarom iemand deze cursus zou moeten volgen. Voor wie deze cursus bedoeld is. "
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
  );
}
export async function getStaticProps() {
  const url = BASE_URL + "courses";

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
