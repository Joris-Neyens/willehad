

export default function Curriculum({curriculum}) {
    return (
      <section className="curriculum background-dark py-5">
        <div className="container py5">
          <h2 className="text-center">Wat je gaat leren</h2>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <p>{curriculum}</p>
            </div>
          </div>
        </div>
      </section>
    );
}
