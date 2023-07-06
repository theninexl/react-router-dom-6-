import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';
import "./App.css";

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'Whatever', completed: false },
//   { text: 'Whatever lkasdj f ñlkasdf ñkljasdf lñjkadsf lkfd', completed: false },
//   { text: 'Hacer curso de introduccion a React JS asdjfañsklfañ  jkajdsñlf kjñasdf kjasdf', completed: true },
// ];

// localStorage.setItem('simpleTodosList_V1', defaultTodos);
// localStorage.removeItem('simpleTodosList_V1', defaultTodos);



function App() { 
  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('simpleTodosList_V1',[]);

  const [searchValue, setSearchValue] = React.useState('');
  // console.log('los usuarios buscan: '+searchValue);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  // console.log('Log 1');

  // // React.useEffect(()=> {
  // //     console.log('Log 2');
  // // });

  // //   React.useEffect(()=> {
  // //     console.log('Looog 2');
  // // }, []);

  //   React.useEffect(()=> {
  //     console.log('L0000g 2');
  // }, [totalTodos]);

  // console.log('Log 3');


  const searchedTodos = todos.filter((todo)=>{
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  })

  console.log(searchedTodos.length);

  const completeStandaloneTodo = (text) => {
    const newItem = [...todos];
    const todoIndex = newItem.findIndex((todo) => todo.text === text);
    newItem[todoIndex].completed = true;
    saveTodos(newItem);  
  }

  const deleteStandaloneTodo = (text) => {
    const newItem = [...todos];
    const todoIndex = newItem.findIndex((todo) => todo.text === text);
    newItem.splice(todoIndex,1);
    saveTodos(newItem); 
  }

  return (
    <AppUI 
      loacint={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeStandaloneTodo={completeStandaloneTodo}
      deleteStandaloneTodo={deleteStandaloneTodo}
    />
  );
}

export default App;
