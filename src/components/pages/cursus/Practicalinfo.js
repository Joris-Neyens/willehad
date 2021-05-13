

export default function Practicalinfo({ info, id }) {
    
    const link = "/cursus-aanbod" + {id}
    return (
      <section className="py-5">
        <div className="container py-5">
          <p>{info}</p>
          <div className="d-flex justify-content-center">
              <button className="button__primary">Meld je nu aan</button>
          </div>
        </div>
      </section>
    );
}
