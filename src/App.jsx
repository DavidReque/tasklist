import { useState, useEffect } from "react";
import "./App.css";
import TaskCreator from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import {VisibilityControl} from './components/VisibilityControl'

function App() {
  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function createNewTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
  }

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  const cleanTasks = () => {
    setTasksItems(tasksItems.filter(task => !task.done))
    setShowCompleted(false)
  }

  return (
    <main className="App text-white text-center">
      <div className="container">
      <h2 className="title text-center text-white my-4 font-bold text-2xl">Escribe tu tarea</h2>
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable tasks={tasksItems} toggleTask={toggleTask} />

      <VisibilityControl
        isChecked={showCompleted}
        setShowCompleted={(checked) => setShowCompleted(checked)}
        cleanTasks={cleanTasks}
      /> 

      {showCompleted === true && (
        <TaskTable
          tasks={tasksItems}
          toggleTask={toggleTask}
          showCompleted={showCompleted}
        />
      )}
      </div>
    </main>
  );
}

export default App;
