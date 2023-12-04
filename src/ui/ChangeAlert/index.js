import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./changeAlert.css";

function ChangeAlert({ sincronize }) {
  
  const { show, toggleShow } = useStorageListener(sincronize);

  if (show) {
    return (
      <>
        <div className="changeAlert-container">
          <div className="changeAlert-content">
            <h4 className="title">It appears some of the ToDos were updated outside this window</h4>
            <button
              onClick={() => toggleShow(false)}
              >Reload TODOs</button>   
          </div>
          <div className="changeAlert-background"></div>
        </div>   
          
      </>
    )
  }  else {
    return null;
  }
}

export { ChangeAlert }