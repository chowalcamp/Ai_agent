import List from './cardBanner/list'
import './Features.css'
import CardList from './videoCards/cardList'
import FaqList from './faq/faqList'
import RoadMap from './roadmap/roadmap'
export default function Features() {
  return (
    <section className="features-section">
      <div className="feature-item">
        <div className="feature-content">
        <CardList />
        </div>
      </div>
      <div className="feature-item">
        <div className="feature-content">
        <List />
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
