import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";
import Client from "shopify-buy";
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

export default function Course({ courseProduct, instructors, chapters, fetchedCheckout }) {
  const { name, seo_title, card_image_url } = courseProduct;

  const webUrl = fetchedCheckout.webUrl

  // let videoArray = ""

  // if (video) {
  //   videoArray = <Video video={video} />;
  // }

  return (
    <>
      <Head title={name} description={"course info for " + seo_title} />
      <div className="wrapper">
        <Layout>
          <Header title={name} subtitle={seo_title} url={card_image_url} viewHeight={60} textCol="12" modal={false} />
          <a href={ webUrl }><button className="primaryButton">Go here</button></a>
          <AboutCourse product={courseProduct} />
          <Curriculum chapters={chapters} />
          <ExplainCourse />
          {/* 
          {videoArray} */}
          <Docent product={courseProduct} instructors={instructors} />
          <PracticalInfo />
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
  let courseProduct = null;
  let chapters = [];
  let courses = null;
  let checkout = null;

  try {
    const response = await axios.get(url, header);
    courseProduct = response.data;
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
    if (course.name === courseProduct.name) {
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
  
  
  const client = Client.buildClient({
    domain: "willehad.myshopify.com",
    storefrontAccessToken: "aaf4165bde6a7acc1f9664256d29304a",
  });
 
    try {
      checkout = await client.checkout.create().then(checkout => {
        return JSON.parse(JSON.stringify(checkout));
      });
    } catch (error) {
      console.log(error);
    }
  
   let variantId = ""

  try {
      variantId = await client.product.fetchAll().then(products => {
      variantId = products.filter(product => product.title === courseProduct.name);
      return product
    });
  } catch(error){
    console.log(error)
  }

   variantId = variantId[0].variants[0].id

  const lineItemsToAdd = [
    {
      quantity: 1,
      variantId: variantId,
    },
  ];

  console.log("lineitem = ", lineItemsToAdd)



  try {
   await client.checkout.addLineItems(checkout.id, lineItemsToAdd).then(checkout => {
    console.log(checkout.lineItems);
  });
  } catch (error) {
    console.log(error)
  }
  
  let fetchedCheckout = ""

  try {
    fetchedCheckout = await client.checkout.fetch(checkout.id).then(checkout => {
      return JSON.parse(JSON.stringify(checkout));
    });
  } catch (error) {
    console.log(error)
  }
  



  return {
    props: {
      courseProduct: courseProduct,
      instructors: instructors,
      courses: courses,
      chapters: chapters,
      checkout: checkout,
      fetchedCheckout: fetchedCheckout,

    },
  };
}

Course.propTypes = {
  courseProduct: PropTypes.object.isRequired,
  instructors: PropTypes.array.isRequired,
  // chapters: PropTypes.array.isRequired,
}