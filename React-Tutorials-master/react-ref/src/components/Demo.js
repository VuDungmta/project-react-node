import React, { Component } from "react";

class ParentDemo extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    //this.setRef = this.setRef.bind(this);
  }

  onClick = () => {
    this.child.current.getAlert();
  };

  render() {
    return (
      <div>
        <Child ref={this.child} />
        {/* <Child setRef={this.setRef} ref={this.child} /> */}
        <button onClick={this.onClick}>Click</button>
      </div>
    );
  }
}

class Child extends Component {
  constructor(props) {
    super(props);
    this.inputText = props.setRef;
  }
  getAlert() {
    alert("getAlert from Child");
  }

  render() {
    return (
      // <h1>Hello</h1>
      <div ref={this.child}>
        <input name="email" ref={this.inputText} type="text" />
        <h1>Hello</h1>
      </div>
    );
  }
}
export default ParentDemo;
