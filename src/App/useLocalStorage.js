import React from "react";

function useLocalStorage(itemName, initialValue){

    const [item,setItem] = React.useState(initialValue);
    const [loading,setLoading] = React.useState(true);
    const [error,setError] = React.useState(false);
    const [sincronizedItem, setSincronizedItem] = React.useState(true);

    React.useEffect(()=> {
      setTimeout(()=>{
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }          
          
          setLoading(false);
          setSincronizedItem(true);
  
        } catch (error) {
          setLoading(false);
          setError(true);
        }
      }, 1500)
    }, [sincronizedItem]);
    

    const saveItem = (newItem) => {
      localStorage.setItem(itemName,JSON.stringify(newItem));
      setItem(newItem);
    }

    const sincronizeItem = () => {
      setLoading(true);
      setSincronizedItem(false);
    }

    
    return {
      item,
      saveItem,
      loading,
      error,
      sincronizeItem
    };
  }

export { useLocalStorage }


// localStorage.removeItem('simpleTodosList_V1');

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'Whatever', completed: false },
//   { text: 'Whatever lkasdj f ñlkasdf ñkljasdf lñjkadsf lkfd', completed: false },
//   { text: 'Hacer curso de introduccion a React JS asdjfañsklfañ  jkajdsñlf kjñasdf kjasdf', completed: true },
// ];

// localStorage.setItem('simpleTodosList_V1', JSON.stringify(defaultTodos));