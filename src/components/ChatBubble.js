import React from "react";

function ChatBubble({ sender, text }) {
  const isUser = sender === "user";
  return (
    <div className={`chat-bubble ${isUser ? "user" : "bot"}`}>
      <div>{text}</div>
    </div>
  );
}

export default ChatBubble;
