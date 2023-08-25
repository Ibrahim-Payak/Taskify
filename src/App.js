import Menu from "./components/Menu";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import "./index.css";
import { useEffect, useState } from "react";

function App() {
  const initialTasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  const [select, setSelect] = useState("All");
  const [tasks, setTasks] = useState(initialTasks);

  const updateList = (task) => {
    setTasks([...tasks, task]);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div style={{ padding: "0px 382px" }}>
      <h1 className="heading">#todo</h1>
      <Menu select={select} setSelect={setSelect} />
      {select !== "Completed" && <AddTask updateList={updateList} />}
      <Tasks tasks={tasks} setTasks={setTasks} select={select} />
    </div>
  );
}

export default App;
