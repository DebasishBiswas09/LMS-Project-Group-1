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
import hcbgImage from "./images/109.jpg";
  


function Admin() {
  return (
    <div
      className="adm"
      style={{
        backgroundImage: "url(" + hcbgImage + ")",
        backgroundSize: "cover",
        backdropFilter: "blur(10px)",
        height: "89vh",
        position: "relative",
      }}>
      <div className="myadm">
        <Link to="/customer">
          <br/>
          <button
            className="button1 btn-large btn-light"
            style={{ fontWeight: "bolder"}}
          > 
            View Customers
          </button>
        </Link>
        <br />
        <br />
      </div>

      <div  className="mybk">
        <Link to="/book">
          <br/>
          <button
            className="button1 btn-large btn-light"
            style={{ fontWeight: "bolder" }}
          >
            View Books
          </button>
        </Link>
        <br />
      </div>
        <Link to="/home">
          <button
            className="button1 btn-large btn-danger"
            style={{ fontWeight: "bolder", marginLeft:"625px", marginTop:"435px" }}
          >
            SIGN OUT
          </button>
        </Link>
      
    </div>
  );
    }

export default Admin;
