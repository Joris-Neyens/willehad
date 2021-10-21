import PropTypes from "prop-types";

export default function PracticalinfoTraject({webUrl}) {


  return (
    <section className="py-lg-5 mt-3 my-lg-5">
      <div className="text-center pt-5">
        <h2>Praktische informatie (traject)</h2>
      </div>
      <div className="container pt-4">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5 offset-lg-1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra
              ipsum nunc aliquet. Est ante in nibh mauris cursus. Habitant morbi tristique senectus et. Nunc sed augue lacus viverra vitae. Condimentum lacinia
              quis vel eros donec ac odio tempor orci. Eu mi bibendum neque egestas congue.
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <p>
              Molestie nunc non blandit massa. Sed enim ut sem viverra aliquet eget. Ultrices mi tempus imperdiet nulla malesuada. Sit amet mattis vulputate
              enim nulla aliquet porttitor lacus luctus. Vestibulum sed arcu non odio euismod. Nunc non blandit massa enim nec. Leo a diam sollicitudin tempor
              id eu nisl nunc mi.{" "}
            </p>
          </div>
        </div>
        <div className="py-4 d-flex justify-content-center">
          <a href={webUrl}><button className="button__primary px-4 py-2">schrijf je nu in</button></a>
        </div>
      </div>
    </section>
  );
}

// Practicalinfo.propTypes = {
//   course: PropTypes.object.isRequired,
// }