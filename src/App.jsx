import { useState } from "react";
import Render from "./components/render";
import GeneralInfo from "./components/general-info";
import EducationInfo from "./components/education-info";
import "./styles/index.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState({});

  return (
    <div className="main-container">
      <div>
        <h2>General Info</h2>
        <GeneralInfo onSubmitInfo={setGeneralInfo} />
        <h2>Education</h2>
        <EducationInfo onSubmitInfo={setEducationInfo} />
      </div>
      <div>
        <Render generalInfo={generalInfo} educationInfo={educationInfo} />
      </div>
    </div>
  );
}

export default App;
