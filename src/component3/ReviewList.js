import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import reviewService from "../services/review.service";
import AddReview from "./AddReview";
const ReviewList = () => {
  const [review, setreview] = useState([]);

  const init = () => {
    reviewService
      .getAll()
      .then((response) => {
        console.log("Printing reviews", response.data);
        setreview(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log("Printing id", id);
    reviewService
      .remove(id)
      .then((response) => {
        console.log("Review has been Deleted", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div className="container">
      <h3 style={{ color: "white", fontWeight: "bolder", fontSize: "40px" }}>
        List of reviews
      </h3>
      <hr />
      <div>
        <Link to="/add" className="btn btn-secondary mb-2" >
          Add review
        </Link>
        <table className="table  table-bordered table-light  table-striped ">
          <thead className="thead-light">
            <tr>
              <th> Customer's Name </th>
              <th> Customer's Email </th>
              <th> Customer's Comment</th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>
            {review.map((rk) => (
              <tr key={rk.id}>
                <td>{rk.rname}</td>
                <td>{rk.remail}</td>
                <td >{rk.rcomment}</td>
                <td>
                  {/* <Link className="btn btn-warning" to={`/books/edit/${r.id}`}>
                    Update
                  </Link> */}

                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => {
                      handleDelete(rk.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewList;
