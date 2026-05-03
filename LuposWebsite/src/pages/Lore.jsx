import { useEffect, useRef } from 'react'
import Footer from '../components/Footer'

const loreEntries = [
  { title: 'Origins and Foundation',  text: 'LUPOS was forged on January 6, 2024, from the collapse of Invicta. Simo, Abdullah, Vale, and Andrew united around discipline, order, and real self-improvement.' },
  { title: 'Early Failures',          text: 'The first ventures failed hard. SAMSTA, dropshipping, and experimentation revealed harsh truths. Failure became fuel, not defeat.' },
  { title: 'Mindset Shift',           text: 'Humor and memes like "Stare duro" emerged. Resilience was forged through laughter, repetition, and shared suffering.' },
  { title: 'New Direction',           text: 'LUPOS abandoned shortcuts and pivoted to consistency. Real estate and AI content replaced quick wins.' },
  { title: 'Monk Mode',               text: 'Discipline intensified. Monk mode stripped distractions. Focus sharpened. Knowledge became the weapon.' },
  { title: 'Flipping Era',            text: '2025 marked a shift. Flipping became the core engine — buy low, sell high, repeat relentlessly.' },
  { title: 'Automation',             text: 'Tools emerged. LUPOS Chat App, Productive Suite, Wolfy AI. Time was optimized. Output multiplied.' },
  { title: 'Culture and Memes',       text: 'Memes became doctrine. Humor hardened identity. Unity strengthened through shared symbols.' },
  { title: 'Collaborations',          text: 'Projects like Vincenzovilla proved creative power. Innovation became routine.' },
  { title: 'Inner Circle',            text: 'Discipline defined the members. Hydration, focus, execution — non-negotiable.' },
  { title: 'Lessons Etched',          text: 'Every failure refined the blade. Reflection and correction turned weakness into strength.' },
  { title: 'Legacy',                  text: 'LUPOS is a movement. Discipline over comfort. Action over talk. Domination through consistency.' },
]

export default function Lore() {
  const progressRef = useRef(null)
  const dotRef      = useRef(null)

  // Timeline scroll progress
  useEffect(() => {
    const onScroll = () => {
      const scrollTop  = window.scrollY
      const maxScroll  = document.body.scrollHeight - window.innerHeight
      if (maxScroll <= 0) return
      const percent    = scrollTop / maxScroll
      const height     = percent * window.innerHeight
      if (progressRef.current) progressRef.current.style.height = height + 'px'
      if (dotRef.current)      dotRef.current.style.top  = (height - 9) + 'px'
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fade-in observer
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in')
    if (!elements.length) return
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Left timeline */}
      <div className="timeline">
        <div className="timeline-line" />
        <div className="timeline-progress" ref={progressRef} />
        <div className="timeline-dot"      ref={dotRef} />
      </div>

      <div className="lore-content">
        {loreEntries.map(({ title, text }) => (
          <section key={title} className="section fade-in" style={{ minHeight: '100vh' }}>
            <div className="lore-block">
              <div className="lore-title">{title}</div>
              <div className="lore-text">{text}</div>
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </>
  )
}
