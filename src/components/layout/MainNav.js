import Link from "next/link";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React, { useState, useCallback } from "react";
import { HamburgerSpring } from "react-animated-burgers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

export default function MainNav() {

  const [isActive, setIsActive] = useState(false);
  const toggleButton = useCallback(
    () => setIsActive(prevState => !prevState),
    []
  );

  return (
    <>
      <div className="menu sticky-top d-none d-lg-block">
        <div className="container-fluid">
          <nav className="py-2 row">
            <div className="col-3">
              <Link href="/">
                <a id="logo">Willehad</a>
              </Link>
            </div>
            <div className="col-8 d-none d-lg-flex justify-content-end align-items-center">
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
              <Link href="/contact">
                <a className="px-3  menu__link" title="contact">
                  contact
                </a>
              </Link>
            </div>

            <div className="col-1 d-none d-lg-flex justify-content-end align-items-center pr-3">
              <FontAwesomeIcon
                className="menu__icon mx-2"
                icon={faFacebookSquare}
              />
              <FontAwesomeIcon
                className="menu__icon mx-2"
                icon={faTwitterSquare}
              />
            </div>
          </nav>
        </div>
      </div>
      <Navbar className="d-lg-none sticky-top" bg="light" expand="lg">
        <Link href="/">
          <a id="logo">Willehad</a>
        </Link>

        <Navbar.Toggle className="border-0 ">
          <HamburgerSpring
             buttonColor="#F6F6F6"
            buttonWidth={30}
            barColor="#524E68"
            {...{ isActive, toggleButton }}
          />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/cursus-aanbod">
              <a className="text-right menu__link py-3">cursus aanbod</a>
            </Link>
            <Link href="/hoe-het-werkt">
              <a className="text-right menu__link py-3">hoe het werkt</a>
            </Link>
            <Link href="/contact" className="text-right menu__link">
              <a className="text-right menu__link py-3">contact</a>
            </Link>
            <div className="d-flex justify-content-end py-3">
              <FontAwesomeIcon
                className="menu__icon mx-2"
                icon={faFacebookSquare}
              />
              <FontAwesomeIcon
                className="menu__icon mx-2"
                icon={faTwitterSquare}
              />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
