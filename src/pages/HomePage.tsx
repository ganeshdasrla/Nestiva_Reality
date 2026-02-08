import type { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getWhatsAppLink } from '../constants'
import { projects } from '../data/projects'

const featuredProjects = projects.slice(0, 6)

const faqs = [
  {
    question: 'Do you charge buyers?',
    answer: 'Brokerage terms are discussed transparently before site visits.',
  },
  {
    question: 'Do you show under-construction properties?',
    answer: 'Only if legally clear and suitable for your timeline.',
  },
  {
    question: 'Do you cover all Hyderabad areas?',
    answer: 'Yes, based on client requirements.',
  },
]

export default function HomePage() {
  const navigate = useNavigate()

  function handleLeadSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    navigate('/thank-you')
  }

  return (
    <div className="page home-page">
      <section className="hero">
        <h1>Curated Homes Across Hyderabad</h1>
        <p>
          Verified ready and near-ready homes, resale properties, and select projects shortlisted based on
          budget, location, and timeline.
        </p>
        <div className="button-row">
          <Link className="button button-primary" to="/projects">
            View Projects
          </Link>
          <a
            className="button button-secondary"
            href={getWhatsAppLink('Hi Nestiva Realty, I am looking for curated options in Hyderabad.')}
            rel="noreferrer"
            target="_blank"
          >
            WhatsApp Us
          </a>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Trust</h2>
        <ul className="trust-list">
          <li>RERA-aware listings</li>
          <li>OC-first approach</li>
          <li>Loan and legal assistance</li>
          <li>Weekend site visits</li>
        </ul>
        <p className="muted">We shortlist properties so you don't waste weekends visiting unsuitable options.</p>
      </section>

      <section className="section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.slug}>
              <h3>{project.name}</h3>
              <p>{project.zone}</p>
              <p>Price Band: {project.priceBand}</p>
              <p>Status: {project.status}</p>
              <div className="card-actions">
                <Link className="button button-secondary" to={`/projects/${project.slug}`}>
                  Get Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">How It Works</h2>
        <ol className="steps-list">
          <li>Share your budget and timeline</li>
          <li>Receive a curated shortlist</li>
          <li>Visit properties on weekends</li>
          <li>Proceed with legal and loan support</li>
        </ol>
      </section>

      <section className="section form-card">
        <h2>Get a Curated Shortlist (2 Minutes)</h2>
        <form className="lead-form" onSubmit={handleLeadSubmit}>
          <div className="form-row">
            <label htmlFor="home-budget">
              Budget Range
              <select id="home-budget" name="budget" required>
                <option value="">Select budget range</option>
                <option value="under-2">Up to ₹2 Cr</option>
                <option value="2-3">₹2 Cr - ₹3 Cr</option>
                <option value="above-3">Above ₹3 Cr</option>
              </select>
            </label>

            <label htmlFor="home-timeline">
              Timeline
              <select id="home-timeline" name="timeline" required>
                <option value="">Select timeline</option>
                <option value="immediate">Immediate (0-3 months)</option>
                <option value="near">3-6 months</option>
                <option value="later">6-12 months</option>
              </select>
            </label>
          </div>

          <div className="form-row">
            <label htmlFor="home-purpose">
              Purpose
              <select id="home-purpose" name="purpose" required>
                <option value="">Select purpose</option>
                <option value="self-use">Self-use</option>
                <option value="investment">Investment</option>
              </select>
            </label>

            <label htmlFor="home-phone">
              Phone Number (WhatsApp)
              <input id="home-phone" name="phone" placeholder="+91" required type="tel" />
            </label>
          </div>

          <button className="button button-primary" type="submit">
            Send Me Options
          </button>
        </form>
        <p className="form-note">No spam. No pressure. Only relevant options.</p>
      </section>

      <section className="section">
        <h2 className="section-title">FAQ</h2>
        <div className="faq-grid">
          {faqs.map((faq) => (
            <article className="faq-item" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
