import PropTypes from "prop-types";
import Image from "next/image";

export default function ShortAbout({ course }) {
  const { about_course_image, description_long } = course;

  return (
    <section className="d-flex align-items-center pb-5 py-lg-5">
      <div className="container py-lg-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5 ml-lg-5 order-2 order-md-1">
            <h2 className="pt-1">Over de cursus</h2>
            <p className="pt-2">{description_long}</p>
          </div>

          <div className="col-12 col-md-5 col-lg-5 offset-md-1 my-4 order-1 order-md-2">
            <Image
              src={about_course_image.url}
              className="text-right__image "
              width="500"
              height="300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

ShortAbout.propTypes = {
  course: PropTypes.object.isRequired,
}