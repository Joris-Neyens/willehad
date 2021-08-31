import Image from "next/image";
import Layout from "../src/components/layout/Layout";
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
          title="Over Willehad"
          subtitle="Online cursus platform om de intellectuele Traditie van de Katholieke Kerk toegankelijk te maken voor jongeren en jonge gezinnen"
        />
        <div className="pb-5 about__intro mx-auto">
          <div className="container">
            <h2 className="pt-5 pb-3 text-center">Grote Vragen</h2>
            <p className="text-center">
              Vroeg of laat krijgt iedereen te maken met de grote vragen des levens: Waarom besta ik? Waartoe ben ik op aarde? Bestaat God en wie is hij?
              Gelovigen en niet-gelovigen zullen hiermee geconfronteerd worden door zichzelf of anderen. Deze vragen zijn niet nieuw, en de queeste om ze te
              beantwoorden evenmin. De rijke Rooms Katholieke Traditie kent vele wijze mannen en vrouwen die hierop een antwoord hebben getracht te formuleren.
              Helaas is deze Traditie soms moeilijk bereikbaar, omdat het niet eenvoudig in het Nederlands beschikbaar is en het voor een gemiddelde leek
              training vergt om het te begrijpen.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row pb-5">
            <div className="col-6 pt-5 mb-5">
              <h2 className="pb-3">Willehad.nl</h2>
              <p>
                Willehad.nl wil jongeren en gezinnen aanmoedigen op reis te gaan door de grote intellectuele Traditie van de Katholieke Kerk, die vaak zo
                verborgen ligt in stoffige boeken en deze toegankelijk maken. Willehad.nl is een initiatief van het Thomistisch Instituut en staat onder het
                patronaat van Willehad van Bremen en Willehad de Deen. Willehad van Bremen missioneerde in Friesland, Groningen en Drenthe als een van de
                opvolgers van Willibrord en Bonifatius. Willehad de Deen is priester en een van de 19 Martelaren van Gorcum. Hij stierf in Brielle als 90 jarige
                franciscaan.
              </p>
            </div>
            <div className="col-6">
              <div className="h-100 d-flex align-items-center">
                <div className="w-100 px-4">
                  <div className="over-willehad__image">
                    <Image
                      alt="Panelen met portretten van de Martelaren van Gorcum in de katholieke kerk in Boschkapelle (Reliwiki, foto Edward Ippel, Hoorn, 9 oktober 2009)"
                      src="/martelarenvangorcum.jpg"
                      layout="responsive"
                      width="100"
                      height="50"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
