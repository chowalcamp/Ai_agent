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
                <div>
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                </div>
                <div className="banner-icon">
                    <Image 
                        src={iconSrc} 
                        alt="banner icon" 
                        width={64} 
                        height={64} 
                    />
                </div>
            </div>
        </div>
    )
}   