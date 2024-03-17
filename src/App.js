
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './pages/Signin';
import Login from './pages/Login';
import Home from './pages/Home';
import Add from './pages/Add';
import View from './pages/View';
import Edit from './pages/Edit';

function App() {

  
  return (
    <div className="App">
      <Routes>
        <Route path='/register' element={<Signin/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/view/:id" element={<View/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        
        
        
       
      </Routes>
    </div>
  );
}

export default App;
