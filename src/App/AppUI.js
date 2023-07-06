import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import { TodoContext } from '../TodoContext';

function AppUI(){
    const {
      loading,
      error,
      searchedTodos,
      completeStandaloneTodo,
      deleteStandaloneTodo,
    } = React.useContext(TodoContext);

    return (
    <>
    <TodoCounter />
    <TodoSearch />
    
    <TodoList>
      {(loading && searchedTodos.length === 0) && 
        <>
        <TodosLoading />
        <TodosLoading />
        <TodosLoading />
        </>}
      {error &&  <TodosError />}
      {(!loading && searchedTodos.length === 0) && <TodosEmpty />}


      {searchedTodos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text} 
        completed={todo.completed}
        onComplete={() => completeStandaloneTodo(todo.text)}
        onDelete={() => deleteStandaloneTodo(todo.text)}
        />
      ))}
    </TodoList>


    <CreateTodoButton/>
    </>  
    )
}

export { AppUI };