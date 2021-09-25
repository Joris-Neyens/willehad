import Link from 'next/link';

export default function HomepageAbout() {
    return (
      <div className="container pb-5 home__about pt-5 my-5">
        <h1 className="text-center pb-3">Over Willehad</h1>
        <div className="row">
          <div className="text-center text-lg-left col-12 col-lg-5 offset-lg-2">
            <p className="homepage-about__text">
              Willehad.nl wil jongeren en gezinnen aanmoedigen op reis te gaan door de grote intellectuele Traditie van de Katholieke Kerk, die vaak zo
              verborgen ligt in stoffige boeken en deze toegankelijk maken. Willehad.nl is een initiatief van het Thomistisch Instituut en staat onder het
              patronaat van Willehad van Bremen en Willehad de Deen.
            </p>
          </div>
          <div className="col-12 col-lg-4 d-flex justify-content-center order-first order-lg-last mb-4 mb-lg-0">
            <img src="/willehaddedeen-1.jpg"/>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Link href="/over-Willehad">
            <button className="button__primary px-4 py-1 mt-3">lees meer</button>
          </Link>
        </div>
      </div>
    );
}
