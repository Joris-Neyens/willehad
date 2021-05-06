import axios from "axios";
import { BASE_URL } from "../../js/api/baseUrl";
import PostCover from "../../js/components/pages/cursus-overzicht/PostCover";
import PostTeacherCover from "../../js/components/pages/cursus-overzicht/PostTeacherCover";
import PostVideo from "../../js/components/pages/cursus-overzicht/PostVideo";
import PutInfo from "../../js/components/pages/cursus-overzicht/PutInfo";
import PutReviews from "../../js/components/pages/cursus-overzicht/PutReviews";

export default function Course({ course }) {
  const { id, title, cover, description, price, curriculum, teacher, teacher_description, teacher_image, reviews, video, categories } = course;

  let reviewId = "1";
  if (reviews) {
    reviewId = reviews[0];
  }

  return (
    <div className="container flex-column">
      <div className="row ">
        <div className="col-11 offset-1">
          <h1>Edit cursus</h1>
          <h4>Cover</h4>
          <PostCover key={teacher_image.id} id={id} cover={cover} />
          <h4>Teacher image</h4>
          <PostTeacherCover id={teacher_image.id} teacher_image={teacher_image} />
          <h4>Video</h4>
          <PostVideo key={video[0].id} id={id} video={video} />

          <PutInfo
            key={id}
            id={id}
            title={title}
            description={description}
            price={price}
            curriculum={curriculum}
            teacher={teacher}
            teacher_description={teacher_description}
            categories={categories}
          />
          <PutReviews key={reviewId} reviews={reviews} />
        </div>
      </div>
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
