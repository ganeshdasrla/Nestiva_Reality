import { Helmet } from 'react-helmet-async'

export default function AboutPage() {
  return (
    <div className="page">
      <Helmet>
        <title>About | Sri Nestiva PropTech</title>
        <meta
          name="description"
          content="Learn about Sri Nestiva PropTech—Hyderabad-focused, builder-direct, approval-verified real estate advisory."
        />
        <link href="https://www.srinestivaproptech.in/about" rel="canonical" />
      </Helmet>
      <header className="page-header">
        <h1>Built on Trust. Driven by Transparency.</h1>
      </header>

      <section className="section">
        <p>
          Sri Nestiva PropTech is a Hyderabad-focused real estate advisory platform that works directly with
          builder managing partners to deliver verified, approval-first property options.
        </p>
        <p>
          We do not operate as a mass-listing brokerage. Instead, we curate credible, RERA-compliant projects
          and assist buyers with transparent pricing, documentation clarity, and structured guidance.
        </p>
        <p>
          Our approach combines builder-level coordination with practical on-ground support &mdash; ensuring every
          transaction is informed, compliant, and smooth.
        </p>
        <p>We recommend only projects we would confidently suggest to our own families.</p>
      </section>
    </div>
  )
}
