

const social = [
  { label: 'Microsoft MVP', url: 'https://mvp.microsoft.com/en-US/MVP/profile/luismanez' },
  { label: 'GitHub', url: 'https://github.com/luismanez' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/luismanez' },
  { label: 'Sessionize', url: 'https://sessionize.com/luismanez' },
]

export default function Speaking() {
  return (
    <div className="speaking">
      <p className="section-label">SPEAKING & COMMUNITY</p>
      <div className="speaking__layout">
        <div className="speaking__intro">
          <p className="speaking__headline">
            Microsoft MVP, community speaker, blogger and technical writer.
          </p>
          <p>Sharing knowledge and learning together with the community.</p>
        </div>
        <div className="speaking__links">
          <div className="speaking__social">
            {social.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="speaking__social-link">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
