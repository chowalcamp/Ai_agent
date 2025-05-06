'use client'

import "./footer.css";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";
export default function Footer() {
    const router = useRouter()
  const pathname = usePathname()

  const handleHomeClick = () => {
    if (pathname === '/') {
      // 현재 홈페이지에 있다면 최상단으로 스크롤
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // 다른 페이지에 있다면 홈페이지('/')로 이동
      router.push('/')
    }
  }

  const handleChatAiClick = () => {
    router.push('/chatAi')
  }
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="footer-top">
                <div className="footer-logo">
                <Image
                        src="/NFTImg.svg"
                        alt="로고"
                        width={120}
                        height={40}
                    />
                    <div className="footer-logo-text">
                        <div>Video AI, Search and Recommend</div>
                    </div>
                </div>
                <div className="footer-menu">
                    <div className="footer-menu-item" onClick={handleHomeClick}>Home</div>
                    <div className="footer-menu-item" onClick={handleChatAiClick}>Video AI</div>
                    <div className="footer-menu-item" onClick={() => {
                        document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}>FAQ</div>
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