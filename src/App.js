import './App.css';
import React from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Nav from './components/NavBar.js'
import Home from './components/HomePage.js'
import About from './components/About.js'



function App() {

  return (
    <div className="App">
    <BrowserRouter>
    <Nav />
      <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />}/>
        <Route path="home" element={<Home />} >
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
