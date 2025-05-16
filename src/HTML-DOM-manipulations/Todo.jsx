import React from "react";
import { useState } from "react";


let id = 0;

//ALWAYS GENERATEA NEW UNIQUE ID FOR EACH TASK
const INITIALTASKS = [
  { id: id++, label: "Wake up and brush my teeth" },
  { id: id++, label: "Read for 15 minutes" },
  { id: id++, label: "Code for 4 hours" },
]

const Todo = () => {

  // keep track of the tasks, setTasks
  // keep track of the newTask, setNewTask

  const [tasks, setTasks] = useState(INITIALTASKS);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    
    const concatenated = tasks.concat({
      id: id++,
      label: newTask.trim(),
    })

    setTasks(concatenated);
    setNewTask("")
  }

  return (
    <form onSubmit={handleSubmit} >
      <input
        type="Enter a task to complete..."
        aria-label="Enter a task to complete"
        value={newTask}
        onChange={(event) => {
          setNewTask(event.target.value)
        }}
      />

      <button >
        Submit
      </button>

      <ul>
        {tasks.map(({ id, label }) => (
          <li key={id}>
            <span>{label}</span>
            <button onClick={() => {
              setTasks(
                tasks.filter((task) => task.id !== id)
              )
            }}>Delete </button>
          </li>
        ))}
      </ul>
    </form>

  )
}

export default Todo;