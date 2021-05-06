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
              <a className="px-3" title="cursus aanbod">
                dashboard
              </a>
            </Link>
            <Link href="/dashboard/cursus-overzicht">
              <a className="px-3" title="cursus aanbod">
                cursus overzicht
              </a>
            </Link>
            <Link href="/dashboard/nieuwe-cursus">
              <a className="px-3" title="hoe het werkt">
                nieuwe cursus
              </a>
            </Link>
            <Link href="/dashboard/communicatie">
              <a className="px-3" title="contact">
                communicatie
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
