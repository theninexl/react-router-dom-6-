import "./CreateTodoButton.css";

function CreateTodoButton ({ setOpenModal }) {
    return (
        <button 
            className="createTodoButton" 
            onClick={()=>{
                setOpenModal(state => !state); 
            }}
            ><span className="material-symbols-outlined">add</span>
        </button>
    );
}

export { CreateTodoButton }