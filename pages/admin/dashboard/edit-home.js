import DashboardMenu from "../../../src/components/layout/DashboardMenu";
import axios from "axios";
import Head from "../../../src/components/head/Head";
import SideNav from "../../../src/components/pages/dashboard/SideNav";
import PutHomeInfo from "../../../src/components/pages/edit-home/PutHomeInfo";
import PutHomeHeader from "../../../src/components/pages/edit-home/PutHomeHeader";
import PutHomeCourseImg from "../../../src/components/pages/edit-home/PutHomeCourseImg";
import { BASE_URL } from "../../../src/api/baseUrl";

export default function editHome({ home }) {
  const {
    id,
    header_image,
    course_date,
    title,
    subtitle,
    course_title,
    course_description,
    course_image,
  } = home;

  return (
    <div>
      <Head title="edit homepage" description="edit homepage willehad"></Head>
      <DashboardMenu />
      <div className="container-fluid">
        <div className="row">
          <SideNav />
          <div className="col-8 pb-4 mt-5">
            <div className="row">
              <div className="col-10 pl-5">
                <h1>Edit Home</h1>
                <PutHomeInfo
                  title={title}
                  subtitle={subtitle}
                  course_date={course_date}
                  course_title={course_title}
                  course_description={course_description}
                />
                <h4 className="pt-4 my-4">Media</h4>
                <p>Header</p>
                <PutHomeHeader id={id} header_image={header_image} />
                <p>Cursus home afbeelding</p>
                <PutHomeCourseImg id={id} course_image={course_image} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const url = `${BASE_URL}home`;

  let home = null;

  try {
    const response = await axios.get(url);
    home = response.data;
  } catch (error) {
    console.log(error);
  }
  return {
    props: { home: home },
  };
}
