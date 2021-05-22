import PropTypes from "prop-types";

export default function LatestEvents({ registrations }) {

  const registration = registrations
    .slice(Math.max(-5))
    .map(function (registration) {
      const { name, email, course_title, id } = registration;

      return (
        <section
          key={id}
          className="row mx-0 py-2 my-1 background-white border"
        >
          <div className="col-2 col-md-1 text-small">cursus:</div>
          <div className="col-10 col-md-3 text-small">{course_title}</div>
          <div className="col-2 col-md-1 text-small">Naam:</div>
          <div className="col-10 col-md-3 text-small">{name}</div>
          <div className="col-2 col-md-1 text-small">Email:</div>
          <div className="col-10 col-md-3 text-small">{email}</div>
        </section>
      );
    });

  return <>{registration}</>;
}

LatestEvents.propTypes = {
  registrations: PropTypes.array.isRequired,
}