import React from 'react';
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from '../useTodos';
import { useLocation, useParams } from 'react-router-dom';

function EditTodoPage() {
  const location = useLocation();
  const { loading, getTodo, editStandaloneTodo } = useTodos();
  const params = useParams();
  const id = Number(params.id);

  let todoText;

  if (location.state?.todo) {
    todoText = location.state.todo.text;
  } else if (loading) {
    return <p>Cargando...</p>
  } else {
    const todo = getTodo(id);
    todoText = todo.text;
  }
  
  return (
    <TodoForm
      label='Edita tu ToDo'
      defaultTodoText={todoText}
      submitTxt='Editar'
      submitEvent={(newTodoValue) => editStandaloneTodo(id, newTodoValue)} />
  );
  
}

export { EditTodoPage }

