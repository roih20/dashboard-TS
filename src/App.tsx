import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
   <BrowserRouter >
   <Routes>
    <Route index element={<Login />} />
    <Route  path='dashboard/*' element={<Home />}/>
   </Routes>   
   </BrowserRouter>
  );
}

export default App;
