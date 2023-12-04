import React from "react";
import { useLocalStorage } from "./useLocalStorage";


function useTodos() {
    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error,
        sincronizeItem: sincronizeTodos,
        } = useLocalStorage('simpleTodosList_V2',[]);
    
    const [searchValue, setSearchValue] = React.useState('');
    // console.log('los usuarios buscan: '+searchValue);
    const [openModal, setOpenModal] = React.useState(false);
    
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    
    const searchedTodos = todos.filter((todo)=>{
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
    })

    const addTodo = (text)=> {
        const id = newTodoId(todos);
        const newTodos = [...todos];
        newTodos.push({
            text:text,
            completed:false,
            id,
        })
        saveTodos(newTodos);
    }
    
    const completeStandaloneTodo = (id) => {
        const newItem = [...todos];
        const todoIndex = newItem.findIndex((todo) => todo.id === id);
        newItem[todoIndex].completed = true;
        saveTodos(newItem);  
    }
    
    const deleteStandaloneTodo = (id) => {
        const newItem = [...todos];
        const todoIndex = newItem.findIndex((todo) => todo.id === id);
        newItem.splice(todoIndex,1);
        saveTodos(newItem); 
    }

    const newTodoId = (todoList) => {
        if (!todoList.length) {
            return 1;
        }
        const idList = todoList.map(todo => todo.id);
        const idMax = Math.max(...idList);
        return idMax + 1;
    }


    return {
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeStandaloneTodo,
            deleteStandaloneTodo,
            openModal,
            setOpenModal,
            addTodo,
            sincronizeTodos,
        };
}


export { useTodos }