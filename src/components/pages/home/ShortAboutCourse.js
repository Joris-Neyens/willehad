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
      <button className="button__primary col-4 ml-3">{buttonPrimary}</button>
    );
  }
  if (buttonSecondary) {
    buttonTwo = (
      <button className="button__secondary--dark col-4 ml-3">
        {buttonSecondary}
      </button>
    );
  }
  if (startDate) {
    date = `start ${startDate}`;
  }

  return (
    <section className="d-flex align-items-center py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-6 position-relative">
            <Image
              src={url}
              className="short-about-course__image pt-4"
              layout="responsive"
              width="200"
              height="140"
            />
            <span className="short-about-course__overlay position-absolute"></span>
          </div>
          <div className="col-5 ml-5 pt-4 d-flex flex-column justify-content-centr">
            <p className="short-about-course__date m-0">{startDate}</p>
            <h2 className="pt-1">{title}</h2>
            <p className="pt-2">{text}</p>
            <div className="row mt-4">
              {buttonOne}
              {buttonTwo}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
