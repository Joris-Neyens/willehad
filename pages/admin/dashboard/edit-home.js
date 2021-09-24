import PropTypes from "prop-types";
import DashboardNav from "../../../src/components/layout/DashboardNav";
import axios from "axios";
import AdminLayout from "../../../src/components/layout/AdminLayout";
import Head from "../../../src/components/head/Head";
import SideNav from "../../../src/components/layout/SideNav";
import PostHeaderVideo from '../../../src/components/pages/edit-home/postHeaderVideo';
import PutHomeInfo from "../../../src/components/pages/edit-home/PutHomeInfo";
import PutHomeHeader from "../../../src/components/pages/edit-home/PutHomeHeader";
import PutReview from '../../../src/components/pages/edit-home/PutReview';
import DeleteReviews from '../../../src/components/pages/edit-home/DeleteReviews'
import { BASE_URL, HOME_PATH , REVIEWS_PATH} from "../../../src/api/baseUrl";

export default function editHome({ home, reviews }) {
  const { id, header_image, header_video } = home;

  return (
    <div>
      <Head title="edit homepage" description="edit homepage willehad"></Head>
      <AdminLayout>
        <DashboardNav />
        <div className="container-fluid">
          <div className="row">
            <SideNav />
            <div className="col-lg-8 pb-4 mt-5">
              <div className="row">
                <div className="col-lg-10 pl-lg-5">
                  <h1>Edit Home</h1>
                  <p>Header</p>
                  <PutHomeHeader id={id} header_image={header_image} />
                  <PostHeaderVideo id={id} videoUrl={header_video} />
                  <PutHomeInfo home={home}/>
                  <PutReview reviews={reviews} />
                  <DeleteReviews reviews={reviews} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </div>
  );
}

export async function getServerSideProps() {
  const url = BASE_URL + HOME_PATH;
  const reviewsUrl = BASE_URL + REVIEWS_PATH;

  let home = null;
  let reviews = null;

  try {
    const response = await axios.get(url);
    home = response.data;
  } catch (error) {
    console.log(error);
  }
  try {
    const response = await axios.get(reviewsUrl);
    reviews = response.data;
  } catch (error) {
    console.log(error);
  }
    
  return {
    props: {
      home: home,
      reviews: reviews,
    },
  };
}

editHome.propTypes = {
  home: PropTypes.object.isRequired,
}