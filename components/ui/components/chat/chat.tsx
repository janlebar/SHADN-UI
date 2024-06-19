
import React, { useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Array<{ message: string; sender: 'user' | 'bot' }>>([]);

  const handleSendMessage = (message: string) => {
    setMessages([...messages, { message, sender: 'user' }]);
    // Here you can add logic for bot's response
    // For example, simulate a bot response after some delay:
    setTimeout(() => {
      setMessages([...messages, { message: 'Hi there! This is a bot.', sender: 'bot' }]);
    }, 1000);
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
      <div className="h-80 overflow-y-auto">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.message} sender={msg.sender} />
        ))}
      </div>
      <ChatInput onSubmit={handleSendMessage} />
    </div>
  );
};

export default ChatPage;
