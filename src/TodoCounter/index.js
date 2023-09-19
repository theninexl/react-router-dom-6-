import React from "react";
import "./TodoCounter.css";
//import { TodoContext } from "../TodoContext";

function TodoCounter({ completedTodos, totalTodos, loading }) {
  // const {
  //   completedTodos, 
  //   totalTodos
  // } = React.useContext(TodoContext)

  let taskMsg = '';
  
  if (completedTodos === totalTodos && !loading ){
    taskMsg = 'No tienes tareas pendientes';
  } else if (loading) {
    taskMsg = "Loading..."
  } else {
    taskMsg = `${completedTodos} completed tasks, out of ${totalTodos}`;
  }

  return (
    <div className="todoCounter">
      <h1>Your tasks</h1>
      <h4>{taskMsg}</h4>      
      </div>
  );
  }

export { TodoCounter }; 