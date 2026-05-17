const profiles = [
  { label: 'Microsoft MVP', url: 'https://mvp.microsoft.com/en-US/MVP/profile/luismanez' },
  { label: 'Speaker', url: 'https://sessionize.com/luismanez' },
  { label: 'Writer', url: 'https://medium.com/@luismanez' },
  { label: 'Open Source', url: 'https://github.com/luismanez' },
]

const social = [
  { label: 'GitHub', url: 'https://github.com/luismanez' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/luismanez' },
  { label: 'Medium', url: 'https://medium.com/@luismanez' },
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
          <div className="speaking__profiles">
            {profiles.map((p) => (
              <a key={p.label} href={p.url} target="_blank" rel="noreferrer" className="speaking__profile-link">
                {p.label}
              </a>
            ))}
          </div>
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
