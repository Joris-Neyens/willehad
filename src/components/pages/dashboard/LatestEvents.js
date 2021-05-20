

export default function LatestEvents({ registrations}) {

    const length = 4;

    const registration = registrations.slice(0, length).map(function (registration) {

        const {name, email, course_title, id} = registration


        return (
          <div key={id} className="row py-2">
            <div className="col-4">{course_title}</div>
            <div className="col-4">{name}</div>
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
