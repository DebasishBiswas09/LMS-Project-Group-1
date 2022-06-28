import React, { Component } from "react";
import "./my_css.css";
import { Carousel, Card } from "react-bootstrap";
class Home extends Component {
  render() {
    return (
      <div class="wrapper">
        <div class="sliding-background">
          <span class="blink_text">
            WELCOME BACK, BIBLIOPHILE!
          </span>
        </div>
      </div>
    );
  }
}

export default Home;
