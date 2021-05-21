export default function Reviews({ title, name, review }) {
  return (
    <section className="d-flex align-items-center py-lg-5">
      <div className="container py-lg-5">
        <h2 className="text-center">Wat anderen zeggen</h2>
        <div className="row pt-3 pt-lg-5">
          <div className="col-12 col-lg-4 pb-4 pb-lg-0">
            <div className="row">
              <h3 className="col-12 text-center">{title}</h3>
              <p className=" review__name col-12 text-center">{name}</p>
              <p className="col-12 text-center px-4">{review}</p>
            </div>
          </div>
          <div className="col-12 col-lg-4 pb-4 pb-lg-0">
            <div className="row">
              <h3 className="col-12 text-center">{title}</h3>
              <p className=" review__name col-12 text-center">{name}</p>
              <p className="col-12 text-center px-4">{review}</p>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="row">
              <h3 className="col-12 text-center">{title}</h3>
              <p className=" review__name col-12 text-center">{name}</p>
              <p className="col-12 text-center px-4">{review}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
