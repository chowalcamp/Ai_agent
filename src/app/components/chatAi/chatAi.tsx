"use client";

import "./chatAi.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getVideoRecommendationResponse } from "@/apis/chat";
import { GPTMessage } from "@/apis/openai";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  videos?: any[];
}

export default function ChatAi() {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    // 클라이언트 사이드에서만 localStorage를 사용하기 위한 체크
    if (typeof window !== "undefined") {
      const savedMessages = localStorage.getItem("chatMessages");
      return savedMessages
        ? JSON.parse(savedMessages)
        : [
            {
              role: "assistant",
              content:
                "Hello! I'm your Video AI agent. I'm part of a decentralized AI lifecycle on the blockchain. How can I help you today? ✨",
              timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
            },
          ];
    }
    return [];
  });
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!inputMessage.trim()) return;

    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const userMessage: ChatMessage = {
      role: "user",
      content: inputMessage,
      timestamp: currentTime,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      // GPT 메시지 형식으로 변환
      const gptMessages: GPTMessage[] = messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));
      gptMessages.push({ role: "user", content: inputMessage });

      // 비디오 추천 응답 받기
      const response = await getVideoRecommendationResponse(gptMessages);

      // AI 응답 추가
      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: response.recommendationMessage,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        videos: response.videos,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      // 에러 메시지 추가
      const errorMessage: ChatMessage = {
        role: "assistant",
        content: "죄송합니다. 오류가 발생했습니다. 다시 시도해 주세요.",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="chat-ai-container">
      <Image
        src="/BackgroundImg.jpg"
        alt="배경"
        fill
        priority
        style={{ objectFit: "cover" }}
      />
      <div className="background">
        <div className="image">
          <div className="image-fill">
            <div className="component-1"></div>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="overlay-border-shadow-overlayblur">
          {/* Beta Version Notice */}
          <div className="border">
            <span>This agent is in beta version</span>
          </div>

          {/* Header Container */}
          <div className="container">
            <h2 className="heading">Video AI</h2>
            <div className="overlay">
              <div className="background-dot"></div>
              <span>8601 active</span>
            </div>
          </div>

          {/* 채팅 메시지 목록 */}
          <div className="messages-container">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.role}`}>
                {message.role === "assistant" && (
                  <div className="overlay-shadow">
                    <Image
                      src="/ghibli-logo.png"
                      alt="Video AI Logo"
                      width={32}
                      height={32}
                      className="ghibli-logo"
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
