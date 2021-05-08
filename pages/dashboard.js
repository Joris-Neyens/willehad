import Head from "../src/components/head/Head";
import DashboardMenu from "../src/components/layout/DashboardMenu";
import Menu from "../src/components/pages/dashboard/SideMenu";
import { AuthProvider } from "../src/components/context/AuthContext";

export default function dashboard() {
  return (
    <>
      <Head
        title="Dashboard"
        description="Aanpassingen maken aan de website"
      ></Head>
      <AuthProvider>
        <DashboardMenu />
        <div className="container-fluid">
          <div className="row">
            <Menu />
            <div className="col-8 pb-4 mt-5">
              <div className="row">
                <div className="col-10 pl-5">
                  <h1>Dashboard</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AuthProvider>
    </>
  );
}
