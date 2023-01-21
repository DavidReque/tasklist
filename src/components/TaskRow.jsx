const TaskRow = ({task, toggleTask}) => {
  return (
    <tr>
      <td>
        {task.name}
        <input
        className="mx-3"
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
      </td>
    </tr>
  );
};

export default TaskRow;
