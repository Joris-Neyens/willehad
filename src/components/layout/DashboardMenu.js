import Link from "next/link";
import localStorage from "localStorage";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export default function DashboardMenu() {

  const router = useRouter()

  function logout() {
    localStorage.clear()
    router.push("/admin")
}
  return (
    <div className="menu">
      <div className="container">
        <nav className="py-2 row">
          <div className="col-2">
            <Link href="/">
              <a id="logo">Willehad</a>
            </Link>
          </div>
          <div className="offset-2 col-8 d-flex justify-content-between align-items-center">
            <Link href="/admin/dashboard  ">
              <a className="menu__link" title="dashboard">
                dashboard
              </a>
            </Link>
            <Link href="/admin/dashboard/nieuwe-cursus">
              <a className="menu__link" title="nieuwe cursus">
                nieuwe cursus
              </a>
            </Link>
            <Link href="/admin/dashboard/edit-cursus">
              <a className="menu__link" title="edit cursus">
                edit cursus
              </a>
            </Link>
            <Link href="/admin/dashboard/edit-home">
              <a className="menu__link" title="edit home">
                edit home
              </a>
            </Link>
            <Link href="/admin/dashboard/inbox">
              <a className="menu__link" title="inbox">
                inbox
              </a>
            </Link>
            <Link href="/admin/dashboard/registraties">
              <a className="menu__link" title="registraties">
                registraties
              </a>
            </Link>
            <div onClick={logout} className="d-flex align-items-center">
              <div className="menu__link--logout">logout</div>
              <FontAwesomeIcon
                className="dashboard-menu__icon mx-2"
                icon={faSignOutAlt}
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
