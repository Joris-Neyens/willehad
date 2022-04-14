import PropTypes from "prop-types";
import { useState } from "react";
import Fuse from "fuse.js";
import { sort } from "fast-sort";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import CourseCards from "./CourseCards";

export default function Courses({ products, courses, collections }) {

  const [productInfo, setProductInfo] = useState(products);

  let publishedProducts = products.filter(function (product) {
    console.log(product.status)
    if (product.status === "published") {
      return product.keywords
    }
  })

  let themesObjects = Object.assign(
    publishedProducts.map(function (product) {
          return product.keywords.replace(/\n|,/g, ' ');
    })
  );

  themesObjects = themesObjects.join(" ")
  themesObjects = themesObjects.replace(/\s{2,}/g, " ")
  const themesArray = themesObjects.split(" ");
  const uniqueThemes = Array.from(new Set(themesArray)).join(" ").split(" ");


  function filter(target) {

    let filteredProducts = products;
    let newProductArray = [];

    let value = target.value;
    const themesCheckboxes = document.querySelectorAll("#theme");
    const allThemesCheckbox = document.querySelector("#allThemes");
    const checked = document.querySelectorAll("input:checked")


    products.map(function (product) {
      let id = product.collection_ids.join(" ")
      const uniqueId = Array.from(new Set(id)).join(" ")
    })

    if (checked.length === 0) {
      setProductInfo(products);
      return
    }

    if (value === "alle thema's") {
      setProductInfo(filteredProducts);
      themesCheckboxes.forEach(function (themeCheckbox) {
        themeCheckbox.checked = false;
      });
      return;
    }

    themesCheckboxes.forEach(function (checkbox) {
      if (checkbox.checked === true) {
        allThemesCheckbox.checked = false;
      }
      if (checkbox.checked === true) {
        newProductArray.push(checkbox.value);
      }
    });

    filteredProducts = products.filter(function (product) {
      if (newProductArray.includes(product.keywords)) {
        return true;
      }
    });
    setProductInfo(filteredProducts);
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

  function sortByPrice(input) { 
    
    if (input.value == "prijs") {
      setProductInfo(products);
      return;
    }

    const matches = [];
    if (input.value === "laag") {
      const sorted = sort(products).asc([u => JSON.parse(u.price)]);
      sorted.forEach(sort => {
        matches.push(sort);
      });
    } else if (input.value === "hoog") {
      const sorted = sort(products).desc([u => JSON.parse(u.price)]);
      sorted.forEach(sort => {
        matches.push(sort);
      });
    }
    setProductInfo(matches);
  }


  function collectionFilter(target) {
    let filteredProducts = products;

    const value = target.value;
    let newCategoryArray = [];

    products.forEach(function (product) {
      const productIds = product.collection_ids.map(function (productId) {
        if (productId == value) {
          newCategoryArray.push(product.collection_ids);

        }
      });
      filteredProducts = products.filter(function (product) {
        if (newCategoryArray.includes(product.collection_ids)) {
          return true;
        }
      });
         setProductInfo(filteredProducts);
    });
  }

  function openFilters() {
    const hideFilters = document.querySelectorAll(".hideFilter");
    const revealFilters = document.querySelector(".reveal-filters")

    hideFilters.forEach(function (filter) {
      filter.classList.toggle("d-none");
    }) 

      
    if (revealFilters.innerHTML === "meer filters +") {
      revealFilters.innerHTML = "minder filters -";
    } else {
      revealFilters.innerHTML = "meer filters +";
    }
  }


  return (
    <>
      <div className="container courses-container position-relative pb-5">
        <div className="row display-none">
          <div className=" col-12 col-lg-12 px-lg-0">
            <h1 className="mb-4 pt-5">Cursus aanbod</h1>
            <div className="d-none">
              <select
                className="d-none d-lg-block col-md-4 offset-md-8 col-lg-2 offset-lg-10 custom-select mr-sm-2"
                id="select"
                onChange={e => sortByPrice(e.target)}
              >
                <option value="prijs" placeholder="prijs">
                  Prijs
                </option>
                <option value="laag">Laag</option>
                <option value="hoog">Hoog</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-3 d-none">
            <div className="input-group mb-2 mt-3 mr-sm-2">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <FontAwesomeIcon className="search-icon" icon={faSearch}></FontAwesomeIcon>
                </div>
              </div>
              <input className="form-control" onChange={e => searchCourses(e.target.value)} placeholder="zoek cursus naam"></input>
            </div>
            <div className="pt-2 d-lg-none" onClick={openFilters}>
              <p className="text-right reveal-filters">meer filters +</p>
            </div>
            <div className="hideFilter d-none row pb-3">
              <div className="col-12">
                <select className="d-lg-block custom-select mr-sm-2" id="select" onChange={e => sortByPrice(e.target)}>
                  <option value="prijs" placeholder="prijs">
                    Prijs
                  </option>
                  <option value="laag">Laag</option>
                  <option value="hoog">Hoog</option>
                </select>
              </div>
            </div>
            <div className="hideFilter themes d-none d-lg-block filter pt-3 shadow-sm">
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
                        onChange={e => collectionFilter(e.target)}
                      />
                      <label className="form-check-label custom-control-label" htmlFor={collection.id}>
                        {collection.name}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="hideFilter themes d-none d-lg-block filter pt-3 shadow-sm">
              <div>
                <h6 className="px-2 pb-1">Thema's</h6>
              </div>
              <div className="px-2 pb-2">
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input form-check-input"
                    type="checkbox"
                    value="alle thema's"
                    id="allThemes"
                    onChange={e => filter(e.target)}
                  />
                  <label className="form-check-label custom-control-label">alle thema's</label>
                </div>
                {uniqueThemes.map(function (theme) {
                  return (
                    <div className="custom-control custom-checkbox filter__item" key={theme}>
                      <input className="form-check-input custom-control-input" type="checkbox" value={theme} id="theme" onChange={e => filter(e.target)} />
                      <label className="form-check-label custom-control-label">{theme}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-12 px-lg-0">
            <CourseCards key={products.id} productInfo={productInfo} courses={courses} collections={collections} />
          </div>
        </div>
      </div>
    </>
  );
}

Courses.propTypes = {
  products: PropTypes.array.isRequired,
}
