import Link from "next/link";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import Hamburger from "hamburger-react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


export default function MainNav() {

  const [isOpen, setOpen] = useState(false);
 
  return (
    <>
      <Navbar fixed="top" className="menu py-0 d-none d-lg-block">
        <Container className="menu__container">
          <Nav className="me-auto w-100">
            <nav className="py-2 row mx-auto w-100">
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
                <Link href="https://willehad.thinkific.com/users/sign_in">
                  <button className="menu__link__dark button__primary px-4">
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
      {/* <Navbar fixed="top" className="menu d-none p-0" expand="lg">
        <div className="w-100 d-flex justify-content-between px-2">
          <div className="d-flex py-3">
            <Link href="/">
              <a id="logo">Willehad</a>
            </Link>
          </div>
          <Navbar.Toggle className="navbar-dark col-1 border-0 p-0" />
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Fade right>
            <div className="container-fluid py-4 px-4">
              <Nav className="w-100 d-flex justify-content-end">
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
                <div className="d-flex justify-content-end pt-4">
                  <Link href="https://willehad.thinkific.com/users/sign_in">
                    <button className="menu__link__dark button__primary px-4">
                      <a className="menu__link--light" title="login">
                        login
                      </a>
                    </button>
                  </Link>
                </div>
              </Nav>
            </div>
          </Fade>
        </Navbar.Collapse>
      </Navbar> */}
      <div className="container">
        <div className="d-flex logo-container position-absolute py-3">
          <div classname="hamburger-logo">
            <Link href="/">
              <a className="pr-4">Willehad</a>
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-right">
          <div className="hamburger py-1 mr-2">
            <Hamburger
              laber="show menu"
              size={30}
              toggled={isOpen}
              toggle={setOpen}
              color="#F6F6F6"
              onToggle={toggled => {
                const hamburgerMenu = document.querySelector(".hamburger__menu");
                const hamburgerWrapper = document.querySelector(".menu-transparent");
                if (toggled) {
                  hamburgerMenu.classList.remove("hamburger__menu--close");
                  hamburgerMenu.classList.add("hamburger__menu--open");
                  hamburgerWrapper.classList.add("on");
                } else {
                  hamburgerMenu.classList.add("hamburger__menu--close");
                  hamburgerMenu.classList.remove("hamburger__menu--open");
                  hamburgerWrapper.classList.remove("on");
                }
              }}
            />
          </div>
        </div>
      </div>
      <div className="menu-transparent position-fixed" onClick={closeMenu => {
          const hamburgerMenu = document.querySelector(".hamburger__menu");
          const hamburgerWrapper = document.querySelector(".menu-transparent");
          hamburgerMenu.classList.add("hamburger__menu--close");
          hamburgerMenu.classList.remove("hamburger__menu--open");
        hamburgerWrapper.classList.remove("on");
        setOpen(false)
      }}>
        <div className="position-absolute w-100 hamburger__menu hamburger__menu--close d-lg-none">
          <div className="hamburger-menu__wrapper w-100 h-100 d-flex justify-content-end">
            <div className="background-blue py-5 px-sm-5 px-4">
              <Link href="/">
                <a className="text-right menu__link">Home</a>
              </Link>
              <Link href="/cursus-aanbod">
                <a className="text-right menu__link">cursus aanbod</a>
              </Link>
              <Link href="/hoe-het-werkt">
                <a className="text-right menu__link">hoe het werkt</a>
              </Link>
              <Link href="/over-Willehad">
                <a className="text-right menu__link">Over Willehad</a>
              </Link>
              <Link href="/contact" className="text-right menu__link">
                <a className="text-right menu__link">contact</a>
              </Link>
              <div className="d-flex justify-content-end pt-4">
                <Link href="https://willehad.thinkific.com/users/sign_in">
                  <button className="menu__link__dark button__primary px-4">
                    <a className="menu__link--light" title="login">
                      login
                    </a>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
