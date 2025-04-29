import './BannerCard.css'

export default function BannerCard({ title, subtitle }: { title: string, subtitle: string }) {
    return (
        <div className="banner-card">
            <div className="content">
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}   