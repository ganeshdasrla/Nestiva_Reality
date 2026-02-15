import { useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { getWhatsAppLink } from '../constants'
import type { BudgetRange, ProjectAssetType, ProjectStatus } from '../data/projects'
import { projects } from '../data/projects'
import { handleProjectImageError } from '../utils/imageFallback'

const stageOrder: ProjectStatus[] = ['Ready to Move', 'Ongoing']
const stageLabels: Record<ProjectStatus, string> = {
  'Ready to Move': 'Ready to Move',
  Ongoing: 'Ongoing',
}

export default function ProjectsPage() {
  const [budget, setBudget] = useState<'all' | BudgetRange>('all')
  const [stage, setStage] = useState<'all' | ProjectStatus>('all')
  const [assetType, setAssetType] = useState<'all' | ProjectAssetType>('all')
  const [location, setLocation] = useState('all')
  const [projectName, setProjectName] = useState('all')

  const locations = useMemo(() => Array.from(new Set(projects.map((project) => project.area))).sort(), [])
  const projectNames = useMemo(() => Array.from(new Set(projects.map((project) => project.name))).sort(), [])
  const assetTypes = useMemo<ProjectAssetType[]>(
    () => Array.from(new Set(projects.map((project) => project.assetType))),
    [],
  )

  const filteredProjects = useMemo(
    () =>
      projects.filter((project) => {
        const budgetMatch = budget === 'all' || project.budgetRange === budget
        const stageMatch = stage === 'all' || project.status === stage
        const assetTypeMatch = assetType === 'all' || project.assetType === assetType
        const locationMatch = location === 'all' || project.area === location
        const projectNameMatch = projectName === 'all' || project.name === projectName
        return budgetMatch && stageMatch && assetTypeMatch && locationMatch && projectNameMatch
      }),
    [assetType, budget, stage, location, projectName],
  )

  const visibleStages = useMemo<ProjectStatus[]>(() => (stage === 'all' ? stageOrder : [stage]), [stage])

  const groupedProjects = useMemo(
    () =>
      visibleStages
        .map((currentStage) => ({
          stage: currentStage,
          items: filteredProjects
            .filter((project) => project.status === currentStage)
            .sort((left, right) => left.name.localeCompare(right.name)),
        }))
        .filter((group) => group.items.length > 0),
    [filteredProjects, visibleStages],
  )

  return (
    <div className="page">
      <Helmet>
        <title>Verified Projects in Hyderabad | Sri Nestiva PropTech</title>
        <meta
          name="description"
          content="Explore approval-verified, builder-confirmed residential projects in Hyderabad. Transparent pricing, curated site visits, and end-to-end advisory from Sri Nestiva PropTech."
        />
        <link href="https://www.srinestivaproptech.in/projects" rel="canonical" />
      </Helmet>
      <header className="page-header">
        <h1>Projects Across Hyderabad</h1>
        <p>Curated projects shortlisted for quality, location, and delivery track record.</p>
      </header>

      <section className="section">
        <div className="segmentation-stack">
          <div>
            <p className="filter-label">Stage</p>
            <div className="stage-tabs">
              <button
                className={stage === 'all' ? 'stage-tab active' : 'stage-tab'}
                onClick={() => setStage('all')}
                type="button"
              >
                All Stages
              </button>
              {stageOrder.map((option) => (
                <button
                  className={stage === option ? 'stage-tab active' : 'stage-tab'}
                  key={option}
                  onClick={() => setStage(option)}
                  type="button"
                >
                  {stageLabels[option]}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="filter-label">Asset Type</p>
            <div className="asset-type-tabs">
              <button
                className={assetType === 'all' ? 'asset-type-tab active' : 'asset-type-tab'}
                onClick={() => setAssetType('all')}
                type="button"
              >
                All Types
              </button>
              {assetTypes.map((option) => (
                <button
                  className={assetType === option ? 'asset-type-tab active' : 'asset-type-tab'}
                  key={option}
                  onClick={() => setAssetType(option)}
                  type="button"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="filters">
          <label htmlFor="budget-filter">
            Budget
            <select id="budget-filter" onChange={(event) => setBudget(event.target.value as 'all' | BudgetRange)} value={budget}>
              <option value="all">All budgets</option>
              <option value="under-2">Up to Rs2 Cr</option>
              <option value="2-3">Rs2 Cr - Rs3 Cr</option>
              <option value="above-3">Above Rs3 Cr</option>
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

          <label htmlFor="project-filter">
            Project Name
            <select id="project-filter" onChange={(event) => setProjectName(event.target.value)} value={projectName}>
              <option value="all">All projects</option>
              {projectNames.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <p className="muted">Showing {filteredProjects.length} projects</p>

        {groupedProjects.length === 0 ? (
          <div className="empty-project-state">
            <p>No projects match your filters. Try widening stage, type, or location.</p>
          </div>
        ) : (
          groupedProjects.map((group) => (
            <div className="project-stage-group" key={group.stage}>
              <div className="project-stage-head">
                <h2>{stageLabels[group.stage]}</h2>
                <span className="stage-count">{group.items.length}</span>
              </div>
              <div className="project-grid">
                {group.items.map((project) => (
                  <article className="project-card" key={project.slug}>
                    <div className="project-preview">
                      {project.images.slice(0, 2).map((image, index) => (
                        <img
                          alt={`${project.name} preview ${index + 1}`}
                          key={image}
                          loading="lazy"
                          onError={handleProjectImageError}
                          src={image}
                        />
                      ))}
                    </div>
                    <h3>{project.name}</h3>
                    <p>Type: {project.assetType}</p>
                    <p>Area: {project.area}</p>
                    <p>Configurations: {project.configurations}</p>
                    <p>Price Band: {project.priceBand}</p>
                    <p>Possession Status: {stageLabels[project.status]}</p>
                    {project.amenitiesCount ? <p>Amenities: {project.amenitiesCount}</p> : null}
                    {project.keyAmenities?.length ? (
                      <p>Key Amenities: {project.keyAmenities.slice(0, 3).join(', ')}</p>
                    ) : null}

                    <div className="card-actions">
                      <Link className="button button-secondary" to={`/projects/${project.slug}`}>
                        Project Details
                      </Link>
                      <Link className="button button-secondary" to={`/contact?project=${project.slug}`}>
                        Get Price Sheet
                      </Link>
                      <a
                        className="button button-ghost"
                        href={getWhatsAppLink(`Hi Sri Nestiva PropTech, please share details for ${project.name}.`)}
                        rel="noreferrer"
                        target="_blank"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  )
}
