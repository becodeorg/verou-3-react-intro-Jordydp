import React from 'react'
import Todo from './Todo'

export default function TodoList( { todos, toggleTodo } ) {
    return (
            //map over al of our todos and for each on of our todos we want to return one
            //component and pass it to todo
            todos.map(todo => {
                return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
            })
        
    )
    }
