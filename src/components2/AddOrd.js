import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import orderService from "../services/order.service";
import "bootstrap/dist/css/bootstrap.min.css";
const AddOrd = () => {
  const [bname, setUbname] = useState([]);
   const [cname, setCname] = useState("");
   const [cemail, setCemail] = useState("");
  const [orddate, setOrddate] = useState("");
 

  const navigate = useNavigate();
  const { id } = useParams();
   
  


  const saveOrd = (e) => {
    e.preventDefault();

    const ord = { bname, cname, cemail,orddate, id };

    if (id) {
      //update
      orderService
        .update(ord)
        .then((response) => {
          console.log("Order data updated successfully", response.data);
          navigate("/order");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      // create
      orderService
        .create(ord)
        .then((response) => {
          console.log("Order added successfully", response.data);
          navigate("/order");
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
        .then((ord) => {
          setUbname(ord.data.bname);
           setCname(ord.data.cname);
           setCemail(ord.data.cemail);
           setOrddate(ord.data.orddate);
          
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);
  function SubmitBtn() {
    if (bname && cname && cemail&&orddate)
      return (
        <button onClick={(o) => saveOrd(o)} className="btn btn-success">
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
        Add and Update Orders
      </h3>
      <hr />
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4 is-invalid"
            id="bname"
            value={bname}
            onChange={(e) => setUbname(e.target.value)}
            placeholder="Enter Book Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4 is-invalid"
            id="cname"
            value={cname}
            onChange={(e) => setCname(e.target.value)}
            placeholder="Enter Customer Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4 is-invalid"
            id="cemail"
            value={cemail}
            onChange={(e) => setCemail(e.target.value)}
            placeholder="Enter Customer Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control col-4 is-invalid"
            id="orddate"
            value={orddate}
            onChange={(e) => setOrddate(e.target.value)}
            placeholder="Enter OrderDate"
            required
          />
        </div>
       

        <div>
          {/* <button onClick={(e) => saveOrd(e)} className="btn btn-primary">
            Save
          </button> */}
          <SubmitBtn />
        </div>
      </form>
      <hr />
      <Link to="/order">Back to List</Link>
    </div>
  );
};

export default AddOrd;
