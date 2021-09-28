import Image from "next/image";
import Link from "next/link";

export default function Uitleg() {
  return (
    <section className="uitleg d-flex align-items-center py-lg-5">
      <div className="container pb-5 pt-4">
        <h1 className="text-center">Willehad cursus platform</h1>
        <div className="row w-100 mx-auto mt-5">
          <div className="col-12 px-0 col-lg-4">
            <div className="row flex-lg-column">
              {/* <div className="col-2 col-md-1 offset-md-1 col-lg-3 mx-lg-auto">
                <Image
                  alt="icoon laat afstudeer muts"
                  src="/cursus.png"
                  layout="responsive"
                  width="100"
                  height="100"
                />
              </div> */}
              <div className="text-center text-lg-center col-md-10 offset-md-1 offset-lg-0 col-lg-12 mt-lg-4">
                <h3 className="text-lg-center">Verdieping</h3>
                <p className="text-lg-center px-lg-4">Studeer online de rijke intellectuele traditie van de Katholieke kerk op een toegankelijke manier</p>
              </div>
            </div>
          </div>
          <div className="col-12 px-0 col-lg-4">
            <div className="row flex-lg-column">
              {/* <div className="col-2 col-md-1 offset-md-1 col-lg-3 mx-lg-auto">
                <Image
                  alt="icoon textbalonnen"
                  src="/samen.png"
                  layout="responsive"
                  width="100"
                  height="100"
                />
              </div> */}
              <div className="text-center text-lg-center col-md-10 offset-md-1 offset-lg-0 col-lg-12 mt-lg-4 pt-4 pt-lg-0">
                <h3 className="text-lg-center">Samen</h3>
                <p className="text-lg-center px-lg-4">
                  Kom wekelijks samen met vrienden of een groep uit je parochie om elkaar intellectueel en spiritueel uit te dagen.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 px-0 col-lg-4">
            <div className="row">
              {/* <div className="col-2 col-md-1 offset-md-1 col-lg-3 mx-lg-auto">
                <Image
                  alt="icoon pc met avatar"
                  src="/begeleiding.png"
                  layout="responsive"
                  width="100"
                  height="100"
                />
              </div> */}
              <div className="text-center text-lg-center col-md-10 offset-md-1 offset-lg-0 col-lg-12 mt-lg-4 pt-4 pt-lg-0">
                <h3 className="text-lg-center">Begeleiding</h3>
                <p className="text-lg-center px-lg-4">
                  Een coach helpt jou groep dieper te graven in de materie en een docent staat klaar voor verdiepende vragen.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-md-4">
          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end mt-3 mt-md-0">
            <Link href="/cursus-aanbod">
              <button className="button__primary py-1 px-4" text="cursus aanbod">
                Cursus aanbod
              </button>
            </Link>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start mt-4 mt-md-0">
            <Link href="/hoe-het-werkt">
              <button className="button__secondary--dark py-1 px-4" text="hoe het werkt">
                Hoe het werkt
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
