// 대화형 처리형

import {
  getSearchKeywordFromMessage,
  generateVideoRecommendationMessage,
  GPTMessage,
} from "./openai";
import { searchYouTubeVideos } from "./youtube";

export async function getVideoRecommendationResponse(messages: GPTMessage[]) {
  console.log("getVideoRecommendationResponse", messages);
  // 1. 사용자의 대화 기반으로 유튜브 검색 키워드 생성
  const keyword = await getSearchKeywordFromMessage(messages);
  console.log("keyword", keyword);
  // 2. 생성된 키워드로 YouTube 영상 검색
  const videos = await searchYouTubeVideos(keyword);
  console.log("videos", videos);
  // 3. 가져온 영상 리스트로 GPT에게 추천 답변 문장 생성 요청
  const recommendationMessage = await generateVideoRecommendationMessage(
    videos
  );
  console.log("recommendationMessage", recommendationMessage);
  return {
    keyword,
    videos,
    recommendationMessage,
  };
}
