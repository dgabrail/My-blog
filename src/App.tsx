import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './components/Add/Add';
import Navbar from './components/Navbar/Navbar';
import ViewPost from './components/ViewPost/ViewPost';
import About from './container/About/About';
import Contacts from './container/Contacts/Contacts';
import Home from './container/Home/Home';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={(
          <Home />
        )} />
        <Route path='/new-post' element={(
          <Add />
        )} />
        <Route path='/posts/:id/edit' element={(
          <Add />
        )} />
        <Route path='/posts/:id' element={(
          <ViewPost/>
        )} />
        <Route path='/about' element={(
          <About />
        )} />
        <Route path='/contacts' element={(
          <Contacts />
        )} />
      </Routes>
    </div>
  );
}

export default App;
