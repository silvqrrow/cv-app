export default function Render({ generalInfo }) {
  return (
    <div>
      <h1>{generalInfo.fullName}</h1>
      <div className="general-contact">
        <div>{generalInfo.email}</div>
        <div>{generalInfo.phoneNumber}</div>
      </div>
    </div>
  );
}
