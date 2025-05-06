'use client'

import './Features.css'
import List from './cardBanner/list'
import CardList from './videoCards/cardList'
import FaqList from './faq/faqList'
import RoadMap from './roadmap/roadmap'
import ChartSection from './chartSection/chartSection'
import NFTCardList from './videoCards/NFTCardList'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
export default function Features() {

  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('scrollToFaq') === '1') {
      // faq-section으로 스크롤
      document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [searchParams]);

  return (
    <section className="features-section">
      <div className="feature-item">
        <div className="feature-content">
        <CardList />
        </div>
        <div className="feature-content">
        <NFTCardList />
        </div>
      </div>
      <div className="feature-item">
        <div className="feature-content">
        <List />
        </div>
      </div>
      <div className="feature-item">
        <div className="feature-content">
        <ChartSection />
        </div>
      </div>  
      <div className="feature-item">
        <div className="feature-content">
        <RoadMap />
        </div>
      </div>
      <div id="faq-section" className="feature-item">
        <div className="feature-content">
        <FaqList />
        </div>
      </div>
    </section>
  )
}
