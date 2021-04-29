import Image from "next/image";

export default function Uitleg() {
  return (
    <section className="d-flex align-items-center">
      <div className="container">
        <h1 className="text-center">Willehad cursus platform</h1>
        <div className="row mt-5">
          <div className="col-2 offset-1">
            <Image
              src="/cursus.png"
              layout="responsive"
              width="120"
              height="100"
            />
          </div>
          <div className="col-2 offset-2">
            <Image
              src="/samen.png"
              layout="responsive"
              width="50"
              height="35"
            />
          </div>
          <div className="col-2 offset-2">
            <Image
              src="/begeleiding.png"
              layout="responsive"
              width="100"
              height="80"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4 mt-4">
            <h3 className="text-center">Online cursus</h3>
            <p className="text-center px-2">
              Studeer online de rijke intellectuele traditie van de Katholieke
              kerk op een toegankelijke manier
            </p>
          </div>
          <div className="col-4 mt-4">
            <h3 className="text-center">Samen</h3>
            <p className="text-center px-2">
              Kom wekelijks samen met vrienden of een groep uit je parochie om
              elkaar intellectueel en spiritueel uit te dagen.
            </p>
          </div>
          <div className="col-4 mt-4">
            <h3 className="text-center">Begeleiding</h3>
            <p className="text-center px-2">
              Een coach helpt jou groep dieper te graven in de materie en een
              docent staat klaar voor verdiepende vragen.
            </p>
          </div>
        </div>
        <div class="d-flex mt-5 justify-content-center">
          <button className="button__primary py-1 px-4" text="cursus aanbod">
            cursus aanbod
          </button>
          <button
            className="button__secondary--dark py-1 px-4 ml-4"
            text="hoe het werkt"
          >
            hoe het werkt
          </button>
        </div>
      </div>
    </section>
  );
}
