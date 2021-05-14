import Link from 'next/link'
import Head from '../src/components/head/Head';
import Layout from '../src/components/layout/Layout';

export default function contact() {
    return (
      <>
        <Head
          title="contact"
          description="wie is Willehad en contactformulier"
        />
        <Layout>
          <main className="contact py-5">
            <div className="container pb-5">
              <div className="row">
                <div className="col-6 offset-3">
                  <h1>Contact</h1>
                  <p>
                    Willehad had is een initiatief van het{" "}
                    <Link href="https://www.thomistischinstituut.nl/">
                      Thomistisch Instituut
                    </Link>{" "}
                    en heeft als doel jongeren en gezinnen aan te moedigen op
                    reis te gaan door de grote intellectuele Traditie van de
                    Katholieke Kerk door het toegankelijk te maken. Voor vragen of
                    opmerkingen kunt u gebruik maken van het onderstaand
                    formulier. Wij doen ons best om u binnen twee werkdagen te
                    antwoorden.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-6 offset-3 background-dark  p-3 rounded">
                  <form>
                    <div className="row">
                      <div className="col-8">
                        <label for="naam">Naam</label>
                        <input
                          id="naam"
                          type="text"
                          class="form-control"
                        ></input>
                        <label for="naam">Email</label>
                        <input
                          id="email"
                          type="text"
                          class="form-control"
                        ></input>
                      </div>
                      <div className="col-12">
                        <label for="message">Bericht</label>
                        <textarea
                          class="form-control"
                          id="message"
                          rows="6"
                        ></textarea>
                      </div>
                    </div>
                    <button type="submit" className="button__primary--dark mt-3 px-4 rounded">verstuur</button>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </Layout>
      </>
    );
}
