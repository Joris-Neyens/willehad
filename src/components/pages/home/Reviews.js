export default function Reviews({ reviews }) {


    const reviewHtml = reviews.slice(Math.max(-3)).map(function (reviewItem) {
      const { title, name, review, id } = reviewItem;

      return (
        <div
          key={id}
          className="col-12 col-md-6 offset-md-3 mb-md-4 col-lg-4 offset-lg-0 mb-md-0"
        >
          <div className="d-flex justify-content-center">
            <h3 className="review__title d-inline text-center">{title}</h3>
          </div>
          <p className=" review__name col-12 text-center">{name}</p>
          <p className="col-12 text-center px-4">{review}</p>
        </div>
      );
    });


  return (
    <section className="d-flex align-items-center py-lg-5">
      <div className="container py-lg-5">
        <h2 className="text-center pb-4">Wat anderen zeggen</h2>
        <div className="row">
          {reviewHtml}
        </div>
      </div>
    </section>
  );
}
