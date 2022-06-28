import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import customerService from "../services/customer.service";

const AddCustomer = () => {
  const [cname, setCname] = useState("");
  const [cemail, setCemail] = useState("");
  const [cadd, setCadd] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveCustomer = (e) => {
    e.preventDefault();

    const customer = { cname, cemail, cadd, id };

    if (id) {
      //update
      customerService
        .update(customer)
        .then((response) => {
          console.log("Customer data updated successfully", response.data);
          navigate("/customer");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      // create
      customerService
        .create(customer)
        .then((response) => {
          console.log("Customer added successfully", response.data);
          navigate("/customer");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      customerService
        .get(id)
        .then((customer) => {
          setCname(customer.data.cname);
          setCemail(customer.data.cemail);
          setCadd(customer.data.cadd);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);
  function SubmitBtn() {
    if (cname && cemail && cadd)
      return (
        <button onClick={(o) => saveCustomer(o)} className="btn btn-success">
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
        Add and Update Customer
      </h3>
      <hr />
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4 is-invalid "
            id="cname"
            value={cname}
            onChange={(e) => setCname(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control col-4 is-invalid"
            id="cemail"
            value={cemail}
            onChange={(e) => setCemail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4 is-invalid"
            id="cadd"
            value={cadd}
            onChange={(e) => setCadd(e.target.value)}
            placeholder="Enter your address"
            required
          />
        </div>
        <div>
          {/* <button onClick={(e) => saveCustomer(e)} className="btn btn-success">
            Save
          </button> */}
          <SubmitBtn />
        </div>
      </form>
      <hr />
      <Link to="/customer">Back to List</Link>
    </div>
  );
};

export default AddCustomer;
