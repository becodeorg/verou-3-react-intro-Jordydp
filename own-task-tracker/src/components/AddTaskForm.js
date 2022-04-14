import React from 'react'

const AddTaskForm = () => {
    return (
    <form>
        <label>Task: </label>
        <input type="text" placeholder='Add Task Name here'></input>
        <label>Task Starts @:</label>
        <input type="date"></input>
        <input type="time" />
        <label>Task ends @:</label>
        <input type="date"></input>
        <input type="time" />
        <label>Urgent</label>
        <input type="checkbox"></input>
    </form>
    )
}

export default AddTaskForm