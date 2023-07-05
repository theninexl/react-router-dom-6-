import "./CreateTodoButton.css";

function CreateTodoButton () {
    return (
        <button className="createTodoButton" onClick={(event)=>{
            console.log('click');
            console.log(event);
            console.log(event.target);
        }}><span className="material-symbols-outlined">
        add
        </span></button>
    );
}

export { CreateTodoButton }