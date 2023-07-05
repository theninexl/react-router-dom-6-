import "./TodoItem.css";

function TodoItem(props) {
    return (
      <li 
      className={`todoItem ${props.completed && "todoItem--active"}`}
      >
        <button 
        className="todoItem-icon-button todoItem-icon-button--complete"
        onClick={props.onComplete}
        ><span className="material-symbols-outlined">Done</span></button>
        <p>{props.text}</p>
        <button 
        className="todoItem-icon-button todoItem-icon-button--delete"
        onClick={props.onDelete}
        ><span className="material-symbols-outlined">Close</span></button>
      </li>
    );
  }

  export { TodoItem }