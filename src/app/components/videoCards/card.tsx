"use client";

import Image from "next/image";
import { YouTubeVideo } from "@/app/utils/youtube";

interface CardProps {
  video: YouTubeVideo;
}

export default function Card({ video }: CardProps) {
  const handleClick = () => {
    const videoUrl = `https://www.youtube.com/watch?v=${video.id}`;
    window.open(videoUrl, '_blank');
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="thumbnail">
        <Image
          src={video.thumbnailUrl}
          alt={video.title}
          width={280}
          height={308}
          style={{ objectFit: 'cover', borderRadius: '8px' }}
        />
      </div>
    </div>
  );
} 