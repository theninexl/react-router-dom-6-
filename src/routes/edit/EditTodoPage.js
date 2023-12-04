import React from 'react';
import { TodoForm } from '../../ui/TodoForm';

function EditTodoPage() {
  return (
    <TodoForm
      label='Edita tu ToDo'
      submitTxt='Editar'
      submitEvent={() => console.log('llamar a editTodo')} />
  );
}

export { EditTodoPage }

