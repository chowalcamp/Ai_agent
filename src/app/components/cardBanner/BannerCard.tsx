import Image from 'next/image'
import './BannerCard.css'

interface BannerCardProps {
    title: string;
    subtitle: string;
    iconSrc: string;  // 아이콘 경로를 위한 prop 추가
}

export default function BannerCard({ title, subtitle, iconSrc }: BannerCardProps) {
    return (
        <div className="banner-card">
            <div className="content">
                <h3>{title}</h3>
                <p>{subtitle}</p>
                <Image 
                    src={iconSrc} 
                    alt="banner icon" 
                    width={64} 
                    height={64} 
                    className="banner-icon"
                />
            </div>
        </div>
    )
}   