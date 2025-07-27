import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot } from 'lucide-react';

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'assistant',
      content: 'Hello! How can I help you today?',
      timestamp: '10:30 AM'
    },
    {
      id: 2,
      type: 'user',
      content: 'Hi! I need help with my dashboard.',
      timestamp: '10:31 AM'
    },
    {
      id: 3,
      type: 'assistant',
      content: 'Of course! I can help you with your dashboard. What specific issue are you facing?',
      timestamp: '10:31 AM'
    },
    {
      id: 4,
      type: 'user',
      content: 'The charts are not displaying properly on mobile devices.',
      timestamp: '10:32 AM'
    },
    {
      id: 5,
      type: 'assistant',
      content: 'I understand the issue. This is likely a responsive design problem. Let me help you fix the chart responsiveness. Can you tell me which chart library you\'re using?',
      timestamp: '10:32 AM'
    },
    {
      id: 6,
      type: 'user',
      content: 'I\'m using Recharts for the bar charts.',
      timestamp: '10:33 AM'
    },
    {
      id: 7,
      type: 'assistant',
      content: 'Perfect! Recharts has excellent responsive features. You should wrap your charts in a ResponsiveContainer component and set the width to 100%. This will make them automatically adapt to different screen sizes.',
      timestamp: '10:33 AM'
    },
    {
      id: 8,
      type: 'user',
      content: 'That sounds great! Can you show me an example?',
      timestamp: '10:34 AM'
    }
  ]);

  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: messages.length + 1,
        type: 'user',
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, userMessage]);
      setNewMessage('');

      // Simulate assistant response
      setTimeout(() => {
        const assistantMessage = {
          id: messages.length + 2,
          type: 'assistant',
          content: 'Thank you for your message! I\'ll get back to you shortly.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, assistantMessage]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] w-full bg-gray-50">
      {/* Chat Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 w-full">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">AI Assistant</h1>
            <p className="text-sm text-gray-500">Online • Responds in seconds</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 w-full">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-2xl px-4 py-2 rounded-lg ${
                message.type === 'user'
                  ? 'bg-primary text-white'
                  : 'bg-white border border-gray-200 text-gray-900'
              }`}
            >
              <div className="flex items-start space-x-2">
                {message.type === 'assistant' && (
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-3 h-3 text-white" />
                  </div>
                )}
                <div className="flex-1">
                  <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                  <div className={`text-xs mt-1 ${
                    message.type === 'user' ? 'text-primary-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp}
                  </div>
                </div>
                {message.type === 'user' && (
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 px-6 py-4 w-full">
        <div className="flex items-end space-x-3">
          <div className="flex-1">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              rows="1"
              style={{ minHeight: '44px', maxHeight: '120px' }}
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="bg-primary text-white p-3 rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <div className="text-xs text-gray-500 mt-2 text-center">
          Press Enter to send, Shift+Enter for new line
        </div>
      </div>
    </div>
  );
} 