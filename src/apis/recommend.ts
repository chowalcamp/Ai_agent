// src/apis/recommend.ts

import axios from "axios";

// YouTube API 응답 타입 정의
interface YouTubeVideo {
  id: string;
  snippet: {
    publishedAt: string;
    title: string;
    description: string;
    thumbnails: {
      default: { url: string };
      medium: { url: string };
      high: { url: string };
    };
    channelTitle: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
  };
}

interface YouTubeApiResponse {
  items: YouTubeVideo[];
  nextPageToken?: string;
}

const MAJOR_REGIONS = [
  "US",
  "GB",
  "KR",
  "JP",
  "IN",
  "BR",
  "CA",
  "DE",
  "FR",
  "RU",
] as const;

export async function getGlobalTrendingVideos(
  maxResults: number = 10
): Promise<YouTubeVideo[]> {
  try {
    if (!process.env.YOUTUBE_API_KEY) {
      throw new Error("YouTube API 키가 설정되지 않았습니다.");
    }

    // 여러 지역의 인기 동영상을 병렬로 가져오기
    const promises = MAJOR_REGIONS.map((region) =>
      axios.get<YouTubeApiResponse>(
        "https://www.googleapis.com/youtube/v3/videos",
        {
          params: {
            part: "snippet,statistics",
            chart: "mostPopular",
            regionCode: region,
            maxResults: 10, // 각 지역별로 더 많은 비디오를 가져옴
            key: process.env.YOUTUBE_API_KEY,
          },
        }
      )
    );

    const responses = await Promise.all(promises);

    // 모든 비디오를 하나의 배열로 합치기
    const allVideos = responses.flatMap((response) => response.data.items);

    // 조회수를 기준으로 정렬하고 중복 제거
    const uniqueVideos = Array.from(
      new Map(allVideos.map((video) => [video.id, video])).values()
    );
    const sortedVideos = uniqueVideos.sort(
      (a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount)
    );

    // 요청된 개수만큼 반환
    return sortedVideos.slice(0, maxResults);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`YouTube API 요청 실패: ${error.message}`);
    }
    throw error;
  }
}
