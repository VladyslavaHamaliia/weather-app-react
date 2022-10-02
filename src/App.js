import "./App.css";
import Weather from "./Weather";
import Buttonbar from "./Buttonbar";

function App() {
  return (
    <div className="App">
      <div className="Card">
        <h1 className="title">Weather APP</h1>
        <Weather />
        <Buttonbar />
      </div>
      <a href="https://github.com/VladyslavaHamaliia/weather-app-react">
        Open-source code
      </a>{" "}
      , by Vladyslava Hamaliia
    </div>
  );
}

export default App;
