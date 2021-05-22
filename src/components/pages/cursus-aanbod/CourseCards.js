import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophoneAlt,
  faVideo,
  faChalkboardTeacher,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

export default function CourseCards({ courseInfo }) {

    return (
        <>
            {courseInfo.map(function (course) {
                const {
                    id,
                    title,
                    cover,
                    price,
                    description_short,
                    type,
                    category,
                    episodes,
                } = course;

                console.log(type)

                let icon = "";
                if (type === "Audio") {
                    icon = (
                        <FontAwesomeIcon icon={faMicrophoneAlt}></FontAwesomeIcon>
                    );
                } else if (type === "Video") {
                    icon = <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>;
                } else if (type === "Cursus traject") {
                    icon = <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>;
                } else if (type === "Webinar") {
                    icon = (
                        <FontAwesomeIcon
                            icon={faChalkboardTeacher}
                        ></FontAwesomeIcon>
                    );
                }

                let imageStyle = "col-4 p-0 card__image my-2";

                if (category === "Bijbel studie") {
                    imageStyle = `col-12 col-lg-4 p-0 card__image my-2 color-bible`;
                } else if (category === "Geschiedenis") {
                    imageStyle = `col-12 col-lg-4 p-0 card__image my-2 color-history`;
                } else if (category === "Theologie") {
                    imageStyle = `col-12 col-lg-4 p-0 card__image my-2 color-theology`;
                } else if (category === "Filosofie") {
                    imageStyle = `col-12 col-lg-4 p-0 card__image my-2 color-philosophy`;
                } else if (category === "Catechese") {
                    imageStyle = `col-12 col-lg-4 p-0 card__image my-2 color-catechesis`;
                }

                let styles = {
                    backgroundImage: `url(/public/under-construction.jpg)`,
                };

                if (cover) {
                    styles = {
                        backgroundImage: `url(${cover.url})`,
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
                                <h2>{title}</h2>
                                <div className="icon position-absolute">
                                  {icon}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="py-2 col-12 col-lg-8 pl-4 d-flex flex-column justify-content-around">
                            <h3>{title}</h3>
                            <p className="mb-1">{description_short}</p>
                            <div className="d-flex flex-row">
                              <p className="col-4 col-md-3 p-bold px-0 mb-0">{episodes} lessen</p>
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
    )

}
