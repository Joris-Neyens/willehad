import Image from "next/image";
// import underConstruction from "../public/underConstruction.jpg";
// import martelarenvangorcum from "../public/martelarenvangorcum.jpg";
import Layout from "../src/components/layout/Layout";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Head from "../src/components/head/Head";
import Header from "../src/components/layout/header/Header";

export default function overWillehad() {
  return (
    <>
      <div className="wrapper">
        <Layout>
          <Head title="over willehad" description="Over online cursus platform Willehad"></Head>
          <Header
            url="/youth-hanging.jpg"
            viewHeight={70}
            textCol="6"
            topic="over willehad"
            title="Leer meer over willehad"
            subtitle="Online cursus platform om de intellectuele Traditie van de Katholieke Kerk toegankelijk te maken voor jongeren en jonge gezinnen"
          />
          <section className="pt-5 background-dark pb-">
            <div className="container d-md-none pt-0 pb-5">
              <Slide bottom>
                <div className="row">
                  <div className="image__card background-light mx-2">
                    <div className="image__card--wrapper col-12 mt-3">
                      <img alt="man alin ein church" className="" src="/about-1.jpg" width="100%" />
                    </div>
                    <div className="pt-4 px-3 pb-3">
                      <h3>Grote Vragen</h3>
                      <p>
                        Vroeg of laat krijgt iedereen te maken met de grote vragen des levens: Waarom besta ik? Waartoe ben ik op aarde? Bestaat God en wie is
                        hij? Gelovigen en niet-gelovigen zullen hiermee geconfronteerd worden door zichzelf of anderen. Deze vragen zijn niet nieuw, en de
                        queeste om ze te beantwoorden evenmin.
                      </p>
                      <p>
                        De rijke Rooms Katholieke Traditie kent vele wijze mannen en vrouwen die hierop een antwoord hebben getracht te formuleren. Helaas is
                        deze Traditie soms moeilijk bereikbaar, omdat het niet eenvoudig in het Nederlands beschikbaar is en het voor een gemiddelde leek
                        training vergt om het te begrijpen.
                      </p>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
            <div className="container d-none d-md-block pt-0 py-md-5">
              <div className="row">
                <div className="position-relative d-flex align-items-lg-center">
                  <Fade>
                    <div className="col-6 col-xl-6 py-4 px-5 py-5 background-light">
                      <h3>Grote vragen</h3>
                      <p>
                        Vroeg of laat krijgt iedereen te maken met de grote vragen des levens: Waarom besta ik? Waartoe ben ik op aarde? Bestaat God en wie is
                        hij? Gelovigen en niet-gelovigen zullen hiermee geconfronteerd worden door zichzelf of anderen. Deze vragen zijn niet nieuw, en de
                        queeste om ze te beantwoorden evenmin.
                      </p>
                      <p>
                        De rijke Rooms Katholieke Traditie kent vele wijze mannen en vrouwen die hierop een antwoord hebben getracht te formuleren. Helaas is
                        deze Traditie soms moeilijk bereikbaar, omdat het niet eenvoudig in het Nederlands beschikbaar is en het voor een gemiddelde leek
                        training vergt om het te begrijpen.
                      </p>
                    </div>
                  </Fade>
                  <Slide right>
                    <div className="image-right__card--wrapper position-absolute mt-5 mt-lg-0 col-6 offset-lg-2 offset-xl-3">
                      <img alt="Man alone in church" className="about__image" src="/about-1.jpg" width="100%" />
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          </section>
          <section className="pb-5 background-dark">
            <div className="container d-md-none pt-0 pb-5">
              <Slide bottom>
                <div className="row">
                  <div className="image__card background-light mx-2">
                    <div className="image__card--wrapper col-12 mt-3">
                      <img alt="martelaren van gorcum" className="" src="/martelarenvangorcom.jpg" width="100%" />
                    </div>
                    <div className="pt-4 px-3 pb-3">
                      <h3>Willehad.nl</h3>
                      <p>
                        Willehad.nl wil jongeren en gezinnen aanmoedigen op reis te gaan door de grote intellectuele Traditie van de Katholieke Kerk, die vaak
                        zo verborgen ligt in stoffige boeken en deze toegankelijk maken. Willehad.nl is een initiatief van het Thomistisch Instituut en staat
                        onder het patronaat van Willehad van Bremen en Willehad de Deen. Willehad van Bremen missioneerde in Friesland, Groningen en Drenthe als
                        een van de opvolgers van Willibrord en Bonifatius. Willehad de Deen is priester en een van de 19 Martelaren van Gorcum. Hij stierf in
                        Brielle als 90 jarige franciscaan.
                      </p>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
            <div className="container d-none d-md-block pt-0 py-md-5">
              <div className="row">
                <div className="position-relative d-flex align-items-lg-center">
                  <Slide left>
                    <div className="image__card--wrapper position-absolute mt-5 mt-lg-0 offset-1 col-5">
                      <img alt="Under construction" className="about__image" width="100%" src="/martelarenvangorcom.jpg" />
                    </div>
                  </Slide>
                  <Fade>
                    <div className="image__card--bio col-6 col-xl-6 py-4 px-5 py-5 background-light">
                      <h3>Willehad.nl</h3>
                      <p>
                        Willehad.nl wil jongeren en gezinnen aanmoedigen op reis te gaan door de grote intellectuele Traditie van de Katholieke Kerk, die vaak
                        zo verborgen ligt in stoffige boeken en deze toegankelijk maken. Willehad.nl is een initiatief van het Thomistisch Instituut en staat
                        onder het patronaat van Willehad van Bremen en Willehad de Deen. Willehad van Bremen missioneerde in Friesland, Groningen en Drenthe als
                        een van de opvolgers van Willibrord en Bonifatius. Willehad de Deen is priester en een van de 19 Martelaren van Gorcum. Hij stierf in
                        Brielle als 90 jarige franciscaan.
                      </p>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </div>
    </>
  );
}
