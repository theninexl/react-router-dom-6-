import React from 'react';
import { TodoForm } from '../../ui/TodoForm';

function NewTodoPage() {
  return (
    <TodoForm
     label='Escribe tu nuevo Todo'
     submitTxt='Añadir'
     submitEvent={() => console.log('llamar a addTodo')} />
  );
}

export { NewTodoPage }

