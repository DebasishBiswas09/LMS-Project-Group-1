import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import orderService from "../services/order.service";

const OrderList = () => {
  const [ord, setOrd] = useState([]);

  const init = () => {
    orderService
      .getAll()
      .then((response) => {
        console.log("Printing Orders", response.data);
        setOrd(response.data);
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
    orderService
      .remove(id)
      .then((response) => {
        console.log("Orders has been Deleted", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div className="container">
      <h3 style={{ color: "white", fontWeight: "bolder", fontSize: "40px" }}>
        List of Orders
      </h3>
      <hr />
      <div>
        <Link to="/addo" className="btn btn-secondary mb-2">
          Add Order
        </Link>
        <table className="table table-bordered table-light table-striped">
          <thead className="thead-light">
            <tr>
              <th> BOOK NAME</th>
              <th>CUSTOMER NAME </th>
              <th>CUSTOMER EMAIL</th>
              <th>ORDER DATE </th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>
            {ord.map((or) => (
              <tr key={or.id}>
                <td>{or.bname}</td>
                <td>{or.cname}</td>
                <td>{or.cemail}</td>
                <td>{or.orddate}</td>

                <td>
                  <Link
                    className="btn btn-warning"
                    to={`/orders/edit/${or.id}`}
                  >
                    Update
                  </Link>

                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => {
                      handleDelete(or.id);
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
      <Link to="/user">Back to List</Link>
    </div>
  );
};

export default OrderList;
