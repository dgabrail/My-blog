import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './container/About/About';
import Add from './container/Add/Add';
import Contacts from './container/Contacts/Contacts';
import Home from './container/Home/Home';
import ReadMore from './container/ReadMore/ReadMore';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <Routes>
        <Route path={'/'} element={(
          <Home/>
        )}/>
        <Route path='/posts' element={(
          <Home/>
        )}/>
        <Route path='/new-post' element={(
          <Add/>
        )}/>
        <Route path='/posts/:id' element={(
          <ReadMore/>
        )}/>
        <Route path='/about' element={(
          <About/>
        )}/>
        <Route path='/contacts' element={(
          <Contacts/>
        )}/>
      </Routes>
    </div>
  );
}

export default App;
