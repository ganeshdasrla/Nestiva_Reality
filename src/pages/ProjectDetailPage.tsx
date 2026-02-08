import { Link, useParams } from 'react-router-dom'
import { getWhatsAppLink } from '../constants'
import { projectBySlug } from '../data/projects'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = slug ? projectBySlug.get(slug) : undefined

  if (!project) {
    return (
      <section className="notfound-card">
        <h1>Project Not Found</h1>
        <p>The project you requested is not available right now.</p>
        <div className="thankyou-actions">
          <Link className="button button-primary" to="/projects">
            Back to Projects
          </Link>
        </div>
      </section>
    )
  }

  return (
    <div className="page">
      <header className="page-header">
        <h1>
          {project.name} - {project.area}
        </h1>
      </header>

      <section className="section">
        <div className="gallery">
          {project.images.map((image, index) => (
            <img alt={`${project.name} view ${index + 1}`} key={image} loading="lazy" src={image} />
          ))}
        </div>
      </section>

      <section className="details-grid">
        <article className="detail-card">
          <h2>Key Details</h2>
          <ul className="detail-list">
            <li>
              <strong>Configurations:</strong> {project.configurations}
            </li>
            <li>
              <strong>Price Band:</strong> {project.priceBand}
            </li>
            <li>
              <strong>Possession:</strong> {project.status}
            </li>
            <li>
              <strong>Approvals:</strong> {project.approvals}
            </li>
          </ul>
        </article>

        <article className="detail-card">
          <h3>Highlights</h3>
          <ul className="highlight-list">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="detail-card who-fit">
        <h3>Who Is This Project For?</h3>
        <p>{project.suitableFor}</p>
        <p>{project.notSuitableFor}</p>
      </section>

      <section className="section">
        <div className="cta-panel">
          <Link className="button button-primary" to={`/contact?project=${project.slug}`}>
            Book a Site Visit
          </Link>
          <a
            className="button button-secondary"
            href={getWhatsAppLink(`Hi Nestiva Realty, share the latest price sheet for ${project.name}.`)}
            rel="noreferrer"
            target="_blank"
          >
            Get Latest Price Sheet on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
