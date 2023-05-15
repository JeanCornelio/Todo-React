import { useForm } from "../hooks/useForm"

export const AddTodo = ({onNewTodo}) => {

   const {form, onSetForm, onResetForm} =  useForm({
    description:''
   })

   const {description} = form

   const onSubmit = (e) =>{
        e.preventDefault()
        if(description.trim().length <=3){return}

        const newTodo ={
            id: new Date().getTime() * 3,
            description,
            done: false
        }
        onNewTodo(newTodo);
        onResetForm()
   }

  return (
    <form action="" onSubmit={onSubmit}>
    <input 
        type="text"
        className="form-control" 
        placeholder="Soy un todo"
        name="description"
        value={description}
        onChange={onSetForm}
        />
    <button 
        className="btn btn-primary mt-3"
         type="submit">agregar</button>
    </form>
  )
}
