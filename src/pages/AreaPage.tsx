import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function AreaPage() {
  return (
    <div className="page">
      <Helmet>
        <title>Hyderabad Real Estate Advisory | Sri Nestiva PropTech</title>
        <meta
          name="description"
          content="Curated, approval-verified projects across Hyderabad growth corridors with builder-direct coordination."
        />
        <link href="https://www.srinestivaproptech.in/areas/hyderabad" rel="canonical" />
      </Helmet>
      <header className="page-header">
        <h1>Project Locations</h1>
      </header>

      <section className="section">
        <ul className="highlight-list">
          <li>Tellapur - Nivasa</li>
          <li>Adibatla - LaCasa</li>
          <li>Kokapet - One Downtown</li>
          <li>Narsingi - MoonGlade</li>
        </ul>
      </section>

      <section className="section">
        <Link className="button button-primary" to="/contact">
          Talk to us for area-specific options
        </Link>
      </section>
    </div>
  )
}
