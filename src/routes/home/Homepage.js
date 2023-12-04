import React from 'react';
import "../App.css";
import { useTodos } from '../useTodos';
import { TodoHeader } from '../../ui/TodoHeader';
import { TodoCounter } from '../../ui/TodoCounter';
import { TodoSearch } from '../../ui/TodoSearch';
import { TodoList } from '../../ui/TodoList';
import { TodoItem } from '../../ui/TodoItem';
import { CreateTodoButton } from '../../ui/CreateTodoButton';
import { TodosLoading } from '../../ui/TodosLoading';
import { TodosError } from '../../ui/TodosError';
import { TodosEmpty } from '../../ui/TodosEmpty';
import { Modal } from '../../ui/Modal';
import { TodoForm } from '../../ui/TodoForm';
import { ChangeAlert } from '../../ui/ChangeAlert';


function Homepage() { 

  const {
    loading,
    error,
    searchedTodos,
    completeStandaloneTodo,
    deleteStandaloneTodo,
    openModal,
    setOpenModal,
    completedTodos, 
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
    sincronizeTodos,
  } = useTodos();

  return (
    <>
    {/* Como TodoCounter y TodoSearch reciben la misma prop, la pasamos al componente padre TodoHeader y dentro de el hacemos las operaciones necesarias para pasarle esa única prop a sus hijos, sin tener que pasarsela dos veces */}
    <TodoHeader loading={loading}>
      <TodoCounter
        totalTodos = {totalTodos}
        completedTodos = {completedTodos}
        // loading={loading}
        />
      <TodoSearch 
        searchValue = {searchValue} 
        setSearchValue = {setSearchValue}
        // loading={loading}
        />
    </TodoHeader>

    <TodoList
      error={error}
      loading={loading}
      searchedTodos={searchedTodos}
      totalTodos={totalTodos}
      searchText={searchValue}
      onError={()=> <TodosError />}
      onLoading={()=> <TodosLoading />}
      onEmptyTodos={()=> <TodosEmpty/>}
      onEmptySearchResults={(searchText) => <p>No hay resultados para {searchText}</p>}
      >
        {todo => 
          <TodoItem 
          key={todo.id} 
          text={todo.text} 
          completed={todo.completed}
          onComplete={() => completeStandaloneTodo(todo.id)}
          onEdit={() => console.log('editar todo')}
          onDelete={() => deleteStandaloneTodo(todo.id)}
          />
        }
      </TodoList>
    
    <CreateTodoButton
      setOpenModal={setOpenModal}
    />
    
    {openModal && (
      <Modal>
        <TodoForm 
          addTodo = {addTodo}
          setOpenModal = {setOpenModal}/>
      </Modal>
    )}
    <ChangeAlert
      sincronize={sincronizeTodos}
    />
    </>  
  );
}

export { Homepage };


