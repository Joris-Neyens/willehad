import Link from 'next/link';
import Image from 'next/image';
import {useState} from 'react'
import Fuse from "fuse.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMicrophoneAlt, faVideo, faChalkboardTeacher, faComments } from "@fortawesome/free-solid-svg-icons";

export default function Courses({ courses }) {

    const [courseInfo, setCourseInfo] = useState(courses)

    const searchCourses = (pattern) => {
        if (!pattern) {
            setCourseInfo(courses)
            return;
        }
    
        const results = new Fuse(courseInfo, {
            keys: ["title"]
        })

        const result = results.search(pattern)
        const matches = [];
        if (!result.length) {
            setCourseInfo([]);
        } else {
            result.forEach(({ item }) => {
                matches.push(item)
            })
            setCourseInfo(matches)
        }
    }
    
    return (
      <>
        <div className="container-fluid position-relative pb-5">
          <div className="row">
            <div className="col-8 offset-3">
              <h1>Cursus aanbod</h1>
            </div>
          </div>

          <div className="row">
                    <div className="col-3">
                        <input onChange={(e) => searchCourses(e.target.value)} placeholder="zoek title of onderwerp"></input>
            </div>

                    {courseInfo.map(function (course) {
                        console.log(course)
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
                  <FontAwesomeIcon
                    key={id}
                    icon={faMicrophoneAlt}
                  ></FontAwesomeIcon>
                );
              } else if (type_video === true) {
                icon = (
                  <FontAwesomeIcon key={id} icon={faVideo}></FontAwesomeIcon>
                );
              } else if (type_course === true) {
                icon = (
                  <FontAwesomeIcon key={id} icon={faComments}></FontAwesomeIcon>
                );
              } else if (type_webinar === true) {
                icon = (
                  <FontAwesomeIcon
                    key={id}
                    icon={faChalkboardTeacher}
                  ></FontAwesomeIcon>
                ); 
              }

              let imageStyle = "ml-3";

              if (category_bible_study === true) {
                imageStyle = `ml-3 color-bible`;
              } else if (category_history === true) {
                imageStyle = `ml-3 color-history`;
              } else if (category_theology === true) {
                imageStyle = `ml-3 color-theology`;
              } else if (category_philosophy === true) {
                imageStyle = `ml-3 color-philosophy`;
              } else if (category_catechesis === true) {
                imageStyle = `ml-3 color-catechesis`;
              }

              let url = "/public/under-construction.jpg";

              if (cover) {
                url = cover.url;
              }
              return (
                <>
                  <div className="col-8 offset-3">
                    <Link key={id} href={`cursus-aanbod/${id}`}>
                      <div className="pt-2 pb-1 px-2 mt-4 course-card shadow">
                        <div className="row">
                          <div className="position-relative ">
                            <div className={imageStyle}>
                              <Image src={url} width="300" height="180" />
                            </div>
                            <div className="icon position-absolute text-white">
                              {icon}
                            </div>
                          </div>
                          <div className="pl-4">
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <p>{price}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
}

