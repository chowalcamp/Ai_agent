"use client";

import { useState, useEffect } from "react";
import { getVideoRecommendationResponse } from "@/apis/chat";
import { GPTMessage } from "@/apis/openai";
import ChatAi from "./chatAi";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  videos?: any[];
}

export default function ChatScript(): JSX.Element {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm your Video AI agent. I'm part of a decentralized AI lifecycle on the blockchain. How can I help you today? ✨",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  useEffect(() => {
    // 클라이언트 사이드에서 localStorage 데이터 로드
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  useEffect(() => {
    // 메시지가 업데이트될 때마다 localStorage에 저장
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

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
    <div>
      <ChatAi
        messages={messages}
        inputMessage={inputMessage}
        isLoading={isLoading}
        setInputMessage={setInputMessage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
