import axios from "axios";
import { BASE_URL } from '../../js/api/baseUrl';
import EditCourse from '../../js/components/pages/cursus-overzicht/EditCourse';

export default function Course({ course }) {
	console.log(course)

	return (<div>
		<EditCourse key={course.id} id={course.id} title={course.title} cover={ course.cover}/>
	</div>
	)
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