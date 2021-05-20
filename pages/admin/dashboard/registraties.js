import axios from "axios";
import { BASE_URL } from "../../../src/api/baseUrl";
import Head from "../../../src/components/head/Head";
import DashboardMenu from "../../../src/components/layout/DashboardMenu";
import SideMenu from "../../../src/components/layout/SideNav";
import Registrations from '../../../src/components/pages/registraties/Registrations';
import Newsletters from "../../../src/components/pages/registraties/Newsletters";

export default function register({ registrations, newsletters }) {

    console.log(newsletters)

  return (
    <>
      <Head
        title="contact inbox"
        description="overzicht over alle inkomende berichten"
      />
      <DashboardMenu />
      <div className="container-fluid">
        <div className="row">
          <SideMenu />
          <div className="col-8 pb-4 mt-5">
            <div className="row">
              <div className="col-10 pl-5">
                <h1>Registraties</h1>
                <h4 className="mt-5">cursus registraties</h4>
                <Registrations registrations={registrations} />
                <h3 className="mt-3">Nieuwsbrief</h3>
                <Newsletters
                  registrations={registrations}
                  newsletters={newsletters}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
    const url = `${BASE_URL}registers`;
    const newsletterUrl = `${BASE_URL}newsletters`;

  let registrations = null;

  try {
    const response = await axios.get(url);
    registrations = response.data;
  } catch (error) {
    console.log(error);
  }

    let newsletters = null
    
    try {
    const response = await axios.get(newsletterUrl);
    newsletters = response.data;
  } catch (error) {
    console.log(error);
  }
    
    
  return {
    props: { registrations: registrations, newsletters: newsletters },
  };
}

