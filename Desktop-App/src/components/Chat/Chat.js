import React, { useState } from "react";
import { ChatEngine, getOrCreateChat } from "react-chat-engine";

const Chat = () => {
  const [username, setUsername] = useState("");

  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  }

  function renderChatForm(creds) {
    return (
      <div>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => createDirectChat(creds)}>Create</button>
      </div>
    );
  }

  return (
    <ChatEngine
      height="100vh"
      userName="hbsbashitha@gmail.com"
      userSecret="Bhashitha1234."
      projectID="45ab16bd-fbe5-4a09-b3b6-0adb5060ea79"
      renderNewChatForm={(creds) => renderChatForm(creds)}
    />
  );
};

export default Chat;
