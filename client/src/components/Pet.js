import "../css/InfoBoard.css";
import React, { Component } from "react";
import Doggy from "../images/IMG_4828.JPG";

class Pet extends Component {
  render() {
    return (
      <div className="z-depth-5 hoverable white">
        <div className="Intro">
          <img src={Doggy} alt="Doggy" height="300" width="300" />
        </div>
      </div>
    );
  }
}

export default Pet;