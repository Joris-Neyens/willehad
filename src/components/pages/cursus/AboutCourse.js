import PropTypes from "prop-types";
import Image from "next/image";

export default function ShortAbout({ product, strapiCourses }) {

  const name = product.name
  const course = strapiCourses.filter(course => course.title === name)

  return (
    <section className="pb-5 py-lg-5 background-dark about-course">
      <div className="container py-lg-5">
        <h2 className="pt-1 text-center">Over de cursus</h2>
        <div className="row">
          <div className="col-6">
          <p className="pt-2 mx-auto">{ course[0].description_long }</p>
          </div>
            <div className="col-6">
              <video width="320" height="240" controls>
              <source src={course[0].video.url} type="video/mp4"/>
                Your browser does not support the video tag.
              </video>

            </div>
        </div>
      </div>
    </section>
  );
}

ShortAbout.propTypes = {
  strapiCourses: PropTypes.array.isRequired,
}