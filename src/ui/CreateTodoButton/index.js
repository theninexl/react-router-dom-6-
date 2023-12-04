import "./CreateTodoButton.css";

function CreateTodoButton (props) {
    return (
        <button 
            className="createTodoButton" 
            onClick={props.onClick}
            ><span className="material-symbols-outlined">add</span>
        </button>
    );
}

export { CreateTodoButton }