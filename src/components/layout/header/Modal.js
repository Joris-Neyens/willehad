import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { REGISTER_PATH } from "../../../api/baseUrl";

const schema = yup.object().shape({
  name: yup.string().required("vul aub je naam in"),
  email: yup
    .string()
    .required("vul aub een geldig email adres in")
    .email("vul aub een geldig email adres in"),
});

export default function HeaderModal({ title }) {
  const url = process.env.BASE_URL + REGISTER_PATH;

  const [show, setShow] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [postError, setPostError] = useState(null);
  const [submitButton, setSubmitButton] = useState("registreer");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    console.log(data);

    setSubmitting(true);
    setPostError(null);
    setSubmitButton("momentje..");
    try {
      const response = await axios({
        method: "POST",
        url: url,
        data: data,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setPostError(error.toString());
    } finally {
      setSubmitting(false);
      setSubmitButton("verstuurd");
    }
  }

  return (
    <>
      <div className="button__primary py-1 mb-3 px-4" onClick={handleShow}>
        meld je nu aan
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <h3 className="w-100 text-center mb-0">{title}</h3>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset disabled={submitting}>
            <Modal.Body>
              <div className="row my-3 align-items-center">
                <label className="col-2 offset-1 px-0 mb-0">naam:</label>
                <input
                  {...register("name")}
                  id="name"
                  className="col-7 form-control mr-2"
                />
                <p className="mb-0">{errors.name?.message}</p>
              </div>
              <div className="row  my-3 align-items-center">
                <label className="col-2 offset-1 px-0 mb-0">email:</label>
                <input
                  {...register("email")}
                  id="email"
                  className="col-7 form-control mr-2"
                />
                <p className="mb-0">{errors.email?.message}</p>
              </div>
              <div className="row my-4">
                <div className="col-7 offset-3 px-0">
                  <select {...register("group")} className="form-control">
                    <option value="group_own">Ik heb zelf een group</option>
                    <option value="group_existing">
                      Vind een groep voor mij
                    </option>
                  </select>
                </div>
              </div>
              <div className="form-check">
                <input {...register("newsletter")} type="checkbox" />
                <label className="form-check-label ml-3">
                  Meld je aan voor de nieuwsbrief
                </label>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button type="submit" className="button__primary--dark px-3">
                {submitButton}
              </button>
              {postError && (
                <span>
                  Sorry er is iets mis gegaan, probeer het later nog een keer
                </span>
              )}
            </Modal.Footer>
            <input
              {...register("course_title")}
              className="d-none"
              value={title}
            />
          </fieldset>
        </form>
      </Modal>
    </>
  );
}

// HeaderModal.propTypes = {
//   title: PropTypes.string.isRequired,
// }