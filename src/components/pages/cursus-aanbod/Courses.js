import PropTypes from "prop-types";
import { useState } from "react";
import Fuse from "fuse.js";
import { sort } from "fast-sort";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import CourseCards from "./CourseCards";

export default function Courses({ products, courses }) {

  const [productInfo, setProductInfo] = useState(products);
  console.log(products)



  let themesObjects = Object.assign(
    products.map(function (product) {
      return product.keywords.replace(/\n|,/g, ' ');
    })
  );

  themesObjects = themesObjects.join(" ")
  themesObjects = themesObjects.replace(/\s{2,}/g, " ")
  

  const themesArray = themesObjects.split(" ")
  const uniqueThemes = Array.from(new Set(themesArray)).join(" ").split(" ");

   function sortType(value) {
     if (value === "Alle Categoriën") {
     setProductInfo(products);
       return
     }

     const result = products.filter(product => product.keywords.includes(value))
    
     setProductInfo(result)
     
         
    }
       

  const searchCourses = pattern => {
    if (!pattern) {
      setProductInfo(products);
      return;
    }
    const results = new Fuse(productInfo, {
      keys: ["name"],
    });
    const result = results.search(pattern);
    const matches = [];
    if (!result.length) {
      setProductInfo([]);
    } else {
      result.forEach(({ item }) => {
        matches.push(item);
      });
      setProductInfo(matches);
    }
  };

  function sortCourses(input) {
    if (input == "prijs") {
      setProductInfo(products);
      return;
    }
    const matches = [];
    if (input === "laag") {
      const sorted = sort(products).asc([u => u.price]);
      sorted.forEach(sort => {
        matches.push(sort);
      });
    } else if (input === "hoog") {
      const sorted = sort(products).desc([u => u.price]);
      sorted.forEach(sort => {
        matches.push(sort);
      });
    }
    setProductInfo(matches);
  }

  return (
    <>
      <div className="container position-relative pb-5">
        <div className="row">
          <div className=" col-12 col-lg-11">
            <h1 className="mb-4">Cursus aanbod</h1>
            <select className=" col-4 offset-8 col-lg-2 offset-lg-10 custom-select mr-sm-2" id="select" onChange={e => sortCourses(e.target.value)}>
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
                  <FontAwesomeIcon className="search-icon" icon={faSearch}></FontAwesomeIcon>
                </div>
              </div>
              <input className="form-control" onChange={e => searchCourses(e.target.value)} placeholder="zoek cursus naam"></input>
            </div>
            <select onChange={e => sortType(e.target.value)} className="form-control" id="exampleFormControlSelect1">
              <option>Alle Categoriën</option>
              {
                uniqueThemes.map(function (theme) {
                  return (<option key={theme}>{theme}</option>)
                })
              }
            </select>
          </div>
          <div className="col-12 col-lg-8">
            <CourseCards key={products.id} productInfo={productInfo} courses={courses} />
          </div>
        </div>
      </div>
    </>
  );
}

Courses.propTypes = {
  products: PropTypes.array.isRequired,
}
