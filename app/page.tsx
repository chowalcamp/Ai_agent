export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40" />
        <div className="container mx-auto px-4 py-16 z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
            YouTube AI Video Recommender
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8">
            AI 기반의 YouTube 영상 추천 서비스로 새로운 콘텐츠를 발견하고 즐기세요.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              시작하기
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            주요 기능
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="AI 기반 추천"
              description="사용자의 시청 이력과 선호도를 분석하여 맞춤형 YouTube 영상을 추천합니다."
            />
            <FeatureCard
              title="실시간 검색"
              description="YouTube에서 실시간으로 영상을 검색하고 관련된 콘텐츠를 찾아보세요."
            />
            <FeatureCard
              title="시청 이력 관리"
              description="시청한 영상들을 자동으로 기록하고 추천에 반영합니다."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20" id="how-it-works">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            어떻게 작동하나요?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">1. 관심 영역 설정</h3>
              <p className="text-gray-300 mb-4">
                좋아하는 주제와 관심사를 선택하여 AI에게 알려주세요.
              </p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">2. AI 추천 받기</h3>
              <div className="space-y-4">
                <p className="text-gray-300">
                  AI가 분석한 결과를 바탕으로 맞춤형 영상을 추천합니다.
                </p>
                <p className="text-gray-300">
                  시청한 영상에 대한 피드백으로 추천이 점점 더 정확해집니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/90">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400"> 2025 YouTube AI Agent. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a
                href="mailto:contact@youtubeaiagent.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                contact@youtubeaiagent.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:scale-105 transition-transform">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
