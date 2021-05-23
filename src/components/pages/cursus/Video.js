import PropTypes from "prop-types";

export default function Video({ video }) {

    
    return (
      <section>
        <div className="container mb-5 pb-5">
          <h2 className="text-center">Videos</h2>
            <div className="row d-flex justify-content-center">
              {video.map(function (video) {
                return (
                  <div className="px-3" key={video.id}>
                    <video width="320" height="240" controls>
                      <source src={video.url} />
                    </video>
                  </div>
                );
              })}
            </div>
        </div>
      </section>
    );
}

Video.propTypes = {
    video: PropTypes.array
}