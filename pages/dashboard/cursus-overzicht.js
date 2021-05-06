import { BASE_URL } from "../../js/api/baseUrl";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default function cursusOverzicht({ courses }) {
  return (
    <>
      {courses.map(function (course) {
        const { id, title, cover, price, slug } = course;
        return (
          <Link key={id} href={`cursus-overzicht/${slug}`}>
            <div className="container p-2 course-card shadow-sm">
              <div className="row">
                <Image src={cover.url} className="pl-3" width="150" height="100" />
                <div className="p-2">
                  <h4>{title}</h4>
                  <p>{price}</p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
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
