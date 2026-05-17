const steps = [
  {
    number: 1,
    era: 'Early 2000s',
    title: '.NET & SQL Server',
    description: 'Built strong foundations working on bespoke software projects with .NET and SQL Server technologies.',
  },
  {
    number: 2,
    era: 'Mid 2000s',
    title: 'Software Architect',
    description: 'Promoted to Software Architect. Still coding a lot, working with .NET and SQL Server, using DDD and CQRS, tech-leading projects and establishing best practices.',
  },
  {
    number: 3,
    era: '2010s',
    title: 'Microsoft 365 / Atlas / MS Graph',
    description: 'Atlas built on top of Office 365 and Azure. Heavy work with Microsoft Graph API, custom APIs, and solutions that expand Graph functionality.',
  },
  {
    number: 4,
    era: 'Now',
    title: 'Azure AI',
    description: 'Current focus on Azure OpenAI, Semantic Kernel, Azure AI Search, RAG, copilots, and building modern AI solutions.',
  },
]

export default function Journey() {
  return (
    <div className="journey">
      <p className="section-label">MY JOURNEY</p>
      <div className="journey__timeline">
        {steps.map((step) => (
          <div key={step.number} className="journey__step">
            <div className="journey__step-marker">
              <span className="journey__step-number">{step.number}</span>
              <span className="journey__step-era">{step.era}</span>
            </div>
            <div className="journey__step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
