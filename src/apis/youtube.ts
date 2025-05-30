// 유튜브 검색 결과 반환

export interface YouTubeVideo {
  title: string;
  url: string;
  thumbnail: string;
}

const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export async function searchYouTubeVideos(
  keyword: string
): Promise<YouTubeVideo[]> {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
      keyword
    )}&key=${apiKey}&type=video&maxResults=3`
  );

  const data = await res.json();

  return data.items?.map((item: any) => ({
    title: item.snippet.title,
    url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
    thumbnail: item.snippet.thumbnails.medium.url,
  }));
}
