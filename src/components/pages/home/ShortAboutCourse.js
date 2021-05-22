import Image from "next/image";

export default function shortAboutCourse({
  startDate,
  url,
  title,
  text,
  buttonPrimary,
  buttonSecondary,
}) {
  let buttonOne = "";
  let buttonTwo = "";
  let date = "";

  if (buttonPrimary) {
    buttonOne = (
      <button className="button__primary col-5">{buttonPrimary}</button>
    );
  }
  if (buttonSecondary) {
    buttonTwo = (
      <button className="button__secondary--dark col-5 ml-3">
        {buttonSecondary}
      </button>
    );
  }
  if (startDate) {
    date = `start ${startDate}`;
  }

  return (
    <section className="d-flex align-items-center py-lg-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-8 mx-auto col-lg-6 offset-lg-0 position-relative">
            <Image
              src={url}
              className="short-about-course__image pt-4"
              layout="responsive"
              width="200"
              height="140"
            />
            <span className="short-about-course__overlay position-absolute"></span>
          </div>
          <div className="col-lg-5 ml-lg-5 pt-4 d-flex flex-column justify-content-centr">
            <p className="short-about-course__date text-center text-lg-left m-0">
              {startDate}
            </p>
            <h2 className="pt-1 text-center text-lg-left">{title}</h2>
            <p className="pt-2 text-center text-lg-left">{text}</p>
            <div className="d-flex justify-content-center justify-content-lg-start">
              {buttonOne}
              {buttonTwo}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
