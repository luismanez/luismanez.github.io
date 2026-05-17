const technologies = [
  { name: 'Azure AI', icon: '✦' },
  { name: '.NET', icon: '.NET' },
  { name: 'SharePoint', icon: 'S' },
  { name: 'Microsoft 365', icon: '365' },
  { name: 'Azure', icon: 'Az' },
  { name: 'Architecture', icon: '◈' },
]

export default function About() {
  return (
    <div className="about">
      <div className="about__text">
        <p className="section-label">ABOUT ME</p>
        <h2>Passionate about Microsoft technology. Architect. Developer. Speaker.</h2>
        <p>
          I love solving complex problems and designing solutions that create real impact.
          I work as an architect and developer, and I'm also an active blogger,
          technical writer and community speaker.
        </p>
      </div>
      <div className="about__tech-grid">
        {technologies.map((tech) => (
          <div key={tech.name} className="tech-card">
            <span className="tech-card__icon">{tech.icon}</span>
            <span className="tech-card__name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
