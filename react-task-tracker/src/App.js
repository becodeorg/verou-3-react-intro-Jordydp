import Header from "./components/Header";
import Tasks from "./components/Tasks";
//use a hook
import { useState } from "react"

function App() {
      //use UseState !!dont push but ReCreate 
      const [tasks, setTasks] = useState( [
        {
            id: 1,
            text:'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id:2,
            text:'Finish BeCode',
            day: 'july first at 17:pm',
            reminder: true, 
        }
    
    ])

    //delete task
    const deleteTask = (id) =>{
      //filter for each task where task.id is not equal to id we are deleting
      setTasks(tasks.filter((task)=> task.id !== id))
    }
    //Toggle reminder
    const toggleReminder = (id) => {
        setTasks(
          tasks.map((task)=>
          task.id === id ? {...task, reminder: !task.reminder} : task
        )
        )
    }

  return (
    <div className="container">
      {/* pass props to component */}
      <Header title='Task-Tracker' />
      {tasks.length > 0 ? 
      (<Tasks 
        tasks={tasks} 
        onDelete={deleteTask} 
        onToggle={toggleReminder} />) : ('Just chill')}
    
    </div>
  );
}

export default App;
