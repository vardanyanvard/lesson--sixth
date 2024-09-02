import { useState } from "react";
import AddTask from "../AddTask";
import Task from "../Task";
import "./dashboard.css";
import { useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([task, ...tasks]);
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3004/tasks/" + id)
      .then((resp) => setTasks(tasks.filter((item) => item.id !== id)));
  };

  const handleUpdate = (id, status) => {
    axios.patch("http://localhost:3004/tasks/" + id, { status }).then((resp) =>
      setTasks(
        tasks.map((task) => {
          if (task.id === resp.data.id) {
            task.status = resp.data.status;
          }
          return task;
        })
      )
    );
  };

  useEffect(() => {
    axios
      .get(" http://localhost:3004/tasks")
      .then((response) => setTasks(response.data));
  }, []);

  return (
    <div className="dashboardContentWrapper">
      <div>
        <AddTask onAdd={addTask} />
      </div>
      <div>
        <Task tasks={tasks} onDelete={handleDelete} onUpdate={handleUpdate} />
      </div>
    </div>
  );
}

export default Dashboard;
