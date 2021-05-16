import Image from "next/image";

export default function ShortAbout({ url, title, text, button }) {

  console.log(button)

  let whitepaperButton = ""
  if (button) {
    whitepaperButton = 
      <button className="button__primary--dark col-4">Whitepaper</button>
    
  }

  return (
    <section className="d-flex align-items-center py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-5 ml-5">
            <h2 className="pt-1">{title}</h2>
            <p className="pt-2">{text}</p>
            <div className="row mt-4">
              { whitepaperButton }
            </div>
          </div>

          <div className="col-5 offset-1 my-4">
                <Image
                  src={url}
                  className="text-right__image "
                  layout="fill"
             
                />
          </div>
        </div>
      </div>
    </section>
  );
}
