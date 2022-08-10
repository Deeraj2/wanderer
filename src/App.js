import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './components/Pages/Home/HomePage';
import Authentication from './components/Pages/Authentication/Authentication';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/login' element={ <Authentication /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
