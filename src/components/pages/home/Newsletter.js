export default function Newsletter() {
  return (
    <section className="newsletter py-4">
      <div className="container">
        <div className="row h-100">
          <div className="col-2"></div>
          <div className="col-4 py-4">
            <p className="m-0">
              Wekelijkse podcast, nieuws over nieuwe cursussen en
              ontwikkelingen. Ontvang onze nieuwsbrief direct via email.
            </p>
          </div>
          <form className="col-6 d-flex align-items-center">
            <div className="row w-100">
              <div className="col-5">
                <input placeholder="email adres"></input>
              </div>
              <div className="col-5">
                <button className="button__primary py-1 px-4">
                  schijf je in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
