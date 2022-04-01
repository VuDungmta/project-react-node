import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Member from "./components/FunctionComponents";
import PropsPassData from "./components/PropsPassData";
import PropsClassPassData from "./components/PropsClassPassData";
import StatePassData from "./components/StatePassData";
import LifecycleCouter from "./components/LifecycleCouter";
import EventHander from "./components/EventHander";
import ControlledForm from "./components/ControlledForm";
class App extends Component {
  render() {
    // var memberlist = (
    //   <div>
    //     <Member name="Nguyễn Văn A" age="25" />
    //     <Member name="Trần Thị B" age="18" />
    //   </div>
    // );
    return (
      <div className="App">
        {/* {memberlist} */}
        <br />
        {/* <Hello />
        <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman" />
        <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" />
        <Message message='Welcome Visitor' />
        <Message message='Welcome Guest' />
        <Counter />
        <FunctionClick />
        <ClassClick />
        <EventBind />
        <ParentComponent />
        <UserGreeting /> */}
        {/* <NameList /> */}
        {/* <Member />
        <PropsPassData name="dung" age="25" /> */}
        {/* <PropsClassPassData name="dung" age="25" /> */}
        {/* <StatePassData />
        <LifecycleCouter /> */}
        {/* <EventHander /> */}
        <ControlledForm />
      </div>
    );
  }
}

export default App;
