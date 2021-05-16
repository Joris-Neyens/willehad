

export default function Curriculum({curriculum}) {
    return (
      <section className="py-5 my-5">
        <div className="container py5">
          <h2 className="text-center">Wat je gaat leren</h2>

          <div className="d-flex justify-content-center">
                <p className="w-50">{curriculum}</p>
          </div>
        </div>
      </section>
    );
}
