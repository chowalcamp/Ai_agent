import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/footer/footer'
export default function Home() {
  return (
    <main className="main-content">
      <Hero />
      <Features />
      <Footer />
    </main>
  )
}