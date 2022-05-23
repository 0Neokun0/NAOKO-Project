import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTask'


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
      {
          id: 1,
          text: '病院',
          day: 'Feb 5th at 2:28pm',
          reminder : true,
      },
      {
        id: 2,
        text: '学校',
        day: 'Feb 7th at 2:45pm',
        reminder : true,
    },
    {
      id: 3,
      text: 'バイト',
      day: 'Feb 6th at 2:20pm',
      reminder : false,
  },
  ])

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className='container'>
      <Header 
      onAdd={() => setShowAddTask 
      (!showAddTask)} 
      showAdd={showAddTask}/>
      {showAddTask && <AddTasks onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'タスク無いです。'}
    </div>
  )
}


export default App
