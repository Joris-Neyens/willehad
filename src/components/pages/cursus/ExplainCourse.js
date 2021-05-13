import Image from 'next/image';

export default function ExplainCourse() {
    return (
      <section className="background-dark p-5">
        <div className="container p-5">
          <div className="row pb-5">
            <div className="col-2 offset-2">
              <Image src="/cursus.png" width="100" height="100" />
            </div>
            <div className="col-5">
              <h4>Online Cursus</h4>
              <p>
                Deze cursus kun jij online volgen waar en wanneer het jou uit
                komt. Willehad biedt top kwaliteit. Cursus materiaal is door
                experts samengesteld en alle video´s zijn van professionele
                kwaliteit.
              </p>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-2 offset-2">
              <Image src="/samen.png" width="120" height="80" />
            </div>
            <div className="col-5">
              <h4>Samen</h4>
              <p>
                Deze cursus kun jij online volgen waar en wanneer het jou uit
                komt. Willehad biedt top kwaliteit. Cursus materiaal is door
                experts samengesteld en alle video´s zijn van professionele
                kwaliteit.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-2 offset-2">
              <Image src="/begeleiding.png" width="100" height="80" />
            </div>
            <div className="col-5">
              <h4>Begeleiding</h4>
              <p>
                Deze cursus kun jij online volgen waar en wanneer het jou uit
                komt. Willehad biedt top kwaliteit. Cursus materiaal is door
                experts samengesteld en alle video´s zijn van professionele
                kwaliteit.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}
