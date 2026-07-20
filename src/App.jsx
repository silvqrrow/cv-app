import GeneralInfo from "./components/general-info";
import "water.css/out/water.css";
import "./styles/index.css";

function App() {
  return (
    <div className="main-container">
      <div>
        <h1>Infomation</h1>
        <GeneralInfo></GeneralInfo>
      </div>
      <div></div>
    </div>
  );
}

export default App;
