import './index.css';
import Header from './components/Header';
import Task from './components/Tasks'
import AddTask from './components/AddTask'
import  { useState } from 'react';

const App = () => {
 
  const [tasks, setTask] = useState([
    {
        id: 1,
        text: 'Doctor Appointment',
        day: 'Feb 5th at 2:30 pm',
        reminder : true
    },
    {
        id: 2,
        text: 'Going To school',
        day: 'Everyday th at 7:30 pm',
        reminder : true
    },
    {
        id: 3,
        text: 'Medical Check Routine',
        day: 'Feb 5th at 6:30 pm',
        reminder : false
    },
  ])
  
  const [showAddTask, setShowAddTask] = useState(false)

// add task
  const addTask = (task) => {

    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTask([...tasks, newTask])

  }
  
// delete task
  const deleteEvent = (id) => {
    setTask(
      tasks.filter(task => task.id !== id)
    )
  }
// toggle reminder
  const toggleReminder = (id) => {
    setTask(
      tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task )
    )
  }

  
  
  
  return (
        <div className="container">
      <Header title='Task Tracker'
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}

      />
      { showAddTask && <AddTask onAdd={addTask} />}

      {
        tasks.length > 0 ? <Task
        tasks={tasks}
          onDelete={deleteEvent}
          onToggle={toggleReminder}
        /> : <p>No tasks</p>
      }

        </div>
  );
}
 
export default App;





