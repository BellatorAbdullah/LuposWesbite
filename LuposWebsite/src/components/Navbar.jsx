import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home',      path: '/' },
  { label: 'About',     path: '/about' },
  { label: 'Lore',      path: '/lore' },
  { label: 'Members',   path: '/members' },
  { label: 'Lupos App', path: '/download' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const go = (path) => {
    navigate(path)
    setMenuOpen(false)
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-inner">
          <div className="nav-logo">
            <img
              src="/Lupos_Logo.webp"
              alt="Lupos Logo"
              onClick={() => go('/')}
            />
          </div>

          <div className="nav-links">
            {links.map(({ label, path }) => (
              <button
                key={path}
                className={`nav-btn ${location.pathname === path ? 'active' : ''}`}
                onClick={() => go(path)}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile slide-in menu */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <div className="mobile-links">
          {links.map(({ label, path }) => (
            <button key={path} className="mobile-link" onClick={() => go(path)}>
              {label}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
