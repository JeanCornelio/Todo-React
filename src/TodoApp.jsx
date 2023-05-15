

import { AddTodo } from "./components/AddTodo"
import { TodoList } from "./components/TodoList"
import { useTodo } from "./hooks/useTodo";




export const TodoApp = () => {

   const {todos, handleNewTodo, handleRemoveTodo, handleToggleTodo, todoCount, todoPending} = useTodo()

  return (
    <main className="px-3">
        <header className="d-flex ">
        <h1 className="me-auto">Todo App</h1>
        <h2 className="align-self-end me-4">Todos: {todoCount}</h2>
        <h2 className="align-self-end">Pendientes: {todoPending}</h2>
        </header>
     
        <hr />
        <div className="row">
            <div className="col-8">
              <TodoList todos={todos} onRemoveTodo={handleRemoveTodo} onToggleTodo={handleToggleTodo}/>
            </div>
            <div className="col-4">
                <h2>Agrega un Todo</h2>
                <hr />
               <AddTodo onNewTodo={handleNewTodo}/>
            </div>
        </div>
    </main>
  )
}
