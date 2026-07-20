import { useState } from "react";
export default function GeneralInfo() {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
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
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
