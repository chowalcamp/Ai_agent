"use client";

import "./chatAi.css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Header from "../Header";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  videos?: any[];
}

interface ChatAiProps {
  messages: ChatMessage[];
  inputMessage: string;
  isLoading: boolean;
  setInputMessage: (message: string) => void;
  handleSubmit: () => void;
}

export default function ChatAi({ messages, inputMessage, isLoading, setInputMessage, handleSubmit }: ChatAiProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (!messages) {
    return null; // or some loading state
  }

  return (
    <div className="chat-ai-container">
      <Image
        src="/main-BG.png"
        alt="배경"
        fill
        priority
        style={{ objectFit: "cover"}}
      />
      <div className="background">
        <div className="image">
          <div className="image-fill">
            <div className="component-1"></div>
          </div>
        </div>
      </div>
      <Header />
      <div className="main">
        <div className="overlay-border-shadow-overlayblur">
          {/* Beta Version Notice */}
          <div className="border">
            <span>This agent is in beta version</span>
          </div>

          {/* Header Container */}
          <div className="container">
            <h2 className="heading">PopcornAI</h2>
            <div className="overlay">
              <div className="background-dot"></div>
              <span className="background-dot-text">8601 active</span>
            </div>
          </div>

          {/* 채팅 메시지 목록 */}
          <div className="messages-container">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.role}`}>
                {message.role === "assistant" && (
                  <div className="overlay-shadow">
                    <Image
                      src="/logo.png"
                      alt="Video AI Logo"
                      width={32}
                      height={32}
                      className="logo"
                    />
                  </div>
                )}
                {message.role === "user" && (
                  <div className="overlay-shadow user-icon">
                    <Image
                      src="/user-icon.png"
                      alt="User Icon"
                      width={32}
                      height={32}
                      className="logo"
                    />
                  </div>
                )}
                <div className="paragraph-background-shadow">
                  <p>{message.content}</p>
                  {message.videos && (
                    <div className="video-recommendations">
                      {message.videos.map((video, idx) => (
                        <div key={idx} className="video-item">
                          <a
                            href={`${video.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="video-thumbnail">
                              <Image
                                src={video.thumbnail}
                                alt={video.title}
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                            </div>
                            <p className="video-title">{video.title}</p>
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                  <span className="timestamp">{message.timestamp}</span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Form */}
        <div className="form">
          <div className="input">
            <textarea
              placeholder="Ask your Video AI something..."
              className="textarea-field"
              rows={3}
              maxLength={300}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
            />
          </div>
          <button
            className="button"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            <Image
              src="/send-icon.svg"
              alt="Send"
              width={20}
              height={20}
              className="send-icon"
            />
          </button>

          {/* Footer Stats */}
          <div className="stats-container">
            <div className="user-container">
              <div
                className="background-dot"
                style={{ marginLeft: "10px", marginRight: "10px" }}
              ></div>
              <p className="monthly-users">31235 Monthly Active Users</p>
            </div>
            <div className="video-ai-text">
              <p>Video AI에게 영상을 추천받으세요.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
