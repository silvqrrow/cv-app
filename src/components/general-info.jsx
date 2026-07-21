import { useState } from "react";
export default function GeneralInfo({ onSubmitInfo }) {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
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
        <label htmlFor="fullName">
          Full Name
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={inputs.fullName}
            onChange={handleChange}
            disabled={!editing}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            disabled={!editing}
          />
        </label>
        <label htmlFor="phoneNumber">
          Phone Number
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={inputs.phoneNumber}
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
