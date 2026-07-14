import { useEffect, useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { NAV_ITEMS, type SectionId } from '../types'

interface Props {
  active: SectionId
  onNavigate: (section: SectionId) => void
}

export default function Navbar({ active, onNavigate }: Props) {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (section: SectionId) => {
    onNavigate(section)
    setOpen(false)
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <button className="navbar__brand" onClick={() => go('home')} aria-label="Muhammad Asif Nawaz - Home">
          <img src={`${import.meta.env.BASE_URL}Profile_11.jpg`} alt="Muhammad Asif Nawaz" className="navbar__avatar" />
        </button>

        <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={active === item.id ? 'is-active' : ''}
              onClick={() => go(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            title="Toggle color theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            className="navbar__burger"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
