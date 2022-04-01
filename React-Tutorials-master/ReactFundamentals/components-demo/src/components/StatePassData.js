import React, { Component } from "react";
import PropTypes from "prop-types";

class StatePassData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "dung",
      age: 25,
    };
  }
  changeName = () => {
    this.setState({
      name: "Bùi Văn Tý",
      age: 27,
    });
  };
  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <p>age:{this.state.age}</p>
        <button type="button" onClick={this.changeName}>
          Change name
        </button>
      </div>
    );
  }
}

export default StatePassData;
