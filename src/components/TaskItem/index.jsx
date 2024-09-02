import "./taskItem.css";
import unstarted from "../../assets/images/unstarted.png";
import completed from "../../assets/images/completed.png";
import inProgress from "../../assets/images/inprogress.png";

function TaskItem({ task, onDelete, onUpdate }) {
  return (
    <div className="taskItemContent">
      <div className="itemTextContent">
        <p>{task.text}</p>
        <button onClick={() => onDelete(task.id)}>x</button>
      </div>
      <select
        value={task.status}
        onChange={(event) => onUpdate(task.id, event.target.value)}
      >
        <option>unstarted</option>
        <option>completed</option>
        <option>in progress</option>
      </select>
      <p>status: {task.status}</p>
      {task.status === "unstarted" ? (
        <img src={unstarted}></img>
      ) : task.status === "in progress" ? (
        <img src={inProgress}></img>
      ) : (
        <img src={completed}></img>
      )}
    </div>
  );
}

export default TaskItem;
