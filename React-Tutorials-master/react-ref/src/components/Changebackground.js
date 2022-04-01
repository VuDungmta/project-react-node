import React, { Component } from "react";
import PropTypes from "prop-types";

class Changebackground extends Component {
  constructor(props) {
    super(props);

    this.state = { sayings: "" };
  }
  onFocus() {
    document.getElementById("myInput").style.backgroundColor = "red";
  }

  render() {
    return (
      <div>
        Bob angry{" "}
        <input type="button" id="myInput" onFocus={this.onFocus.bind(this)} />
        <br />
        Tim angry{" "}
        <input type="button" id="myInput" onFocus={this.onFocus.bind(this)} />
      </div>
    );
  }
}

Changebackground.propTypes = {};

export default Changebackground;
