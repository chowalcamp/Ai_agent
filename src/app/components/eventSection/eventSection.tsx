import Image from "next/image";
import './eventSection.css'

export default function EventSection() {
    return (
        <div className="event-section">
            <Image src="/icons/popcorn.svg" alt="popcorn" className="event-section-icon" width={76} height={76} />
            <div className="event-section-content">
                <div>
                    <p className="event-section-title">
                        Your taste, your videos.
                    </p>
                    <p className="event-section-sub_title">
                    Enjoy videos customized to your taste with AI and blockchain.
                    </p>
                </div>
                <div className="event-section-button">
                    Learn More
                </div>
            </div>
        </div>
    )
}