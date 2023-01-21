import TaskRow from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {
  const taskTableRows = (doneValue) => {
    return (
    tasks
    .filter(task => task.done === doneValue)
    .map((task) => (
      <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
    ))
    )
  };

  return (
    <table className="table-auto border-separate border-spacing-1 border-slate-500 w-full ">
      <thead className="bg-slate-700" >
        <tr>
          <th className="border border-slate-600 p-3">Task</th>
        </tr>
      </thead>
      <tbody className="h-14 bg-slate-800 border-slate-700">{taskTableRows(showCompleted)}</tbody>
    </table>
  );
};
