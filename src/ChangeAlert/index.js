import React from "react";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <>
        <p>TODOs list was updated outside this app</p>
        <button
          onClick={() => toggleShow(false)}
          >Reload TODOs</button>      
          
      </>
    )
  }  else {
    return null;
  }
}


const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlert, ChangeAlertWithStorageListener }