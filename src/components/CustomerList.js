import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import customerService from "../services/customer.service";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  const init = () => {
    customerService
      .getAll()
      .then((response) => {
        console.log("Printing customers data", response.data);
        setCustomers(response.data);
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
    customerService
      .remove(id)
      .then((response) => {
        console.log("customer deleted successfully", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div className="container">
      <h3 style={{ color: "white", fontWeight: "bolder", fontSize: "40px" }}>
        List of Customers
      </h3>
      <hr />
      <div>
        <Link to="/addc" className="btn btn-secondary mb-2">
          Add Customer
        </Link>
        <table className="table table-bordered table-light table-striped">
          <thead className="thead-light">
            <tr>
              <th> Name</th>
              <th> Email</th>
              <th> Address</th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.cname}</td>
                <td>{customer.cemail}</td>
                <td>{customer.cadd}</td>
                <td>
                  <Link
                    className="btn btn-warning"
                    to={`/customers/edit/${customer.id}`}
                  >
                    Update
                  </Link>

                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => {
                      handleDelete(customer.id);
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
      <Link to="/admin">Back to List</Link>
    </div>
  );
};

export default CustomerList;
