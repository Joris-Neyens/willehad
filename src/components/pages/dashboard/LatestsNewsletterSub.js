
export default function LatestsNewsletterSub({newsletters}) {
      const length = 4;

      const newsletter = newsletters
        .slice(0, length)
        .map(function (newsletter) {
          const { email_address, id } = newsletter;

          return (
            <div key={id} className="row py-2">
              <div className="col-12">{email_address}</div>
            </div>
          );
        });

      return <>{newsletter}</>;
}
