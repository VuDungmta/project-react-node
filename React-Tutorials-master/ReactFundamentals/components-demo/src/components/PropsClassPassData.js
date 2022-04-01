import React, { Component } from "react";
import PropTypes from "prop-types";

class PropsClassPassData extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div className="member">
        <h2>{this.props.name}</h2>
        <p>Tuổi: {this.props.age}</p>
      </div>
    );
  }
}

export default PropsClassPassData;
