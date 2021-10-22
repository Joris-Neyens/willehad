import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../../api/baseUrl";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../../../../src/context/AuthContext";

const postUrl = BASE_URL + "upload";

export default function PostHeaderImage({ id, cover }) {

  console.log(cover)
  
  let imageHtml = "";

  if (cover) {
    imageHtml = <Image src={cover.url} width="3000" height="1500" />;
  }

  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit } = useForm();
  const [videoUrl, setVideoUrl] = useState(imageHtml);
  const [submitButton, setSubmitButton] = useState(<button className="button__primary--dark col-12 col-md-6 col-4  py-1 mt-3">upload</button>);

  const { getToken } = useContext(AuthContext);
  const token = getToken("auth");

  const submitData = async data => {
    console.log(data.file[0]);
    setSubmitting(true);
    setSubmitButton(
      <button className="button__primary--dark col-4  py-1 mt-3">
        <span className="mr-3 mb-2 spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading...
      </button>
    );
    try {
      const formData = new FormData();
      formData.append("files", data.file[0]);
      formData.append("ref", "courses");
      formData.append("refId", id);
      formData.append("field", "cover");

      const response = await axios({
        method: "POST",
        url: postUrl,
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      });
      console.log("Success", response);
      if (response.status === 200) {
        setSubmitButton(<button className="button__primary--dark col-4  py-1 mt-3">upload succesvol</button>);
        setVideoUrl(<Image src={response.data[0].url} width="3000" height="1500" />);
      }
    } catch (error) {
      setSubmitButton(
        <div>
          <button className="button__primary--dark col-4  py-1 mt-3">probeer opnieuw</button>
          <p className="alert">upload niet gelukt</p>
        </div>
      );
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="col-12 p-0">
        {videoUrl}
      </div>
      <div className="FileUpload mt-2">
        <form className="mb-5" onSubmit={handleSubmit(submitData)}>
          <div className="row">
            <div className="col-12">
              <fieldset disabled={submitting}>
                <input type="file" {...register("file")} />
              </fieldset>
            </div>
            <div className="col-12">{submitButton}</div>
          </div>
        </form>
      </div>
    </>
  );
}

PostHeaderImage.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.object,
};
