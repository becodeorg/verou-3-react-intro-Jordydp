import React from "react"
import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggle}) => {
    
    return (
        <>
            {/* loop trough ea task and give it as a prop */}
            {tasks.map((task, index)=>(
            <Task 
            key={index} 
            task={task} 
            onDelete={onDelete} 
            onToggle={onToggle} />
            ))}   
        </>
    )
}

export default Tasks