import logo from "./logo.svg";
import "./App.css";
import Message from "./components/Message";
import Orderlist from "./components/Orderlist";
import InsertOrder from "./components/InsertOrder";

function App() {
  return (
    <div className="App">
      <label>hello</label>
      <Message />
      <InsertOrder />
      <hr />
      <Orderlist />
    </div>
  );
}

export default App;
