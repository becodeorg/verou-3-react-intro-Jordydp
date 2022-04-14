//imports
import {AddTaskForm, Header, Tasks, } from './components'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

import React,{ useState } from 'react' 

function App() {
  //logic
  
    //useStat for tasks
    const [tasks, setTasks] = useState([])
    
  return (
    //view
    <div className="App">
      <Header />
      <AddTaskForm />
      <Tasks />
      <Calendar />
    </div>
  );
}

export default App;

