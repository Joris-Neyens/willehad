

export default function Curriculum({ chapters }) {

  
  
  function openCurriculum() {

    const curriculum__items = document.querySelector(".curriculum__items");
    const curriculum__plus = document.querySelector(".curriculum__plus");

    curriculum__items.classList.toggle("d-none");
    if (curriculum__plus.innerHTML === "+") {
      curriculum__plus.innerHTML = "-"
    } else{
      curriculum__plus.innerHTML = "+";
    }
  }



  return (
    <div className="background-light py-5">
      <section className="container">
        <div onClick={openCurriculum} className="py-lg-3 curriculum">
          <div className="row w-100 d-flex justify-content-between">
            <div>
              <h2 className="px-2 px-lg-5 text-center">Curriculum</h2>
            </div>
            <div className="d-flex align-items-center">
              <p className="m-0 curriculum__plus">+</p>
            </div>
          </div>
        </div>
        <div className="curriculum__items d-none background-light">
          {chapters.map(function (chapter) {
            return (
              <p key={chapter.id} className="py-2 px-2 px-lg-5 mt-3">
                {chapter.name}
              </p>
            );
          })}
        </div>
      </section>
    </div>
  );
}
