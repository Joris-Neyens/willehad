import PropTypes from "prop-types";

export default function LatestsNewsletterSub({ newsletters }) {

  const newsletter = newsletters.slice(Math.max(-3)).map(function (newsletter) {
    const { email_address, id } = newsletter;

    return (
      <div
        key={id}
        className="row  mx-0 col-6 py-2 background-white border my-1"
      >
        <div className="col-12 p-0 text-small">{email_address}</div>
      </div>
    );
  });

  return <>{newsletter}</>;
}

LatestsNewsletterSub.propTypes = {
  newsletters: PropTypes.array,
}