import axios from 'axios';
import Image from 'next/image';
import { BASE_URL }from '../js/constants/Api';
import Layout from '../js/components/layout/Layout';
import TextRight from '../js/components/common/TextRight';

export default function Home({courses}) {

  return (
      <Layout>
        {courses.map((course)  => {
                let url = course.cover.url
                return <>
                          <Image src={url} key={course.id} priority="true" layout="responsive" width="2000" height="800"/>
                        </>
            })}
        <TextRight url="https://res.cloudinary.com/dewzqtmii/image/upload/v1619444906/photo_1515378791036_0648a3ef77b2_1c7d07af64.jpg" startDate="5 mei" title="Hoe het werkt" text="texttexttext" buttonPrimary="hello" buttonSecondary="hello to you too"/>
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