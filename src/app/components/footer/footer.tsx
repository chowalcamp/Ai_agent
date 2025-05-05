import "./footer.css";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="footer-top">
                <div className="footer-logo">
                <Image
                        src="/NImg.svg"
                        alt="로고"
                        width={120}
                        height={40}
                    />
                    <div className="footer-logo-text">
                        <div>Video AI, Search and Recommend</div>
                    </div>
                </div>
                <div className="footer-menu">
                    <div className="footer-menu-item">Home</div>
                    <div className="footer-menu-item">Video AI</div>
                    <div className="footer-menu-item">FAQ</div>
                </div>
                <div className="footer-sns">
                    <div className="footer-sns-item">
                        <Image src="/icons/socialMedia/x.png" alt="X" width={24} height={24} />
                    </div>
                    <div className="footer-sns-item">
                        <Image src="/icons/socialMedia/tele.png" alt="tele" width={24} height={24} />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-text">
                    &copy; 2025. Video AI. All rights reserved.
                </div>
            </div>
        </div>
    </div>
  );
}