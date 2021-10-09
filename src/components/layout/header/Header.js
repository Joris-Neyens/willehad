import PropTypes from "prop-types";
import Link from "next/link";
import Image from 'next/image'

export default function Header({
  date,
  title,
  url,
  course_type,
  viewHeight,
  textCol,
  buttonPrimary,
  buttonSecondary,
  subtitle,
  headerButtonName,
  topic,
}) {

  const textWidth = `col-12 col-md-${textCol} col-lg-4 px-0`;

  let height = { height: `${viewHeight}vh` };
  let headerType = "";
  let headerTitle = "";
  let headerSubtitle = "";
  let headerDate = "";
  let headerButtonPrimary = "";
  let headerButtonSecondary = "";



  if (topic) {
    topic = <p className="jumbotron__content-type m-0">{topic}</p>;
  }
  if (title) {
    headerTitle = <p className="jumbotron__content-title__header">{title}</p>;
  }
  if (subtitle) {
    headerSubtitle = <p className="jumbotron__content-subtitle--header">{subtitle}</p>;
  }
  if (date) {
    headerDate = <p className="jumbotron__content-date col-6 col-sm-4 col-md-3 col-lg-6 col-xl-5 px-0">{date}</p>;
  }
if (buttonPrimary) {
  headerButtonPrimary = (
    <div className="col-auto col-lg-12 px-lg-0">
      <Link href={buttonPrimary}>
        <button className="button__primary col-md-auto col-lg-12 px-5 py-1 mb-3" title="meer info">
          {headerButtonName}
        </button>
      </Link>
    </div>
  );
}
  if (buttonSecondary) {
    headerButtonSecondary = (
      <Link href={buttonSecondary}>
        <button
          className="button__secondary--light col-12 py-1"
          title="hoe het werkt"
        >
          hoe het werkt
        </button>
      </Link>
    );
  }

  return (
    <div className="header">
      <div className="header__image">
        <div className="header__image--container position-relative" style={height}>
          <img className="headerImage" style={{ objectFit: "cover", height: viewHeight + "vh", width: "100vw" }} src={url}/>
        </div>
      </div>
      <div className="header__image--content">
        <div className="container d-flex align-items-center jumbotron__content" style={height}>
          <div className="row w-100 mx-auto w-md-50 mx-lg-0 pr-0">
            <div className="col-12 col-lg-7 pr-0">
              <div className="row col-12 px-0">
                <div className="p-0">
                  {topic}
                  {headerTitle}
                  {headerDate}
                  {headerSubtitle}
                  <div className="row pl-lg-3">
                    {headerButtonPrimary}
                    {headerButtonSecondary}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.prototype = {
  viewHeight: PropTypes.number,
  textCol: PropTypes.string,
  buttonPrimary: PropTypes.string,
  buttonSecondary: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  date: PropTypes.string,
  url: PropTypes.string.isRequired,
  courses: PropTypes.array,
  headerButtonName: PropTypes.string,
};