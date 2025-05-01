'use client';

import './chatAi.css';
import Image from 'next/image';

export default function ChatAi() {
  return (
    <div className="chat-ai-container">
        <Image
        src="/BackgroundImg.jpg"
        alt="배경"
        fill
        priority
        style={{ objectFit: 'cover'}}
      />
      <div className="background"
      >
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

          {/* Chat Message */}
          <div className="overlay-shadow">
            <Image 
              src="/ghibli-logo.png" 
              alt="Video AI Logo" 
              width={32} 
              height={32} 
              className="ghibli-logo"
            />
          </div>
          <div className="paragraph-background-shadow">
            <p>Hello! I'm your Video AI agent. I'm part of a decentralized AI lifecycle on the blockchain. How can I help you today? ✨</p>
            <span className="timestamp">09:07 AM</span>
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
            />
          </div>
          <button className="button">
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
              <div className="background-dot" style={{marginLeft: '10px', marginRight: '10px'}}></div>
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