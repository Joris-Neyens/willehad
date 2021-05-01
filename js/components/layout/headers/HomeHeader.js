export default function HomeHeader({url, id, alt}) {

    const styles = {
        backgroundImage: `url(${url})`
    }

    return (
        
            <div className="jumbotron container rounded-0 p-0" style={styles}>
                <div className="jumbotron-overlay">
                    <div className="container d-flex align-items-center jumbotron__content">
                        <div className="row w-100">
                            <div className="col-4">
                                <p className="jumbotron__content-title">Katholieke Catechisme</p>
                                <p className="jumbotron__content-date col-5 px-2">start 8 oktober</p>
                                <p className="jumbotron__content-subtitle">De basisbeginselen van het katholieke geloof</p>
                                <div className="row">
                                    <div className="col-12">
                                        <button className="button__primary col-7 py-1 mb-3" title="meer info">meer info</button>
                                        <button className="button__secondary--light col-7 py-1" title="cursus aanbod">cursus aanbod</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}
