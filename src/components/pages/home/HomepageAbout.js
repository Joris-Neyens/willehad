import Image from "next/image";
import Slide from "react-reveal/Slide";
import Fade from 'react-reveal/Fade'

export default function HomepageAbout() {
  return (
    <>
      <section className="pb-5 pt-3 background-light">
        <div className="container d-md-none pt-0 py-5">
          <Slide bottom>
            <div className="row">
              <div className="image__card background-dark mx-2">
                <div className="image__card--wrapper col-12 rder-1 mt-3">
                  <Image alt="Thomas Aquino" className="" src="/thomas-card.jpg" width="350" height="200" layout="responsive" />
                </div>
                <div className="order-3 pt-4 px-3 pb-3">
                  <h3>Cursus platform Willehad</h3>
                  <p>
                    Willehad.nl wil jongeren en gezinnen aanmoedigen op reis te gaan door de grote intellectuele Traditie van de Katholieke Kerk, die vaak zo
                    verborgen ligt in stoffige boeken en deze toegankelijk maken. Willehad.nl is een initiatief van het Thomistisch Instituut en staat onder het
                    patronaat van Willehad van Bremen en Willehad de Deen.
                  </p>
                </div>
              </div>
            </div>
          </Slide>
        </div>
        <div className="container d-none d-md-block pt-0 py-md-5">
          <div className="row">
            <h2 className="pb-3 col-12 text-center">Over Willehad</h2>
            <div className="position-relative d-flex align-items-lg-center">
              <Fade>
                <div className="image-right__card--bio offset-1 col-5 py-4 px-5 py-5 background-dark">
                  <h3>Cursus platform Willehad</h3>
                  <p>
                    Willehad.nl wil jongeren en gezinnen aanmoedigen op reis te gaan door de grote intellectuele Traditie van de Katholieke Kerk, die vaak zo
                    verborgen ligt in stoffige boeken en deze toegankelijk maken. Willehad.nl is een initiatief van het Thomistisch Instituut en staat onder het
                    patronaat van Willehad van Bremen en Willehad de Deen.
                  </p>
                </div>
              </Fade>
              <Slide right>
                <div className="image-right__card--wrapper position-absolute mt-5 mt-lg-0 col-6">
                  <Image alt="Thomas Aquino" className="" src="/thomas-card.jpg" width="190" height="130" layout="responsive" />
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}