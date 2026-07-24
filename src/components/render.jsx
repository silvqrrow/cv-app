export default function Render({ generalInfo, educationInfo, experienceInfo }) {
  console.log(experienceInfo);
  return (
    <div>
      <h1>{generalInfo.fullName}</h1>
      <div className="general-contact">
        <div>{generalInfo.email}</div>
        <div>{generalInfo.phoneNumber}</div>
      </div>
      <div className="education-info">
        <div>{educationInfo.schoolName}</div>
        <div>{educationInfo.titleOfStudy}</div>
        <div>{educationInfo.startDate}</div>
        <div>{educationInfo.endDate}</div>
      </div>
      <div className="experience-info">
        {experienceInfo.map((experience) => (
          <div key={experience.id}>
            <div>{experience.companyName}</div>
            <div>{experience.positionTitle}</div>
            <div>{experience.responsibilitiesList}</div>
            <div>{experience.startDate}</div>
            <div>{experience.endDate}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
