"use client"

import './cardList.css'
import { ChevronRightIcon, ChevronLeftIcon } from "lucide-react";
import { useState, useEffect } from 'react';
import Card from "./card";
import { getNFTAIVideos, YouTubeVideo } from '@/app/utils/youtube';

export default function NFTCardList() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getNFTAIVideos();
        setVideos(data);
      } catch (err) {
        setError('Failed to load NFT videos');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.querySelector('.nft-card-list');
    if (container) {
      const scrollAmount = 280 + 20; // 카드 너비 + gap
      const newPosition = direction === 'left' 
        ? scrollPosition - scrollAmount 
        : scrollPosition + scrollAmount;
      
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      
      setScrollPosition(newPosition);
    }
  };

  if (isLoading) {
    return <div className="card-list-wrapper">Loading...</div>;
  }

  if (error) {
    return <div className="card-list-wrapper">Error: {error}</div>;
  }

  return (
    <div className="card-list-wrapper" style={{ marginTop: '40px' }}>
      <h2><span>Trending</span>NFT Videos 🏆</h2>
      <div className="card-list-container">
        <div className="card-list-left-arrow" onClick={() => handleScroll('left')}>
          <ChevronLeftIcon size={30} />
        </div>
        <div className="nft-card-list card-list">
          {videos.map((video) => (
            <Card key={video.id} video={video} />
          ))}
        </div>
        <div className="card-list-right-arrow" onClick={() => handleScroll('right')}>
          <ChevronRightIcon size={30} />
        </div>
      </div>
    </div>
  );
} 