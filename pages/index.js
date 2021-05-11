import axios from "axios";

import { BASE_URL } from "../src/api/baseUrl";
import Head from "../src/components/head/Head";
import Layout from "../src/components/layout/Layout";
import Header from "../src/components/layout/Header";
import Uitleg from "../src/components/pages/home/uitleg";
import TextRight from "../src/components/common/TextRight";
import Newsletter from "../src/components/pages/home/Newsletter";
import Reviews from "../src/components/common/Reviews";

export default function Home({ home }) {
  console.log(home);
  const url = home.header_image.url;
  let primaryLink = "/cursus-aanbod/" + home.id;
  return (
    <Layout>
      <Head
        title="Home"
        description="willed cursus platform startpagina"
      ></Head>
      <Header
        url={url}
        viewHeight= {80}
        id={home.id}
        alt={("cursus afbeelding:", home.title)}
        textWidth="4"
        title={home.title}
        subtitle={home.subtitle}
        date={home.course_date}
        buttonPrimary={primaryLink}
        buttonSecondary="/cursus-aanbod/"
      />
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
