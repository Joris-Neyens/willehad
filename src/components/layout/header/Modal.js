import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


export default function HeaderModal({ title }) {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="button__primary py-1 mb-3 px-4 rounded"
        onClick={handleShow}
      >
        meld je nu aan
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <h3 className="w-100 text-center mb-0">{title}</h3>
        </Modal.Header>
        <form>
          <Modal.Body>
            <div className="container">
              <div className="row my-3 align-items-center">
                <label className="col-3 px-0 mb-0" for="name">
                  naam:
                </label>
                <input id="name" className="col-7 form-control mr-2" />
              </div>
              <div className="row my-3 align-items-center">
                <label className="col-3 px-0 mb-0" for="lastName">
                  achternaam:
                </label>
                <input id="lastName" className="col-7 form-control mr-2" />
              </div>
              <div className="row  my-3 align-items-center">
                <label className="col-3 px-0 mb-0" for="email">
                  email:
                </label>
                <input id="email" className="col-7 form-control mr-2" />
              </div>
            </div>
<div class="row my-4">
      <div class="col-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
          <label class="form-check-label" for="gridRadios1">
            Ik heb zelf een groep
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
          <label class="form-check-label" for="gridRadios2">
            Ik wil in een groep geplaatst worden
          </label>
        </div>
      </div>
    </div>
            <div className="form-check">
              <input
                defaultValue="true"
                type="checkbox"
                class="form-check-input"
                id="newsletter"
              />
              <label className="form-check-label" for="newsletter">
                Meld je aan voor de nieuwsbrief
              </label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div
              className="button__primary--dark rounded px-3"
              onClick={handleClose}
            >
              Meld je aan
            </div>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );

}

