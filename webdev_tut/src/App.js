import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import {v4 as uuidv4} from 'uuid'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  //todos= all todos
  // setTodos = function we call to update todos
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()
  // call to load our todos 
  // because of empty array it wil never recall this function again
  useEffect(()=>{
    //JSON.parse convert string in Array
    const storedTodos= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  }, [])
   //store in local storage
   //useEffect = Hook of react
   //annytime our todos change save them
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id){
    //create copy
    const newTodos = [...todos]
    const todo= newTodos.find(todo=>todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if (name ==='') return
    setTodos(prevTodos=>{
      return[...prevTodos, {id:uuidv4(), name: name, complete: false}]
    })
    //clear input after function
    todoNameRef.current.value = null
  }
  function handleClearTodos(){
    const newTodos = todos.filter(todo=>!todo.complete)
    setTodos(newTodos)
  }
  return (
    //wrap inside empty element to return more jsx elements
    <>
    <TodoList todos={todos} toggleTodo={toggleTodo} />
    <input ref={todoNameRef} type="text"/>
    <button onClick={handleAddTodo}>Add Todo</button>
    <button onClick={handleClearTodos}>Clear complete</button>
    <div>{todos.filter(todo=> !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
