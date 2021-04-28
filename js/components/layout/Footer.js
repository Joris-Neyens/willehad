import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="py-5">
            <div className="container">
                <div className="row p-0">
                    <div className="col-2">
                        <p className="d-block">Willehad</p>
                        <Link href="/contact"><a className="d-block">Over Willehad</a></Link>
                        <Link href="/contact"><a className="d-block">Contact</a></Link>
                    </div>
                    <div className="col-2">
                        <p className="d-block">cursus traject</p>
                        <Link href="/hoe-het-werkt"><a className="d-block">uitleg</a></Link>
                        <Link href="/registreer"><a className="d-block">aanmelden</a></Link>
                    </div>
                    <div className="col-2">
                        <p className="d-block">cursus</p>
                        <Link href="/cursus-aanbod"><a className="d-block">Alle cursussen</a></Link>
                        <Link href="/"><a className="d-block">Komende cursus</a></Link>
                    </div>
                    <div className="col-6 d-flex justify-content-end p-0">
                        <a className="px-1">face</a>
                        <a className="px-1">twit</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
