import Image from 'next/image'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-section">
      <Image
        src="https://occ-0-737-136.1.nflxso.net/dnm/api/v6/19OhWN2dO6F9ODlWt62Z5gHxopU/AAAABY8z3z3Q2Z723Xy0419v5Q3J842Z4cV8Qd033J3s.png"
        alt="배경"
        fill
        priority
        style={{ objectFit: 'cover' }}
      />
      <div className="hero-content">
        <h1>영화, TV 프로그램을 무제한으로</h1>
        <p>다양한 디바이스에서 무제한으로 시청하세요. 언제든 해지할 수 있습니다.</p>
        <div className="email-form">
          <input type="email" placeholder="이메일 주소" />
          <button>무료로 시작하기</button>
        </div>
      </div>
    </section>
  )
}
