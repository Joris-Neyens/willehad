import Image from "next/image";

export default function ShortAbout({ url, title, text, button }) {
  return (
    <section className="d-flex align-items-center py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-5 ml-5 pt-4 d-flex flex-column justify-content-centr">
            <h2 className="pt-1">{title}</h2>
            <p className="pt-2">{text}</p>
            <div className="row mt-4">
              <button className="button__secondary--dark col-10 ml-3">
                {button}
              </button>
            </div>
          </div>

          <div className="col-5 ml-5">
            <div>
                <Image
                  src={url}
                  className="text-right__image "
                  layout="responsive"
                  width="100px"
                  height="57px"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
