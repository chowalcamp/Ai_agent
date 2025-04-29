"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <main className="min-h-screen bg-black text-white">
      {/* 네비게이션 바 */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold">
              YouTube AI Agent
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link
                href="/search"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Search
              </Link>
              <Link
                href="/recommend"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Recommendations
              </Link>
              <Link
                href="/history"
                className="text-gray-300 hover:text-white transition-colors"
              >
                History
              </Link>
              <Link
                href="/settings"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Settings
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40" />
        <div className="container mx-auto px-4 py-16 z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
            YouTube AI Agent
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8">
            AI 기반의 YouTube 영상 추천 서비스로 새로운 콘텐츠를 발견하고 즐기세요.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="이메일 주소"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              시작하기
            </button>
          </div>
        </div>
      </section>

      {/* 인기 콘텐츠 섹션 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">인기 콘텐츠</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* 콘텐츠 카드 */}
            <ContentCard
              title="인기 콘텐츠 1"
              description="YouTube에서 가장 많이 시청된 콘텐츠"
            />
            <ContentCard
              title="인기 콘텐츠 2"
              description="최근 업로드된 인기 영상"
            />
            <ContentCard
              title="인기 콘텐츠 3"
              description="AI 추천 콘텐츠"
            />
            <ContentCard
              title="인기 콘텐츠 4"
              description="새로운 추천 영상"
            />
          </div>
        </div>
      </section>

      {/* 특징 섹션 */}
      <section className="py-16 bg-black/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">YouTube AI Agent의 특징</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <FeatureCard
              title="사용자 맞춤화"
              description="사용자의 선호도를 학습하여 점점 더 정확한 추천을 제공합니다."
            />
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">자주 묻는 질문</h2>
          <div className="space-y-6">
            <FAQItem
              question="YouTube AI Agent는 무엇인가요?"
              answer="YouTube AI Agent는 AI 기반의 YouTube 영상 추천 서비스입니다. 사용자의 시청 이력과 선호도를 분석하여 맞춤형 영상을 추천합니다."
            />
            <FAQItem
              question="추천은 어떻게 이루어지나요?"
              answer="AI가 사용자의 시청 이력, 선호 장르, 시청 시간 등을 분석하여 가장 적합한 영상을 추천합니다."
            />
            <FAQItem
              question="시청 이력은 어떻게 관리되나요?"
              answer="시청한 영상들은 자동으로 기록되며, 이 정보는 추천 알고리즘에 반영됩니다. 언제든지 이력을 확인하거나 삭제할 수 있습니다."
            />
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

function ContentCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="relative group">
      <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg overflow-hidden">
        {/* 콘텐츠 썸네일 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="mt-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
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

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">{question}</h3>
      <p className="text-gray-300">{answer}</p>
    </div>
  );
}
