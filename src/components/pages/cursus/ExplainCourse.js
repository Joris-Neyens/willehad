import Link from 'next/link';

export default function ExplainCourse() {
    return (
      <section>
        <div className="background-blue py-5 explain-course d-flex align-items-center">
          <div className="container py-lg-5 px-0">
            <h2 className="py-3 py-lg-0 pl-lg-5 ml-3 pl-lg-0 ml-lg-0 text-lg-center">Over het traject</h2>
            <div className="row w-100 mx-auto">
              <div className="col-12 px-0 col-lg-4">
                <div className="col-10 col-lg-12 mt-lg-4">
                  <h3 className="text-lg-center">Online cursus</h3>
                  <p className="px-lg-2">Deze cursus bestaat uit videos, vragen en verdiepende teksten die je in je eigen tempo kunt volgen.</p>
                </div>
              </div>
              <div className="col-12 px-0 col-lg-4">
                <div className="col-10 col-lg-12 mt-lg-4">
                  <h3 className="text-lg-center">Samen</h3>
                  <p className="px-lg-2">
                    Tijdens twee online bijeenkomsten ga je in gesprek over wat je hebt geleerd.
                  </p>
                </div>
              </div>
              <div className="col-12 px-0 col-lg-4">
                <div className="col-10 col-lg-12 mt-lg-4">
                  <h3 className="text-lg-center">Begeleiding</h3>
                  <p className="px-lg-2 ">
                    Tijdens deze bijeenkomensten zal de docent dieper ingaan op het cursusmateriaal.
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
