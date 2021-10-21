import Link from 'next/link';
import Image from "next/image";
import Slide from "react-reveal/Slide";
import Fade from 'react-reveal/Fade'
import image from 'next/image';

export default function HomepageAbout() {
  return (
    <>
      <section className="pb-5 pt-3 background-light">
        <div className="container d-md-none pt-0 py-5">
          <Slide bottom>
            <div className="row">
              <div className="teacher-card background-dark mx-2">
                <div className="teacher-image-wrapper col-12 rder-1 mt-3">
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
              <Slide left>
                <div className="teacher-image-wrapper position-absolute mt-5 mt-lg-0 col-6 col-lg-4 col-xl-3 offset-lg-2 offset-xl-3">
                  <Image alt="Thomas Aquino" className="" src="/thomasaquinas.jpg" width="100" height="130" layout="responsive" />
                </div>
              </Slide>
              <Fade>
                <div className="teacher__card--bio col-6 col-xl-5 py-4 px-5 py-5 background-dark">
                  <h3>Cursus platform Willehad</h3>
                  <p>
                    Willehad.nl wil jongeren en gezinnen aanmoedigen op reis te gaan door de grote intellectuele Traditie van de Katholieke Kerk, die vaak zo
                    verborgen ligt in stoffige boeken en deze toegankelijk maken. Willehad.nl is een initiatief van het Thomistisch Instituut en staat onder het
                    patronaat van Willehad van Bremen en Willehad de Deen.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


      {
        /* <div className="container pb-5 home__about pt-5 my-5 d-flex flex-column justify-content-center">
        <div className="row">
          <div className="text-md-left col-12 col-md-5 offset-md-1 offset-md-0 ">
            <h1>Over Willehad</h1>
            <Fade>
              <p className="homepage-about__text">
                Willehad.nl wil jongeren en gezinnen aanmoedigen op reis te gaan door de grote intellectuele Traditie van de Katholieke Kerk, die vaak zo
                verborgen ligt in stoffige boeken en deze toegankelijk maken. Willehad.nl is een initiatief van het Thomistisch Instituut en staat onder het
                patronaat van Willehad van Bremen en Willehad de Deen.
              </p>
            </Fade>
          </div>
          <div className="d-none col-6 d-md-flex justify-content-center align-items-center mb-0">
            <img src="/willehaddedeen-1.jpg" />
          </div>
        </div>

        <div className="row mt-md-4">
          <div className="col-12 col-md-6 d-flex  justify-content-md-end mt-3 mt-md-0">
            <Link href="/over-Willehad">
              <button className="button__primary py-1 px-4" text="cursus aanbod">
                Lees meer
              </button>
            </Link>
          </div>
          <div className="col-12 col-md-6 d-flex  justify-content-md-start mt-4 mt-md-0">
            <Link href="/cursus-aanbod">
              <button className="button__secondary--dark py-1 px-4" text="hoe het werkt">
                Cursus aanbod
              </button>
            </Link>
          </div>
        </div>
      </div>
 */
      }
