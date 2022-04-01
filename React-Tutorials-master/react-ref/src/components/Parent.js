import React, { Component } from "react";
const Child = ({ setRef }) => <input type="text" ref={setRef} />;

class Parent extends Component {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // Calling a function on the Child DOM element
    this.childRef.focus();
  }

  setRef(input) {
    this.childRef = input;
  }

  handleClick(event) {
    event.preventDefault();
    alert("hello:" + this.childRef.value);
    this.childRef.focus();
  }

  render() {
    return (
      <div>
        <Child setRef={this.setRef} />
        <button onClick={this.handleClick}>Wellcome</button>
      </div>
    );
  }
}
export default Parent;
