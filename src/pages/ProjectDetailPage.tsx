import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import { getWhatsAppLink } from '../constants'
import { projectBySlug } from '../data/projects'
import { handleProjectImageError } from '../utils/imageFallback'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = slug ? projectBySlug.get(slug) : undefined
  const pageTitle = project ? `${project.name} | Sri Nestiva PropTech` : 'Project Details | Sri Nestiva PropTech'
  const pageDescription = project
    ? `${project.name} in ${project.area}, ${project.zone}. ${project.configurations}. ${project.priceBand}. Explore verified project details with Sri Nestiva PropTech.`
    : 'Explore verified project details with builder-direct coordination and transparent guidance from Sri Nestiva PropTech.'
  const canonicalHref = slug
    ? `https://www.srinestivaproptech.in/projects/${slug}`
    : 'https://www.srinestivaproptech.in/projects'
  const primaryImage = project?.images[0]
  const structuredData = project
    ? {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Residence',
            additionalProperty: [
              {
                '@type': 'PropertyValue',
                name: 'Configurations',
                value: project.configurations,
              },
              {
                '@type': 'PropertyValue',
                name: 'Price Band',
                value: project.priceBand,
              },
              {
                '@type': 'PropertyValue',
                name: 'Approvals',
                value: project.approvals,
              },
            ],
            description: pageDescription,
            image: project.images.slice(0, 3),
            name: project.name,
            url: canonicalHref,
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                item: 'https://www.srinestivaproptech.in/',
                name: 'Home',
                position: 1,
              },
              {
                '@type': 'ListItem',
                item: 'https://www.srinestivaproptech.in/projects',
                name: 'Projects',
                position: 2,
              },
              {
                '@type': 'ListItem',
                item: canonicalHref,
                name: project.name,
                position: 3,
              },
            ],
          },
        ],
      }
    : null

  if (!project) {
    return (
      <>
        <Helmet>
          <title>{pageTitle}</title>
          <meta content={pageDescription} name="description" />
          <meta content="noindex,follow" name="robots" />
          <link href={canonicalHref} rel="canonical" />
        </Helmet>
        <section className="notfound-card">
          <h1>Project Not Found</h1>
          <p>The project you requested is not available right now.</p>
          <div className="thankyou-actions">
            <Link className="button button-primary" to="/projects">
              Back to Projects
            </Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <div className="page">
      <Helmet>
        <title>{pageTitle}</title>
        <meta content={pageDescription} name="description" />
        <meta content="index,follow" name="robots" />
        <link href={canonicalHref} rel="canonical" />
        <meta content={pageTitle} property="og:title" />
        <meta content={pageDescription} property="og:description" />
        <meta content="article" property="og:type" />
        <meta content={canonicalHref} property="og:url" />
        {primaryImage ? <meta content={primaryImage} property="og:image" /> : null}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={pageTitle} name="twitter:title" />
        <meta content={pageDescription} name="twitter:description" />
        {primaryImage ? <meta content={primaryImage} name="twitter:image" /> : null}
        {structuredData ? (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        ) : null}
      </Helmet>
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
              <strong>{project.status}</strong>
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
