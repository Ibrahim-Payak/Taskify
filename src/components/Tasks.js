import React from "react";
import "../styles/Tasks.css";

const Tasks = ({ tasks, setTasks, select }) => {
  const handleCheckboxChange = (taskId) => {
    const updatedList = tasks.map((task, index) => {
      if (index === taskId) {
        return { ...task, category: "Completed" };
      }
      return task;
    });

    setTasks(updatedList);
    console.log(tasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (select === "All") {
      return true;
    } else if (select === "Active") {
      return task.category === "Active";
    } else if (select === "Completed") {
      return task.category === "Completed";
    }
    return false;
  });

  function handleDeleteOne(index) {
    const updatedList = tasks.filter((task, i) => i !== index);
    setTasks(updatedList);
  }

  const handleDeleteAll = () => {
    const updatedList = tasks.filter((task) => task.category !== "Completed");
    setTasks(updatedList);
  };

  return (
    <div className="tasksContainer">
      {filteredTasks.map((task, index) => (
        <div key={index} className="taskItem">
          <input
            type="checkbox"
            checked={task.category === "Completed"}
            onChange={() => handleCheckboxChange(index)}
            className="taskCheckbox"
          />
          <p
            className="taskText"
            style={
              task.category === "Completed"
                ? { textDecoration: "line-through" }
                : {}
            }
          >
            {task.name}
          </p>

          {select === "Completed" && (
            <i
              className="material-icons"
              style={{
                color: "#EB5757",
                marginLeft: "430px",
                cursor: "pointer",
              }}
              onClick={() => handleDeleteOne(index)}
            >
              delete
            </i>
          )}
        </div>
      ))}

      {select === "Completed" && (
        <button
          type="submit"
          className="deleteButton"
          onClick={handleDeleteAll}
        >
          Delete All
        </button>
      )}
    </div>
  );
};

export default Tasks;
