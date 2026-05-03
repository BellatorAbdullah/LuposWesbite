import { useNavigate } from 'react-router-dom'

const links = [
  { label: 'Home',      path: '/' },
  { label: 'About',     path: '/about' },
  { label: 'Lore',      path: '/lore' },
  { label: 'Members',   path: '/members' },
  { label: 'Lupos App', path: '/download' },
]

export default function Footer() {
  const navigate = useNavigate()
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div>
          <h2 className="footer-logo-text">LUPOS</h2>
          <p className="footer-tagline">Ascend into the golden era.</p>
        </div>
        <div className="footer-nav">
          {links.map(({ label, path }) => (
            <button key={path} className="footer-nav-btn" onClick={() => navigate(path)}>
              {label}
            </button>
          ))}
        </div>
        <p className="footer-copy">© 2026 Lupos Website. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
