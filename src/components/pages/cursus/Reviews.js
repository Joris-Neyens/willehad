
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
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };

    

    return (
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
            <div className="reviews__review mx-5 py-5 mb-5">
              <h4 className="text-center">titel 1</h4>
              <p className="text-center">
                “In all the free time you have, once you have finished your duties of state, you should kneel down and pray the Rosary. Pray the Rosary before
                the Blessed Sacrament or before a crucifix. - Saint Padre Pio”
              </p>
              <div className="d-flex justify-content-center">
                <FontAwesomeIcon key={Math.floor(Math.random() * 10000 + 1)} className="reviews__review--star" icon={faStar} />
                <FontAwesomeIcon key={Math.floor(Math.random() * 10000 + 1)} className="reviews__review--star" icon={faStar} />
                <FontAwesomeIcon key={Math.floor(Math.random() * 10000 + 1)} className="reviews__review--star" icon={faStar} />
                <FontAwesomeIcon key={Math.floor(Math.random() * 10000 + 1)} className="reviews__review--star" icon={faStar} />
              </div>
            </div>
            <div className="reviews__review mx-5 py-5 mb-5">
              <h4 className="text-center">titel 2</h4>
              <p className="text-center">
                “The longer the trial to which God subjects you, the greater the goodness in comforting you during the time of the trial and in the exaltation
                after the combat.” -Saint Padre Pio
              </p>
              <div className="d-flex justify-content-center">
                <FontAwesomeIcon key={Math.floor(Math.random() * 10000 + 1)} className="reviews__review--star" icon={faStar} />
                <FontAwesomeIcon key={Math.floor(Math.random() * 10000 + 1)} className="reviews__review--star" icon={faStar} />
                <FontAwesomeIcon key={Math.floor(Math.random() * 10000 + 1)} className="reviews__review--star" icon={faStar} />
                <FontAwesomeIcon key={Math.floor(Math.random() * 10000 + 1)} className="reviews__review--star" icon={faStar} />
              </div>
            </div>
            <div className="reviews__review mx-5 py-5 mb-5">
              <h4 className="text-center">titel 3</h4>
              <p className="text-center">
                “Do not fear. Jesus is more powerful than all hell. At the invocation of his name every knee in heaven, on earth and in hell must bend before
                Jesus; this is a consolation for the good and terror for evil.” - Saint Padre Pio
              </p>
              <div className="d-flex justify-content-center">
                <FontAwesomeIcon key={Math.floor(Math.random() * 10000 + 1)} className="reviews__review--star" icon={faStar} />
                <FontAwesomeIcon key={Math.floor(Math.random() * 10000 + 1)} className="reviews__review--star" icon={faStar} />
                <FontAwesomeIcon key={Math.floor(Math.random() * 10000 + 1)} className="reviews__review--star" icon={faStar} />
                <FontAwesomeIcon key={Math.floor(Math.random() * 10000 + 1)} className="reviews__review--star" icon={faStar} />
                <FontAwesomeIcon key={Math.floor(Math.random() * 10000 + 1)} className="reviews__review--star" icon={faStar} />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    );
}
