import TaskItem from "../TaskItem";
import "./task.css";
function Task({ tasks, onDelete, onUpdate }) {
  return (
    <div className="taskContentWrapper">
      {tasks.map((task) => (
        <TaskItem
          task={task}
          key={task.id}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export default Task;
