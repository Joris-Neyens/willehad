import Head from "../js/components/head/Head";
import DashboardMenu from "../js/components/layout/DashboardMenu";
import Menu from "../js/components/pages/dashboard/Menu";

export default function dashboard() {
  return (
    <>
      <Head title="Dashboard" description="Aanpassingen maken aan de website"></Head>
      <DashboardMenu />
      <div>
        <h1>Dashboard</h1>
      </div>
      <Menu />
    </>
  );
}
