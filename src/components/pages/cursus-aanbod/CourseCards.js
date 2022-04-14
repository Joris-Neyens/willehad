import PropTypes from "prop-types";
import Link from "next/link";
import Image from 'next/image'
import Fade from "react-reveal/Fade";

export default function CourseCards({ productInfo, courses, collections }) {

  


  return (
    <>
      
      {productInfo.map(function (product) {
        const { id, name, card_image_url, price, description, slug, keywords } = product;

        console.log(product)

        if (product.status !== "draft") {

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

          let cardTitle = <h2 className="ml-2 w-100 text-center mt-5">{name}</h2>
          
          let meerInfo = <button className="button__secondary--light ml-2 text-center px-4 py-1 mt-2">Meer info</button>;
          if (product.status === "presell") {
            meerInfo = ""
            cardTitle = <h2 className="ml-2 w-100 text-center mt-5">cursus onder ontwikkeling</h2>;
          }

            let card_details = (<div><br /></div>
            );
          if (product.status === "published") {

            card_details = <div className="d-flex justify-content-center">
                            <div className="card__details w-100 d-flex flex-column flex-md-row align-items-center justify-content-center pb-3 pt-lg-4">
                              <p className="col-4 col-md-3 text-center text-md-left p-bold px-0 mb-0">{lessons} lessen</p>
                              <p className="mb-0 col-4 col-md-3 text-center text-md-left px-0">€{price},-</p>
                              <p className="mb-0">
                                <b>thema: </b>
                                {keywords}
                              </p>
                            </div>
                          </div>
          }
            
            return (
              <div key={id}>
                <Fade>
                  <Link href={`cursus-aanbod/${id}`}>
                    <div className="my-3 course-card shadow">
                      <div className="row w-100 mx-auto px-2">
                        <div className="col-12 px-0">
                          <div className="card__image">
                            <img src={card_image_url} style={{ width: "100%", height: "100%" }} className="py-2" />
                          </div>
                          <div className="card__image--content my-2 d-flex flex-column justify-content-center align-items-center ">
                            {cardTitle}
                            {meerInfo}
                          </div>
                        </div>
                        <div className="px-1 py-2 col-12 col-lg-12 px-md-4 d-flex flex-column justify-content-between">
                          <div>
                            <h4 className="text-center mb-1">{collectionName}</h4>
                            <h3 className="text-center ">{name}</h3>
                            <p className="mb-3 mb-lg-1 text-center mx-auto">{description}</p>
                          </div>
                          {card_details}
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