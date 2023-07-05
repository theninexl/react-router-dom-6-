import "./TodoCounter.css";

function TodoCounter(props) {
  let taskMsg = '';
  if (props.completedTodos === props.totalTodos){
    taskMsg = 'Felicidades has terminado todas tus tareas';
  } else {
    taskMsg = `Has terminado ${props.completedTodos} de ${props.totalTodos}`;
  }

  return (
    <div className="todoCounter" onLoad={props.firstCount}>
      <h1>Your tasks</h1>
      <h4>{taskMsg}</h4>      
      </div>
  );
  }

export { TodoCounter }; 