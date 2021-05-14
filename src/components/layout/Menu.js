import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";




export default function Menu() {
  return (
    <div className="menu sticky-top">
      <div className="container">
        <nav className="py-2 row">
          <div className="col-3">
            <Link href="/">
              <a id="logo">Willehad</a>
            </Link>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
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
          <div className="col-3 d-flex justify-content-end align-items-center p-0">
            <FontAwesomeIcon className="menu__icon mx-2"icon={faFacebookSquare} />
            <FontAwesomeIcon className="menu__icon mx-2" icon={faTwitterSquare} />
          </div>
        </nav>
      </div>
    </div>
  );
}
