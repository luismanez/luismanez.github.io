const steps = [
  {
    number: 1,
    startYear: '2001',
    era: '2001 – 2002',
    company: 'Encamina, Spain',
    title: 'Software Engineer',
    description:
      'After my apprentice program at Encamina, I was hired full-time. Two very intensive years: classic ASP, JavaScript (forms + image swaps), COM components in VB6, SQL Server and MySQL. Worked on a B2B site built on MS Commerce Server, learning deep ASP 3.0, SQL, and an early Workflow system. Also wrote PHP and Java, where I picked up Design Patterns and SOLID principles.',
  },
  {
    number: 2,
    startYear: '2002',
    era: '2002 – 2004',
    company: 'Encamina, Spain',
    title: 'Technical Lead',
    description:
      'First years on the .NET platform — ASP.NET WebForms, custom Windows Services, and SharePoint 2003 WebParts. Got hands-on experience with classic SOAP WebServices and later WCF, while tech-leading bespoke projects.',
  },
  {
    number: 3,
    startYear: '2004',
    era: '2004 – 2007',
    company: 'Encamina, Spain',
    title: 'Software Architect',
    description:
      'Promoted to Software Architect while still coding heavily. Bespoke .NET + SQL Server projects, deep dive into DDD and CQRS. Evangelised the dev team on patterns and best practices.',
  },
  {
    number: 4,
    startYear: '2007',
    era: '2007 – 2012',
    company: 'Encamina, Spain',
    title: 'Chief Technology Officer',
    description:
      'Promoted to CTO. Designed architecture for multiple bespoke projects based on MOSS 2007 and SharePoint 2010, .NET WebAPIs, SQL Server, jQuery/JavaScript, and a first deep dive into Azure — web roles offering automatic translations via third-party APIs. Managed a technical team of ~15 people, did pre-sales support, and reported to the executive board.',
  },
  {
    number: 5,
    startYear: '2012',
    era: '2012 – 2015',
    company: 'Content and Code, UK',
    title: 'SharePoint Developer',
    description:
      'SharePoint Online and Azure developer building custom solutions. Custom .NET APIs, Azure WebJobs integrating SAP and Salesforce into SharePoint, and front-end work with JavaScript and KnockoutJS. Technical lead duties, pre-sales support, and heavy community collaboration as a key contributor in the OfficeDev PnP Programme.',
  },
  {
    number: 6,
    startYear: 'Today',
    era: '2016 – Today',
    company: 'ClearPeople, UK',
    title: 'Chief Architect',
    description:
      'Chief Architect and technical authority for Atlas — a Digital Workplace product built on Microsoft 365 and Azure. Heavy focus on MS Graph API, custom APIs, Azure AD, Azure Functions, SPFx, .NET Core, Cosmos DB, Redis, Cognitive Services, TypeScript, React and Redux. Awarded Microsoft MVP in Microsoft 365 Development. Speaker at events, active in OfficeDev PnP and the M365 DevKitchen. Leads the R&D Department, evaluating cutting-edge technologies through POCs.',
  },
]

function scrollToStep(startYear: string) {
  const el = document.getElementById(`journey-step-${startYear}`)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

export default function Journey() {
  return (
    <div className="journey">
      <div className="journey__header">
        <p className="section-label">MY JOURNEY</p>
        <nav className="journey__year-nav" aria-label="Jump to year">
          {steps.map((step) => (
            <button
              key={step.startYear}
              className="journey__year-tag"
              onClick={() => scrollToStep(step.startYear)}
            >
              {step.startYear}
            </button>
          ))}
        </nav>
      </div>
      <div className="journey__timeline">
        {steps.map((step) => (
          <div key={step.number} id={`journey-step-${step.startYear}`} className="journey__step">
            <div className="journey__step-marker">
              <span className="journey__step-number">{step.number}</span>
              <span className="journey__step-era">{step.startYear}</span>
              <span className="journey__step-company">{step.company}</span>
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
