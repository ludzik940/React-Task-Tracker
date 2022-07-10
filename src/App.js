import Header from "./components/Header";
import Tasks from "./components/Tasks";

import { useState } from "react"

function App() {

  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Doctor',
        day: 'Feb 5th',
        reminder: true,
    },
    {
        id:2,
        text: 'Vet',
        day: 'Feb 15th',
        reminder: true,
    },
    {
        id:3,
        text: 'Library',
        day: 'Feb 23th',
        reminder: false,
    }
])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
       { tasks.length > 0 ? 
          (<Tasks tasks={tasks} onDelete={deleteTask} />) 
        : 
          ('No tasks to show') }
    </div>
  );
}

export default App;
