import React from "react";
import { ChatEngine } from "react-chat-engine";
import dotenv from "dotenv";

const Chat = () => {
  return (
    <ChatEngine
      projectID={process.env.projectID}
      userName={process.env.userName}
      userSecret={process.env.userSecret}
    />
  );
};

export default Chat;
