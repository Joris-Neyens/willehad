import PropTypes from "prop-types";
import axios from "axios";
import Head from "../src/components/head/Head";
import Layout from "../src/components/layout/Layout";
import Header from "../src/components/layout/header/Header";
import Courses from "../src/components/pages/cursus-aanbod/Courses";
import { API_KEY, THINKIFIC_URL } from "../src/api/thinkific";

export default function cursusAanbod({ courses, products, collections }) {
  return (
    <>
      <Head title="cursus aandbod" description="overzich over alle cursussen vam Willehad" />
      <div className="wrapper">
        <Layout>
          {products.map(function (product) {
            const { id, name, slug, card_image_url } = product;

            if (product.position === 0) {
              let primaryLink = "cursus-aanbod/" + slug;
              return <Header viewHeight={50} key={id} title={name} url={card_image_url} buttonPrimary={primaryLink} headerButtonName={"meld je aan"} />;
            }
          })}
          
          <Courses key={products[0].id} products={products} courses={courses} collections={collections} />
        </Layout>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  
    const courseUrl = THINKIFIC_URL + "/courses"
  const productUrl = THINKIFIC_URL + "/products";
  const collectionsUrl = THINKIFIC_URL + "/collections";

    let courses = [];
  let products = [];
  let collections = []
    
    const header = {
       
        headers: {
            "X-Auth-API-Key": `${API_KEY}`,
            "X-Auth-Subdomain": 'willehad',
            "Content-Type": 'application/json',
        },
      }
  const url = THINKIFIC_URL + "/products"
  
  try {
      const response = await axios.get(courseUrl, header);

    console.log(response.data);
    courses = response.data.items;
  } catch (error) {
    console.log(error);
  }
    
     try {
      const response = await axios.get(productUrl, header);
    console.log(response.data);
    products = response.data.items;
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
  
 
  return {
    props: {
          courses: courses,
      products: products,
      collections: collections,

    },
  };
}

cursusAanbod.propTypes = {
  courses: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
  collections: PropTypes.array.isRequired,
};