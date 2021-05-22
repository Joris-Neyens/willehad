import Link from "next/link";
import HeaderModal from './Modal';
export default function Header({
  url,
  viewHeight,
  title,
  header_subtitle,
  date,
  buttonPrimary,
  buttonSecondary,
  course_type,
  textCol,
  modal,
}) {
  const styles = {
    backgroundImage: `url(${url})`,
  };
  const textWidth = `col-12 col-lg-${textCol}`;

  let height = { height: `${viewHeight}vh` };
  let headerType = "";
  let headerTitle = "";
  let headerSubtitle = "";
  let headerDate = "";
  let headerButtonPrimary = "";
  let headerButtonSecondary = "";
  let headerModal = ""

  if (course_type) {
    headerType = <p className="jumbotron__content-type m-0">{course_type}</p>;
  }
  if (title) {
    headerTitle = <p className="jumbotron__content-title">{title}</p>;
  }
  if (header_subtitle) {
    headerSubtitle = <p className="jumbotron__content-subtitle">{header_subtitle}</p>;
  }
  if (date) {
    headerDate = <p className="jumbotron__content-date col-6 col-sm-4 col-md-3 col-lg-6 col-xl-5 px-0">{date}</p>;
  }
  if (buttonPrimary) {
    headerButtonPrimary = (
      <div className="col-12 p-0">
        <Link href={buttonPrimary}>
          <button
            className="button__primary col-12 py-1 mb-3"
            title="meer info">
            meer info
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
          title="cursus aanbod"
        >
          cursus aanbod
        </button>
      </Link>
    );
  }
  if (modal) {
    headerModal = <HeaderModal key={title} title={title}/>
  }

  return (
    <div className="jumbotron container-fluid rounded-0 p-0" style={styles}>
      <div className="jumbotron-overlay">
        <div
          className="container d-flex align-items-center jumbotron__content"
          style={height}
        >
          <div className="row w-100">
            <div className={textWidth}>
              <div className="row w-100 pt-5 mt-5">
                <div className="col-12">
                  {headerType}
                  {headerTitle}
                  {headerDate}
                  {headerSubtitle}
                  <div className="row pl-3">
                    {headerButtonPrimary}
                    {headerButtonSecondary}
                    {headerModal}
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
