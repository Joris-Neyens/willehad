import PropTypes from "prop-types";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophoneAlt,
  faVideo,
  faChalkboardTeacher,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";

export default function CourseCards({ productInfo, courses }) {

  return (
    <>
      {productInfo.map(function (product) {
        const {
          id,
          name,
          card_image_url,
          price,
          description,
          slug,
          type,
          category,
          episodes,
        } = product;

        let lessons = "1"

        courses.map(function (course) {
          
          if (slug === course.slug) {
            lessons = course.chapter_ids.length
          } 

        })

        // let icon = "";
        // if (type === "Audio") {
        //   icon = <FontAwesomeIcon icon={faMicrophoneAlt}></FontAwesomeIcon>;
        // } else if (type === "Video") {
        //   icon = <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>;
        // } else if (type === "Cursus traject") {
        //   icon = <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>;
        // } else if (type === "Webinar") {
        //   icon = <FontAwesomeIcon icon={faChalkboardTeacher}></FontAwesomeIcon>;
        // }

        let imageStyle = "col-4 p-0 card__image my-2";

        // if (category === "Bijbel studie") {
        //   imageStyle = `col-12 col-lg-4 p-0 card__image my-2 color-bible`;
        // } else if (category === "Geschiedenis") {
        //   imageStyle = `col-12 col-lg-4 p-0 card__image my-2 color-history`;
        // } else if (category === "Theologie") {
        //   imageStyle = `col-12 col-lg-4 p-0 card__image my-2 color-theology`;
        // } else if (category === "Filosofie") {
        //   imageStyle = `col-12 col-lg-4 p-0 card__image my-2 color-philosophy`;
        // } else if (category === "Catechese") {
        //   imageStyle = `col-12 col-lg-4 p-0 card__image my-2 color-catechesis`;
        // }

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
            <Link href={`https://willehad.thinkific.com/courses/${slug}`}>
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