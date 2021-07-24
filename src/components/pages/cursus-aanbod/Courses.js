import PropTypes from "prop-types";
import { useState } from "react";
import Fuse from "fuse.js";
import { sort } from "fast-sort";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import CourseCards from "./CourseCards";

export default function Courses({ courses }) {

  console.log(courses)
  const [courseInfo, setCourseInfo] = useState(courses);

  function sortType(value) {
    if (value === "Alle Categoriën") {
      setCourseInfo(courses);
      return
    }
    const result = courses.filter(course => course.category === value)
    setCourseInfo(result)
  }

  const searchCourses = pattern => {
    if (!pattern) {
      setCourseInfo(courses);
      return;
    }
    const results = new Fuse(courseInfo, {
      keys: ["title"],
    });
    const result = results.search(pattern);
    const matches = [];
    if (!result.length) {
      setCourseInfo([]);
    } else {
      result.forEach(({ item }) => {
        matches.push(item);
      });
      setCourseInfo(matches);
    }
  };

  function sortCourses(input) {
    if (input == "prijs") {
      setCourseInfo(courses);
      return;
    }
    const matches = [];
    if (input === "laag") {
      const sorted = sort(courses).asc([u => u.price]);
      sorted.forEach(sort => {
        matches.push(sort);
      });
    } else if (input === "hoog") {
      const sorted = sort(courses).desc([u => u.price]);
      sorted.forEach(sort => {
        matches.push(sort);
      });
    }
    setCourseInfo(matches);
  }

  return (
    <>
      <div className="container position-relative pb-5">
        <div className="row">
          <div className=" col-12 col-lg-11">
            <h1 className="mb-4">Cursus aanbod</h1>
            <select
              className=" col-4 offset-8 col-lg-2 offset-lg-10 custom-select mr-sm-2"
              id="select"
              onChange={e => sortCourses(e.target.value)}
            >
              <option value="prijs" placeholder="prijs">
                Prijs
              </option>
              <option value="laag">Laag</option>
              <option value="hoog">Hoog</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-3">
            <div className="input-group mb-2 mt-3 mr-sm-2">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <FontAwesomeIcon
                    className="search-icon"
                    icon={faSearch}
                  ></FontAwesomeIcon>
                </div>
              </div>
              <input
                className="form-control"
                onChange={e => searchCourses(e.target.value)}
                placeholder="zoek title of onderwerp"
              ></input>
            </div>
            <select
              onChange={e => sortType(e.target.value)}
              className="form-control"
              id="exampleFormControlSelect1"
            >
              <option>Alle Categoriën</option>
              <option>Filosofie</option>
              <option>Geschiedenis</option>
              <option>
                Bijbel studie
              </option>
              <option>Catechese</option>
              <option>Theologie</option>
            </select>
          </div>
          <div className="col-12 col-lg-8">
            <CourseCards key={courseInfo.id} courseInfo={courseInfo} />
          </div>
        </div>
      </div>
    </>
  );
}

Courses.propTypes = {
  courses: PropTypes.array.isRequired,
}
