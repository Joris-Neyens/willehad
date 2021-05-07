import DashboardMenu from "../../js/components/layout/DashboardMenu";
import SideMenu from "../../js/components/pages/dashboard/SideMenu";

export default function editHome() {
  return (
    <div>
      <DashboardMenu />
      <div className="row">
        <SideMenu />
      </div>
    </div>
  );
}
