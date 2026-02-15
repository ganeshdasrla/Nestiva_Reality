import { Link } from 'react-router-dom'
import { getWhatsAppLink } from '../constants'

const serviceSections = [
  {
    title: 'Property Shortlisting',
    bullets: [
      'Requirement-based curation (budget, location, timeline)',
      'Approval-verified, RERA-aware listings',
      'Builder-confirmed availability & pricing clarity',
    ],
  },
  {
    title: 'Builder Coordination',
    bullets: [
      'Direct coordination with builder teams / managing partners',
      'Site visit scheduling & project walkthrough planning',
      'Transparent negotiation support (no inflated quotes)',
    ],
  },
  {
    title: 'Loan & Documentation Support',
    bullets: [
      'Bank coordination & EMI guidance',
      'Legal/document checklist support (sale agreement, approvals, OC status)',
      'End-to-end booking & closure guidance',
    ],
  },
  {
    title: 'Investor Advisory',
    bullets: [
      'ROI and rental-yield oriented comparison',
      'Location growth evaluation & exit-friendly selection',
      'Portfolio-style recommendations',
    ],
  },
] as const

export default function ServicesPage() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Services</h1>
        <p>Builder-direct, approval-verified support &mdash; from shortlist to closure.</p>
      </header>

      <section className="details-grid">
        {serviceSections.map((section) => (
          <article className="detail-card" key={section.title}>
            <h2>{section.title}</h2>
            <ul className="highlight-list">
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="section cta-strip">
        <h2 className="section-title">Want a verified shortlist?</h2>
        <p>
          Share your requirements and we&apos;ll recommend approval-verified options aligned with your goals.
        </p>
        <div className="cta-panel">
          <Link className="button button-primary" to="/contact">
            Book a Call
          </Link>
          <a
            className="button button-secondary"
            href={getWhatsAppLink('Hi Sri Nestiva PropTech, I need a verified shortlist for my requirements.')}
            rel="noreferrer"
            target="_blank"
          >
            WhatsApp Us
          </a>
        </div>
      </section>
    </div>
  )
}
