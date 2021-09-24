
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import { BASE_URL, REVIEWS_PATH } from "../../../api/baseUrl";
import AuthContext from "../../../../src/context/AuthContext";


export default function DeleteReviews({ reviews }) {

      const { register, handleSubmit } = useForm();

    const { getToken } = useContext(AuthContext);
    const token = getToken("auth");
    const router = useRouter();

    async function deleteReview(e) {
        e.preventDefault();

        const id = e.target.id
        const url = BASE_URL + REVIEWS_PATH + "/" + id;

    const deleteCourse = confirm("bevestig of je de review wilt verwijderen");

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
        console.log(error);
        } finally {
        router.push("/admin/dashboard/edit-home");
        }
    }
}

  
 

return (
  <>
    <h4 className="pt-5 mt-5">Review verwijderen</h4>
        {reviews.map(function (review) {
        
            const reviewId = review.id


            return (
              <div key={review.id} className="py-4 my-4 background-dark">
                <h4 className="text-center">{review.title}</h4>
                <p className="text-center">{review.review}</p>
                <div className="text-center">rating: {review.rating}</div>
                  <p
                    className="button__primary--dark col-4 offset-4 px-4 py-1 mt-2 text-center"
                    id={review.id}
                    onClick={deleteReview}
                  >
                    delete
                  </p>
              </div>
            );
    })}
  </>
);
}
