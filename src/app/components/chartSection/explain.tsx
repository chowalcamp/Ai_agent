import { BookOpen, Coins, Trophy, Users } from 'lucide-react'
import './explain.css'

export default function Explain() {
    return (
        <div className="explain-container">
            <div className="explain-title-container">
                <div className="explain-title">Use Cases</div>
                <div className="explain-subtitle">
                Access readings, trade NFTs, join governance, earn rewards.
                </div>
            </div>
            <div className="explain-content">
                <div className="explain-content-item">
                    <div className='explain-icon-background'>
                    <BookOpen />
                    </div>
                    <div className="explain-content-item-text-container">
                        <p className="explain-content-item-title">Access Readings</p>
                        <p className="explain-content-item-text">Unlock premium divination content and personalized readings with tokens</p>
                    </div>
                </div>
                <div className="explain-content-item">
                    <div className='explain-icon-background'>
                    <Coins />
                    </div>
                    <div className="explain-content-item-text-container">
                        <p className="explain-content-item-title">Trade NFTs</p>
                        <p className="explain-content-item-text">Use PopAI token to acquire unique digital artifacts and destiny-altering collectibles</p>
                    </div>
                </div>
                <div className="explain-content-item">
                    <div className='explain-icon-background'>
                        <Users />
                    </div>
                    <div className="explain-content-item-text-container">
                        <p className="explain-content-item-title">Join Governance</p>
                        <p className="explain-content-item-text">Participate in the governance of the PopAI token ecosystem and shape its future</p>
                    </div>
                </div>
                <div className="explain-content-item">
                    <div className='explain-icon-background'>
                    <Trophy />
                    </div>
                    <div className="explain-content-item-text-container">
                        <p className="explain-content-item-title">Earn Rewards</p>
                        <p className="explain-content-item-text">Stake PopAI token to earn passive income and unlock special platform perks</p>
                    </div>
                </div>
            </div>
        </div>
    )
}