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
            <Link href="/dashboard  ">
              <a className="px-3" title="dashboard">
                dashboard
              </a>
            </Link>
            <Link href="/dashboard/cursus-overzicht">
              <a className="px-3" title="cursus overzicht">
                cursus overzicht
              </a>
            </Link>
            <Link href="/dashboard/nieuwe-cursus">
              <a className="px-3" title="nieuwe cursus">
                nieuwe cursus
              </a>
            </Link>
            <Link href="/dashboard/edit-home">
              <a className="px-3" title="edit home">
                edit home
              </a>
            </Link>
            <Link href="/dashboard/communicatie">
              <a className="px-3" title="communicatie">
                communicatie
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
