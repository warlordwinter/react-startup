import React from "react";
import "./upload.css";
import { storePDF, getPDF } from "./upload_station";
import Chat from "./chat"; // Assuming the Chat component is in the same directory

const Upload = () => {
    const handleStorePDF = () => {
        storePDF();
    };

    const handleGetPDF = () => {
        getPDF();
    };

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
            <main>
                {/* <div className="name">
                    <fieldset id="name-controls">
                        <legend>My Name</legend>
                        <input id="my-name" type="text" />
                    </fieldset>
                </div> */}
                {/* Integrate the Chat component here */}
                <Chat />
                <div className="File_upload">
                    <br />
                    <h3>Upload My Document</h3>
                    <input type="file" id="pdf-file-input" accept=".pdf" />
                    <button onClick={handleStorePDF}>Store PDF</button>
                </div>
                <div className="Display_PDF">
                    <br />
                    <h3>Display PDF</h3>
                    <input type="text" id="pdf-file-name" placeholder="Enter PDF name" />
                    <button onClick={handleGetPDF}>Get PDF</button>
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
