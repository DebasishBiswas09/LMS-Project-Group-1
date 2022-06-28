import React, { Component } from "react";
import "./my_css.css";
import hcbgImage from "./images/106.jpg.jpg";

function About() {
  return (
    <div
      classname="main"
      style={{
        backgroundImage: "url(" + hcbgImage + ")",
        backgroundSize: "cover",
        height: "89vh",backdropFilter:"blur"
      }}
    >
      <section className="section">
        <div className="container">
          <div className="underline">
            <div class="pr">
              <marquee>Customers are Our first and foremost Priority</marquee>
            </div>
          </div>
        </div>
      </section>
      <div class="grid">
        <div class="item" id="vision">
          <br></br>
          <u> Our Vision </u>
          <br></br>
          <br></br>
          <p class="para">
            "A library management system is software that is designed to manage
            all the functions of a library. It helps librarian to maintain the
            database of new books and the books that are borrowed by members
            along with their due dates. This system completely automates all
            your library’s activities. The best way to maintain, organize, and
            handle countless books systematically is to implement a library
            management system software."
          </p>
        </div>
        <div class="item" id="mision">
          <br></br>
          <u> Our Mission </u>
          <br></br>
          <br></br>
          <p class="para">
            "An integrated library management system (LMS) is ERP software that
            helps in simplifying the daily operations of the library. Our main
            aim or mission is to manage and track the daily work of the library
            such as issuing books, return books, etc."
          </p>
        </div>
        <div class="item" id="core">
          <br></br>
          <u> Our Core Values </u>
          <br></br>
          <br></br>
          <p class="para">
            "The Core Values of the LMS software is to build a strong community
            of libraries around the world. If all the libraries will use the
            Library Management System, then they can easily operate and manage
            the huge amount of data generated from libraries. It is also used to
            track orders, books, and customers who have borrowed books from the
            library. "
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
