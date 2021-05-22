import Modal from '../../layout/header/Modal';

export default function Practicalinfo({ course}) {
    
    const {practical_info_1, practical_info_2, title, id} = course


    return (
      <section className="py-5 mt-5">
        <div className="text-center pt-5">
          <h2>Praktische informatie</h2>
        </div>
        <div className="container pt-4">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 offset-lg-1">
              <p>{practical_info_1}</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <p>{practical_info_2}</p>
            </div>
          </div>
          <div className="py-4 d-flex justify-content-center">
            <Modal key={id} title={title}/>
          </div>
        </div>
      </section>
    );
}
