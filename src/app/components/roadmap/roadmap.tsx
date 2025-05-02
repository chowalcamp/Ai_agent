import { Brain, Circle, CircleSmall, Coins, Globe, Users } from 'lucide-react';
import './roadmap.css'

export default function RoadMap() {
    return (
      <section className="roadmap-section">
        <h1 className="roadmap-title">Roadmap 2025</h1>
        <div className="roadmap-subtitle">
          Our strategic vision for innovation and growth throughout 2025.
          <div className='roadmap-subtitle-line'></div>
        </div>
  
        <div className="roadmap-timeline">
          <div className="timeline-item">
            <div className='timeline-dot'><Circle/></div>
            <div className="roadmap-content current">
            <div className="quarter"><Brain size={24}/>Q1</div>
              <div className="status">Current</div>
              <h3>AI algorithm & backend</h3>
              <p>Development of core AI algorithms and backend infrastructure to power our platform.</p>
            </div>
          </div>
  
          <div className="timeline-item">
            <div className='timeline-dot'><Circle/></div>
            <div className="roadmap-content upcoming">
            <div className="quarter"><Users size={24}/>Q2</div>
              <div className="status">Upcoming</div>
              <h3>MVP, Community, Testnet NFTs</h3>
              <p>Launch of minimum viable product, community building initiatives, and testnet NFT releases.</p>
            </div>
          </div>
  
          <div className="timeline-item">
            <div className='timeline-dot'><Circle /></div>
            <div className="roadmap-content planned">
            <div className="quarter">
                <Coins size={24}/>       
                Q3
            </div>
              <div className="status">Planned</div>
              <h3>Token launch, Mainnet, Marketplace</h3>
              <p>Official token launch on exchanges, mainnet deployment, and marketplace implementation.</p>
            </div>
          </div>
  
          <div className="timeline-item">
            <div className='timeline-dot'><Circle /></div>
            <div className="roadmap-content future">
            <div className="quarter">
                <Globe size={24}/>
                Q4
                </div>
              <div className="status">Future</div>
              <h3>DAO, Global growth, B2B APIs</h3>
              <p>Decentralized governance structure, international expansion, and B2B API solutions.</p>
            </div>
          </div>
        </div>
  
        <div className="roadmap-footer">
          <h2>Join Our Journey</h2>
          <p>Be part of our growing community as we build the future of our platform throughout 2025.</p>
        </div>
      </section>
    );
  }