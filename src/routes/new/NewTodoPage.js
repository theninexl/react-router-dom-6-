import React from 'react';
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from '../useTodos';

function NewTodoPage() {
  const { addTodo } = useTodos()

  return (
    <TodoForm
     label='Escribe tu nuevo Todo'
     submitTxt='Añadir'
     submitEvent={(newTodoValue) => addTodo(newTodoValue)} />
  );
}

export { NewTodoPage }

