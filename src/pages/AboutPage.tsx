export default function AboutPage() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>About Nestiva Realty</h1>
      </header>

      <section className="section">
        <p>
          Nestiva Realty is a Hyderabad-based real estate consultancy and independent channel partner.
        </p>
        <p>
          We focus on helping buyers make clear, informed decisions by shortlisting properties that match
          budget, timeline, and purpose.
        </p>
        <p>
          Instead of showing dozens of listings, we curate a small set of relevant options and assist through
          site visits, documentation, and loan coordination.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Why Work With Us</h2>
        <ul className="highlight-list">
          <li>Transparent process</li>
          <li>No forced selling</li>
          <li>Weekend-friendly approach</li>
          <li>Long-term relationship focus</li>
        </ul>
      </section>
    </div>
  )
}
