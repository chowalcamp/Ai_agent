export interface YouTubeVideo {
  id: string;
  title: string;
  thumbnailUrl: string;
  channelTitle: string;
  publishedAt: string;
  viewCount: string;
}

export async function getTrendingVideos(): Promise<YouTubeVideo[]> {
  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const searchQuery = encodeURIComponent('artificial intelligence|machine learning|AI technology');
  
  // 먼저 검색 API로 비디오 ID들을 가져옵니다
  const searchResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=id&q=${searchQuery}&type=video&maxResults=10&relevanceLanguage=en&regionCode=US&order=viewCount&key=${API_KEY}`
  );

  if (!searchResponse.ok) {
    throw new Error('Failed to search videos');
  }

  const searchData = await searchResponse.json();
  const videoIds = searchData.items.map((item: any) => item.id.videoId).join(',');

  // 비디오 상세 정보를 가져옵니다
  const videoResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds}&key=${API_KEY}`
  );

  if (!videoResponse.ok) {
    throw new Error('Failed to fetch video details');
  }

  const videoData = await videoResponse.json();
  
  return videoData.items.map((item: any) => ({
    id: item.id,
    title: item.snippet.title,
    thumbnailUrl: item.snippet.thumbnails.high.url, // 더 높은 해상도의 썸네일 사용
    channelTitle: item.snippet.channelTitle,
    publishedAt: item.snippet.publishedAt,
    viewCount: item.statistics.viewCount
  }));
}

export async function getNFTAIVideos(): Promise<YouTubeVideo[]> {
  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const searchQuery = encodeURIComponent('AI NFT|NFT artificial intelligence|AI generated NFT');
  
  const searchResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=id&q=${searchQuery}&type=video&maxResults=10&relevanceLanguage=en&regionCode=US&order=viewCount&key=${API_KEY}`
  );

  if (!searchResponse.ok) {
    throw new Error('Failed to search NFT videos');
  }

  const searchData = await searchResponse.json();
  const videoIds = searchData.items.map((item: any) => item.id.videoId).join(',');

  const videoResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds}&key=${API_KEY}`
  );

  if (!videoResponse.ok) {
    throw new Error('Failed to fetch NFT video details');
  }

  const videoData = await videoResponse.json();
  
  return videoData.items.map((item: any) => ({
    id: item.id,
    title: item.snippet.title,
    thumbnailUrl: item.snippet.thumbnails.high.url,
    channelTitle: item.snippet.channelTitle,
    publishedAt: item.snippet.publishedAt,
    viewCount: item.statistics.viewCount
  }));
} 