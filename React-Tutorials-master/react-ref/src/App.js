import logo from "./logo.svg";
import "./App.css";
import InputChild from "./components/InputChild";
import Parent from "./components/Parent";
import ParentDemo from "./components/Demo";
import Changebackground from "./components/Changebackground";
import Samplle2 from "./components/Samplle2";

function App() {
  return (
    <div className="App">
      <InputChild />
      <Parent />
      <ParentDemo />
      <Changebackground />
      <Samplle2 />
    </div>
  );
}

export default App;
