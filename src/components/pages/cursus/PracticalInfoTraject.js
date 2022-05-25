import PropTypes from "prop-types";

export default function PracticalinfoTraject({webUrl}) {


  return (
    <section className="py-lg-5 mt-3 my-lg-5 pb-5 mb-5">
      <div className="container text-md-center pt-5">
        <h2>Praktische informatie</h2>
      </div>
      <div className="container pt-4">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5 offset-lg-1 ">
            <p>
              Een zelfstudieles is opgedeeld in drie onderdelen: een video, een quiz en verdiepende teksten en vragen. Aanvullend zijn er twee Webinars met alle
              deelnemers van de cursus en met de spreker pater Elias Leyds CSJ. Dit zijn sessies waarin iedereen zijn vragen over de cursus kan stellen.
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
    
            <p>
              Planning: <br></br>
              Week 1 (6 – 12 juni): les 1 en 2.<br></br>
              Week 2 (13 - 19 juni): les 3 en 4. <br></br>
              Week 3 (20 – 26 juni) les 5 en 6. <br></br>
              Eerste Webinar (maandag 27 juni van 20.00-21.00). <br></br>
              Week 4 (27 juni – 3 juli) les 7 en 8. <br></br>
              Week 5 (4 -8 juli) les 9.<br></br>
              Afsluitende Webinar (woensdag 6 juli van 20.00-21.00).
            </p>
          </div>
        </div>
        <div className="py-4 d-flex justify-content-center">
          <a href={webUrl}>
            <button className="button__primary px-4 py-2">schrijf je nu in</button>
          </a>
        </div>
      </div>
    </section>
  );
}

// Practicalinfo.propTypes = {
//   course: PropTypes.object.isRequired,
// }