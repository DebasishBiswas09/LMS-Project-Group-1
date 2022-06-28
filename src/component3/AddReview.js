import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import reviewService from "../services/review.service";

const AddReview = () => {
  const [rname, setRname] = useState("");
  const [remail, setRemail] = useState("");
  const [rcomment, setRcomment] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveReview = (r) => {
    r.preventDefault();

    const review = { rname, remail, rcomment, id };
    // while(id){
    reviewService
      .create(review)
      .then((response) => {
        console.log("Review added successfully", response.data);
        navigate("/review");
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
    // }
  };
  useEffect(() => {
    if (id) {
      reviewService
        .get(id)
        .then((review) => {
          setRname(review.data.rname);
          setRemail(review.data.remail);
          setRcomment(review.data.rcomment);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

  function SubmitBtn() {
    if (rname && remail && rcomment)
      return (
        <button onClick={(r) => saveReview(r)} className="btn btn-success">
          Save
        </button>
      );
    else
      return (
        <button className="btn btn-success" disabled>
          Save
        </button>
      );
  }

  return (
    <div className="container">
      <h3 style={{ color: "white", fontWeight: "bolder", fontSize: "35px" }}>
        Add Review
      </h3>
      <hr />
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4 is-invalid"
            id="rname"
            value={rname}
            onChange={(r) => setRname(r.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control col-4 is-invalid"
            id="remail"
            value={remail}
            onChange={(r) => setRemail(r.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4 is-invalid"
            id="rcomment"
            value={rcomment}
            onChange={(r) => setRcomment(r.target.value)}
            placeholder="Enter your precious comment"
            required
          />
          <SubmitBtn />
        </div>
      </form>
    </div>
  );
};

export default AddReview;
