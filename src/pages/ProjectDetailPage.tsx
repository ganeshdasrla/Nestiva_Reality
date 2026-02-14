import { Link, useParams } from 'react-router-dom'
import { getWhatsAppLink } from '../constants'
import { projectBySlug } from '../data/projects'
import { handleProjectImageError } from '../utils/imageFallback'

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

  const statusLabel = project.status === 'Pre-Launch' ? 'Upcoming Villas' : project.status

  return (
    <div className="page">
      <header className="page-header">
        <h1>
          {project.name} - {project.area}
        </h1>
        <p>{project.zone}</p>
      </header>

      <section className="detail-card project-overview">
        <img
          alt={`${project.name} main view`}
          className="project-hero-image"
          loading="lazy"
          onError={handleProjectImageError}
          src={project.images[0]}
        />
        <div className="project-meta">
          <h2>Project Details</h2>
          <div className="meta-grid">
            <div className="meta-item">
              <span>Location</span>
              <strong>{project.area}</strong>
            </div>
            <div className="meta-item">
              <span>Zone</span>
              <strong>{project.zone}</strong>
            </div>
            <div className="meta-item">
              <span>Configurations</span>
              <strong>{project.configurations}</strong>
            </div>
            <div className="meta-item">
              <span>Price Band</span>
              <strong>{project.priceBand}</strong>
            </div>
            <div className="meta-item">
              <span>Status</span>
              <strong>{statusLabel}</strong>
            </div>
            {project.amenitiesCount ? (
              <div className="meta-item">
                <span>Amenities</span>
                <strong>{project.amenitiesCount}</strong>
              </div>
            ) : null}
            <div className="meta-item">
              <span>Approvals</span>
              <strong>{project.approvals}</strong>
            </div>
            {project.sqftRange ? (
              <div className="meta-item">
                <span>SFT Range</span>
                <strong>{project.sqftRange}</strong>
              </div>
            ) : null}
            {project.numberOfFloors ? (
              <div className="meta-item">
                <span>Number of Floors</span>
                <strong>{project.numberOfFloors}</strong>
              </div>
            ) : null}
            {project.totalUnits ? (
              <div className="meta-item">
                <span>Number of Units</span>
                <strong>{project.totalUnits}</strong>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="details-grid">
        <article className="detail-card">
          <h3>Highlights</h3>
          <ul className="highlight-list">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>
        {project.keyAmenities?.length ? (
          <article className="detail-card">
            <h3>Key Amenities</h3>
            {project.amenitiesCount ? <p className="muted">Amenity Count: {project.amenitiesCount}</p> : null}
            <ul className="highlight-list">
              {project.keyAmenities.map((amenity) => (
                <li key={amenity}>{amenity}</li>
              ))}
            </ul>
          </article>
        ) : null}
        {project.nearbyPlaces ? (
          <article className="detail-card">
            <h3>Nearby Places</h3>
            <div className="nearby-grid">
              <div>
                <strong>Schools</strong>
                <ul className="highlight-list">
                  {project.nearbyPlaces.schools.map((place) => (
                    <li key={place}>{place}</li>
                  ))}
                </ul>
              </div>
              <div>
                <strong>Hospitals</strong>
                <ul className="highlight-list">
                  {project.nearbyPlaces.hospitals.map((place) => (
                    <li key={place}>{place}</li>
                  ))}
                </ul>
              </div>
              <div>
                <strong>IT Corridor</strong>
                <ul className="highlight-list">
                  {project.nearbyPlaces.itCorridor.map((place) => (
                    <li key={place}>{place}</li>
                  ))}
                </ul>
              </div>
              <div>
                <strong>Malls</strong>
                <ul className="highlight-list">
                  {project.nearbyPlaces.malls.map((place) => (
                    <li key={place}>{place}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ) : null}
        {project.orrAccess ? (
          <article className="detail-card">
            <h3>ORR Exit Connectivity</h3>
            <ul className="highlight-list">
              {project.orrAccess.map((orr) => (
                <li key={`${orr.exitPoint}-${orr.distance}`}>
                  <strong>{orr.exitPoint}</strong>: {orr.distance} | {orr.travelTime}
                </li>
              ))}
            </ul>
          </article>
        ) : null}
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
            href={getWhatsAppLink(`Hi Sri Nestiva PropTech, share the latest price sheet for ${project.name}.`)}
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
