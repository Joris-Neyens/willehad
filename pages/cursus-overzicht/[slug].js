import axios from "axios";
import { BASE_URL } from "../../js/api/baseUrl";
import EditCourse from "../../js/components/pages/cursus-overzicht/EditCourse";

export default function Course({ course }) {
  console.log(course);

  const { id, title, cover, description, price, curriculum, teacher, teacher_description, teacher_image, reviews } = course;

  return (
    <div>
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
