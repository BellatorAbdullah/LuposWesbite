import Footer from '../components/Footer'
import useFadeIn from '../components/useFadeIn'

const members = [
  {
    name:    'Abdullah',
    roles:   ['Developer', 'Flipper', 'Gym'],
    bio:     'The most Beautiful Flowers Bloom when they are not supposed to.',
    facts:   ['Made 10K+ profit from flipping', 'The Joker of the group', 'State-level badminton player 🏸'],
    emoji:   '🃏',
    accent:  '#ffb347',
  },
  {
    name:    'Simone',
    roles:   ['Ex-Developer', 'Flipper', 'Business'],
    bio:     'Men do not mature with age. They mature with heartbreak, stress, pain and suffering.',
    facts:   ['The tough guy of the group', 'Boxes competitively 🥊', 'Most competitive member'],
    emoji:   '🥊',
    accent:  '#43c6f5',
  },
  {
    name:    'Andrew',
    roles:   ['Partial Flipper', 'Partial Developer', 'Self Improvement'],
    bio:     'A hydrated mind is a powerful mind.',
    facts:   ['Most understanding member', 'Keen power of learning 📚', 'The calm strategist'],
    emoji:   '💧',
    accent:  '#eb0e0e',
  },
  {
    name:    'Valentino',
    roles:   ['High-End Flipper', 'Personal Trainer'],
    bio:     'There are always Ls in millionaire.',
    facts:   ['Known for making serious money 💰', 'Strongest guy in the group', 'Lupos Personal Trainer'],
    emoji:   '💪',
    accent:  '#7ed957',
  },

  {
    name:    'Tiziano',
    roles:   ['Student','Gym'],
    bio:     'Revenge is a Fools gamee. Keep your friends close and your enemies closer.',
    facts:   ['Comes when most Needed', 'Loyal Member', 'Super Smart and Humble'],
    emoji:   '🧠',
    accent:  '#7a0000',
  },
]

export default function Members() {
  useFadeIn()

  return (
    <>
      <main>
        {/* Hero */}
        <section className="section fade-in members-hero">
          <h1 className="members-title">THE PACK</h1>
          <p className="members-subtitle">Five wolves. One mission.</p>
        </section>

        {/* Cards grid */}
        <section className="section fade-in members-grid-section">
          <div className="members-grid">
            {members.map((m) => (
              <div
                key={m.name}
                className="member-card"
                style={{ '--accent': m.accent }}
              >
                {/* Top glow */}
                <div className="member-card-glow" />

                {/* Emoji avatar */}
                <div className="member-avatar">{m.emoji}</div>

                {/* Name */}
                <h2 className="member-name">{m.name}</h2>

                {/* Roles */}
                <div className="member-roles">
                  {m.roles.map(r => (
                    <span key={r} className="member-role-tag">{r}</span>
                  ))}
                </div>

                {/* Divider */}
                <div className="member-divider" />

                {/* Bio */}
                <p className="member-bio">"{m.bio}"</p>

                {/* Facts */}
                <ul className="member-facts">
                  {m.facts.map(f => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
