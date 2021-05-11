import axios from "axios";
import { BASE_URL } from "../../../../src/api/baseUrl";
import Head from "../../../../src/components/head/Head";
import DashboardMenu from "../../../../src/components/layout/DashboardMenu";
import PostCover from "../../../../src/components/pages/edit-cursus/PostCover";
import PostTeacherCover from "../../../../src/components/pages/edit-cursus/PostTeacherCover";
import PostVideo from "../../../../src/components/pages/edit-cursus/PostVideo";
import PutInfo from "../../../../src/components/pages/edit-cursus/PutInfo";
import Menu from "../../../../src/components/pages/dashboard/SideMenu";

export default function Course({ course }) {
  const {
    id,
    title,
    cover,
    description,
    price,
    curriculum,
    teacher,
    teacher_description,
    teacher_image,
    video,
    practical_info,
  } = course;

  return (
    <>
      <Head title="edit cursus" description="edit cursus willehad"></Head>
      <DashboardMenu />
      <div className="container-fluid">
        <div className="row">
          <Menu />
          <div className="col-8 pb-4 mt-5">
            <div className="row">
              <div className="col-10 pl-5">
                <h1>Edit cursus</h1>
                <PutInfo
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  price={price}
                  curriculum={curriculum}
                  teacher={teacher}
                  teacher_description={teacher_description}
                  practical_info={practical_info}
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
                      id={teacher_image.id}
                      teacher_image={teacher_image}
                    />
                  </div>
                </div>
                <div className="col-12 p-0">
                  <p className="pt-4">Video</p>
                  <PostVideo key={course.title} id={id} video={video} />
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
    const response = await axios.get(BASE_URL + "courses");
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