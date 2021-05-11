import Link from "next/link";

export default function Header({
  url,
  viewHeight,
  textWidth,
  title,
  subtitle,
  date,
  buttonPrimary,
  buttonSecondary,
}) {
  const styles = {
    backgroundImage: `url(${url})`,
  };
  let height = { height: `${viewHeight}vh` }
  let headerTitle = "";
  let colWidth = `col-${textWidth}`;
  let headerSubtitle = "";
  let headerDate = "";
  let headerButtonPrimary = "";
  let headerButtonSecondary = "";

  if (title) {
    headerTitle = <p className="jumbotron__content-title">{title}</p>;
  }
  if (subtitle) {
    headerSubtitle = <p className="jumbotron__content-subtitle">{subtitle}</p>;
  }
  if (date) {
    headerDate = <p className="jumbotron__content-date col-5 px-0">{date}</p>;
  }
  if (buttonPrimary) {
    headerButtonPrimary =
      <div className="col-12 p-0">
        <Link href={buttonPrimary}>
          <button className="button__primary col-7 py-1 mb-3" title="meer info">
            meer info
          </button>
        </Link>
      </div>

  }
  if (buttonSecondary) {
    headerButtonSecondary = 
      <Link href={buttonSecondary}>
        <button
          className="button__secondary--light col-7 py-1"
          title="cursus aanbod"
        >
          cursus aanbod
        </button>
      </Link>
  }

  return (
    <div className="jumbotron container rounded-0 p-0" style={styles}>
      <div className="jumbotron-overlay">
        <div className="container d-flex align-items-center jumbotron__content" style={height}>
          <div className="row w-100 pt-5 mt-5">
            <div className={colWidth}>
              {headerTitle}
              {headerDate}
              {headerSubtitle}
              <div className="row pl-3">
                {headerButtonPrimary}
                {headerButtonSecondary}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
