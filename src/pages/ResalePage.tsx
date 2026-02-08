import { Link } from 'react-router-dom'

export default function ResalePage() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Resale Properties</h1>
        <p>Verified resale options are available on request while this page is being expanded.</p>
      </header>

      <section className="section">
        <p>Share your budget, area preference, and timeline to receive suitable resale options.</p>
        <div className="card-actions">
          <Link className="button button-primary" to="/contact">
            Share Requirement
          </Link>
        </div>
      </section>
    </div>
  )
}
