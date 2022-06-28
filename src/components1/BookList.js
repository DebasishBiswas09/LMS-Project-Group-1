import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import orderService from "../services/book.service";

const BookList = () => {
  const [book, setBooks] = useState([]);

  const init = () => {
    orderService
      .getAll()
      .then((response) => {
        console.log("Printing Books", response.data);
        setBooks(response.data);
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
        console.log("Book has been Deleted", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div className="container">
      <h3 style={{ color: "white", fontWeight: "bolder", fontSize: "40px" }}>
        List of Books
      </h3>
      <hr />
      <div>
        <Link to="/addb" className="btn btn-secondary mb-2">
          Add Books
        </Link>
        <table className="table table-bbked table-light table-striped">
          <thead className="thead-light">
            <tr>
              <th> Book Name </th>
              <th> Quantity </th>
              <th> Publisher </th>
              <th> Price </th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>
            {book.map((bk) => (
              <tr key={bk.id}>
                <td>{bk.bname}</td>
                <td>{bk.quantity}</td>
                <td>{bk.publisher}</td>
                <td>{bk.price}</td>
                <td>
                  <Link className="btn btn-warning" to={`/books/edit/${bk.id}`}>
                    Update
                  </Link>

                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => {
                      handleDelete(bk.id);
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

export default BookList;
