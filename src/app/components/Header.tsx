"use client"

import Image from 'next/image'
import './Header.css'
import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'
import { AlignJustify, HammerIcon } from 'lucide-react'

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Image
            src="/NFTImg.svg"
            alt="로고"
            width={148}
            height={60}
          />
        </div>
        <div className="header-actions">
        <button 
          className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <AlignJustify />
        </button>
          <div className={`header-menu-bar ${isMenuOpen ? 'active' : ''}`}>
            <div className="header-menu-bar-item" onClick={handleHomeClick}>
              HOME
            </div>
            <div className="header-menu-bar-item" onClick={handleChatAiClick}>
               PopcornAI
            </div>
            <div className="header-menu-bar-item" onClick={() => {
              document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' });
              setIsMenuOpen(false);
            }}>
              FAQ
            </div>
          </div>
          <button className="language-btn">
            <Image
              src="/icons/lang.svg"
              alt="언어"
              width={16}
              height={16}
            />
            <div className="language-text">
              English
            </div>
              <Image
                src="/icons/chevronDown.svg"
              alt="아래 화살표"
              width={16}
              height={16}
            />
          </button>
          <button className="sign-in-btn">Sign In</button>
        </div>
      </div>
    </header>
  )
}
