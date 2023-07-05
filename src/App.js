import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
// esto está comentado pero tiene una explicación más abajo
import React from 'react';


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
  const localStorageTodos = localStorage.getItem('simpleTodosList_V1');
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('simpleTodosList_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');
  console.log('los usuarios buscan: '+searchValue);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;


  const searchedTodos = todos.filter((todo)=>{
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  })

  const saveTodos = (newTodos) => {
    localStorage.setItem('simpleTodosList_V1',JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  const completeStandaloneTodo = (text) => {
    console.log('marca done');
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);  
  }

  const deleteStandaloneTodo = (text) => {
    console.log('delete');
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos); 
  }

  return (
    // react.fragment se utiliza porque React necesita al menos 1 elemento al menos para poder renderizar lo que necesite la aplicaion dentro, y necesita también el import React from 'react' de la parte superior para poder funcionar. 
    // <React.Fragment>
    // pero tambien se puede sustituir solo con '<>' y elimina la necesidad de hacer el import de React
    <>

      <TodoCounter 
        completedTodos={completedTodos}
        totalTodos={totalTodos}
        />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
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
    // </React.Fragment>
  );
}

export default App;
