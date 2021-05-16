import Link from "next/link";


export default function DashboardMenu() {

  return (
    <div className="menu">
      <div className="container">
        <nav className="py-2 row">
          <div className="col-2">
            <Link href="/">
              <a id="logo">Willehad</a>
            </Link>
          </div>
          <div className="col-8 d-flex justify-content-center align-items-center">
            <Link href="/admin/dashboard  ">
              <a className="menu__link px-3" title="dashboard">
                dashboard
              </a>
            </Link>
            <Link href="/admin/dashboard/edit-cursus">
              <a className="menu__link px-3" title="edit cursus">
                edit cursus
              </a>
            </Link>
            <Link href="/admin/dashboard/nieuwe-cursus">
              <a className="menu__link px-3" title="nieuwe cursus">
                nieuwe cursus
              </a>
            </Link>
            <Link href="/admin/dashboard/edit-home">
              <a className="menu__link px-3" title="edit home">
                edit home
              </a>
            </Link>
            <Link href="/admin/dashboard/communicatie">
              <a className="menu__link px-3" title="communicatie">
                communicatie
              </a>
            </Link>
          </div>
          <div className="col-2"></div>
        </nav>
      </div>
    </div>
  );
}
