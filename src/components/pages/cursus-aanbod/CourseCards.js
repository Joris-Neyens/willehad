import PropTypes from "prop-types";
import Link from "next/link";
import Image from 'next/image'
import Fade from "react-reveal/Fade";

export default function CourseCards({ productInfo, courses, collections }) {

  


  return (
    <>
      
      {productInfo.map(function (product) {
        const { id, name, card_image_url, price, description, slug } = product;

        if (product.status === "published") {

          const filteredCollection = collections.map(function (collection) {
            return product.collection_ids.map(function (productCollectionId) {
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

          let collectionName = ""

          allNames.map(function (name) {
            if (name === "cursus traject" || name === "zelfstudie cursus") {
              collectionName = name;
            }
          });

          let lessons = "1";

          courses.map(function (course) {
            if (slug === course.slug) {
              lessons = course.chapter_ids.length;
            }
          });

          let imageStyle = "col-4 p-0 card__image my-2";

          let styles = {
            backgroundImage: `url(/public/under-construction.jpg)`,
          };

          if (card_image_url) {
            styles = {
              backgroundImage: `url(${card_image_url})`,
            };
          }
          return (
            <div key={id}>
              <Fade>
                <Link href={`cursus-aanbod/${id}`}>
                  <div className="my-3 course-card shadow">
                    <div className="row w-100 mx-auto px-2 px-lg-0 ml-lg-2 ">
                      <div className="col-12 col-lg-4 px-0">
                        <div className="card__image">
                          <img src={card_image_url} style={{width: "100%", height: "100%"}} className="py-2" />
                        </div>
                        <div className="card__image--content my-2 d-flex align-items-center">
                          <h2 className="ml-2 w-100 text-center text-lg-left">{name}</h2>
                        </div>
                      </div>
                      <div className="px-1 py-2 col-12 col-lg-8 px-md-4 d-flex flex-column justify-content-between">
                        <div>
                          <h4 className="text-center text-lg-left">{collectionName}</h4>
                          <h3 className="text-center text-lg-left">{name}</h3>
                          <p className="mb-1 text-center text-lg-left">{description}</p>
                        </div>
                        <div className="d-flex flex-row justify-content-center justify-content-lg-start pb-3 pt-3 py-lg-0">
                          <p className="col-4 col-md-3 p-bold px-0 mb-0">{lessons} lessen</p>
                          <p className="mb-0">€{price},-</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Fade>
            </div>
          );
        }
      })}
    </>
  );
}

CourseCards.propTypes = {
  productInfo: PropTypes.array.isRequired,
}