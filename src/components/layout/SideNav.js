import Link from "next/link";

export default function SideNav() {
  return (
    <div className="d-none d-lg-block ml-5 mt-5 pt-5 col-2 px-0 start-0">
      <div className="side-nav__dashboard">
        <Link href="/admin/dashboard">
          <h4 className="px-3 py-2 mb-0">dashboard</h4>
        </Link>
      </div>

      <div className="side-nav__edit mt-3">
        <div className="py-2"></div>
        <div className="px-3 border-bottom">
          <h4>Edit</h4>
        </div>
        <div className="px-3 pb-3 pt-1">
          <Link href="/admin/dashboard/nieuwe-cursus">Nieuwe cursus</Link>
          <Link href="/admin/dashboard/edit-cursus">Edit cursus</Link>
          <Link href="/admin/dashboard/edit-home">Edit home</Link>
        </div>
      </div>
      <div className="side-nav__communicatie pt-3 mt-3">
        <div className="px-3 border-bottom">
          <h4>communicatie</h4>
        </div>
        <div className="px-3 pb-3 pt-1">
          <Link href="/admin/dashboard/registraties">Registraties</Link>
          <Link href="/admin/dashboard/inbox">Inbox</Link>
        </div>
      </div>
    </div>
  );
}
