import BannerCard from './BannerCard'
import './list.css'

export default function List() {
    return (
        <div className="BC-wrapper">
            <h2>What Can You Do With PopcornAI❓
            </h2>
            <div className="BC-list">
                <BannerCard 
                    title="Enjoy on your device" 
                    subtitle="Discover videos you’ll love with cutting-edge AI that understands your taste."
                    iconSrc="/icons/cardBanner/BC_monitor.svg"
                />
                <BannerCard 
                    title="Stake your tokens" 
                    subtitle="Put your tokens to work and earn rewards while enjoying your favorite content"
                    iconSrc="/icons/cardBanner/BC_downArrow.svg"
                />
                <BannerCard 
                    title=" Stake PopAI to earn passive income" 
                    subtitle="Stake your tokens and generate passive income while enjoying content."
                    iconSrc="/icons/cardBanner/BC_telescope.svg"
                />
                <BannerCard 
                    title="Join the community" 
                    subtitle="Connect with other fans, share insights, and be part of a growing media ecosystem."
                    iconSrc="/icons/cardBanner/BC_face.svg"
                />
            </div>
        </div>
    )
}