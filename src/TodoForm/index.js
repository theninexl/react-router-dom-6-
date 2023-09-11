import React from "react";
import './TodoForm.css'
import { TodoContext } from "../App/useTodos";

function TodoForm ({ addTodo,setOpenModal }) {
    

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event)=> {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = ()=> {
        setOpenModal(false);
    }

    const onChange = (event) => {    
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo ToDo</label>
            <textarea 
                placeholder="Cortar cebolla"
                value={newTodoValue}
                onChange={onChange}
            />
            <button
                onClick={onCancel}
                className="
                TodoForm-icon-button TodoForm-icon-button--cancel"><span className="material-symbols-outlined">Cancel</span></button>
            <button
                type="submit"
                className="TodoForm-icon-button TodoForm-icon-button--add"><span className="material-symbols-outlined">Add</span></button>
        </form>
    )
}

export { TodoForm };