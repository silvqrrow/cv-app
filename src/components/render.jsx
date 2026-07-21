export default function Render({ generalInfo, educationInfo }) {
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
    </div>
  );
}
