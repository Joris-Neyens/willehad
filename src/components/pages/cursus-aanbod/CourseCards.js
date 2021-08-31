import PropTypes from "prop-types";
import Link from "next/link";

export default function CourseCards({ productInfo, courses }) {

  return (
    <>
      { productInfo.map(function (product) {
        const {
          id,
          name,
          card_image_url,
          price,
          description,
          slug,
        } = product;

        let lessons = "1"

        courses.map(function (course) {
          
          if (slug === course.slug) {
            lessons = course.chapter_ids.length
          } 

        })

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
                  <div className={imageStyle} style={styles}>
                    <div className="card-overlay w-100 h-100">
                      <div className="card__image-content position-relative  d-flex flex-column justify-content-center w-100 h-100">
                        <h2>{name}</h2>
                        {/* <div className="icon position-absolute">{icon}</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="py-2 col-12 col-lg-8 pl-4 d-flex flex-column justify-content-around">
                    <h3>{name}</h3>
                    <p className="mb-1">{description}</p>
                    <div className="d-flex flex-row">
                      <p className="col-4 col-md-3 p-bold px-0 mb-0">
                        {lessons} lessen
                      </p>
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