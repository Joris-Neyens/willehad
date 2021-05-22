import Link from "next/link";
import localStorage from "localStorage";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {useState, useCallback} from 'react'
import { HamburgerSpring } from "react-animated-burgers";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export default function DashboardMenu() {

  const router = useRouter()

  function logout() {
    localStorage.clear()
    router.push("/admin")
  }
  const [isActive, setIsActive] = useState(false);
  const toggleButton = useCallback(
    () => setIsActive(prevState => !prevState),
    []
  );

  return (
    <div className="menu">
      <div className="container-fluid">
        <nav className="d-none d-lg-flex py-2 row">
          <div className="col-2">
            <Link href="/">
              <a id="logo">Willehad</a>
            </Link>
          </div>
          <div className="d-flex offset-2 col-8 justify-content-between align-items-center">
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
        <Navbar
          className="d-lg-none sticky-top background-light"
          bg="light"
          expand="lg"
        >
          <Link href="/">
            <a id="logo">Willehad</a>
          </Link>

          <Navbar.Toggle className="border-0">
            <HamburgerSpring
              buttonColor="#F6F6F6"
              buttonWidth={30}
              barColor="#524E68"
              {...{ isActive, toggleButton }}
            />
          </Navbar.Toggle>
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
              <Link href="/admin/dashboard/inbox">
                <a className="text-right menu__link py-3" title="inbox">
                  inbox
                </a>
              </Link>
              <Link href="/admin/dashboard/registraties">
                <a className="text-right menu__link py-3" title="registraties">
                  registraties
                </a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
