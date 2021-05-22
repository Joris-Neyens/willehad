import Image from 'next/image'

export default function Docent({teacherInfo, teacher, teacherImage}) {
    return (
      <section className="pb-5 pt-3 background-dark ">
        <div className="container py-5">
          <h2 className="text-center pb-3">Ontmoet de docent</h2>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 offset-lg-2 order-2 oder-md-1">
              <p className="text-center text-md-left mb-2">Docent</p>
              <h3 className="text-center text-md-left">{teacher}</h3>
              <p className="text-center text-md-left">{teacherInfo}</p>
            </div>
            <div className="col-6  offset-3 offset-md-0 mt-md-5 order-1 order-md-2">
              <Image
                className="ml-md-5 mb-3"
                src={teacherImage.url}
                width="300"
                height="300"
              />
            </div>
          </div>
        </div>
      </section>
    );
}
