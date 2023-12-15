import React from "react";
import "./App.css";
import Home from "./login/Home";
import Upload from "./upload/upload";
import { BrowserRouter, NavLink, Routes, Route} from "react-router-dom";
import Signup from './signup/signup';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div className="hed" width="100%">
            <h1 id="usernameHeader" />
          </div>
          <div className="main-button">
            <nav>
              <menu className="dropdown">
                <button className="dropbtn">Menu</button>
                <div className="dropdown-content">
                  <NavLink to="/login/Home">Home </NavLink>
                  <NavLink to="/upload/upload">Upload Station</NavLink>
                  <NavLink to="/signup/signup">Sign Up</NavLink>
                </div>
              </menu>
            </nav>
          </div>
        </header>
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/login/Home" element={<Home />} />
          <Route path="/upload/upload" element={<Upload />} />
          <Route path="/signup/signup" element={<Signup />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
