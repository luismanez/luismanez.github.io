export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__content">
        <p className="hero__tags">SW Engineer · Microsoft AI MVP · Chief Architect</p>
        <h1 className="hero__name">Luis Mañez</h1>
        <p className="hero__description">
          Around 25 years of experience working with Microsoft technologies.
          I design and build modern solutions around Azure, .NET, Microsoft 365 and AI.
        </p>
        <div className="hero__ctas">
          <a href="#journey" className="btn btn--primary">Explore my journey →</a>
          <a href="#articles" className="btn btn--outline">Read articles →</a>
        </div>
        <div className="hero__tags-list">
          <span>✦ Microsoft AI</span>
          <span>☁ Cloud</span>
          <span>&lt;/&gt; Development</span>
        </div>
      </div>
      <div className="hero__stats">
        <div className="hero__stat-card">
          <span className="hero__stat-number">25+</span>
          <span className="hero__stat-label">Years experience</span>
        </div>
        <div className="hero__stat-card">
          <span className="hero__stat-badge">Microsoft AI MVP</span>
        </div>
        <div className="hero__stat-card">
          <span className="hero__stat-number">100+</span>
          <span className="hero__stat-label">Articles published</span>
        </div>
        <div className="hero__stat-card">
          <span>Speaker & Community Contributor</span>
        </div>
      </div>
    </div>
  )
}
