import Image from 'next/image'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Image
            src="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico"
            alt="로고"
            width={30}
            height={30}
          />
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a href="#">홈</a></li>
            <li><a href="#">TV 프로그램</a></li>
            <li><a href="#">영화</a></li>
            <li><a href="#">최신</a></li>
            <li><a href="#">내 목록</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <button className="language-btn">한국어</button>
          <button className="sign-in-btn">로그인</button>
        </div>
      </div>
    </header>
  )
}
