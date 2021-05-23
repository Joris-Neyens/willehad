import PropTypes from "prop-types";

export default function Registrations({ registrations }) {
  console.log(registrations);
  return (
    <div className="row">
      {registrations.map(function (registration) {

        const { group, course_title, name, email, id } = registration;

        let groupHtml = "";

        if (group === "group_own") {
          groupHtml = <div className="col-6 col-md-10">Eigen groep</div>;
        } else if (group === "group_existing") {
          groupHtml = <div className="col-6 col-md-10 register__alarm">Geen groep</div>;
        }

        return (
          <div key={id} className="col-12 my-3 background-white">
            <div className="row p-2">
              <div className="col-6 col-md-2">Cursus</div>
              <div className="col-6 col-md-10">{course_title}</div>
              <div className="col-6 col-md-2">Deelnemer</div>
              <div className="col-6 col-md-10">{name}</div>
              <div className="col-6 col-md-2">Email</div>
              <div className="col-6 col-md-10">{email}</div>
              <div className="col-6 col-md-2">groep</div>
              {groupHtml}
            </div>
          </div>
        );
      })}
    </div>
  );
}
Registrations.propTypes = {
  registrations: PropTypes.array.isRequired,
};