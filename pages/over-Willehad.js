import Image from "next/image";
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
          viewHeight={80}
          textCol="6"
          title="Over Willehad"
          subtitle="Online cursus platform om de intellectuele Traditie van de Katholieke Kerk toegankelijk te maken voor jongeren en jonge gezinnen"
        />
        <section className="">
          <div className="py-5 about__intro">
            <div className="container">
              <div className="row">
                <div className="py-3 col-12 col-md-6">
                  <h2 className="pb-3">Grote Vragen</h2>
                  <p>
                    Vroeg of laat krijgt iedereen te maken met de grote vragen des levens: Waarom besta ik? Waartoe ben ik op aarde? Bestaat God en wie is hij?
                    Gelovigen en niet-gelovigen zullen hiermee geconfronteerd worden door zichzelf of anderen. Deze vragen zijn niet nieuw, en de queeste om ze
                    te beantwoorden evenmin. De rijke Rooms Katholieke Traditie kent vele wijze mannen en vrouwen die hierop een antwoord hebben getracht te
                    formuleren. Helaas is deze Traditie soms moeilijk bereikbaar, omdat het niet eenvoudig in het Nederlands beschikbaar is en het voor een
                    gemiddelde leek training vergt om het te begrijpen.
                  </p>
                </div>
                <div className="d-none d-md-block col-5 col-lg-4 col-xl-3 ml-5 offset-0 pt-5 pb-0 pt-0">
                  <div className="h-100">
                    <div className="w-100">
                      <Image src="/under-construction.jpg" layout="responsive" width="200px" height="300px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <h2 className="pb-3 pt-5 text-lg-center">Willehad.nl</h2>
            <div className="row pb-5">
              <div className="col-10 offset-lg-1 col-lg-5 offset-lg-0">
                <div className="h-100 pt-lg-5 mt-lg-5 pt-xl-0 mt-xl-0">
                  <div className="w-100 px-lg-4">
                    <Reveal>
                      <div className="over-willehad__image">
                        <Image
                          alt="Panelen met portretten van de Martelaren van Gorcum in de katholieke kerk in Boschkapelle (Reliwiki, foto Edward Ippel, Hoorn, 9 oktober 2009)"
                          src="/martelarenvangorcum.JPG"
                          layout="responsive"
                          width="100"
                          height="50"
                        />
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
              <Fade>
                <div className="col-12 col-lg-6  pt-5 pt-lg-0 mb-5 order-last">
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
