

export default function LatestEvents({ registrations }) {
  console.log(registrations)

  const registration = registrations.slice(Math.max(- 5)).map(function (registration) {

        const {name, email, course_title, id} = registration


        return (
          <div key={id} className="row mx-0 py-2 my-1 background-light border">
            <div className="col-1">cursus:</div>
            <div className="col-3">{course_title}</div>
            <div className="col-1">Naam:</div>
            <div className="col-3">{name}</div>
            <div className="col-1">Email:</div>
            <div className="col-3">{email}</div>
          </div>
        );
      });

    return (
        <>
            {registration}
        </>
    )
}
