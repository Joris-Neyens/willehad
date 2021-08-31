import Link from "next/link";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

export default function MainNav() {


  return (
    <>
      <Navbar fixed="top" className="menu py-0">
        <Container className="menu__container">
          <Nav className="me-auto w-100">
            <nav className="py-2 row w-100">
              <div className="py-1">
                <Link href="/">
                  <a id="logo" className="pr-4">
                    Willehad
                  </a>
                </Link>
              </div>
              <div className="d-none d-lg-flex align-items-center">
                <Link href="/cursus-aanbod">
                  <a className="px-3 menu__link" title="cursus aanbod">
                    cursus aanbod
                  </a>
                </Link>
                <Link href="/hoe-het-werkt">
                  <a className="px-3  menu__link" title="hoe het werkt">
                    hoe het werkt
                  </a>
                </Link>
                <Link href="/over-Willehad">
                  <a className="px-3  menu__link" title="hoe het werkt">
                    Over Willehad
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="px-3  menu__link" title="contact">
                    contact
                  </a>
                </Link>
              </div>
              <div className="d-none d-lg-flex col justify-self-end justify-content-end align-items-center pr-3">
                <Link href="/contact">
                  <button className="menu__link__dark button__primary--dark px-4">
                    <a className="menu__link--light" title="login">
                      login
                    </a>
                  </button>
                </Link>
              </div>
            </nav>
          </Nav>
        </Container>
      </Navbar>
      <Navbar className="d-lg-none" bg="light" expand="lg">
        <Link href="/">
          <a id="logo">Willehad</a>
        </Link>

        <Navbar.Toggle className="border-0 " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/cursus-aanbod">
              <a className="text-right menu__link py-3">cursus aanbod</a>
            </Link>
            <Link href="/hoe-het-werkt">
              <a className="text-right menu__link py-3">hoe het werkt</a>
            </Link>
            <Link href="/over-Willehad">
              <a className="text-right menu__link py-3">Over Willehad</a>
            </Link>
            <Link href="/contact" className="text-right menu__link">
              <a className="text-right menu__link py-3">contact</a>
            </Link>
            <div className="d-flex justify-content-end py-3">
              <FontAwesomeIcon className="menu__icon mx-2" icon={faFacebookSquare} />
              <FontAwesomeIcon className="menu__icon mx-2" icon={faTwitterSquare} />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
