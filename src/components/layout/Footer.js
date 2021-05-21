import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="pt-5 pb-1 mt-5">
      <div className="container">
        <div className="row p-0">
          <div className="col-12 text-center pb-3 pb-md-0 text-md-left col-md-2">
            <p className="d-block mb-1">Willehad</p>
            <Link href="/contact">
              <a className="d-block">Over Willehad</a>
            </Link>
            <Link href="/contact">
              <a className="d-block">Contact</a>
            </Link>
          </div>
          <div className="col-12 text-center py-3 py-md-0 text-md-left  col-md-2">
            <p className="d-block mb-1">cursus traject</p>
            <Link href="/hoe-het-werkt">
              <a className="d-block">uitleg</a>
            </Link>
            <Link href="/registreer">
              <a className="d-block">aanmelden</a>
            </Link>
          </div>
          <div className="col-12 text-center py-3 py-md-0 text-md-left col-md-2">
            <p className="d-block mb-1">cursus</p>
            <Link href="/cursus-aanbod">
              <a className="d-block">Alle cursussen</a>
            </Link>
            <Link href="/">
              <a className="d-block">Komende cursus</a>
            </Link>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end p-0">
            <FontAwesomeIcon
              className="footer__icon mx-2"
              icon={faFacebookSquare}
            />
            <FontAwesomeIcon
              className="footer__icon mx-2"
              icon={faTwitterSquare}
            />
          </div>
        </div>
        <p className="footer__terms text-center mt-5">
          Terms &amp; Conditions Privacy Policy 2021 Willhad
        </p>
      </div>
    </footer>
  );
}
