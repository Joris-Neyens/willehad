import Head from '../../src/components/head/Head'
import DashboardMenu from "../../src/components/layout/DashboardMenu";
import SideNav from "../../src/components/pages/dashboard/SideNav";

export default function dashboard() {
  return (
    <>
      <Head
        title="Dashboard"
        description="Aanpassingen maken aan de website"
      />
        <DashboardMenu />
        <div className="container-fluid">
          <div className="row">
            <SideNav />
            <div className="col-8 pb-4 mt-5">
              <div className="row">
                <div className="col-10 pl-5">
                  <h1>Dashboard</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
