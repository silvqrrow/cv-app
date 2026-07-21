import { useState } from "react";

export default function EducationInfo({ onSubmitInfo }) {
  const [inputs, setInputs] = useState({
    schoolName: "",
    titleOfStudy: "",
    startDate: "",
    endDate: "",
  });

  const [editing, setEditing] = useState(true);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    console.log("SUBMIT");
    e.preventDefault();
    onSubmitInfo(inputs);
    setEditing(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="schoolName">
          School Name
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            value={inputs.schoolName}
            onChange={handleChange}
            disabled={!editing}
          />
        </label>
        <label htmlFor="titleOfStudy">
          Title of Study
          <input
            type="text"
            id="titleOfStudy"
            name="titleOfStudy"
            value={inputs.titleOfStudy}
            onChange={handleChange}
            disabled={!editing}
          />
        </label>
        <label htmlFor="startDate">
          Start Date
          <input
            type="month"
            id="startDate"
            name="startDate"
            value={inputs.startDate}
            onChange={handleChange}
            disabled={!editing}
          />
        </label>
        <label htmlFor="endDate">
          End Date
          <input
            type="month"
            id="endDate"
            name="endDate"
            value={inputs.endDate}
            onChange={handleChange}
            disabled={!editing}
          />
        </label>
        {editing ? (
          <button key="submit" type="submit">
            Save
          </button>
        ) : (
          <button
            key="edit"
            type="button"
            onClick={() => {
              setEditing(true);
            }}
          >
            Edit
          </button>
        )}
      </form>
    </>
  );
}
