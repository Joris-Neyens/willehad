import Link from 'next/link'

export default function menu() {
    return (
        <div className="ml-5 mt-5 position-absolute start-0">
            <div className="edit">
                <div className="px-3 py-2">
                    <Link href="/dasboard">dashboard</Link>
                    </div>
                <div className="px-3 border-bottom">
                <h4>Edit</h4>
                </div>
                <div className="px-3 pb-3 pt-1">
                <Link href="/nieuwe-cursus">Nieuwe cursus</Link>
                    <Link href="/cursus-overzicht">Cursus overzicht</Link>
                    </div>
            </div>
            <div className="communicatie pt-3 mt-3">
                <div className="px-3 border-bottom">
                    <h4>communicatie</h4>
                    </div>
                <div className="px-3 pb-3 pt-1">
                <Link href="/contact-pagina">Contact pagina</Link>
                <Link href="/registraties">Registraties</Link>
                <Link href="/nieuwsbrief">Nieuwsbrief</Link>    
                </div>
            </div>
        </div>
    )
}
