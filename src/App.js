import './index.css';
import Header from './components/Header';
import Task from './components/Tasks'
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


  const deleteEvent = (id) => {
    setTask(
      tasks.filter(task => task.id !== id)
    )
  }

  const toggleReminder = (id) => {
    setTask()
  }

  
  
  
  return (
        <div className="container">
      <Header title='Task Tracker' />

      {
        tasks.length > 0 ? <Task tasks={tasks} onDelete={deleteEvent} onToggle={ toggleReminder }/> : <p>No tasks</p>
      }

        </div>
  );
}
 
export default App;





