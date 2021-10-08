import Link from 'next/link';
import Fade from "react-reveal/Fade";

export default function HomepageAbout() {
    return (
      <div className="container pb-5 home__about pt-5 my-5 d-flex flex-column justify-content-center">
        <h1 className="text-md-center pb-5">Over Willehad</h1>
        <div className="row">
          <div className="text-md-left col-12 col-md-5 offset-md-1 offset-md-0 ">
            <Fade>
            <p className="homepage-about__text">
              Willehad.nl wil jongeren en gezinnen aanmoedigen op reis te gaan door de grote intellectuele Traditie van de Katholieke Kerk, die vaak zo
              verborgen ligt in stoffige boeken en deze toegankelijk maken. Willehad.nl is een initiatief van het Thomistisch Instituut en staat onder het
              patronaat van Willehad van Bremen en Willehad de Deen.
            </p>
            </Fade>
          </div>
          <div className="d-none col-6 d-md-flex justify-content-center align-items-center mb-0">
            <img src="/willehaddedeen-1.jpg"/>
          </div>
        </div>
        <div className="d-md-flex justify-content-center py-5">
          <Link href="/over-Willehad">
            <button className="button__primary px-4 py-1 mt-3">Lees meer</button>
          </Link>
        </div>
      </div>
    );
}
