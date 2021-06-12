import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Task from './components/Tasks'
import About from './components/About'
import AddTask from './components/AddTask'
import { useState, useEffect } from 'react';

const App = () => {
 
  const [tasks, setTask] = useState([])
  
  const [showAddTask, setShowAddTask] = useState(false)

  useEffect(() => {
    const getTask = async () => {
      const taskFromServer = await fetchTasks()
      setTask(taskFromServer)

    }

    getTask()

  }, [])



  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }



// add task
  const addTask = async (task) => {

   const res =  await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {'Content-Type' : 'Application/json'},
      body : JSON.stringify(task)
   })
    const data = await res.json()
    setTask([...tasks, data])
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTask([...tasks, newTask])

  }
  
// delete task
  const deleteEvent = async (id) => {

    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })


    setTask(
      tasks.filter(task => task.id !== id)
    )
  }
// toggle reminder
  const toggleReminder = async (id) => {

    const taskToToggle = await fetchTask(id)
    const updTask =  {...taskToToggle, reminder : !taskToToggle.reminder}
    const res =  await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {'Content-Type' : 'Application/json'},
      body : JSON.stringify(updTask)
    })
    
    const data = await res.json()
    setTask(
      tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task )
    )
  }

  
  
  
  return (
    <Router >
        <div className="container">
          <Header title='Task Tracker'
            onAdd={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask} />
        <Route path='/' exact render={(props) => 
        <>
              { showAddTask && <AddTask onAdd={addTask} />}
 
              {
                tasks.length > 0 ? <Task
                tasks={tasks}
                  onDelete={deleteEvent}
                  onToggle={toggleReminder}
                /> : <p>No tasks</p>
              }    
        </>
        }
          />
          <Route path='/about' component={About} />
          <Footer />
      </div>
      </Router>
  );
}
 
export default App;





