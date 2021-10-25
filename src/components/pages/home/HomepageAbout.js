import Image from "next/image";
import Link from "next/link";
import Slide from "react-reveal/Slide";
import Fade from 'react-reveal/Fade'

export default function HomepageAbout() {
  return (
    <>
      <section className="pb-5 my-5 pt-3 background-light">
        <div className="container d-lg-none px-md-0 pt-0 py-5">
          <Slide bottom>
            <div className="row">
              <div className="image__card background-dark mx-2">
                <div className="image__card--wrapper col-12 mt-3">
                  <Image alt="Thomas Aquino" className="" src="/thomas-card.jpg" width="350" height="200" layout="responsive" />
                </div>
                <div className="pt-4 px-3 pb-3">
                  <h2>Cursus platform</h2>
                  <p>
                    Willehad.nl wil jongeren en gezinnen aanmoedigen op reis te gaan door de grote intellectuele Traditie van de Katholieke Kerk, die vaak zo
                    verborgen ligt in stoffige boeken en deze toegankelijk maken. Willehad.nl is een initiatief van het Thomistisch Instituut en staat onder het
                    patronaat van Willehad van Bremen en Willehad de Deen.
                  </p>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <Link href="/over-Willehad">
                        <button className="w-100 button__primary px-4 py-2 mt-3">Lees meer</button>
                      </Link>
                    </div>
                    <div className="col-12 col-md-6">
                      <Link href="/cursus-aanbod">
                        <button className="w-100 button__secondary--dark px-4 py-2 mt-3 mb-3">cursus aanbod</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </div>
        <div className="container d-none d-lg-block pt-0 py-md-5">
          <div className="row">
            <div className="position-relative d-flex align-items-lg-center">
              <Fade>
                <div className="image-right__card--bi col-6 py-4 px-5 py-5 background-dark">
                  <h2>Cursus platform</h2>
                  <p>
                    Willehad.nl wil jongeren en gezinnen aanmoedigen op reis te gaan door de grote intellectuele Traditie van de Katholieke Kerk, die vaak zo
                    verborgen ligt in stoffige boeken en deze toegankelijk maken. Willehad.nl is een initiatief van het Thomistisch Instituut en staat onder het
                    patronaat van Willehad van Bremen en Willehad de Deen.
                  </p>
                  <div className="row">
                    <div className="col-12">
                      <Link href="/over-Willehad">
                        <button className="w-100 button__primary px-4 py-2 mt-3">Lees meer</button>
                      </Link>
                    </div>
                    <div className="col-12">
                      <Link href="/cursus-aanbod">
                        <button className="w-100 button__secondary--dark px-4 py-2 mt-3">cursus aanbod</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Fade>
              <Slide right>
                <div className="image-right__card--wrapper position-absolute mt-5 mt-lg-0 col-6">
                  <Image alt="Thomas Aquino" className="" src="/thomas-card.jpg" width="180" height="130" layout="responsive" />
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}