import React, { Component } from "react";
import PropTypes from "prop-types";

class Samplle2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
    };
  }

  countDown = () => {
    this.setState({ index: this.state.index - 1 });
  };
  countUp = () => {
    this.setState({ index: this.state.index + 1 });
  };

  render() {
    return (
      <div>
        <p>gia tri: {this.state.index}</p>
        <button onClick={this.countUp}>Count up</button>
        <button onClick={this.countDown}>Count down</button>
      </div>
    );
  }
}

Samplle2.propTypes = {};

export default Samplle2;
