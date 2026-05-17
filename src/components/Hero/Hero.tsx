import { Sparkles, Cloud, Code2, BarChart2, FileText, MicVocal } from 'lucide-react'
import profilePic from '../../assets/luis-manez-profile-picture.jpg'
import mvpIcon from '../../assets/mvp-black-icon.png'

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__content">
        <div className="hero__badge">
          <span>SW Engineer</span>
          <span className="hero__badge-sep">·</span>
          <span>Microsoft AI MVP</span>
          <span className="hero__badge-sep">·</span>
          <span>Chief Architect</span>
        </div>
        <h1 className="hero__name">Luis Mañez</h1>
        <p className="hero__description">
          Around 25 years of experience working with Microsoft technologies.
          I design and build modern solutions around AI, Azure, .NET and Microsoft 365.
        </p>
        <div className="hero__ctas">
          <a href="#journey" className="btn btn--primary">Explore my journey →</a>
        </div>
        <div className="hero__chips">
          <span className="hero__chip"><Sparkles size={13} /> Microsoft AI</span>
          <span className="hero__chip"><Cloud size={13} /> Cloud</span>
          <span className="hero__chip"><Code2 size={13} /> Development</span>
        </div>
      </div>

      {/* Right visual */}
      <div className="hero__visual">
        {/* Decorative dots */}
        <span className="hero__dot hero__dot--tl" />
        <span className="hero__dot hero__dot--tr" />

        {/* Orb + photo */}
        <div className="hero__orb">
          <img src={profilePic} alt="Luis Mañez" className="hero__photo" />
        </div>

        {/* Stat cards */}
        <div className="hero__stats-grid">
        <div className="stat-card stat-card--tr">
          <div className="stat-card__text">
            <span className="stat-card__number">25+</span>
            <span className="stat-card__label">Years experience</span>
          </div>
          <BarChart2 size={22} className="stat-card__icon" />
        </div>

        <div className="stat-card stat-card--mr">
          <div className="stat-card__text">
            <span className="stat-card__label">Microsoft</span>
            <span className="stat-card__bold">AI MVP</span>
          </div>
          <img src={mvpIcon} alt="Microsoft MVP" className="stat-card__mvp-icon" />
        </div>

        <div className="stat-card stat-card--bl">
          <div className="stat-card__text">
            <span className="stat-card__number">35+</span>
            <span className="stat-card__label">Speaking events</span>
          </div>
          <MicVocal size={22} className="stat-card__icon" />
        </div>

        <div className="stat-card stat-card--br">
          <div className="stat-card__text">
            <span className="stat-card__bold">Community</span>
            <span className="stat-card__label">Contributor</span>
          </div>
          <FileText size={22} className="stat-card__icon" />
        </div>
        </div>
      </div>
    </div>
  )
}
