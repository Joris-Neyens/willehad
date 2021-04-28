import Link from "next/link";

export default function Menu() {

  return (
      <div className="container">
            <nav className="pt-4 row">
                <div className="col-3">
                    <Link href="/">
                        <p>Willehad</p>
                    </Link>
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <Link href="/cursus-aanbod">
                        <a className="px-3">cursus aanbod</a>
                    </Link>
                    <Link href="/hoe-het-werkt">
                        <a className="px-3">hoe het werkt</a>
                    </Link>
                    <Link href="/contact">
                        <a className="px-3">contact</a>
                    </Link>
                </div>
                <div className="col-3 d-flex justify-content-end">
                    <a className="px-1">face</a>
                    <a className="px-1">twit</a>
                </div>
            </nav>
        </div>
  );
}
