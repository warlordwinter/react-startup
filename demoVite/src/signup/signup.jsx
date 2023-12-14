// import e from "express";
import React from "react";

const Signup = () => {
  return (
    <div>
  {/* <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sign Up</title>
  <link rel="icon" href="favicon.ico" />
  <link rel="stylesheet" href="styles/signup.css" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
    crossOrigin="anonymous"
  /> */}
  <header className="true-header">
    <h1>
      Sign Up<sup>®</sup>
    </h1>
    <menu className="dropdown">
      <button className="dropbtn">Menu</button>
      <div className="dropdown-content">
        <a href="index.html">Home</a>
        <a href="upload_station.html">Upload Station</a>
        <a href="sign_up.html">Sign Up</a>
      </div>
    </menu>
  </header>
  <main>
    <header>
      <h3>Sign Up Here!</h3>
    </header>
    <div className="sign-up-box">
      <div className="f-name">
        <label htmlFor="fullname">Full Name: </label>
        <input
          type="text"
          id="fullname"
          placeholder="Type Name Here"
          required
        />
      </div>
      <div className="user_name">
        <label htmlFor="username">
          <strong>Username: </strong>
        </label>
        <input
          type="text"
          id="username"
          placeholder="Type Username Here"
          required
        />
      </div>
      <div className="pass">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          placeholder="Type Password Here"
          required
        />
      </div>
      <button className="btn btn-primary" onClick="signUP()">
        Sign Up
      </button>
    </div>
    <div id="quote">
      <div>"The Best Journey's begin with the first step."</div>
      <div>- Wiley Welch</div>
    </div>
  </main>
  <footer>
    <hr />
    <div className="centered-content">
      <a href="https://github.com/warlordwinter/startup" className="text-reset">
        Wiley's GitHub
      </a>
    </div>
  </footer>
</div>
    );
}

export default Signup;

