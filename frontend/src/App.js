import './App.css';
import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Todos from './Components/Todos';
import CreateTodo from './Components/CreateTodo';
import EditTodo from './Components/EditTodo';
import NavBar from './Components/NavBar';

function App() {

  return (
    <>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/create' element={<CreateTodo/>}/>
          <Route path='/edit/:id' element={<EditTodo/>}/>
          <Route path='/' element={<Todos/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
