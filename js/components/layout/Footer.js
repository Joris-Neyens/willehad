import Link from 'next/link';

export default function Footer() {
    return (
        <div className="d-flex">
            <div className="col-2 p-0">
                <p className="d-block">Willehad</p>
                <Link href="/contact"><a className="d-block">Over Willehad</a></Link>
                <Link href="/contact"><a className="d-block">Contact</a></Link>
            </div>
            <div className="col-2 p-0">
                <p className="d-block">Cursus Traject</p>
                <Link href="/hoe-het-werkt"><a className="d-block">Uitleg</a></Link>
               <Link href="/registreer"> <a className="d-block">Aanmelden</a></Link>
            </div>
            <div className="col-2 p-0">
                <p className="d-block">Cursus</p>
                <Link href="/cursus-aanbod"><a className="d-block">Alle cursussen</a></Link>
                <Link href="/"><a className="d-block">komende cursus</a></Link>
            </div>
            <div className="col-6 d-flex justify-content-end p-0">
                <a className="px-1">face</a>
                <a className="px-1">twit</a>
            </div>
        </div>
    )
}
