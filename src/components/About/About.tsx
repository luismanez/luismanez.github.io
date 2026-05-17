import { Sparkles, Layers } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import monogramNavy from '../../assets/lm-monogram-navy-blue.png'
import dotnetIcon from '../../assets/dotnet-icon.png'
import azureIcon from '../../assets/azure-icon.png'
import sharepointIcon from '../../assets/sharepoint-icon.png'
import m365Icon from '../../assets/m365-icon.png'

type TechItem = {
  name: string
  icon: LucideIcon | string
  iconType: 'lucide' | 'text' | 'png'
}

const technologies: TechItem[] = [
  { name: 'AI', icon: Sparkles, iconType: 'lucide' },
  { name: '.NET', icon: dotnetIcon, iconType: 'png' },
  { name: 'SharePoint', icon: sharepointIcon, iconType: 'png' },
  { name: 'Microsoft 365', icon: m365Icon, iconType: 'png' },
  { name: 'Azure', icon: azureIcon, iconType: 'png' },
  { name: 'Architecture', icon: Layers, iconType: 'lucide' },
]

function TechIcon({ tech }: { tech: TechItem }) {
  if (tech.iconType === 'lucide') {
    const Icon = tech.icon as LucideIcon
    return <Icon size={28} strokeWidth={1.5} />
  }
  if (tech.iconType === 'png') {
    return <img src={tech.icon as string} alt={tech.name} className="tech-card__icon-img" />
  }
  return <span>{tech.icon as string}</span>
}

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
        <img src={monogramNavy} alt="LM monogram" className="about__monogram" />
      </div>
      <div className="about__tech-grid">
        {technologies.map((tech) => (
          <div key={tech.name} className="tech-card">
            <span className="tech-card__icon">
              <TechIcon tech={tech} />
            </span>
            <span className="tech-card__name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
