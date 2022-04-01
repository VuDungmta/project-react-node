import React, { Component } from "react";
import PropTypes from "prop-types";
const UserGreeting = (props) => {
  return <h2>Welcome back!</h2>;
};

const GuestGreeting = (props) => {
  return <h2>Please sign up.</h2>;
};

const Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};

const LoginButton = (props) => {
  return <button onClick={props.onClick}>Login</button>;
};

const LogoutButton = (props) => {
  return <button onClick={props.onClick}>Logout</button>;
};
class ConditionRender extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button; /* Khai báo biến button sử dụng cho if */

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <div>
        The user is <b>{isLoggedIn ? "currently" : "not"}</b> logged in.
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ConditionRender.propTypes = {};

export default ConditionRender;
