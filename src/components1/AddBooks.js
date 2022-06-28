import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import orderService from "../services/book.service";

const AddBooks = () => {
  const [bname, setBname] = useState("");
  const [publisher, setPublisher] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveBooks = (o) => {
    o.preventDefault();
    const bk = { bname, quantity, publisher, price, id };

    if (id) {
      //update
      orderService
        .update(bk)
        .then((response) => {
          console.log("Books data updated successfully", response.data);
          navigate("/book");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      // create
      orderService
        .create(bk)
        .then((response) => {
          console.log("Books have been added successfully", response.data);
          navigate("/book");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      orderService
        .get(id)
        .then((bk) => {
          setBname(bk.data.bname);
          setPublisher(bk.data.publisher);
          setQuantity(bk.data.quantity);
          setPrice(bk.data.price);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);
  function SubmitBtn() {
    if (bname && publisher && quantity && price)
      return (
        <button onClick={(o) => saveBooks(o)} className="btn btn-success">
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
      <h3 style={{ color: "white", fontWeight: "bolder", fontSize: "40px" }}>
        Add and Update Books
      </h3>
      <hr />
      <form class="was-validated">
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4 is-invalid"
            id="bname"
            value={bname}
            onChange={(o) => setBname(o.target.value)}
            placeholder="Enter Book Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4 is-invalid"
            id="publisher"
            value={publisher}
            onChange={(o) => setPublisher(o.target.value)}
            placeholder="Enter Publisher"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control col-4 is-invalid"
            id="quantity"
            value={quantity}
            onChange={(o) => setQuantity(o.target.value)}
            placeholder="Enter Quantity"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4 invalid"
            id="price"
            value={price}
            onChange={(o) => setPrice(o.target.value)}
            placeholder="Enter the price"
            required
          />
        </div>
        <div>
          {/* <button onClick={(o) => saveBooks(o)} className="btn btn-warning">
            Save
          </button> */}
          <SubmitBtn />
        </div>
      </form>
      <hr />
      <Link to="/book">Back to List</Link>
    </div>
  );
};

export default AddBooks;
