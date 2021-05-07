import Head from "../js/components/head/Head";
import DashboardMenu from "../js/components/layout/DashboardMenu";
import Menu from "../js/components/pages/dashboard/SideMenu";

export default function dashboard() {
  return (
    <>
      <Head
        title="Dashboard"
        description="Aanpassingen maken aan de website"
      ></Head>
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
    </>
  );
}
