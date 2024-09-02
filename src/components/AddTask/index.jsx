import { useState } from "react";
import axios from "axios";
import "./addTask.css";

function AddTask({ onAdd }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text.trim()) {
      return setError("please fill the filed");
    }
    setError("");
    axios
      .post(" http://localhost:3004/tasks", { text, status: "unstarted" })
      .then((resp) => onAdd(resp.data));
    setText("");
  };

  return (
    <div className="addTaskContentWrapper">
      <div>{error && <p style={{ color: "red" }}>{error}</p>}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button>Save</button>
      </form>
    </div>
  );
}

export default AddTask;
