import axios from "axios";
import Link from 'next/link';
import { BASE_URL, COURSES_PATH } from "../../../../src/api/baseUrl";
import Head from "../../../../src/components/head/Head";
import DashboardMenu from "../../../../src/components/layout/DashboardMenu";
import PostCover from "../../../../src/components/pages/edit-cursus/PostCover";
import PostTeacherCover from "../../../../src/components/pages/edit-cursus/PostTeacherCover";
import PostVideo from "../../../../src/components/pages/edit-cursus/PostVideo";
import PostAboutCourseImage from "../../../../src/components/pages/edit-cursus/PostAboutCourseImage";
import PostWhitepaper from "../../../../src/components/pages/edit-cursus/PostWhitepaper";
import PutInfo from "../../../../src/components/pages/edit-cursus/PutInfo";
import SideNav from "../../../../src/components/pages/dashboard/SideNav";

export default function Course({ course }) {
  const {
    id,
    title,
    subtitle,
    cover,
    description_long,
    description_short,
    category,
    type,
    episodes,
    price,
    curriculum,
    teacher,
    teacher_description,
    teacher_image,
    video,
    practical_info_1,
    practical_info_2,
    about_course_image,
    whitepaper,
  } = course;

  const reload = `/admin/dashboard/edit-cursus/${id}`

  return (
    <>
      <Head title="edit cursus" description="edit cursus willehad" />
      <DashboardMenu />
      <div className="container-fluid">
        <div className="row">
          <SideNav />
          <div className="col-8 pb-4 mt-5">
            <div className="row">
              <div className="col-10 pl-5">
                <h1>Edit cursus</h1>
                <PutInfo
                  key={id}
                  id={id}
                  title={title}
                  subtitle={subtitle}
                  practical_info_1={practical_info_1}
                  practical_info_2={practical_info_2}
                  category={category}
                  type={type}
                  episodes={episodes}
                  description_long={description_long}
                  description_short={description_short}
                  price={price}
                  curriculum={curriculum}
                  teacher={teacher}
                  teacher_description={teacher_description}
                />
                <h4 className="pt-4 my-4">Media</h4>
                <div className="row">
                  <div className="col-6">
                    <p>Cover</p>
                    <PostCover key={teacher_image.url} id={id} cover={cover} />
                  </div>
                  <div className="col-6">
                    <p>Teacher image</p>
                    <PostTeacherCover
                      key={teacher_image.id}
                      id={teacher_image.id}
                      teacher_image={teacher_image}
                    />
                  </div>
                  <div className="col-6 mt-4">
                    <p className="pt-4">
                      Over cursus afbeelding (landingspagina)
                    </p>
                    <PostAboutCourseImage
                      key={about_course_image.id}
                      id={id}
                      about_course_image={about_course_image}
                    />
                  </div>

                  <div className="col-6 mt-4 d-flex flex-column justify-content-end">
                    <PostWhitepaper
                      key={category}
                      id={id}
                      whitepaper={whitepaper}
                    />
                  </div>
                </div>
                <div className="col-12 p-0">
                  <p className="pt-4">Video</p>
                  <PostVideo key={course.title} id={id} video={video} />
                </div>
                <div className="d-flex justify-content-center">
                  <Link href={reload}>
                    <button className="button__primary mt-4 mb-5 col-6 ">
                      Zie resultaat
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  try {
    const response = await axios.get(BASE_URL + COURSES_PATH);
    console.log(response.data);
    const courses = response.data;

    const paths = courses.map((course) => ({
      params: { id: course.id },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  const url = `${BASE_URL}courses/${params.id}`;

  let course = null;

  try {
    const response = await axios.get(url);
    course = response.data;
  } catch (error) {
    console.log(error);
  }
  return {
    props: { course: course },
  };
}
