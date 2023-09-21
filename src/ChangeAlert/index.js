import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./changeAlert.css";

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <>
        <div className="changeAlert-container">
          <div className="changeAlert-content">
            <h4 class="title">It appears some of the ToDos were updated outside this window</h4>
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


const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlert, ChangeAlertWithStorageListener }