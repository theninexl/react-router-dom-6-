import React from 'react';
import "./App.css";
import { useTodos } from './useTodos';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { ChangeAlertWithStorageListener } from '../ChangeAlert';


function App() { 

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
      // render={ todo => 
      //   <TodoItem 
      //   key={todo.text} 
      //   text={todo.text} 
      //   completed={todo.completed}
      //   onComplete={() => completeStandaloneTodo(todo.text)}
      //   onDelete={() => deleteStandaloneTodo(todo.text)}
      //   />
      // }
      >
        {todo => 
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          onComplete={() => completeStandaloneTodo(todo.text)}
          onDelete={() => deleteStandaloneTodo(todo.text)}
          />
        }
      </TodoList>
    
    {/* <TodoList>
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
    </TodoList> */}


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
    <ChangeAlertWithStorageListener
      sincronize={sincronizeTodos}
    />
    </>  
  );
}

export default App;


