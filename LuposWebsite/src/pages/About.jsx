import Footer from '../components/Footer'
import useFadeIn from '../components/useFadeIn'

const pillars = [
  { icon: '🔥', title: 'Discipline',   text: 'No shortcuts. No excuses. Pure relentless execution every single day.' },
  { icon: '🐺', title: 'Brotherhood',  text: 'Founded by Simo, Abdullah, Vale, and Andrew. Unity forged through struggle.' },
  { icon: '⚡', title: 'Innovation',   text: 'From AI tools to flipping to real estate — always evolving, never stagnant.' },
  { icon: '👑', title: 'Legacy',       text: 'LUPOS is a movement built to outlast any single moment or failure.' },
]

export default function About() {
  useFadeIn()

  return (
    <>
      <main>
        <section className="about-hero fade-in section">
          <img src="/Lupos_Logo.webp" alt="Lupos Logo" className="about-logo" />

          <h1 className="about-title">LUPOS</h1>
          <p className="about-subtitle">
            Forged on January 6, 2024 from the collapse of Invicta.
            A brotherhood built on discipline, order, and relentless self-improvement.
          </p>

          <div className="about-cards">
            {pillars.map(({ icon, title, text }) => (
              <div className="about-card" key={title}>
                <div className="about-card-icon">{icon}</div>
                <div className="about-card-title">{title}</div>
                <div className="about-card-text">{text}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
