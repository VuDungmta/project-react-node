import React, { Component } from "react";
import axios from "axios";

class Message extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    message: "",
  };

  componentDidMount() {
    axios
      .get("/api/test")
      .then((result) => this.setState({ message: result.data.message }));
  }

  render() {
    return (
      <div>
        <label>
          message:<h1>{this.state.message}</h1>
        </label>
      </div>
    );
  }
}

export default Message;
