import Link from "next/link";
import Fade from "react-reveal/Fade";

export default function Uitleg() {
  return (
    <section className="uitleg d-flex align-items-center py-lg-5">
      <div className="container pb-5 pt-4">
        <h1 className="text-lg-center">Willehad cursus platform</h1>
        <div className="row w-100 mx-auto mt-5">
          <Fade bottom>
            <div className="col-12 px-0 col-lg-6">
              <div className="row flex-lg-column">
                <div className="text-lect text-lg-center col-md-10 offset-md-1 offset-lg-0 col-lg-12 mt-lg-4">
                  <h3 className="text-lg-center">Samen</h3>
                  <p className=" px-lg-4">
                    Een essentieel deel van het groeien in geloof is de gemeenschap. We beperken ons zelf als we proberen alles alleen te doen. Laat jezelf
                    uitdagen door anderen, en stel elkaar kritische vragen. Meld je aan samen met anderen, mensen uit je parochie, collega´s, je sportclub of
                    oude bekende. Maar je kunt je ook individueel aanmelden en nieuwe mensen ontmoeten.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 px-0 col-lg-6">
              <div className="row flex-lg-column">
                <div className="text-left text-lg-center col-md-10 offset-md-1 offset-lg-0 col-lg-12 mt-lg-4 pt-4 pt-lg-0">
                  <h3 className="text-lg-center">Verdieping</h3>
                  <p className="px-lg-4">
                    Leren is meer dan het opnemen van nieuwe informatie. Door kritische vragen te stellen over de inhoud van de cursus kun jij samen met anderen
                    dieper gaan dan de inhoud van de cursus in eerste instantie biedt. Deze cursus is voor diegene die de uitdaging aan willen gaan om de diepte
                    in te gaan.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div className="row mt-md-4 pt-md-5">
          <div className="col-12 offset-md-1 col-md-5 col-lg-3 offset-lg-3 d-flex  justify-content-md-end mt-4 mt-md-0">
            <Link href="/cursus-aanbod">
              <button className="w-100 button__primary py-2 px-4" text="cursus aanbod">
                Cursus aanbod
              </button>
            </Link>
          </div>
          <div className="col-12 col-md-5 col-lg-3 d-flex justify-content-md-start mt-4 mt-md-0">
            <Link href="/hoe-het-werkt">
              <button className=" w-100 button__secondary--dark py-2 px-4" text="hoe het werkt">
                Hoe het werkt
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
