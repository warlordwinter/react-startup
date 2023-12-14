// Header.js

import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/login/Home">Home</Link></li>
          <li><Link to="/signup/signup">signup</Link></li>
          {/* <li><Link to="/">Contact</Link></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
