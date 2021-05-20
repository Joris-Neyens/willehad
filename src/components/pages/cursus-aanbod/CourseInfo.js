import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophoneAlt,
  faVideo,
  faChalkboardTeacher,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

export default function CourseInfo({ courseInfo }) {

    return (
        <>
            {courseInfo.map(function (course) {
                const {
                    id,
                    title,
                    cover,
                    price,
                    description,
                    type_audio,
                    type_video,
                    type_course,
                    type_webinar,
                    category_bible_study,
                    category_catechesis,
                    category_philosophy,
                    category_history,
                    category_theology,
                } = course;

                let icon = "";
                if (type_audio === true) {
                    icon = (
                        <FontAwesomeIcon icon={faMicrophoneAlt}></FontAwesomeIcon>
                    );
                } else if (type_video === true) {
                    icon = <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>;
                } else if (type_course === true) {
                    icon = <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>;
                } else if (type_webinar === true) {
                    icon = (
                        <FontAwesomeIcon
                            icon={faChalkboardTeacher}
                        ></FontAwesomeIcon>
                    );
                }

                let imageStyle = "col-4 p-0 card__image my-2";

                if (category_bible_study === true) {
                    imageStyle = `col-4 p-0 card__image my-2 color-bible`;
                } else if (category_history === true) {
                    imageStyle = `col-4 p-0 card__image my-2 color-history`;
                } else if (category_theology === true) {
                    imageStyle = `col-4 p-0 card__image my-2 color-theology`;
                } else if (category_philosophy === true) {
                    imageStyle = `col-4 p-0 card__image my-2 color-philosophy`;
                } else if (category_catechesis === true) {
                    imageStyle = `col-4 p-0 card__image my-2 color-catechesis`;
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
                    <div  key={ id }>
                        <Link href={`cursus-aanbod/${id}`}>
                            <div className="my-3 course-card shadow">
                                <div className="row ml-2 ">
                                    <div className={imageStyle} style={styles}>
                                        <div className="card-overlay w-100 h-100">
                                            <div className="card__image-content position-relative  d-flex flex-column justify-content-center w-100 h-100">
                                                <h3>{title}</h3>
                                                <div className="icon position-absolute w-100 h-100">
                                                    {icon}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-2 col-8 pl-4">
                                        <h3>{title}</h3>
                                        <p>{description}</p>
                                        <p>{price}</p>
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
