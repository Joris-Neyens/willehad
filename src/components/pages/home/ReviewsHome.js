
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function ReviewsHome({ reviews }) {

  let styles = { display:"block"}
  
  if (reviews.length < 2) {
    styles = {display:"none"}
    }

    const star = <FontAwesomeIcon className="reviews__star" icon={faStar} />;

    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 2,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
      },
      tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 1,
      },
  };


  return (
    <>
      <div className="background-blue pt-5" style={styles}>
        <div className="reviews container py-5">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {reviews.map(function (review) {
              const n = review.rating;
              return (
                <div key={review.id} className="reviews__review mx-5 py-5">
                  <h4 className="text-center">{review.title}</h4>
                  <p className="text-center">{review.review}</p>
                  <div className="d-flex justify-content-center">
                    {[...Array(n)].map((e, i) => (
                      <FontAwesomeIcon key={Math.floor(Math.random() * 1000000 + 1)} className="reviews__review--star" icon={faStar} />
                    ))}
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}
