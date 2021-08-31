import Link from "next/link";
import HeaderModal from "./Modal";

export default function VideoHeader({
  date,
    title,
  video,
  course_type,
  viewHeight,
  modal,
  buttonPrimary,
  buttonSecondary,
  subtitle,
  headerButtonName,
}) {
  let height = { height: `${viewHeight}vh` };
  let headerType = "";
  let headerTitle = "";
  let headerSubtitle = "";
  let headerDate = "";
  let headerButtonPrimary = "";
  let headerButtonSecondary = "";
  let headerModal = "";

  if (course_type) {
    headerType = <p className="jumbotron__content-type m-0">{course_type}</p>;
  }
  if (title) {
    headerTitle = <p className="jumbotron__content-title">{title}</p>;
  }
  if (subtitle) {
    headerSubtitle = (
      <p className="jumbotron__content-subtitle">{subtitle}</p>
    );
  }
  if (date) {
    headerDate = (
      <p className="jumbotron__content-date col-5 px-0">
        {date}
      </p>
    );
  }
  if (buttonPrimary) {
    headerButtonPrimary = (
      <div className="col-12 p-0">
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
  if (modal === true) {
    headerModal = <HeaderModal key={title} title={title} />;
  }

  return (
      <div className="jumbotron__video container-fluid rounded-0 p-0">
        <video className="video" width="100%" style={height} muted autoPlay loop>
            <source src={video} />
        </video>
            <div className="jumbotron-overlay__video">
                <div
                className="container d-flex align-items-center jumbotron__content"
                style={height}
                >
          <div className="row w-50 justify-content-center">
                        <div className="col-12 col-lg-8">
                            <div className="row w-100 pt-5 mt-5">
                                <div className="p-0">
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

