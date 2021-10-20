import Link from "next/link";
import localStorage from "localStorage";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useRouter } from "next/router";

export default function DashboardMenu() {

  const router = useRouter()

  function logout() {
    localStorage.clear()
    router.push("/admin")
  }

  return (
    <div className="menu">
      <div className="container">
        <nav className="d-none d-lg-flex py-2 row">
          <div className="col-auto py-1">
            <Link href="/">
              <a id="logo">Willehad</a>
            </Link>
          </div>
          <div className="d-flex col-8 justify-content-start align-items-center">
            <Link href="/admin/dashboard">
              <a className="menu__link mx-3" title="dashboard">
                dashboard
              </a>
            </Link>
            <Link href="/admin/dashboard/nieuwe-cursus">
              <a className="menu__link mx-3" title="nieuwe cursus">
                nieuwe cursus
              </a>
            </Link>
            <Link href="/admin/dashboard/edit-cursus">
              <a className="menu__link mx-3" title="edit cursus">
                edit cursus
              </a>
            </Link>
            <Link href="/admin/dashboard/edit-home">
              <a className="menu__link mx-3" title="edit home">
                edit home
              </a>
            </Link>
          </div>
          <div onClick={logout} className="d-flex align-items-center justify-content-end col-2">
            <button className="button__alarm px-4">logout</button>
          </div>
        </nav>
        <Navbar className="d-lg-none px-0 sticky-top background-blue" expand="lg">
          <Link href="/">
            <a id="logo">Willehad</a>
          </Link>

          <Navbar.Toggle className="border-0" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link href="/admin/dashboard  ">
                <a className="text-right menu__link py-3" title="dashboard">
                  dashboard
                </a>
              </Link>
              <Link href="/admin/dashboard/nieuwe-cursus">
                <a className="text-right menu__link py-3" title="nieuwe cursus">
                  nieuwe cursus
                </a>
              </Link>
              <Link href="/admin/dashboard/edit-cursus">
                <a className="text-right menu__link py-3" title="edit cursus">
                  edit cursus
                </a>
              </Link>
              <Link href="/admin/dashboard/edit-home">
                <a className="text-right menu__link py-3" title="edit home">
                  edit home
                </a>
              </Link>
              <div onClick={logout} className="d-flex justify-content-end align-items-center">
                <button className="button__alarm px-4">logout</button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
