import React, { Component } from "react";
import PropTypes from "prop-types";

class ControlledForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "dung",
      message: "",
      value: "javascript",
      isGoing: true,
      guestName: "Bùi Văn Tèo",
    };
  }

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };
  handleChangeMessage = (event) => {
    this.setState({ message: event.target.value });
  };
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    alert("Giá trị đã được submit: " + this.state.value);
    alert(
      "Giá trị đã được submit: " +
        this.state.isGoing +
        " và " +
        this.state.guestName
    );
    console.log(this.state);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChangeName}
            />
          </label>
          <label>
            Message:
            <textarea
              type="text"
              value={this.state.message}
              onChange={this.handleChangeMessage}
            />
          </label>
          <label>
            Chọn khóa học:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="javascript">JAVASCRIPT</option>
              <option value="react.js">REACT.JS</option>
            </select>
          </label>
          <label>
            Tham gia:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange}
            />
          </label>
          <br />

          <label>
            Ghi rõ họ tên:
            <input
              name="guestName"
              type="text"
              value={this.state.guestName}
              onChange={this.handleInputChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

ControlledForm.propTypes = {};

export default ControlledForm;
