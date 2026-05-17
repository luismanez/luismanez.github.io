export default function Navigation() {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Journey', href: '#journey' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Articles', href: '#articles' },
    { label: 'Speaking', href: '#speaking' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="nav">
      <a href="#home" className="nav__logo">
        <span>luis mañez</span>
      </a>
      <ul className="nav__links">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="btn btn--primary">Let's talk</a>
    </nav>
  )
}
