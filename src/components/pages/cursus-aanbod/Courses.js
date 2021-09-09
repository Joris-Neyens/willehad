import PropTypes from "prop-types";
import { useState } from "react";
import Fuse from "fuse.js";
import { sort } from "fast-sort";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import CourseCards from "./CourseCards";

export default function Courses({ products, courses, collections }) {

  console.log(products)

  const [productInfo, setProductInfo] = useState(products);

  let themesObjects = Object.assign(
    products.map(function (product) {
      return product.keywords.replace(/\n|,/g, ' ');
    })
  );
  themesObjects = themesObjects.join(" ")
  themesObjects = themesObjects.replace(/\s{2,}/g, " ")
  const themesArray = themesObjects.split(" ");
  const uniqueThemes = Array.from(new Set(themesArray)).join(" ").split(" ");

  function filter(target) {
    

    let filteredProducts = products;
    let newThemesArray = [];
    let newCategoryArray = [];

    let value = target.value;



    const themesCheckboxes = document.querySelectorAll("#theme");
    const allThemesCheckbox = document.querySelector("#allThemes");
    const checked = document.querySelectorAll("input:checked");



    filteredProducts.forEach(function (product) {
      themesCheckboxes.forEach(function (checkbox) {
        if (checkbox.checked === true) {
          allThemesCheckbox.checked = false;
          newThemesArray.push(checkbox.value);
        }
        const productIds = product.collection_ids.map(function (productId) {
          if (productId == value) {
            newCategoryArray.push(product.collection_ids);
          }
        });

        
        
            if (value === "laag") {
              filteredProducts.sort((a, b) => (a.price > b.price ? 1 : -1));
              setProductInfo(filteredProducts);
            }
            if (value === "hoog") {
              filteredProducts.sort((a, b) => (a.price < b.price ? 1 : -1));
              setProductInfo(filteredProducts);
            }
        
        filteredProducts = products.filter(function (product) {
          if (newCategoryArray.includes(product.collection_ids)) {
            return true;
          }
        });

        setProductInfo(filteredProducts)
        // filteredProducts = products.filter(function (product) {
        //   console.log(newProductArray)
        //   if (newProductArray.includes(product.keywords)) {
        //     return true;
        //   }
        // });

          });

      // console.log(filteredProducts);
      // if (checked.length === 0) {
      //     setProductInfo(products);
      //     return;
      //   }

      //   if (value === "alle thema's") {
      //     setProductInfo(filteredProducts);
      //     themesCheckboxes.forEach(function (themeCheckbox) {
      //       themeCheckbox.checked = false;
      //     });
      //     return;
      //   }
    
    });
    

        

      
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

  // function sortByPrice(input) {
  //   if (input == "prijs") {
  //     setProductInfo(products);
  //     return;
  //   }

  //   console.log(products)
  //   const matches = [];
  //   if (input === "laag") {
  //     const sorted = sort(products).asc([u => JSON.parse(u.price)]);
  //     sorted.forEach(sort => {
  //       matches.push(sort);
  //     });
  //   } else if (input === "hoog") {
  //     const sorted = sort(products).desc([u => JSON.parse(u.price)]);
  //     sorted.forEach(sort => {
  //       matches.push(sort);
  //     });
  //   }
  //   setProductInfo(matches);
  // }


  // function collectionFilter(target) {
  //   let filteredProducts = products;

  //   const valie = target.value;
  //   let newCategoryArray = [];

  //   products.forEach(function (product) {
  //     const productIds = product.collection_ids.map(function (productId) {
  //       if (productId == value) {
  //         newCategoryArray.push(product.collection_ids);

  //       }
  //     });
  //     filteredProducts = products.filter(function (product) {
  //       if (newCategoryArray.includes(product.collection_ids)) {
  //         return true;
  //       }
  //     });
  //        setProductInfo(filteredProducts);
  //   });
  // }

  return (
    <>
      <div className="container courses-container position-relative pb-5">
        <div className="row">
          <div className=" col-12 col-lg-11">
            <h1 className="mb-4 pt-5">Cursus aanbod</h1>
            <select className=" col-4 offset-8 col-lg-2 offset-lg-10 custom-select mr-sm-2" id="select" onChange={e => filter(e.target)}>
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
            <div className="themes filter pt-3">
              <div>
                <h6 className="px-2 pb-1">Categorieën</h6>
              </div>
              <div className="px-2 pb-2 mb-2">
                {collections.map(function (collection) {
                  return (
                    <div className="custom-control custom-checkbox" key={collection.id}>
                      <input
                        className="form-check-input custom-control-input"
                        id={collection.id}
                        type="checkbox"
                        value={collection.id}
                        id="category"
                        onChange={e => filter(e.target)}
                      />
                      <label className="form-check-label custom-control-label" htmlFor={collection.id}>
                        {collection.name}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="themes filter pt-3">
              <div>
                <h6 className="px-2 pb-1">Thema's</h6>
              </div>
              <div className="px-2 pb-2">
                <div className="custom-control custom-checkbox">
                  <input className="custom-control-input" type="checkbox" value="alle thema's" id="allThemes" onChange={e => filter(e.target)} />
                  <label className="form-check-label custom-control-label">alle thema's</label>
                </div>
                {uniqueThemes.map(function (theme) {
                  return (
                    <div className="custom-control custom-checkbox" key={theme}>
                      <input className="form-check-input custom-control-input" type="checkbox" value={theme} id="theme" onChange={e => filter(e.target)} />
                      <label className="form-check-label custom-control-label">{theme}</label>
                    </div>
                  );
                })}
              </div>
            </div>
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
