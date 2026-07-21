import { useState } from "react";
import Render from "./components/render";
import GeneralInfo from "./components/general-info";
import "./styles/index.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState({});

  return (
    <div className="main-container">
      <div>
        <GeneralInfo onSubmitInfo={setGeneralInfo} />
      </div>
      <div>
        <Render generalInfo={generalInfo} />
      </div>
    </div>
  );
}

export default App;
