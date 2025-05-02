"use client"

import './cardList.css'
import { ChevronRightIcon, ChevronLeftIcon } from "lucide-react";
import { useState } from 'react';
import Card from "./card";



export default function CardList() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.querySelector('.card-list');
    if (container) {
      const scrollAmount = 180 + 44; // 카드 너비 + gap
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

  return (
    <div className="card-list-wrapper">
      <h2 style={{fontSize: '48px'}}>Trending Now</h2>
      <div className="card-list-container">
        <div className="card-list-left-arrow" onClick={() => handleScroll('left')}>
          <ChevronLeftIcon size={30} />
        </div>
        <div className="card-list">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="card-list-right-arrow" onClick={() => handleScroll('right')}>
          <ChevronRightIcon size={30} />
        </div>
      </div>
    </div>
  );
}