import PropTypes from "prop-types";
import axios from "axios";
import { useRouter } from "next/router";
import { BASE_URL } from "../../../api/baseUrl";
import { useContext, useState } from "react";
import AuthContext from "../../../../src/context/AuthContext";

export default function DeleteCourse({ id }) {
  const [deleteButton, setDeleteButton] = useState("Delete cursus");

  const { getToken } = useContext(AuthContext);
  const token = getToken("auth");

  const url = BASE_URL + "courses/" + id;
  const router = useRouter();

  async function handleClick() {
    setDeleteButton("loading..");
    const deleteCourse = confirm("Bevestig of je de cursus wilt verwijderen");

    if (deleteCourse) {
      try {
        const response = await axios({
          method: "DELETE",
          url: url,
          headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "application/json",
          },
        });
        console.log("Success", response);
      } catch (error) {
        setDeleteButton("Fout tijdens verwijderen");
        console.log(error);
      } finally {
        router.push("/admin/dashboard/edit-cursus");
      }
    }
  }

  return (
    <div>
      <button onClick={handleClick} className="button__primary mx-auto">
        {deleteButton}
      </button>
    </div>
  );
}

DeleteCourse.propTypes = {
  id: PropTypes.string.isRequired,
}
