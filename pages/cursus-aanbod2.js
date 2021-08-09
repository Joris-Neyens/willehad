import axios from "axios";

export default function cursus_aanbod2({ courses, products }) {
    products.map(function (product) {
        console.log(product.id)
    })
    products.map(function (courses) {
        console.log(courses.id)
    })


    return (
        <>
            {courses.map(function (course) {
                return(
                <div key={course.id}>
                    <p>{course.name}</p>
                    <p>{course.id}</p>
                        <img src={course.course_card_image_url} width="100px" height="100px"></img>
                        {products.map(function (product) {

                            if (product.name === course.name) {
                                 return (
                                     <p key={product.id}>{product.price}, {product.name}</p>)
                            }
                           
                        })
                       }
                </div>
                )}
            )
            }
        </>
    
    )
}

export async function getServerSideProps() {
    const courseUrl = "https://api.thinkific.com/api/public/v1/courses"
    const productUrl = "https://api.thinkific.com/api/public/v1/products"

    let courses = [];
    let products = [];
    
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
 
  return {
    props: {
          courses: courses,
        products: products,
    },
  };
}

