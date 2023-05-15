import { useState } from "react"


export const useForm = (initialForm = {}) => {

    const [form, setForm] = useState(initialForm)

    const onSetForm = ({target}) =>{
        const { name, value} = target;
        setForm( { ...form, [name]: value } )
    }

    const onResetForm = () => {
        setForm(initialForm)
    }

  return {form, onSetForm, onResetForm}
}
