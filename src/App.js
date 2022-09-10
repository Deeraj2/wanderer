import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import HomePage from './components/Pages/Home/HomePage';
import Authentication from './components/Pages/Authentication/Authentication';
import PostDetail from './components/PostDetail/PostDetail';
import Header from './components/Header/Header';

function App() {

  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/posts' element={ <HomePage /> } />
          <Route path='/' element={<Navigate replace to="/posts" />} />
          <Route path='/posts/search' element={<HomePage />} />
          <Route path='/posts/:id' element={ <PostDetail /> } />
          <Route path='/login' element={ <Authentication /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
