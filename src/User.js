import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Link,
  Route,
  useNavigate,
} from "react-router-dom";
import "./my_css.css";
import hcbgImage from "./images/110.jpg";

function User() {
  return (
    <div
      className="us"
      style={{
        backgroundImage: "url(" + hcbgImage + ")",
        backgroundSize: "cover",
        height: "89vh",
        position: "relative",
      }}
    >
      <div className="myus">
        <Link to="/order">
          <button
            className="button1 btn-large btn-dark "
            style={{ fontWeight: "bolder", marginTop: "30px", color: "white" }}
          >
            View Orders
          </button>
        </Link>
        <br />
        <br />
      </div>
      <Link to="/home">
        <button
          className="button1 btn-large btn-danger"
          style={{
            fontWeight: "bolder",
            marginLeft: "615px",
            marginTop: "450px",
          }}
        >
          SIGN OUT
        </button>
      </Link>
    </div>
  );
}

export default User;
