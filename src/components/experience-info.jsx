import { useState } from "react";

export default function ExperienceInfo({ onSubmitInfo }) {
  const [experiences, setExperiences] = useState([]);

  const [inputs, setInputs] = useState({
    companyName: "",
    positionTitle: "",
    responsibilitiesList: [],
    startDate: "",
    endDate: "",
  });

  const [currentResponsibility, setCurrentResponsibility] = useState("");

  const addResponsibility = () => {
    setInputs((values) => ({
      ...values,
      responsibilitiesList: [
        ...values.responsibilitiesList,
        currentResponsibility,
      ],
    }));

    setCurrentResponsibility("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputs((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const deleteResponsibility = (indexToDelete) => {
    setInputs((values) => ({
      ...values,
      responsibilitiesList: values.responsibilitiesList.filter(
        (_, index) => index !== indexToDelete,
      ),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedExperiences = [
      ...experiences,
      { id: crypto.randomUUID(), ...inputs },
    ];

    setExperiences(updatedExperiences);
    onSubmitInfo(updatedExperiences);

    // Clear the form
    setInputs({
      companyName: "",
      positionTitle: "",
      responsibilitiesList: [],
      startDate: "",
      endDate: "",
    });

    setCurrentResponsibility("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="companyName">
        Company Name
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={inputs.companyName}
          onChange={handleChange}
          required
        />
      </label>

      <label htmlFor="positionTitle">
        Position Title
        <input
          type="text"
          id="positionTitle"
          name="positionTitle"
          value={inputs.positionTitle}
          onChange={handleChange}
          required
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
          required
        />
      </label>

      <label htmlFor="responsibilities">
        Responsibilities
        <input
          type="text"
          id="responsibilities"
          value={currentResponsibility}
          onChange={(e) => setCurrentResponsibility(e.target.value)}
        />
        <button type="button" onClick={addResponsibility}>
          Add Responsibility
        </button>
        <ul>
          {inputs.responsibilitiesList.map((responsibility, index) => (
            <li key={index}>
              {responsibility}
              <button type="button" onClick={() => deleteResponsibility(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </label>

      <label htmlFor="endDate">
        End Date
        <input
          type="month"
          id="endDate"
          name="endDate"
          value={inputs.endDate}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Add Experience</button>
    </form>
  );
}
