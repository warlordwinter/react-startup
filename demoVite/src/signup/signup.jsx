import React from "react";

const Signup = () => {
    return (
        <div>
            <main>
                <h2>Sign Up</h2>
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
        </div>
    );
};

export default Signup;
