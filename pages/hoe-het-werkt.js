import Link from 'next/link'
import Fade from "react-reveal/Fade";
import Layout from "../src/components/layout/Layout";
import Head from "../src/components/head/Head";
import Header from "../src/components/layout/header/Header";

export default function hoeHetWerkt() {
  return (
    <>
      <Head title="Hoe het werkt" description="Uitleg over hoe Willehad cursussen werken" />
      <div className="wrapper">
        <Layout>
          <Header
            url="/video-talk.jpg"
            viewHeight={70}
            textCol="6"
            title="Cursus Traject"
            subtitle="Studeer waar en wanneer jou uit komt, vind samen meer diepgang onder begeleiding van coaches en docenten"
            priority
          />
          <main>
            <div className="container hoe-het-werkt">
              <div className="row">
                <div className="col-12 offset-0 col-lg-6 offset-lg-3 pt-5">
                  <h1 className="pb-3">Hoe het werkt</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-12 offset-0 col-lg-6 offset-lg-3 mb-5">
                  <h2 className="hoe-het-werkt__title py-2 pl-2">Samen</h2>
                  <p>
                    Een essentieel deel van het groeien in geloof is de gemeenschap. We beperken ons zelf als we proberen alles alleen te doen. Laat jezelf
                    uitdagen door anderen, stel elkaar kritische vragen, hou elkaar verwantwoordelijk voor de doelen die we onszelf zetten. Als we durven samen
                    uitdagende doelen te stellen en eerlijk zijn met elkaar zullen we de vruchten in ons leven gaan zien.
                  </p>
                  <p>
                    Om je aan te kunnen melden moet je 2 tot 4 anderen vinden om dit samen mee te doen. Mensen uit je parochie, collega´s, je sportclub, oude
                    bekende. Met deze mensen zul je wekelijks contact hebben via video-call.
                  </p>
                  <p>
                    Dit is geen lage drempel en dat is ook niet de bedoeling. Om echt verder te komen moet het een beetje pijn doen. Het is tijd om niet alleen
                    te groeien in kennis, maar om deze kennis je leven te laten veranderen.
                  </p>
                  <Fade bottom>
                    <h2 className="hoe-het-werkt__title py-2 pl-2 mt-5">Verdieping</h2>
                    <div>
                      <p>
                        Leren is meer dan het opnemen van nieuwe informatie. Door kritische vragen te stellen over de inhoud van de cursus kun jij samen met
                        anderen dieper gaan dan de inhoud van de cursus in eerste instantie biedt. Deze cursus is voor diegene die de uitdaging aan willen gaan
                        om de diepte in te gaan.
                      </p>
                      <p>
                        Je bent vrij om het cursus materiaal waar en wanneer je wilt te volgen zolang je bij de wekelijkse bijeenkomst de inhoud van die week
                        klaar hebt. De groep is er niet alleen om jou uit te dagen, jou inbreng zal de anderen in jou groep ook scherp houden.
                      </p>
                    </div>
                  </Fade>
                  <Fade bottom>
                    <h2 className="hoe-het-werkt__title py-2 pl-2 mt-5">Begeleiding</h2>
                    <div>
                      <p>
                        Een coach zal jou groep helpen om dieper te gaan met het cursus materiaal. Een coach zal jou niet vertellen wat je moet doen, maar zal
                        kristische vragen stellen en jullie zelf aan het werk zetten.
                      </p>
                      <p>
                        In de loop van het traject zul jij inhoudelijke vragen krijgen die een expert vereisen. Als groep krijg je daarom de mogelijkheid om het
                        vuur aan de scheenen van de docent te leggen om zo verder te kunnen in je traject.
                      </p>
                    </div>
                  </Fade>
                  <Fade bottom>
                    <h2 className="hoe-het-werkt__title py-2 pl-2 mt-5">Na het traject</h2>
                    <div>
                      <p>
                        Een cursus is bedoeld om ons op weg te helpen. Na de cursus is het aan jou om deze weg op te gaan. Door samen met de groep te blijven
                        ontmoeten kun je elkaar hierin steunen.
                      </p>
                      <p>
                        Wij blijven ons inzetten om relevante cursussen te ontwikkelen. Als groep kun je er altijd voor kiezen om samen een nieuwe cursus te
                        volgen om weer volgende stappen te zetten.
                      </p>
                    </div>
                  </Fade>
                  <div className="d-flex justify-content-center">
                    <Link href="/cursus-aanbod">
                      <button className="button__primary mt-3 px-4 py-1">Cursus aanbod</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </Layout>
      </div>
    </>
  );
}
