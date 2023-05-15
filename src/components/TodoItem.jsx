

export const TodoItem = ({todo, onRemoveTodo, onToggleTodo}) => {
  
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span className={`align-self-center pointer ${todo.done ? 'align-self-center pointer text-decoration-line-through ':'align-self-center pointer '}`}  onClick={()=>onToggleTodo(todo.id)}>{todo.description}</span>
        <button className="align-self-center btn btn-danger" onClick={()=> onRemoveTodo(todo.id)}>X</button>
    </li>
  )
}
