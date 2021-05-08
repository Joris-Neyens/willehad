import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import AuthContext from "../context/AuthContext";

export default function DashboardMenu() {
  const [auth, setAuth] = useContext(AuthContext);

  const router = useRouter();

  function reject() {
    useEffect(() => {
      router.push("/admin");
    });
  }
  function logout() {
    useEffect(() => {
      setAuth(null);
      router.push("/admin");
    });
  }
  return (
    <div className="menu">
      <div className="container">
        <nav className="py-2 row">
          <div className="col-2">
            <Link href="/">
              <a id="logo">Willehad</a>
            </Link>
          </div>
          <div className="col-8 d-flex justify-content-center align-items-center">
            <Link href="/admin/dashboard  ">
              <a className="px-3" title="dashboard">
                dashboard
              </a>
            </Link>
            <Link href="/admin/dashboard/edit-cursus">
              <a className="px-3" title="edit cursus">
                edit cursus
              </a>
            </Link>
            <Link href="/admin/dashboard/nieuwe-cursus">
              <a className="px-3" title="nieuwe cursus">
                nieuwe cursus
              </a>
            </Link>
            <Link href="/admin/dashboard/edit-home">
              <a className="px-3" title="edit home">
                edit home
              </a>
            </Link>
            <Link href="/admin/dashboard/communicatie">
              <a className="px-3" title="communicatie">
                communicatie
              </a>
            </Link>
          </div>
          <div className="col-2"></div>
        </nav>
      </div>
    </div>
  );
}
