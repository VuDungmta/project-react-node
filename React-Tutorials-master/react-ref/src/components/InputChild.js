import React, { Component } from "react";

class InputChild extends Component {
  constructor(props) {
    super(props);
    this.inputText = React.createRef();
    this.inputTextOne = props.setRef;
  }
  handleClick = () => {
    this.inputText.current.focus();
  };
  render() {
    return (
      <>
        <code>freetuts.net</code>
        <input
          name="email"
          onChange={this.onChange}
          ref={this.inputTextOne}
          type="text"
        />
        <button onClick={this.handleClick}>Focus Input</button>
      </>
    );
  }
}

export default InputChild;
