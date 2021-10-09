import Layout from "../src/components/layout/Layout";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";
import Head from "../src/components/head/Head";
import Header from "../src/components/layout/header/Header";

export default function overWillehad() {
  return (
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
        <section className="">
          <div className="py-5 about__intro d-flex align-items-center">
            <div className="container">
              <h2 className="pb-3 mx-0">Grote Vragen</h2>
              <div className="row">
                <div className="py-3 col-12 col-lg-6">
                  <p>
                    Vroeg of laat krijgt iedereen te maken met de grote vragen des levens: Waarom besta ik? Waartoe ben ik op aarde? Bestaat God en wie is hij?
                    Gelovigen en niet-gelovigen zullen hiermee geconfronteerd worden door zichzelf of anderen. Deze vragen zijn niet nieuw, en de queeste om ze
                    te beantwoorden evenmin. De rijke Rooms Katholieke Traditie kent vele wijze mannen en vrouwen die hierop een antwoord hebben getracht te
                    formuleren. Helaas is deze Traditie soms moeilijk bereikbaar, omdat het niet eenvoudig in het Nederlands beschikbaar is en het voor een
                    gemiddelde leek training vergt om het te begrijpen.
                  </p>
                </div>
                <div className="d-none d-lg-flex justify-content-center col-5 col-lg-5 col-xl-5 ml-5">
                    <div>
                      <img src="/under-construction.jpg" alt="under construction" width="200" height="300" />
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container about__willehad d-flex flex-column justify-content-center">
            <h2 className="pb-4 pt-5 offset-lg-6">Willehad.nl</h2>
            <div className="row pb-5">
              <div className="col-12 col-lg-6 offset-lg-0">
                <div className="h-100 d-lg-flex justify-content-center pt-xl-0 mt-xl-0">
                  <div className="w-lg-75">
                    <Reveal>
                      <div className="over-willehad__image">
                        <img
                          alt="Panelen met portretten van de Martelaren van Gorcum in de katholieke kerk in Boschkapelle (Reliwiki, foto Edward Ippel, Hoorn, 9 oktober 2009)"
                          src="/martelarenvangorcum.JPG"
                          width="100%"
                          height="200"
                        />
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
              <Fade>
                <div className="col-12 col-lg-6  pt-5 pt-lg-0 mb-5 order-last px-lg-0">
                  <p>
                    Willehad.nl wil jongeren en gezinnen aanmoedigen op reis te gaan door de grote intellectuele Traditie van de Katholieke Kerk, die vaak zo
                    verborgen ligt in stoffige boeken en deze toegankelijk maken. Willehad.nl is een initiatief van het Thomistisch Instituut en staat onder het
                    patronaat van Willehad van Bremen en Willehad de Deen. Willehad van Bremen missioneerde in Friesland, Groningen en Drenthe als een van de
                    opvolgers van Willibrord en Bonifatius. Willehad de Deen is priester en een van de 19 Martelaren van Gorcum. Hij stierf in Brielle als 90
                    jarige franciscaan.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
