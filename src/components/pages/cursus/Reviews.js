
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Reviews({ reviews }) {

  let styles = { display: "block" };

  if (reviews.length < 2) {
    styles = { display: "none" };
  }

    const star = <FontAwesomeIcon className="reviews__star" icon={faStar} />;

    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 2,
      },
      desktop: {
        breakpoint: {
          max: 3000,
          min: 992,
        },
        items: 2,
      },
      tablet: {
        breakpoint: { max: 991, min: 768 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 1,
      },
    };

    

    return (
      <div className="background-light pt-5" style={styles}>
        <h2 className="py-3 py-lg-0 pl-lg-5 ml-3 pl-lg-0 ml-lg-0 text-lg-center">Wat anderen over de cursus zeggen</h2>
        <div className="reviews container pb-5 d-flex">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={false}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            transitionDuration={1000}
            containerClass="carousel-container"
            arrows={false}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="w-100"
          >
            {reviews.items.map(function (review) {
              const n = review.rating;
              return (
                <div key={review.id} className="reviews__review mx-5 py-5 mb-5">
                  <h4 className="text-center">{review.title}</h4>
                  <p className="text-center">{review.review_text}</p>
                  <div className="d-flex justify-content-center">
                    {[...Array(n)].map((e, i) => (
                      <FontAwesomeIcon key={Math.floor(Math.random() * 10000 + 1)} className="reviews__review--star" icon={faStar} />
                    ))}
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    );
}
