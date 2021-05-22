import PropTypes from "prop-types";

export default function Newsletters({ registrations, newsletters }) {
  return (
    <div>
      <h4 className="pt-3">Aanmelding uit registraties</h4>
      {registrations.map(function (registration) {
        const { email, id } = registration;

        return (
          <div key={id} className="background-light px-2 py-1">
            {email}
          </div>
        );
      })}
      <h4 className="pt-3">Aanmeldingen homepage</h4>
      {newsletters.map(function (newsletter) {
        const { email_address, id } = newsletter;

        return (
          <div key={id} className="background-light px-2 py-1">
            {email_address}
          </div>
        );
      })}
    </div>
  );
}

Newsletters.propTypes = {
    registrations: PropTypes.array.isRequired,
    newsletters: PropTypes.array.isRequired,
}

