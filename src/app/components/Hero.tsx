import Image from 'next/image'
import Header from './Header'
import './Hero.css'
import { ChevronRightIcon } from 'lucide-react'
import EventSection from './eventSection/eventSection'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className='hero-overlay'>
      <Image
        src="/BackgroundImg.jpg"
        alt="배경"
        fill
        priority
        style={{ objectFit: 'cover', opacity: 0.12 }}
      />
      <div className='content-container'>
        <Header />
        <div className='hero-content-wrapper'>
          <div className='hero-content'>
        <div className='title'>Unlimited movies, TV shows, and more</div>
        <div className='subtitle'>Starts at $7.99. Cancel anytime.</div>
        <div className='description'>Ready to watch? Enter your email to create or restart your membership.</div>
        <div className='form-group'>
          <input type="text" className='input' placeholder='Email address' />
          <div className='button'>Get Started <ChevronRightIcon size={30} /></div >
        </div>
        </div>
          </div>
        <div className='hero-bottom'>
          <EventSection />
        </div>
        </div>
      </div>
    </section>
  )
}
