"use client"

import Image from 'next/image'
import Header from './Header'
import './Hero.css'
import { ChevronRightIcon } from 'lucide-react'
import EventSection from './eventSection/eventSection'
import { useRouter } from 'next/navigation'

  

export default function Hero() {
  const router = useRouter()

  const handleChatAiClick = () => {
    router.push('/chatAi')
  }

  return (
    <section className="hero-section">
      <div className='hero-overlay'>
        <Image
          src="/main-BG.png"
          alt="배경"
          fill
          priority
          style={{ objectFit: 'cover', opacity: 0.42 }}
        />
      <div className='hero-content-container'>
        <Header />
        <div className='hero-content-wrapper'>
          <div className='hero-content'>
              <div className='hero-title'> 
                <span className='hero-title-1'>AI & Blockchain </span>Unlock videos made for you
              </div>
              <div className='hero-subtitle'>Get started at anytime.</div>
              <div className='hero-description'>Delivering media-optimized technology with AI and blockchain to recommend videos tailored to each user.</div>
            <div className='hero-form-group'>
              {/* <input type="text" className='hero-input' placeholder='Search videos' /> */}
              <div className='hero-button'
               onClick={handleChatAiClick}
              >
              Start Chat <ChevronRightIcon className='hero-button-icon' />
              </div>
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

