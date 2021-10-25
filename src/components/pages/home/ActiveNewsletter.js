import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function ActiveNewsletter() {

  const [formSubmitted, setFormSubmitted] = useState(false)

   const schema = yup.object().shape({
     fullname: yup.string().required("Vul je naam in om je in te schrijven"),
     email: yup.string().email("Vul een email adres in om je in te schrijven").required("Vul je email adres in om je in te schrijven"),
   });


    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });



  const onSubmit = async data => {
    event.preventDefault();
   const newData = new FormData(event.target);

    let url = "https://willehad.activehosted.com/proc.php";

    try {
      fetch(url, {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        body: newData,
      }).then(res => {
        console.log(res);
        handleShow();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className="newsletter d-flex justify-content-center align-items-center py-5">
        <div className="container px-md-0">
          <div className="row w-100 mx-auto px-0">
            <div className="col-12 pr-0 pl-0 pl-md-4pl-lg-5 col-md-6 pb-4 d-flex flex-column justify-content-center">
              <h2 className="">Nieuwsbrief</h2>
              <p className="text-lg-left m-0 ">Blijf op de hoogte van nieuwe cursussen, activiteiten en aanbiedingen.</p>
            </div>
            <div className="col-12 px-0 col-md-6 offset-lg-1 col-lg-5 d-flex align-items-center mt-3">
              <div className="row w-100 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="w-100">
                  <input {...register("u")} type="hidden" name="u" value="3" />
                  <input {...register("f")} type="hidden" name="f" value="3" />
                  <input {...register("s")} type="hidden" name="s" />
                  <input {...register("c")} type="hidden" name="c" value="0" />
                  <input {...register("m")} type="hidden" name="m" value="0" />
                  <input {...register("act")} type="hidden" name="act" value="sub" />
                  <input {...register("v")} type="hidden" name="v" value="2" />

                  <div className="col-12 offset-md-0 px-0 d-flex align-items-center">
                    <input {...register("fullname")} type="text" name="fullname" placeholder="Naam" className="form-control text-center mb-0" />
                  </div>
                  <p className="error text-center mb-2"> {errors.fullname?.message}</p>
                  <div className="col-12 offset-md-0 px-0 d-flex align-items-center">
                    <input {...register("email")} type="text" name="email" placeholder="Email" className="form-control text-center mb-1" />
                  </div>
                  <p className="error text-center">{errors.email?.message}</p>
                  <div className="col-12 offset-md-0 px-0 d-flex align-items-center">
                    <button type="submit" className="button__primary w-100 mx-lg-auto mt-3 mt-md-0 py-2 px-4">
                      Meld je aan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal aria-labelledby="contained-modal-title-vcenter"
      centered show={show} onHide={handleClose}>
        <Modal.Header className="background-blue" closeButton>
          <Modal.Title>Niewsbrief aanmelding</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Bedankt voor je interesse in onze nieuwsbrief.</p>
          <p>Check je inbox voor een email van het Thomischische Instituut om aanmelding te bevestigen.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="button__primary py-2 px-4" onClick={handleClose}>
            Sluit dit bericht
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
