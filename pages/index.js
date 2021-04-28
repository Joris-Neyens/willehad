import axios from 'axios';
import Image from 'next/image';
import { BASE_URL }from '../js/constants/Api';
import Layout from '../js/components/layout/Layout';

export default function Home({courses}) {

  return (
      <Layout>
            {courses.map((course)  => {
                let url = course.cover.url
                return <>
                          <Image src={url} key={course.id} priority="true" layout="responsive" width="2000" height="800"/>
                        </>
            })}
      </Layout>
  )
}
export async function getStaticProps() {

  const url = BASE_URL + "courses"

  let courses = [];

  try {
    const response = await axios.get(url);
    console.log(response.data)
    courses = response.data
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      courses: courses,
    }
  }
}