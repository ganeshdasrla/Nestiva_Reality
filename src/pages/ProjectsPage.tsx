import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { getWhatsAppLink } from '../constants'
import { projects } from '../data/projects'

export default function ProjectsPage() {
  const [budget, setBudget] = useState('all')
  const [status, setStatus] = useState('all')
  const [location, setLocation] = useState('all')

  const locations = useMemo(() => Array.from(new Set(projects.map((project) => project.zone))), [])

  const filteredProjects = useMemo(
    () =>
      projects.filter((project) => {
        const budgetMatch = budget === 'all' || project.budgetRange === budget
        const statusMatch = status === 'all' || project.status === status
        const locationMatch = location === 'all' || project.zone === location
        return budgetMatch && statusMatch && locationMatch
      }),
    [budget, status, location],
  )

  return (
    <div className="page">
      <header className="page-header">
        <h1>Projects Across Hyderabad</h1>
        <p>Curated projects shortlisted for quality, location, and delivery track record.</p>
      </header>

      <section className="section">
        <div className="filters">
          <label htmlFor="budget-filter">
            Budget
            <select id="budget-filter" onChange={(event) => setBudget(event.target.value)} value={budget}>
              <option value="all">All budgets</option>
              <option value="under-2">Up to ₹2 Cr</option>
              <option value="2-3">₹2 Cr - ₹3 Cr</option>
              <option value="above-3">Above ₹3 Cr</option>
            </select>
          </label>

          <label htmlFor="status-filter">
            Status
            <select id="status-filter" onChange={(event) => setStatus(event.target.value)} value={status}>
              <option value="all">All status</option>
              <option value="Ready">Ready</option>
              <option value="Near-Ready">Near-Ready</option>
            </select>
          </label>

          <label htmlFor="location-filter">
            Location
            <select id="location-filter" onChange={(event) => setLocation(event.target.value)} value={location}>
              <option value="all">All locations</option>
              {locations.map((zone) => (
                <option key={zone} value={zone}>
                  {zone}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="project-grid">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.slug}>
              <h3>{project.name}</h3>
              <p>Area: {project.area}</p>
              <p>Configurations: {project.configurations}</p>
              <p>Price Band: {project.priceBand}</p>
              <p>Possession Status: {project.status}</p>

              <div className="card-actions">
                <Link className="button button-secondary" to={`/contact?project=${project.slug}`}>
                  Get Price Sheet
                </Link>
                <a
                  className="button button-ghost"
                  href={getWhatsAppLink(`Hi Nestiva Realty, please share details for ${project.name}.`)}
                  rel="noreferrer"
                  target="_blank"
                >
                  WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
