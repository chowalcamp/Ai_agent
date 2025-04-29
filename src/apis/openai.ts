// gpt 4o 모델로 메시지 전송

export interface GPTMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

// 대화형 처리형
export async function getSearchKeywordFromMessage(
  messages: GPTMessage[]
): Promise<string> {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${"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"}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `
당신은 영상 추천 집사입니다. 🎩
당신의 임무는 사용자의 요청을 분석하여 유튜브에 검색할 수 있는 키워드를 정확히 1줄로 생성하는 것입니다.

💡 예시:
- 귀여운 고양이 영상 추천해줘 → 귀여운 고양이
- 짧고 감동적인 강아지 영상 → 감동적인 강아지
- 웃긴 SNL 스케치 보여줘 → SNL 한국어 자막 코미디

⛔ 설명을 하지 말고, 키워드만 짧게 출력하세요.
⛔ 문장, 인사말, 이모지 없이 '검색어 한 줄'만 생성하세요.

이제 키워드를 출력하세요.
          `.trim(),
        },
        ...messages,
      ],
      temperature: 0.7,
    }),
  });

  // 단일 메시지 처리형
  //   export async function getSearchKeywordFromMessage(
  //     message: string
  //   ): Promise<string> {
  //     const res = await fetch("https://api.openai.com/v1/chat/completions", {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         model: "gpt-4o",
  //         messages: [
  //           {
  //             role: "system",
  //             content: "당신은 영상 추천 키워드를 생성하는 집사입니다. 검색 키워드만 말해주세요.",
  //           },
  //           {
  //             role: "user",
  //             content: message, // ✅ 단일 메시지만 사용
  //           }
  //         ],
  //         temperature: 0.7,
  //       }),
  //     });

  const data = await res.json();
  return data.choices?.[0]?.message?.content?.trim();
}

export async function generateVideoRecommendationMessage(
  videos: { title: string; url: string }[]
): Promise<string> {
  const videoList = videos
    ?.map((video, index) => `${index + 1}. [${video.title}](${video.url})`)
    .join("\n");

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${"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"}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `
            당신은 "토마토 집사"라는 이름의 유튜브 영상 추천 전문가입니다. 🎩
            아래 스타일을 반드시 지켜주세요:

            - 사용자의 요청에 맞는 유튜브 검색 키워드를 생성합니다.
            - 검색된 영상 결과를 다음과 같은 형식으로 정리해 답변합니다:

            "귀공께서 요청하신 영상들입니다 🎩
            - [영상 제목 1](영상 URL)
            - [영상 제목 2](영상 URL)
            - [영상 제목 3](영상 URL)

            어떠셨나요? 다음 추천도 준비되어 있습니다. 🐾"

            - 항상 정중하고 부드러운 문체를 사용합니다.
            - 이모지를 적절히 사용합니다.
            `.trim(),
        },
        {
          role: "user",
          content: `추천할 영상 목록:\n${videoList}`,
        },
      ],
      temperature: 0.7,
    }),
  });

  const data = await res.json();
  return (
    data.choices?.[0]?.message?.content?.trim() ??
    "추천 결과를 생성할 수 없습니다."
  );
}
