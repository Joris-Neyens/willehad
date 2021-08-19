import PropTypes from "prop-types";
import axios from "axios";
import Head from "../src/components/head/Head";
import Layout from "../src/components/layout/Layout";
import Header from "../src/components/layout/header/Header";
import Courses from "../src/components/pages/cursus-aanbod/Courses";

export default function cursusAanbod({ courses, products, collections }) {
  
  return (
    <>
      <Head
        title="cursus aandbod"
        description="overzich over alle cursussen vam Willehad"
      />
      <div className="wrapper">
        <Layout>
          {products.map(function (product) {
            
            const { id, name, slug, card_image_url} = product;

            if (product.position === 0) {
              let primaryLink = "https://willehad.thinkific.com/courses/" + slug;
              return (
                <Header
                  viewHeight={50}
                  textCol="8"
                  key={id}
                  title={name}
                  url={card_image_url}
                  buttonPrimary={primaryLink}
                  headerButtonName={"meld je aan"}
                />
              );
            }
          })}
          <Courses key={products[0].id} products={products} courses={courses} collections={collections}/>
        </Layout>
      </div>
    </>
  );
}

export async function getServerSideProps() {
    const courseUrl = "https://api.thinkific.com/api/public/v1/courses"
  const productUrl = "https://api.thinkific.com/api/public/v1/products"
      const collectionsUrl = "https://api.thinkific.com/api/public/v1/collections";

    let courses = [];
  let products = [];
  let collections = []
    
    const header = {
       
        headers: {
            "X-Auth-API-Key": 'a075749a8ee7defaa77d3ccbf6413888',
            "X-Auth-Subdomain": 'willehad',
            "Content-Type": 'application/json',
        },
      }

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



// export async function getServerSideProps() {
//   const url = BASE_URL + COURSES_PATH;
//   const headerUrl = BASE_URL + HOME_PATH;

//   let courses = [];
//   let header = [];

//   try {
//     const response = await axios.get(url);
//     console.log(response.data);
//     courses = response.data;
//   } catch (error) {
//     console.log(error);
//   }
//   try {
//     const response = await axios.get(headerUrl);
//     console.log(response.data);
//     header = response.data;
//   } catch (error) {
//     console.log(error);
//   }
//   return {
//     props: {
//       courses: courses,
//       header: header,
//     },
//   };
// }

// cursusAanbod.propTypes = {
//   courses: PropTypes.array.isRequired,
// }