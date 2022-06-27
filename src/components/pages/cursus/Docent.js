import PropTypes from "prop-types";
import Image from "next/image";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";


export default function Docent({ product, instructors }) {
  const { instructor_names } = product

  let teacherName = ""

  return (
  <>
    {instructors.map(function(instructor) {

        let names = instructor.first_name + " " + instructor.last_name
      if (instructor_names === names) {

        let title = ""
        if (instructor.title) {
          title = instructor.title
        }
        
        teacherName = title + " " + instructor.first_name + " " + instructor.last_name

        return (
          <section key={instructor.id} className="pb-5 pt-3 background-dark docent">
            <div className="container d-md-none pt-0 py-5">
              <Slide bottom>
                <div className="row">
                  <div className="image__card background-light mx-2">
                    <div className="image__card--wrapper col-12 mt-3">
                      <Image alt={"image of " + teacherName} className="" src={instructor.avatar_url} width="350" height="200" layout="responsive" />
                    </div>
                    <div className="order-3 pt-4 px-3 pb-3">
                      <h3>{teacherName}</h3>
                      <p>{instructor.bio}</p>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
            <div className="container d-none d-md-block pt-0 py-md-5">
              <div className="row pb-5">
                <h2 className="pb-3 pt-5 col-12 text-center">Ontmoet de docent</h2>
                <div className="position-relative d-flex align-items-lg-center pt-5 mt-2">
                  <Slide left>
                    <div className="image__card--wrapper-left position-absolute mt-5 mt-lg-0 col-6 col-lg-4 offset-lg-2 offset-xl-2">
                      <Image alt={"image of " + teacherName} className="" src={instructor.avatar_url} width="200" height="200" layout="responsive" />
                    </div>
                  </Slide>
                  <Fade>
                    <div className="image__card--bio col-6 col-xl-5 py-4 px-5 background-light">
                      <h3>{teacherName}</h3>
                      <p>{instructor.bio}</p>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </section>
        );
      } 
      })
    }
    </>
  );
}

Docent.propTypes = {
  product: PropTypes.object.isRequired,
}
