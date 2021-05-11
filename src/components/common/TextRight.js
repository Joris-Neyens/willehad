import Image from "next/image";

export default function TextRight({
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
    <section className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-5 offset-1 ml-5 position-relative">
            <Image
              src={url}
              className="text-right__image pt-4"
              layout="responsive"
              width="200"
              height="140"
            />
            <span className="text-righ__overlay position-absolute"></span>
          </div>
          <div className="col-5 ml-5 pt-4 d-flex flex-column justify-content-centr">
            <p className="text-right__date m-0">{startDate}</p>
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
