import React from "react";
import "./TodoSearch.css";
//import { TodoContext } from "../TodoContext";

function TodoSearch({ searchValue,setSearchValue, }) {
    // const {
    //   searchValue,
    //   setSearchValue,
    // } = React.useContext(TodoContext);

    return (
      <input 
      className="css-input" 
      placeholder="search task"
      value={searchValue}
      onChange={(event)=>{
        setSearchValue(event.target.value)
      }}/>
    );
  }

export { TodoSearch }; 