import React from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  id?: string;
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} p-4 border-b border-gray-100`}>
      <div
        className={`max-w-[80%] rounded-lg px-4 py-2 ${
          isUser ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-900'
        }`}
      >
        <div className="prose text-inherit">{message.content}</div>
      </div>
    </div>
  );
}