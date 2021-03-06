import PropTypes from "prop-types";
import { Player, BigPlayButton, LoadingSpinner } from 'video-react';


export default function ShortAbout({ product, strapiCourses }) {

  const name = product.name
  const course = strapiCourses.filter(course => course.title === name)

  let description = ""

  if (course.length === 0) {

        description = (
          <div className="pt-4">
            <p className="text-center mx-auto">Cursus beschrijving komt z.s.m.</p>
          </div>
        );
  } else {
    description = (
      <div className="row mt-4 mt-lg-5">
        <div className="col-12 col-lg-6">
          <p className="pt-5 pt-lg-2 mx-auto">{course[0].description_long}</p>
        </div>
        <div className="col-12 col-lg-6 order-first order-lg-last">
            <Player src={course[0].video.url}>
              <BigPlayButton position="center" />
              <LoadingSpinner />
            </Player>
        </div>
      </div>
    );

}

  return (
    <section className="pt-5 py-lg-5 about-course">
      <div className="container py-lg-5">
        <h2 className="pt-1 text-lg-center">Over de cursus</h2>
        {description}
      </div>
    </section>
  );
}

ShortAbout.propTypes = {
  strapiCourses: PropTypes.array.isRequired,
}