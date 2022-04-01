import React, { Component } from "react";
import PropTypes from "prop-types";

class EventHander extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = (e) => {
    e.preventDefault();
    console.log("Button was clicked!");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Clich me</button>
      </div>
    );
  }
}

export default EventHander;
