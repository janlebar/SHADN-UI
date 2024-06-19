import React from 'react';

interface ChatMessageProps {
  message: string;
  sender: 'user' | 'bot';
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, sender }) => {
  const isUser = sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`bg-gray-200 p-2 rounded-lg ${
          isUser ? 'bg-blue-500 text-white ml-auto' : 'bg-gray-300'
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;