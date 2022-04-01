import ReactDOM from "react-dom";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.myVideo = React.createRef();
  }
  render() {
    return (
      <div>
        <video ref={this.myVideo} width="320" height="176" controls>
          <source
            src="https://res.cloudinary.com/daintu6ky/video/upload/v1573070866/Screen_Recording_2019-11-06_at_4.14.52_PM.mp4"
            type="video/mp4"
          />
        </video>
        <div>
          <button
            onClick={() => {
              this.myVideo.current.play();
            }}
          >
            Play
          </button>
          <button
            onClick={() => {
              this.myVideo.current.pause();
            }}
          >
            Pause
          </button>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
