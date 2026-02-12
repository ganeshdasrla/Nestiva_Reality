import { Link } from 'react-router-dom'

export default function AreaPage() {
  return (
    <div className="page">
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
