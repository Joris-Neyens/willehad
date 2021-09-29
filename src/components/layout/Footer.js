import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="pt-5 pb-1">
      <div className="container">
        <div className="row p-0">
          <div className="col-12 pb-3 pb-md-0 text-md-left col-md-2">
            <p className="d-block mb-1">Willehad</p>
            <Link href="/contact">
              <a className="d-block">Over Willehad</a>
            </Link>
            <Link href="/contact">
              <a className="d-block">Contact</a>
            </Link>
          </div>
          <div className="col-12 py-3 py-md-0 text-md-left  col-md-2">
            <p className="d-block mb-1">Cursussen</p>
            <Link href="/hoe-het-werkt">
              <a className="d-block">Uitleg</a>
            </Link>
            <Link href="/cursus-aanbod">
              <a className="d-block">Alle cursussen</a>
            </Link>
          </div>
          <div className="col-12 py-3">
          <h3 className="text-center">Willehad</h3>
          </div>
          <div className="col-12 d-flex justify-content-center p-0">
            <FontAwesomeIcon className="footer__icon mx-2" icon={faFacebookSquare} />
            <FontAwesomeIcon className="footer__icon mx-2" icon={faTwitterSquare} />
          </div>
        </div>
        <div className="w-100 d-flex justify-content-center pb-4 pt-4">
          <div className="row">
            <div className="col-12 col-md-auto px-0 d-flex justify-content-center">
              <Link href="/privacyverklaring" className="footer__terms  mt-5">
                Privacyverklaring
              </Link>
            </div>
            <div className="col-12 col-md-auto px-0 d-flex justify-content-center">
              <span className="d-none d-md-block">&nbsp;|&nbsp;</span> Copyright © Thomistisch Instituut
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
