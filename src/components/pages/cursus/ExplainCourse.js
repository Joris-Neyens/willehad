import Link from 'next/link';

export default function ExplainCourse() {
    return (
      <section>
        <div className="background-dark py-5 explain-course d-flex align-items-center">
          <div className="container py-lg-5">
            <h2 className="py-3 py-lg-0 pl-lg-5 ml-3 pl-lg-0 ml-lg-0 text-lg-center">Over het traject</h2>
            <div className="row w-100 mx-auto">
              <div className="col-12 px-0 col-lg-4">
                <div className="col-10 col-lg-12 mt-lg-4">
                  <h3 className="text-lg-center">Online cursus</h3>
                  <p className="text-lg-center px-lg-4">Studeer online de rijke intellectuele traditie van de Katholieke kerk op een toegankelijke manier</p>
                </div>
              </div>
              <div className="col-12 px-0 col-lg-4">
                <div className="col-10 col-lg-12 mt-lg-4">
                  <h3 className="text-lg-center">Samen</h3>
                  <p className="text-lg-center px-lg-4">
                    Kom wekelijks samen met vrienden of een groep uit je parochie om elkaar intellectueel en spiritueel uit te dagen.
                  </p>
                </div>
              </div>
              <div className="col-12 px-0 col-lg-4">
                <div className="col-10 col-lg-12 mt-lg-4">
                  <h3 className="text-lg-center">Begeleiding</h3>
                  <p className="text-lg-center px-lg-4">
                    Een coach helpt jou groep dieper te graven in de materie en een docent staat klaar voor verdiepende vragen.
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex ml-3 ml-lg-0 justify-content-lg-center pt-4 ">
              <Link href="/hoe-het-werkt">
                <button className="button__primary px-3 py-2">Lees meer</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
}
