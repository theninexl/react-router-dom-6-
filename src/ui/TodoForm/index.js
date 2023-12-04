import React from "react";
import { useNavigate } from "react-router-dom";
import './TodoForm.css'


function TodoForm (props) {
    const navigate = useNavigate();

    const [newTodoValue, setNewTodoValue] = React.useState(props.defaultTodoText || '');

    const onSubmit = (event)=> {
        event.preventDefault();
        props.submitEvent(newTodoValue);
        navigate('/');
    }

    const onCancel = ()=> {
        navigate('/');
    }

    const onChange = (event) => {    
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>{props.label}</label>
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
                className="TodoForm-button"><span>{props.submitTxt}</span></button>
        </form>
    )
}

export { TodoForm };