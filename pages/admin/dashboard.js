import axios from "axios";
import Link from "next/link";
import { BASE_URL } from "../../src/api/baseUrl";
import AdminLayout from "../../src/components/layout/AdminLayout";
import Head from "../../src/components/head/Head";
import DashboardMenu from "../../src/components/layout/DashboardMenu";
import SideNav from "../../src/components/layout/SideNav";
import LatestEvents from "../../src/components/pages/dashboard/LatestEvents";
import LatestsNewsletterSub from "../../src/components/pages/dashboard/LatestsNewsletterSub";

export default function dashboard({ registrations, newsletters }) {
  return (
    <>
      <Head title="Dashboard" description="Aanpassingen maken aan de website" />
      <AdminLayout>
        <DashboardMenu />
        <div className="container">
          <div className="row">
            <SideNav />
            <main className="col-9 pb-4 mt-5">

                <div className="row">
                  <div className="col-12 p-0 pl-lg-4 pl-xl-5">
                    <h1>Dashboard</h1>
                    <h4 className="pt-3">Laatste cursus registraties</h4>
                    <LatestEvents registrations={registrations} />
                    <Link href="/admin/dashboard/registraties">
                      <button className="button__primary--dark mt-4 w-25">
                        registraties
                      </button>
                    </Link>
                    <h4 className="pt-5">Laatste newsbrief aanmeldingen</h4>
                    <LatestsNewsletterSub newsletters={newsletters} />
                    <Link href="/admin/dashboard/inbox">
                      <button className="button__primary--dark mt-4 w-25">
                        inbox
                      </button>
                    </Link>
                    <div className="d-flex">
                      <div className="w-50">
                        <Link href="/admin/dashboard/nieuwe-cursus">
                          <div className="mt-5 button__dashboard py-4 background-light text-center shadow">
                            cursus toevoegen
                          </div>
                        </Link>
                      </div>
                      <div className="w-50 pl-4">
                        <Link href="/admin/dashboard/edit-cursus">
                          <div className="mt-5 py-4 button__dashboard background-light text-center shadow">
                            cursus aanpassen
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
            </main>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}

export async function getServerSideProps() {
  const url = `${BASE_URL}registers`;
  const newsletterUrl = `${BASE_URL}newsletters`;

  let registrations = null;

  try {
    const response = await axios.get(url);
    registrations = response.data;
  } catch (error) {
    console.log(error);
  }

  let newsletters = null;

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
