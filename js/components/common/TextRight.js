import Image from 'next/image'

export default function TextRight({startDate, url, title, text, buttonPrimary, buttonSecondary}) {

    let buttonOne = ""
    let buttonTwo = ""
    let date = ""

    if(buttonPrimary) {
        buttonOne = <button className="col-4">{buttonPrimary}</button>
    }
    if(buttonSecondary) {
        buttonTwo = <button className="col-4 offset-1">{buttonSecondary}</button>
    }
    if(startDate) {
        date = `start ${startDate}`
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-6 my-5">
                    <Image src={url} layout="responsive" width="200" height="140"/>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center">
                    {startDate}
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <div class="row">
                        {buttonOne}
                        {buttonTwo}
                    </div>
                </div>
            </div>
        </div>
    )
}
