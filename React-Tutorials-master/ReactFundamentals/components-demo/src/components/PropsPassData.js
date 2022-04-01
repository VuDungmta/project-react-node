import React from "react";
import PropTypes from "prop-types";

function PropsPassData(props) {
  return (
    <div className="member">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default PropsPassData;
