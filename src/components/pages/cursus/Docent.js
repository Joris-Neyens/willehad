import PropTypes from "prop-types";
import Image from "next/image";
import Fade from 'react-reveal/Fade'
import Slide from "react-reveal/Slide";


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
          <section key={instructor.id} className="pb-5 pt-3 background-dark">
            <div className="container d-md-none pt-0 py-md-5">
              <Slide bottom>
                <div className="row">
                  <div className="teacher-card mx-2">
                    <div className="teacher-image-wrapper col-12 rder-1 mt-3">
                      <Image alt={"image of " + teacherName} className="" src={instructor.avatar_url} width="350" height="200" layout="responsive" />
                    </div>
                    <div className="order-3 pt-4 px-3">
                      <h3>{teacherName}</h3>
                      <p>{instructor.bio}</p>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
            <div className="container d-none d-md-block pt-0 py-md-5">
              <div className="row">
                <h2 className="pb-3 col-12 text-center">Ontmoet de docent</h2>
                <div className="teacher-image-wrapper col-6 mt-3 mt-md-5">
                  <Image alt={"image of " + teacherName} className="" src={instructor.avatar_url} width="350" height="200" layout="responsive" />
                </div>
                <Slide bottom>
                  <div className="col-6 pt-4">
                    <h3>{teacherName}</h3>
                    <p>{instructor.bio}</p>
                  </div>
                </Slide>
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
