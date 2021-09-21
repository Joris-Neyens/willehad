import PropTypes from "prop-types";
import Image from "next/image";
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
          <section key={instructor.id} className="pb-5 pt-3 background-dark">
            <div className="container py-5">
              <h2 className="text-center pb-3">Ontmoet de docent</h2>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 offset-lg-2 order-2 oder-md-1 mt-5">
                  <Fade bottom>
                  <Image alt={"image of " + teacherName} className="ml-md-5 mb-3" src={instructor.avatar_url} width="300" height="300" />
                  </Fade>
                </div>
                <div className="col-4 offset-3 offset-md-0 order-1 order-md-2">
                   <p className="text-center text-md-left mb-2">Docent</p>
                  <h3 className="text-center text-md-left">{teacherName}</h3>
                  <p className="text-center text-md-left">{instructor.bio}</p>
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
