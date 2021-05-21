import axios from "axios";
import { BASE_URL } from "../../../src/api/baseUrl";
import AdminLayout from "../../../src/components/layout/AdminLayout";
import Head from "../../../src/components/head/Head";
import DashboardMenu from "../../../src/components/layout/DashboardMenu";
import SideNav from "../../../src/components/layout/SideNav";

export default function inbox({ contacts }) {
  console.log(contacts);
  return (
    <>
      <Head
        title="contact inbox"
        description="overzicht over alle inkomende berichten"
      />
      <DashboardMenu />
      <AdminLayout>
        <div className="container-fluid">
          <div className="row">
            <SideNav />
            <div className="col-9 pb-4 mt-5">
              <div className="row">
                <div className="col-12 pl-5">
                  <h1>Inbox</h1>
                  <div className="row">
                    {contacts.map(function (contact) {
                      const { id, name, email, message } = contact;
                      return (
                        <div
                          key={id}
                          className="col-lg-10 col-xl-8 m-3 p-3 bg-white"
                        >
                          <div className="row px-3">
                            <p className="pr-3 m-0">naam: </p>

                            <p className="m-0 text-center">{name}</p>
                          </div>
                          <div className="row px-3">
                            <p className="pr-3">Email: </p>
                            <p>{email}</p>
                          </div>
                          <div className="border p-1 col-xl-10">
                            <p className="inbox__message">{message}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}

export async function getServerSideProps() {
  const url = `${BASE_URL}contacts`;

  let contacts = null;

  try {
    const response = await axios.get(url);
    contacts = response.data;
  } catch (error) {
    console.log(error);
  }
  return {
    props: { contacts: contacts },
  };
}
