import React from 'react';
import './App.css';
import Home from './login/Home';
import Upload from './upload/upload';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
// import Signup from './signup/signup';

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <nav>
        <NavLink to="/login/Home">Home</NavLink>
        <NavLink to="/upload/upload">Upload</NavLink>
      </nav>
      </div>
      <main>
        <Routes>
          <Route path="/login/Home" element={<Home />} />
          <Route path="/upload/upload" element={<Upload />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;