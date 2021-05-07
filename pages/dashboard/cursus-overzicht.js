import { BASE_URL } from "../../js/api/baseUrl";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Head from "../../js/components/head/Head";
import DashboardMenu from "../../js/components/layout/DashboardMenu";
import Menu from "../../js/components/pages/dashboard/SideMenu";

export default function cursusOverzicht({ courses }) {
  return (
    <>
      <Head title="edit homepage" description="edit homepage willehad"></Head>
      <DashboardMenu />
      <div className="container-fluid">
        <div className="row">
          <Menu />
          <div className="col-8 pb-4 mt-5">
            <div className="row">
              <div className="col-10 pl-5">
                <h1>Cursus overzicht</h1>
                {courses.map(function (course) {
                  const { id, title, cover, price } = course;

                  let url = "/public/under-construction.jpg";

                  if (cover) {
                    url = cover.url;
                  }
                  return (
                    <>
                      <Link key={id} href={`cursus-overzicht/${id}`}>
                        <div className="p-2 mt-4 course-card shadow-sm">
                          <div className="row">
                            <Image
                              src={url}
                              className="pl-3"
                              width="150"
                              height="100"
                            />
                            <div className="p-2">
                              <h4>{title}</h4>
                              <p>{price}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const url = BASE_URL + "courses";

  let courses = [];

  try {
    const response = await axios.get(url);
    console.log(response.data);
    courses = response.data;
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      courses: courses,
    },
  };
}
