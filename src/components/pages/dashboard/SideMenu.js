import Link from "next/link";

export default function SideMenu() {
  return (
    <div className="ml-5 mt-5 pt-5 col-2 px-0 start-0">
      <div className="edit mt-4">
        <div className="px-3 py-2">
          <Link href="/dasboard">dashboard</Link>
        </div>
        <div className="px-3 border-bottom">
          <h4>Edit</h4>
        </div>
        <div className="px-3 pb-3 pt-1">
          <Link href="/dashboard/nieuwe-cursus">Nieuwe cursus</Link>
          <Link href="/dashboard/cursus-overzicht">Cursus overzicht</Link>
          <Link href="/dashboard/edit-home">Edit home</Link>
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
  );
}
