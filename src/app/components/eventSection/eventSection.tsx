import Image from "next/image";
import './eventSection.css'

export default function EventSection() {
    return (
        <div className="event-section">
            <Image src="/icons/popcorn.svg" alt="popcorn" className="event-section-icon" width={76} height={76} />
            <div className="event-section-content">
                <div>
                    <p className="event-section-title">
                        The Netflix you love for just $7.99.
                    </p>
                    <p className="event-section-sub_title">
                        Get our most affordable, ad-supported plan.
                    </p>
                </div>
                <div className="event-section-button">
                    Learn More
                </div>
            </div>
        </div>
    )
}