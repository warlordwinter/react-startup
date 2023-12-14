import React from "react";
import "./upload.css";
import { NavLink } from "react-router-dom";

const Upload = () => {
    return (
        <div>
            {/* FILEPATH: /c:/Users/18019/OneDrive/Desktop/CS_260/my_start_up/startup/HTML_code/upload_station.html */}
            <link rel="stylesheet" type="text/css" href="styles/ups.css" />
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
                crossOrigin="anonymous"
            />
            <meta charSet="UTF-8" />
            {/* Tell browsers not to scale the viewport automatically */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Upload Station</title>
            <link rel="icon" href="favicon.ico" />
            {/*  */}
            {/* Use header, main, and footer elements to give semantic structure */}
            {/* <header
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
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
                                <NavLink to="/upload/upload">Upload</NavLink>
                            </div>
                        </menu>
                    </nav>
                </div>
            </header> */}
            <main>
                <div className="name">
                    <fieldset id="name-controls">
                        <legend>My Name</legend>
                        <input id="my-name" type="text" />
                    </fieldset>
                </div>
                <fieldset id="chat-controls" disabled>
                    <legend>Chat</legend>
                    <input id="new-msg" type="text" />
                    <button onclick="sendMessage()">Send</button>
                </fieldset>
                <div id="chat-text" />
                <div className="File_upload">
                    <br />
                    <h3>Upload My Document</h3>
                    <input type="file" id="pdf-file-input" accept=".pdf" />
                    <button onclick="storePDF()">Store PDF</button>
                </div>
                <div className="Display_PDF">
                    <br />
                    <h3>Display PDF</h3>
                    <input type="text" id="pdf-file-name" placeholder="Enter PDF name" />
                    <button onclick="getPDF()">Get PDF</button>
                    <div id="pdf-viewer" />
                </div>
            </main>
            <footer>
                <span className="text-reset">Wiley Welch's</span>
                <br />
                <a href="https://github.com/warlordwinter/startup">GitHub</a>
            </footer>
        </div>
    );
};

export default Upload;