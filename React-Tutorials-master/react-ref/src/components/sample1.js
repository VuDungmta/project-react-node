import React, { useRef, useState } from "react";
import React, { Component } from "react";
import PropTypes from "prop-types";

class sample1 extends Component {
  constructor(props) {
    super(props);

    const prevValue = useRef("");
    const [value, setValue] = useState("");

    const onInputChange = (e) => {
      setValue(e.target.value);
    };

    const onInputBlur = () => {
      console.log(`Previous value: ${prevValue.current}`);
      console.log(`Current value: ${value}`);
      prevValue.current = value;
    };

    return (
      <div className="App">
        <h2>Use refs to set/get previous state's value</h2>
        <input value={value} onBlur={onInputBlur} onChange={onInputChange} />
        <div>Type something, blur input and check result in console.log</div>
      </div>
    );
  }
}

sample1.propTypes = {};
export default sample1;
