import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import monogram from '../../assets/lm-monogram-black.png'

const links = [
  { label: 'Home',       href: '#home' },
  { label: 'About me',   href: '#about' },
  { label: 'Journey',    href: '#journey' },
  { label: 'Expertise',  href: '#expertise' },
  { label: 'Speaking',   href: '#speaking' },
]

export default function Navigation() {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollingRef = useRef(false)
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.slice(1))
    const observers: IntersectionObserver[] = []
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (scrollingRef.current) return
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 1024) setMenuOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const handleLinkClick = (id: string) => {
    setActive(id)
    closeMenu()
    scrollingRef.current = true
    if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current)
    scrollTimerRef.current = setTimeout(() => { scrollingRef.current = false }, 1000)
  }

  return (
    <header className="nav-wrapper">
      <nav className="nav">
        <a href="#home" className="nav__logo" onClick={() => handleLinkClick('home')}>
          <img src={monogram} alt="lm monogram" className="nav__monogram" />
          <span className="nav__brand">luis mañez</span>
        </a>

        {/* Desktop links */}
        <ul className="nav__links">
          {links.map((link) => {
            const id = link.href.slice(1)
            return (
              <li key={link.href}>
                <a href={link.href} className={`nav__link${active === id ? ' nav__link--active' : ''}`} onClick={() => handleLinkClick(id)}>
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
        <a href="https://linkedin.com/in/luismanez" target="_blank" rel="noreferrer" className="btn btn--primary nav__cta">Let's talk</a>

        {/* Hamburger */}
        <button className="nav__hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="nav__mobile-menu">
          {links.map((link) => {
            const id = link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                className={`nav__mobile-link${active === id ? ' nav__mobile-link--active' : ''}`}
                onClick={() => handleLinkClick(id)}
              >
                {link.label}
              </a>
            )
          })}
          <a href="https://linkedin.com/in/luismanez" target="_blank" rel="noreferrer" className="btn btn--primary nav__mobile-cta" onClick={closeMenu}>
            Let's talk
          </a>
        </div>
      )}
    </header>
  )
}
