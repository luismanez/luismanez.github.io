const areas = [
  {
    icon: '✦',
    title: 'Microsoft AI',
    description: 'Designing and building AI-powered solutions with Azure OpenAI, MS Agent Framework, and more.',
  },
  {
    icon: '☁',
    title: 'Cloud Architecture',
    description: 'Architecting secure, scalable and cost-effective solutions on Microsoft Azure.',
  },
  {
    icon: '.NET',
    title: '.NET Engineering',
    description: 'Building reliable, modern and performant applications with .NET and related technologies.',
  },
  {
    icon: 'M365',
    title: 'Microsoft 365 & Graph',
    description: 'Extending Microsoft 365 with Graph API, custom APIs and smart integrations.',
  },
]

export default function Expertise() {
  return (
    <div className="expertise">
      <p className="section-label">EXPERTISE</p>
      <div className="expertise__grid">
        {areas.map((area) => (
          <div key={area.title} className="expertise-card">
            <span className="expertise-card__icon">{area.icon}</span>
            <h3 className="expertise-card__title">{area.title}</h3>
            <p className="expertise-card__description">{area.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
