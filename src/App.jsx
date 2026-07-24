import { useState } from "react";
import Render from "./components/render";
import GeneralInfo from "./components/general-info";
import EducationInfo from "./components/education-info";
import ExperienceInfo from "./components/experience-info";
import "./styles/index.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState({});
  const [experienceInfo, setExperienceInfo] = useState([]);

  return (
    <div className="main-container">
      <div>
        <h2>General Info</h2>
        <GeneralInfo onSubmitInfo={setGeneralInfo} />
        <h2>Education</h2>
        <EducationInfo onSubmitInfo={setEducationInfo} />
        <h2>Experience</h2>
        <ExperienceInfo onSubmitInfo={setExperienceInfo} />
      </div>
      <div>
        <Render
          generalInfo={generalInfo}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
        />
      </div>
    </div>
  );
}

export default App;
