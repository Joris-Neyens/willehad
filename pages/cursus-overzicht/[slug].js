import axios from "axios";
import { BASE_URL } from "../../js/api/baseUrl";
import PostCover from "../../js/components/pages/cursus-overzicht/PostCover";
import PostTeacherCover from "../../js/components/pages/cursus-overzicht/PostTeacherCover";
import PostVideo from "../../js/components/pages/cursus-overzicht/PostVideo";
import EditCourse from "../../js/components/pages/cursus-overzicht/EditCourse";

export default function Course({ course }) {
  const { id, title, cover, description, price, curriculum, teacher, teacher_description, teacher_image, reviews, video } = course;

  console.log(video);
  return (
    <div>
      <h4>Cover</h4>
      <PostCover id={id} />
      <h4>Teacher image</h4>
      <PostTeacherCover id={id} />
      <h4>Video</h4>
      <PostVideo id={id} />
      <EditCourse
        key={id}
        id={id}
        title={title}
        cover={cover}
        description={description}
        price={price}
        curriculum={curriculum}
        teacher={teacher}
        teacher_description={teacher_description}
        teacher_image={teacher_image}
        reviews={reviews}
        video={video}
      />
    </div>
  );
}

export async function getStaticPaths() {
  try {
    const response = await axios.get(BASE_URL + "courses");
    console.log(response.data);
    const courses = response.data;

    const paths = courses.map((course) => ({
      params: { slug: course.slug },
    }));

    console.log(paths);

    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  const url = `${BASE_URL}courses/${params.slug}`;

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
