import React, { useEffect, useState } from 'react';

const Chat = () => {
  const [myName, setMyName] = useState('');
  const [chatText, setChatText] = useState('');
  const [isChatDisabled, setChatDisabled] = useState(true);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Adjust the webSocket protocol to what is being used for HTTP
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    const newSocket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    setSocket(newSocket);

    // Display that we have opened the webSocket
    newSocket.onopen = () => {
      appendMsg('system', 'websocket', 'connected');
    };

    newSocket.onmessage = async (event) => {
      const text = await event.data.text();
      const chat = JSON.parse(text);
      appendMsg('friend', chat.name, chat.msg);
    };

    newSocket.onclose = () => {
      appendMsg('system', 'websocket', 'disconnected');
      setChatDisabled(true);
    };

    return () => {
      newSocket.close();
    };
  }, []);

  const handleNameChange = (e) => {
    setMyName(e.target.value);
    setChatDisabled(e.target.value === '');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const sendMessage = () => {
    const msgEl = document.querySelector('#new-msg');
    const msg = msgEl.value;
    if (!!msg) {
      appendMsg('me', 'me', msg);
      const name = myName;
      socket.send(`{"name":"${name}", "msg":"${msg}"}`);
      msgEl.value = '';
    }
  };

  const appendMsg = (cls, from, msg) => {
    setChatText((prevChatText) => `<div><span class="${cls}">${from}</span>: ${msg}</div>` + prevChatText);
  };

  return (
    <div>
      <div className="name">
        <fieldset id="name-controls">
          <legend>My Name</legend>
          <input id="my-name" type="text" value={myName} onChange={handleNameChange} />
        </fieldset>
      </div>
      <div>
        <fieldset id="chat-controls" disabled={isChatDisabled}>
          <legend>Chat</legend>
          <input id="new-msg" type="text" onKeyDown={handleKeyDown} />
          <button disabled={isChatDisabled} onClick={sendMessage}>
            Send
          </button>
        </fieldset>
        <div id="chat-text" dangerouslySetInnerHTML={{ __html: chatText }}></div>
      </div>
    </div>
  );
};

export default Chat;
