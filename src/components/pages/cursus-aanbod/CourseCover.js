export default function CourseCover({ header }) {

    let backgroundImage = { backgroundImage: `url(${ header.header_image.url }`}
    let height = { height: `300px` };
    console.log(header)

  return (
    <div className="jumbotron container rounded-0 p-0 mt-4" style={backgroundImage}>
      <div className="jumbotron-overlay">
        <div className="container d-flex align-items-center jumbotron__content" style={height}>
          <div className="course__cover row px-3 px-md-5 pt-5 ml-md-5">
            <div className="col-12 p-0">
              <h4>Cursus Traject</h4>
            </div>
                <div calssName="col-12">
                <h2>{header.title}</h2>
                <p>{header.header_subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
