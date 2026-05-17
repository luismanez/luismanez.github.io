const articles = [
  {
    tag: 'AI / RAG',
    title: 'How we are doing RAG AI evaluation in Atlas',
    url: '#',
  },
  {
    tag: 'AZURE / OPENAI',
    title: 'Overwriting Azure OpenAI API api-version property using Semantic Kernel',
    url: '#',
  },
  {
    tag: 'AZURE / SECURITY',
    title: 'How to deny external users calling your Azure AD secured API',
    url: '#',
  },
  {
    tag: 'AI / DEVELOPMENT',
    title: 'Deep Dive on Artificial Intelligent (AI) token counter libraries',
    url: '#',
  },
]

export default function Articles() {
  return (
    <div className="articles">
      <p className="section-label">SELECTED ARTICLES</p>
      <div className="articles__grid">
        {articles.map((article) => (
          <div key={article.title} className="article-card">
            <span className="article-card__tag">{article.tag}</span>
            <h3 className="article-card__title">{article.title}</h3>
            <a href={article.url} className="article-card__link">Read article →</a>
          </div>
        ))}
      </div>
    </div>
  )
}
