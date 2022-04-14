import React from 'react'
import { useState} from 'react'

const AddTaskForm = () => {
//logic
const [inputs, setInputs] = useState({})

const handleChange = (event) => {
    const name = event.target.name 
    const value = event.target.value 
    setInputs(values => ({...values, [name]: value}))
}

const handleSubmit = (event) => {
    event.preventDefault()
    console.log(inputs)
    alert(inputs);
}


    return (
        //view
    <form onSubmit={handleSubmit}>
        <label>Task: </label>
        <input type="text"
            name="name"
            value={ inputs.name }
            onChange={handleChange}
            placeholder='Add Task Name here'></input>
        <label>Task Starts @:</label>
        <input type="date"
            name="start_date"
            value={ inputs.start_date }
            onChange={handleChange}/>
        <input type="time"
            name="start_time"
            value={ inputs.start_time }
            onChange={handleChange} />
        <label>Task ends @:</label>
        <input type="date"
            name="end_date"
            value={ inputs.end_date }/>
        <input type="time"
            name="end_time"
            onChange={handleChange}
            value={ inputs.end_time }/>
        <label>Urgent</label>
        <input type="checkbox"
            name="urgent"
            checked={inputs.urgent}/>
        <input type="submit" />
    </form>
    )
}

export default AddTaskForm