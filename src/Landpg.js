import { React, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomerList from "./components/CustomerList";
import AddCustomer from "./components/AddCustomer";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import "./my_css.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import  images from"./images/81.jpeg";


function Landpg() {
  return (
    <div class="div bg-success">
      <div class="navi" id="mm">
        <nav
          class="navbar navbar-expand-md navbar-dark"
          style={{ backgroundColor: "   #ffffff" }}
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <img src={images} alt="My Image" style={{height:"56px",width:"8rem"}}/>
            </li>
            <li class="nav-item" className="link" >
              <Link to="/home">
                <h5 style={{ color: "darkred" }}>
                  <b> HOME </b>
                </h5>
              </Link>
            </li>
            <li class="nav-item" className="link ">
              <Link to="/about">
                <h5 style={{ color: "darkred" }}>
                  <b> ABOUT </b>
                </h5>
              </Link>
            </li>
            <li class="nav-item" className="link">
              <Link to="/review">
                <h5 style={{ color: "darkred" }}>
                  <b> REVIEW </b>
                </h5>
              </Link>
            </li>
            <li class="nav-item" className="Link">
              <DropdownButton
                title="Login"
                variant="danger"
                style={{ float: "right",marginLeft:"38rem" }}
              >
                <Dropdown.Item>
                  <Link to="/aloginmv">
                    <a>
                      <h5> Admin Login </h5>
                    </a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/uloginmv">
                    <a>
                      <h5>User Login</h5>
                    </a>
                  </Link>
                </Dropdown.Item>
              </DropdownButton>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Landpg;