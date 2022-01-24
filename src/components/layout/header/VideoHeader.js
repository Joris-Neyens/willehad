import Link from "next/link";
import { useState, useEffect } from "react";

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
  url,
}) {
  
  const size = useWindowSize();

  let height = { height: `${viewHeight}vh` };
  let headerType = "";
  let headerTitle = "";
  let headerSubtitle = "";
  let headerDate = "";
  let headerButtonPrimary = "";
  let headerButtonSecondary = "";

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
            className="button__primary col-12 px-5 py-2 mb-3"
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
          className="button__secondary--light col-12 py-2"
          title="hoe het werkt"
        >
          hoe het werkt
        </button>
      </Link>
    );
  }


  let videoHtml = ""
  
  
  if (size.width < 992) {
    videoHtml = <video className="video" width="100%" style={height} preload="metadata" muted loop disablePictureInPicture controlsList="nodownload"><source src={url} /></video>
  } if (size.width > 991) {
    videoHtml = <video className="video" width="100%" style={height} autoPlay preload="metadata" muted loop disablePictureInPicture controlsList="nodownload"><source src={url} /></video>
  }

  return (
    <div className="jumbotron__video container-fluid rounded-0 p-0">
      {videoHtml}
      <div className="jumbotron-overlay__video">
        <div className="container d-flex align-items-center jumbotron__content pl-0" style={height}>
          <div className="row w-md-50 mx-lg-0">
            <div className="col-12 col-lg-8">
              <div className="row col-8 col-md-6 pt-lg-5 pl-0 mt-lg-5">
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

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
}