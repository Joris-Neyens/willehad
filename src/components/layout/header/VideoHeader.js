import Link from "next/link";

export default function VideoHeader({
  date,
    title,
  video,
  course_type,
  viewHeight,
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

  console.log(buttonPrimary)

  if (course_type) {
    headerType = <p className="jumbotron__content-type m-0">{course_type}</p>;
  }
  if (title) {
    headerTitle = <p className="jumbotron__content-title">{title}</p>;
  }
  if (subtitle) {
    headerSubtitle = (
      <p className="jumbotron__content-subtitle pt-4 pb-3">{subtitle}</p>
    );
  }
  if (date) {
    headerDate = (
      <p className="jumbotron__content-date col-auto d-inline px-0">
        {date}
      </p>
    );
  }
  if (buttonPrimary) {
    headerButtonPrimary = (
      <div className="col-12 px-lg-0">
        <Link href={buttonPrimary}>
          <button
            className="button__primary col-12 px-5 py-1 mb-3"
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
    <div className="jumbotron__video container-fluid rounded-0 p-0">
      <video className="video" width="100%" style={height} muted autoPlay loop disablePictureInPicture controlsList="nodownload">
        <source src={video} />
      </video>
      <div className="jumbotron-overlay__video">
        <div className="container d-flex align-items-center jumbotron__content" style={height}>
          <div className="row w-md-50 justify-content-lg-center mx-lg-0">
            <div className="col-12 col-lg-8">
              <div className="row col-8 col-md-6 pt-lg-5 mt-lg-5">
                <div className="p-0">
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

