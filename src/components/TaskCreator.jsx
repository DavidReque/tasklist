import { useState } from "react";

const TaskCreator = ({createNewTask}) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName)
    setNewTaskName("");
  };

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <input
        className="text-slate-800 p-2 mx-3 my-2 rounded-sm"
        type="text"
        placeholder="Enter a new task"
        value={newTaskName}
        onChange={(e) => {
          setNewTaskName(e.target.value);
        }}
      />

      <button className="py-3 px-5 rounded-lg bg-blue-500 text-white hover:bg-sky-300 hover:text-black" onClick={() => {}}>Save Task</button>
    </form>
  );
};

export default TaskCreator;
