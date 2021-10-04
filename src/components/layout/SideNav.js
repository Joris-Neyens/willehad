import Link from "next/link";

export default function SideNav() {
  return (
    <div className="d-none d-lg-block ml-5 mt-5 pt-5 col-2 px-0 start-0">
      <div className="side-nav__dashboard px-3 shadow-sm">
        <Link href="/admin/dashboard" className="side-nav__dashboard--link">
          dashboard
        </Link>
      </div>

      <div className="side-nav__edit mt-3 shadow-sm">
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
    </div>
  );
}
