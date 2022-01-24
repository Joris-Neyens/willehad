import Link from "next/link";
import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from "next/image";


export default function MainNav() {

  const [isOpen, setOpen] = useState(false);
  
  return (
    <>
      <Navbar fixed="top" className="menu p-0 d-none d-lg-block">
        <div className="menu__container container">
          <Nav className="me-auto w-100">
            <nav className="py-2 d-flex flex-row justify-content-between mx-auto w-100">
              <div className="py-1 d-flex align-items-center">
                <Link href="/">
                  <Image id="logo" src="/CrestOnlyPurple.png" width="70" height="63" />
                </Link>
                <div className="d-flex h-100">
                  <div className="d-flex align-items-center pt-1">
                    <div className="d-flex flex-column" id="wordmark">
                      <Link href="/">
                        <Image src="/wordmark.png" width="250" height="32" />
                      </Link>
                      <p id="slogan" className="d-flex justify-content-center m-0">
                        Katholiek Cursus Platform
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="d-none d-lg-flex col-auto align-items-center justify-content-right pt-1">
                  <Link href="/cursus-aanbod">
                    <a className="px-2 menu__link" title="cursus aanbod">
                      cursus aanbod
                    </a>
                  </Link>
                  <Link href="/hoe-het-werkt">
                    <a className="px-2  menu__link" title="hoe het werkt">
                      hoe het werkt
                    </a>
                  </Link>
                  <Link href="/over-Willehad">
                    <a className="px-2  menu__link" title="hoe het werkt">
                      Over Willehad
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a className="px-2  menu__link" title="contact">
                      contact
                    </a>
                  </Link>
                </div>
                <div className="d-none d-lg-flex col-auto justify-self-end justify-content-end align-items-center pr-3 pt-1">
                  <Link href="https://willehad.thinkific.com/users/sign_in">
                    <button className="button__primary--dark px-4">
                      <a className="menu__link--light" title="login">
                        login
                      </a>
                    </button>
                  </Link>
                </div>
              </div>
            </nav>
          </Nav>
        </div>
      </Navbar>

      <div className="hamburger__wrapper w-100 position-fixed d-lg-none background-black">
        <div className="container hamburger__container d-flex justify-content-between background-black">
          <div className="logo-container py-3">
            <div className="hamburger-logo">
              <Link href="/">
                <a className="pr-4">Willehad</a>
              </Link>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="hamburger py-1">
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
      </div>
      <div className="menu-transparent position-fixed"></div>
      <div className="position-fixed w-100 hamburger__menu hamburger__menu--close d-lg-none">
        <div
          className="hamburger-menu__wrapper w-100 h-100 d-flex justify-content-end"
          onClick={closeMenu => {
            const hamburgerMenu = document.querySelector(".hamburger__menu");
            const hamburgerWrapper = document.querySelector(".menu-transparent");
            hamburgerMenu.classList.add("hamburger__menu--close");
            hamburgerMenu.classList.remove("hamburger__menu--open");
            hamburgerWrapper.classList.remove("on");
            setOpen(false);
          }}
        >
          <div className="background-black hamburger__content py-5 px-sm-5 px-4">
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
            <div className="d-flex pt-5">
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
    </>
  );
}