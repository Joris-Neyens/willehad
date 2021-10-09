import React from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import { useState } from "react";
import { BASE_URL, HOME_PATH, COURSES_PATH, REVIEWS_PATH } from "../src/api/baseUrl";
import { API_KEY, THINKIFIC_URL } from "../src/api/thinkific";
import Head from "../src/components/head/Head";
import Header from "../src/components/layout/header/Header";
import VideoHeader from "../src/components/layout/header/VideoHeader";
import Layout from "../src/components/layout/Layout";
import Newsletter from "../src/components/pages/home/Newsletter";
import ReviewsHome from "../src/components/pages/home/ReviewsHome";
import Uitleg from "../src/components/pages/home/Uitleg";
import HomepageAbout from "../src/components/pages/home/HomepageAbout";

export default function Home({ home, courses, reviews, thinkificProducts, courseReviews, collections }) {
  
  console.log(collections)


  let courseUrl = ""
  let productCollection = []

  thinkificProducts.forEach(function (product) {
       if (product.position === 0) {
         courseUrl = "/cursus-aanbod/" + product.id

         productCollection.push(product)
       }
  })
  productCollection = productCollection[0]

  console.log(productCollection);




  const filteredCollection = collections.map(function (collection) {
    return productCollection.collection_ids.map(function (productCollectionId) {
      if (collection.id === productCollectionId) {
        return collection.name;
      }
    });
  });

  let allNames = [];

  filteredCollection.map(function (collectionNames) {
    collectionNames.map(function (name) {
      allNames.push(name);
    });
  });

  let collectionName = "";

  allNames.map(function (name) {
    if (name === "cursus traject" || name === "zelfstudie cursus") {
      collectionName = name;
    }
  });


  // const [courseUrl, setCourseUrl] = useState("")

  // React.useEffect(() => {
  //   thinkificProducts.forEach(function (product) {
  //      if (product.position === 0) {
  //        setCourseUrl("/cursus-aanbod/" + product.id)
  //      }
  //    })
  // }, [thinkificProducts]);



  if (! home.header_video) {
    return (
      <div className="wrapper">
        <Layout>
          <Head title="Home" description="willehad cursus platform startpagina"></Head>
          <Header
            courses={courses}
            headerButtonName="cursus info"
            buttonPrimary={courseUrl}
            buttonSecondary="/hoe-het-werkt"
            title={home.title}
            url={home.header_image.url}
            modal={false}
            home={home}
            viewHeight={80}
            subtitle={home.header_subtitle}
            date={home.course_date}
          />
          <Uitleg />
          <ReviewsHome reviews={reviews} />
          <Newsletter />
          <HomepageAbout />
        </Layout>
      </div>
    );
  } else {
    return (
      <div className="wrapper">
        <Layout>
          <Head title="Home" description="willehad cursus platform startpagina"></Head>
          <VideoHeader
            courses={courses}
            headerButtonName="Cursus info"
            buttonPrimary={courseUrl}
            title={home.title}
            video={home.header_video.url}
            modal={false}
            home={home}
            viewHeight={98}
            textCol="4"
            subtitle={home.header_subtitle}
            date={home.course_date}
            course_type={collectionName}
            url={home.header_image.url}
          />
          <Uitleg />
          <ReviewsHome reviews={reviews} />
          <Newsletter />
          <HomepageAbout />
        </Layout>
      </div>
    );
  }
    
  
}

export async function getServerSideProps() {
  const url = BASE_URL + HOME_PATH;
  const courseUrl = BASE_URL + COURSES_PATH;
  const reviewsUrl = BASE_URL + REVIEWS_PATH;
    const thinkificUrl = THINKIFIC_URL + "/products";
    const collectionsUrl = THINKIFIC_URL + "/collections";

  let home = [];
  let courses = [];
  let reviews = [];
  let thinkificProducts = [];
  let collections = [];



  const header = {
    headers: {
      "X-Auth-API-Key": `${API_KEY}`,
      "X-Auth-Subdomain": "willehad",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.get(url);
    home = response.data;
  } catch (error) {
    console.log(error);
  }


  try {
    const response = await axios.get(thinkificUrl, header);
    thinkificProducts = response.data.items;
  } catch (error) {
    console.log(error);
  }

   try {
     const response = await axios.get(collectionsUrl, header);
     console.log(response.data);
     collections = response.data.items;
   } catch (error) {
     console.log(error);
   }
  


  try {
    const response = await axios.get(courseUrl);
    courses = response.data;
  } catch (error) {
    console.log(error);
  }

  try {
    const response = await axios.get(reviewsUrl);
    reviews = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      home: home,
      courses: courses,
      reviews: reviews,
      thinkificProducts: thinkificProducts,
      collections: collections,

    },
  };
}

Home.propTypes = {
  home: PropTypes.object,
  courses: PropTypes.array,
  reviews: PropTypes.array,
  thinkificProducts: PropTypes.array,
}