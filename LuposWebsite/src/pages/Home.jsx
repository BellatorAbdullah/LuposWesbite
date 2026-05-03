import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import useFadeIn from '../components/useFadeIn'
import useTypewriter from '../hooks/useTypewriter'

function getGreeting() {
  const h = new Date().getHours()
  if (h >= 5  && h < 12) return 'Good Morning ☀️'
  if (h >= 12 && h < 17) return 'Good Afternoon 🌤'
  if (h >= 17 && h < 21) return 'Good Evening 🌇'
  return 'Good Night 🌙'
}

export default function Home() {
  const [popupVisible, setPopupVisible] = useState(false)
  const [scrollPct, setScrollPct]       = useState(0)
  const [glowPos, setGlowPos]           = useState({ x: -100, y: -100 })

  // Typewriter — subtitle fires first, heading fires after subtitle finishes
  const subtitle = useTypewriter('Welcome to', 90, 400)
  const heading  = useTypewriter('Lupos Website', 100, 400 + 'Welcome to'.length * 90 + 300)

  useFadeIn()

  useEffect(() => {
    const t1 = setTimeout(() => setPopupVisible(true),  800)
    const t2 = setTimeout(() => setPopupVisible(false), 6000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const top    = document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      setScrollPct(height > 0 ? (top / height) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onMove = e => setGlowPos({ x: e.clientX, y: e.clientY })
    document.addEventListener('mousemove', onMove)
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollPct}%` }} />
      <div className="mouse-glow" style={{ left: glowPos.x, top: glowPos.y }} />

      <main>
        {/* Hero */}
        <section className="section fade-in" id="Section1">
          <span className="greeting-text">
            {subtitle}
            <span className="typewriter-cursor">|</span>
          </span>
          <span className="greeting-lupos">
            {heading}
            {heading.length < 'Lupos Website'.length && (
              <span className="typewriter-cursor">|</span>
            )}
          </span>
        </section>

        <section className="section fade-in">
          <div className="content1-1-text"><em>Introducing</em></div>
          <div className="content1-2-text">A Massive <strong>Upgrade</strong></div>
        </section>

        <section className="section fade-in">
          <div className="content1-2-text" style={{ fontSize: '3rem' }}>Built on Discipline</div>
          <div className="content1-1-text" style={{ marginTop: 16 }}>Order. Focus. Execution.</div>
        </section>

        <section className="section fade-in">
          <div className="content1-2-text" style={{ fontSize: '3rem' }}>Domination Through Consistency</div>
        </section>
      </main>

      <Footer />

      <div className={`greeting-popup ${popupVisible ? 'show' : ''}`}>
        {getGreeting()}
      </div>
    </>
  )
}
