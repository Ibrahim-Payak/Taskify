import React, { useState } from "react";
import "../styles/AddTask.css";

const AddTask = ({ updateList }) => {
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      name: details,
      category: "Active",
    };

    updateList(task);
    setDetails("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add Detials"
        className="inputBox"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />
      <button type="submit" className="addButton" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};

export default AddTask;
