import React, { Component } from "react";
import spinner from "./327.gif";
export class Spinner extends Component {
  render() {
    return (
      <div>
        <img
          src={spinner}
          alt='dowload'
          style={{ display: "block", margin: "auto", width: "200px" }}
        />
      </div>
    );
  }
}

export default Spinner;
