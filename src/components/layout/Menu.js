import Link from "next/link";

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
              <a className="px-3" title="cursus aanbod">
                cursus aanbod
              </a>
            </Link>
            <Link href="/hoe-het-werkt">
              <a className="px-3" title="hoe het werkt">
                hoe het werkt
              </a>
            </Link>
            <Link href="/contact">
              <a className="px-3" title="contact">
                contact
              </a>
            </Link>
          </div>
          <div className="col-3 d-flex justify-content-end align-items-center">
            <a className="px-1">face</a>
            <a className="px-1">twit</a>
          </div>
        </nav>
      </div>
    </div>
  );
}
