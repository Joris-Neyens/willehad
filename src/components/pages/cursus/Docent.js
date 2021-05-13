import Image from 'next/image'

export default function Docent({teacherInfo, teacher, teacherImage}) {
    return (
        <section className="py-5">
            <div className="container py-5">
                <h3 className="text-center pb-5">Ontmoet de docent</h3>
                <div className="row">
                    <div className="col-4 offset-2">
                        <p>Docent</p>
                        <h3>{teacher}</h3>
                        <p>{ teacherInfo}</p>
                    </div>
                    <div className="col-6">
                        <Image className="ml-5" src={teacherImage.url} width="400" height="400"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
