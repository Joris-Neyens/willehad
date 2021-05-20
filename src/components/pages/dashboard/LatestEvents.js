

export default function LatestEvents({ registrations}) {

    const length = 4;

    const registration = registrations.slice(0, length).map(function (registration) {

        const {name, email, course_title, id} = registration


        return (
          <div key={id} className="row mx-0 py-2 my-1 background-light border">
            <div className="col-1">cursus:</div>
            <div className="col-2">{course_title}</div>
            <div className="col-1">Naam:</div>
            <div className="col-3">{name}</div>
            <div className="col-1">Email:</div>
            <div className="col-4">{email}</div>
          </div>
        );
      });

    return (
        <>
            {registration}
        </>
    )
}
