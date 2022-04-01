import React, { Component } from "react";
import PropTypes from "prop-types";
import { unmountComponentAtNode } from "react-dom";

class LifecycleCouter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  countFnc = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidMount() {
    this.counterID = setInterval(() => this.countFnc(), 1000);
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    if (this.state.count === 3) {
      console.log(this.state.count);
      unmountComponentAtNode(document.getElementById("root"));
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.counterID);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.counterID);
  }

  render() {
    return (
      <div>
        <h2 id={this.state.count}>{this.state.count}</h2>
      </div>
    );
  }
}

LifecycleCouter.propTypes = {};

export default LifecycleCouter;
