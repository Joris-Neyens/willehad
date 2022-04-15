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
            topic="Cursus traject"
            title="Zo veel meer dan een online cursus"
            subtitle="Studeer waar en wanneer jou uit komt, vind samen meer diepgang onder begeleiding van coaches en docenten"
            priority
          />
          <main>
            <div className="container hoe-het-werkt">
              <div className="row">
                <div className="col-12 offset-0 col-lg-6 pt-5">
                  <h1 className="pb-3">Hoe het werkt</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-12 offset-0 col-lg-7 mb-5">
                  <h2 className="hoe-het-werkt__title py-2">Samen</h2>
                  <p>
                    Een essentieel deel van het groeien in geloof is de gemeenschap. We beperken ons zelf als we proberen alles alleen te doen. Laat jezelf
                    uitdagen door anderen, en stel elkaar kritische vragen. Je kunt je gezamenlijk aanmelden met anderen, mensen uit je parochie, collega´s, je
                    sportclub of oude bekende. Maar je kunt je ook individueel aanmelden en nieuwe mensen ontmoeten. Met deze mensen zul je tweemaal contact
                    hebben in een live Webinar met de spreker.
                  </p>
                  <Fade>
                    <h2 className="hoe-het-werkt__title py-2 mt-5">Verdieping</h2>
                    <div>
                      <p>
                        Leren is meer dan het opnemen van nieuwe informatie. Door kritische vragen te stellen over de inhoud van de cursus kun jij samen met
                        anderen dieper gaan dan de inhoud van de cursus in eerste instantie biedt. Deze cursus is voor diegene die de uitdaging aan willen gaan
                        om de diepte in te gaan.
                      </p>
                    </div>
                  </Fade>
                  <Fade>
                    <h2 className="hoe-het-werkt__title py-2 mt-5">Na de cursus</h2>
                    <div>
                      <p>
                        Een cursus is bedoeld om ons op weg te helpen. Na de cursus is het aan jou om deze weg op te gaan. Wij blijven ons inzetten om relevante
                        cursussen te ontwikkelen. Als groep kun je er altijd voor kiezen om samen een nieuwe cursus te volgen om weer volgende stappen te
                        zetten.
                      </p>
                    </div>
                  </Fade>
                  <div className="py-5 px-0 col-12 col-md-6">
                    <Link href="/cursus-aanbod">
                      <button className="w-100 button__primary mt-3 px-4 py-2">Cursus aanbod</button>
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
