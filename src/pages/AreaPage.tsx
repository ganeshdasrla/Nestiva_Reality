import { Link } from 'react-router-dom'

export default function AreaPage() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Living in Hyderabad</h1>
      </header>

      <section className="section">
        <ul className="highlight-list">
          <li>Popular residential zones</li>
          <li>Price band overview</li>
          <li>Ready vs under-construction guidance</li>
          <li>Investment vs self-use considerations</li>
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
