import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}) {
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
    
    const searchedTodos = todos.filter((todo)=>{
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
    })
    
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
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeStandaloneTodo,
            deleteStandaloneTodo,
        }}>
            {children}
        </TodoContext.Provider>
    )
}


export { TodoContext, TodoProvider }