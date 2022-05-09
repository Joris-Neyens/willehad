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
            <Link href="/over-Willehad">
              <a className="d-block">Over Willehad</a>
            </Link>
            <Link href="/contact">
              <a className="d-block">Contact</a>
            </Link>
          </div>
          <div className="col-12 py-3 py-md-0 text-md-left  col-md-2">
            <p className="d-block mb-1">Cursussen</p>
            <Link href="/cursus-aanbod">
              <a className="d-block">Alle cursussen</a>
            </Link>
            <Link href="/hoe-het-werkt">
              <a className="d-block">Uitleg</a>
            </Link>
          </div>
          <div className="col-12 py-3">
            <Link href="/">
              <div className="d-flex justify-content-center footer-logo">
                <img
                  src="/willehad_wordmark_white.png"
                  alt="footer logo"
                  className="col-8 col-sm-8 pt-5 pt-md-5 col-md-5 col-lg-4 col-xl-3 px-0 px-sm-5 px-lg-4"
                ></img>
              </div>
            </Link>
          </div>
          <div className="d-none col-12 justify-content-center p-0">
            <FontAwesomeIcon className="footer__icon mx-2" icon={faFacebookSquare} />
            <FontAwesomeIcon className="footer__icon mx-2" icon={faTwitterSquare} />
          </div>
        </div>
        <div className="w-100 d-flex justify-content-center pb-4 pt-4 footer_privacy">
          <div className="row">
            <div className="col-12 col-md-auto px-0 d-flex justify-content-center">
              <Link href="/privacyverklaring" className="footer__terms  mt-5">
                Privacyverklaring
              </Link>
            </div>
            <div className="col-12 col-md-auto px-0 d-flex justify-content-center">
              <span className="d-none d-md-block">&nbsp;|&nbsp;</span>
              <p> Copyright © Thomistisch Instituut</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
