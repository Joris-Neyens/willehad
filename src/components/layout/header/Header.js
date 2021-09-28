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
}) {

  const textWidth = `col-12 col-lg-${textCol}`;

  let height = { height: `${viewHeight}vh` };
  let headerType = "";
  let headerTitle = "";
  let headerSubtitle = "";
  let headerDate = "";
  let headerButtonPrimary = "";
  let headerButtonSecondary = "";



  if (course_type) {
    headerType = <p className="jumbotron__content-type m-0 text-center text-lg-left">{course_type}</p>;
  }
  if (title) {
    headerTitle = <p className="jumbotron__content-title text-center text-lg-left">{title}</p>;
  }
  if (subtitle) {
    headerSubtitle = <p className="jumbotron__content-subtitle text-center text-lg-left">{subtitle}</p>;
  }
  if (date) {
    headerDate = <p className="jumbotron__content-date col-6 col-sm-4 col-md-3 col-lg-6 col-xl-5 px-0 text-center text-lg-left">{date}</p>;
  }
  if (buttonPrimary) {
    headerButtonPrimary = (
      <div className="col-8 offset-2 col-lg-4 offset-lg-0 offset-lg-0 p-0">
        <Link href={buttonPrimary}>
          <button
            className="button__primary col-12 py-1 mb-3"
            title="meer info"
          >
            { headerButtonName }
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
          <Image
            className="headerImage"
            src={url}
            layout="fill"
            objectFit="cover"
            priority="true"
            quality={50}
          />
        </div>
      </div>
      <div className="header__image--content">
        <div className="container d-flex align-items-center jumbotron__content" style={height}>
          <div className="row w-100 mx-auto">
            <div className={textWidth}>
              <div className="row w-100 mx-auto pt-5 mt-5">
                <div className="col-12 p-0">
                  {headerType}
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