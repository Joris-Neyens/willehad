import PropTypes from "prop-types";
import axios from "axios";
import Link from "next/link";
import { BASE_URL } from "../../src/api/baseUrl";
import AdminLayout from "../../src/components/layout/AdminLayout";
import Head from "../../src/components/head/Head";
import DashboardNav from "../../src/components/layout/DashboardNav";
import SideNav from "../../src/components/layout/SideNav";

export default function dashboard() {

  return (
    <>
      <Head title="Dashboard" description="Aanpassingen maken aan de website" />
      <AdminLayout>
        <DashboardNav />
        <div className="container">
          <div className="row w-100 mx-auto">
            <SideNav />
            <main className="col-12 col-lg-9 pb-4 mt-5">
              <div className="row">
                <div className="col-12 p-0 pl-lg-4 pl-xl-5">
                  <h1>Dashboard</h1>
                  <div className="d-flex">
                    <div className="w-50">
                      <Link href="/admin/dashboard/nieuwe-cursus">
                        <div className="mt-5 button__dashboard py-4 background-white text-center shadow">
                          cursus toevoegen
                        </div>
                      </Link>
                    </div>
                    <div className="w-50 pl-2 pl-md-4">
                      <Link href="/admin/dashboard/edit-cursus">
                        <div className="mt-5 py-4 button__dashboard background-white text-center shadow">
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

// export async function getServerSideProps() {
//   const url = `${BASE_URL}registers`;
//   const newsletterUrl = `${BASE_URL}newsletters`;

//   let registrations = null;

//   try {
//     const response = await axios.get(url);
//     registrations = response.data;
//   } catch (error) {
//     console.log(error);
//   }

//   let newsletters = null;

//   try {
//     const response = await axios.get(newsletterUrl);
//     newsletters = response.data;
//   } catch (error) {
//     console.log(error);
//   }

//   return {
//     props: { registrations: registrations, newsletters: newsletters },
//   };
// }