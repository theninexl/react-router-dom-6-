import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)

  let taskMsg = '';
  if (completedTodos === totalTodos){
    taskMsg = 'No tienes tareas pendientes';
  } else {
    taskMsg = `Tienes ${completedTodos} de ${totalTodos} tareas pendientes`;
  }

  return (
    <div className="todoCounter">
      <h1>Your tasks</h1>
      <h4>{taskMsg}</h4>      
      </div>
  );
  }

export { TodoCounter }; 