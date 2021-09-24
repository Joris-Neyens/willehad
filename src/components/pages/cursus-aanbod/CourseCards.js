import PropTypes from "prop-types";
import Link from "next/link";
import Image from 'next/image'

export default function CourseCards({ productInfo, courses, collections }) {

  


  return (
    <>
      
      {productInfo.map(function (product) {
        const { id, name, card_image_url, price, description, slug } = product;

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
          if (name === "traject" || name === "zelfstandig") {
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
            <Link href={`cursus-aanbod/${id}`}>
              <div className="my-3 course-card shadow">
                <div className="row w-100 mx-auto px-2 px-lg-0 ml-lg-2 ">
                  <div className="col-4 px-0">
                    <div className="card__image">
                      <Image src={card_image_url} layout="fill" className="py-2" />
                    </div>
                    <div className="card__image--content my-2 d-flex align-items-center">
                      <h2 className="ml-2">{name}</h2>
                    </div>
                  </div>
                  <div className="py-2 col-12 col-lg-8 pl-4 d-flex flex-column justify-content-between">
                    <div>
                      <h4>{collectionName}</h4>
                      <h3>{name}</h3>
                      <p className="mb-1">{description}</p>
                    </div>
                    <div className="d-flex flex-row">
                      <p className="col-4 col-md-3 p-bold px-0 mb-0">{lessons} lessen</p>
                      <p className="mb-0">€{price},-</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}

CourseCards.propTypes = {
  productInfo: PropTypes.array.isRequired,
}