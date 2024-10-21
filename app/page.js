"use client";  // Declare as a client component

import { useState, useEffect, useRef } from 'react';

export default function ChatPage() {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);
  const chatContainerRef = useRef(null);

  // 메시지 전송 후 AI 응답 받기
  const handleSendMessage = async () => {
    if (inputText.trim() !== '') {
      const newMessage = { text: inputText, sender: 'me' };
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      // AI 응답 요청
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputText }),
      });

      const data = await response.json();
      const aiMessage = { text: data.response, sender: 'ai' };

      // AI 메시지 추가
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
      setInputText('');
    }
  };

  // 엔터키 입력 처리
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  // 새로운 메시지가 추가되면 자동 스크롤
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-page">
      <h1>Final People</h1>
      <div className="chat-container" ref={chatContainerRef}>
        {messages.length === 0 ? (
          <p>Start chatting with AI!</p>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className={`chat-bubble ${msg.sender}`}>
              <img
                src={msg.sender === 'me' ? '/profile_me.png' : '/profile_ai.png'} 
                alt="Profile"
                className="profile-pic"
              />
              <div className="bubble">
                {msg.text}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter your message"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          className="input-box"
        />
        <button onClick={handleSendMessage} className="send-button">Send</button>
      </div>
    </div>
  );
}
