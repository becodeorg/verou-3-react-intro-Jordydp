//imports
import {AddTaskForm, Header, Tasks, } from './components'

import React,{ useState } from 'react' 

function App() {
  //logic
    //handle From on click to show or display
    const [showHandleForm, setShowHandleForm] = useState(false)
    //useStat for tasks
    const [tasks, setTasks] = useState([])
    
  return (
    //view
    <div className="App">
      <Header 
      onAdd={() =>setShowHandleForm(!showHandleForm)}
      showhandleForm={showHandleForm}/>
      <AddTaskForm />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
