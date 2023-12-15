import React from 'react';
import './Home.css';

import { NavLink } from 'react-router-dom';

const Home = () => {
  // const navigate = useNavigate();

  const handleLogin = () => {
    // Add your login logic here
    console.log('Login button clicked');
  };

  return (
    <main>
      <h2>Welcome</h2>
      <form className="login-form" method="get">
        <h3>Login to start</h3>
        <div className="credits">
          <div className="user">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" placeholder="Your Username here" required />
          </div>
          <div className="pass">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Your Password here" required />
          </div>
        </div>
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </form>
      <p>
        Don't have an account? <NavLink to="/signup/signup">Sign Up</NavLink>
      </p>
    </main>
  );
};

export default Home;