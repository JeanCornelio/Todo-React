
import { useEffect, useReducer } from 'react'
import { todoReducer } from '../todoReducer'


const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || []
}


export const useTodo = () => {

 const [todos, dispatchTodos] = useReducer(todoReducer, [], init)

 useEffect(() => {   
  localStorage.setItem('todos', JSON.stringify(todos))
 }, [todos])
 


const handleNewTodo = (todo) =>{
  dispatchTodos({
    type:'[TODO] add todo',
    payload:todo
  })
}

const handleRemoveTodo = (id) =>{
  console.log(id);
  dispatchTodos({
    type:'[TODO] remove todo',
    payload:id
  })
}

const handleToggleTodo = (id) =>{
  console.log(id);
  dispatchTodos({
    type:'[TODO] toggle todo',
    payload:id
  })
}

  return {
    todos,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
    todoPending: todos.filter(todo => !todo.done).length,
    todoCount: todos.length
  }
    
  
}
