import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './home/Homepage';
import { NewTodoPage } from './new/NewTodoPage';
import { EditTodoPage } from './edit/EditTodoPage';


function App() { 

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/new' element={<NewTodoPage/>} />
          <Route path='/edit/:id' element={<EditTodoPage />} />
          <Route path='*' element={<p>Not found</p>} />
        </Routes>
      </HashRouter>
    </>  
  );
}

export { App };


