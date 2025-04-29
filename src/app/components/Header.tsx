import Image from 'next/image'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Image
            src="/NImg.svg"
            alt="로고"
            width={148}
            height={40}
          />
        </div>
        <div className="header-actions">
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
