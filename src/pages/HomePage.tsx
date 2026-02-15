import type { CSSProperties, FormEvent } from 'react'
import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getWhatsAppLink } from '../constants'
import { projects } from '../data/projects'
import { handleProjectImageError } from '../utils/imageFallback'

const featuredProjects = projects
const heroSlides = projects.map((project) => ({ image: project.images[0], name: project.name }))

const trustBullets = [
  'Direct Managing Partner Access (no mediator layers)',
  'Transparent Pricing (no inflated quotes / no hidden charges)',
  'RERA-aware listings + approval verification',
  'OC-first / handover-ready focus',
  'Loan + legal + documentation support',
  'Weekend curated site visits',
  'Verified availability & builder-confirmed inventory (no guesswork)',
]

const builderDirectAdvantageCopy =
  'We work directly with builder managing partners to confirm approvals, pricing, and availability\u2014ensuring transparent, faster closures without intermediary layers.'

const whoWeHelpSegments = [
  {
    title: 'Premium Apartments (\u20B91Cr+)',
    bullets: [
      'Builder-verified inventory & pricing clarity',
      'Negotiation support with builder teams',
      'Smooth closing with end-to-end coordination',
    ],
  },
  {
    title: 'Villas & Gated Communities',
    bullets: [
      'Approval and title guidance (document-led)',
      'Community & livability focused shortlisting',
      'Curated visits based on your preferences',
    ],
  },
  {
    title: 'Investors',
    bullets: [
      'ROI / rental-yield oriented comparison',
      'Location growth & exit potential assessment',
      'Portfolio-style recommendations (not random listings)',
    ],
  },
  {
    title: 'First-time Home Buyers',
    bullets: [
      'Budget + EMI guidance and bank coordination',
      'Transparent cost sheet breakdown',
      'Step-by-step booking and documentation support',
    ],
  },
] as const

const investorFocusBullets = [
  'ROI-oriented property shortlisting',
  'Rental yield and appreciation context',
  'Location growth evaluation',
  'Exit-friendly project assessment',
  'Portfolio-style recommendations',
]

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
  {
    question: 'Do you work with individual agents?',
    answer:
      'We coordinate directly with builder teams and managing partners to ensure verified inventory, transparent pricing, and smoother documentation processes.',
  },
]

export default function HomePage() {
  const navigate = useNavigate()
  const [activeSlide, setActiveSlide] = useState(0)
  const featuredScrollRef = useRef<HTMLDivElement | null>(null)
  const trustBackgroundImage = heroSlides[activeSlide]?.image ?? heroSlides[0]?.image ?? ''
  const trustSectionStyle: (CSSProperties & { '--trust-bg-image': string }) | undefined = trustBackgroundImage
    ? {
        '--trust-bg-image': `url("${trustBackgroundImage}")`,
      }
    : undefined

  useEffect(() => {
    if (heroSlides.length < 2) return

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 3800)

    return () => window.clearInterval(intervalId)
  }, [])

  function handleLeadSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    navigate('/thank-you')
  }

  function scrollFeatured(direction: 'left' | 'right') {
    if (!featuredScrollRef.current) return
    const firstCard = featuredScrollRef.current.querySelector<HTMLElement>('.featured-card')
    const containerStyles = window.getComputedStyle(featuredScrollRef.current)
    const gap = Number.parseFloat(containerStyles.columnGap || containerStyles.gap || '0')
    const step = (firstCard?.offsetWidth ?? 320) + gap
    const delta = direction === 'left' ? -step : step
    featuredScrollRef.current.scrollBy({ left: delta, behavior: 'smooth' })
  }

  return (
    <div className="page home-page">
      <section className="hero">
        <div aria-hidden="true" className="hero-carousel">
          {heroSlides.map((slide, index) => (
            <img
              alt={slide.name}
              className={index === activeSlide ? 'hero-slide active' : 'hero-slide'}
              key={slide.image}
              loading="lazy"
              onError={handleProjectImageError}
              src={slide.image}
            />
          ))}
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Curated Homes Across Hyderabad</h1>
          <p>Builder-direct. Approval-verified. Transparent deals &mdash; guided end-to-end.</p>
          <p className="muted">
            We shortlist only credible, RERA-compliant projects and work directly with builder managing partners to
            ensure clarity, confidence, and smooth closures.
          </p>
          <p className="muted">
            We curate verified projects across Kokapet, Financial District, Gachibowli, Narsingi, Tellapur,
            Kondapur, and other growth corridors in Hyderabad.
          </p>
          <div className="button-row">
            <Link className="button button-primary" to="/projects">
              Explore Curated Projects
            </Link>
            <Link className="button button-secondary" to="/contact">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="section trust-section" style={trustSectionStyle}>
        <h2 className="section-title">Why Choose Us</h2>
        <ul className="trust-list">
          {trustBullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <p className="muted">We shortlist properties so you don't waste weekends visiting unsuitable options.</p>
        <div className="builder-advantage">
          <h3>Builder-Direct Advantage</h3>
          <p>{builderDirectAdvantageCopy}</p>
        </div>
      </section>

      <section className="section audience-section">
        <h2 className="section-title">Who We Help</h2>
        <div className="audience-grid">
          {whoWeHelpSegments.map((segment) => (
            <article className="audience-card" key={segment.title}>
              <h3>{segment.title}</h3>
              <ul className="audience-list">
                {segment.bullets.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Invest with Clarity. Not Just Emotion.</h2>
        <ul className="trust-list">
          {investorFocusBullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <p className="muted">We focus on fundamentals, not hype.</p>
      </section>

      <section className="section featured-strip">
        <div className="featured-strip-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="featured-controls">
            <button
              aria-label="Scroll projects left"
              className="scroll-btn scroll-btn-left"
              onClick={() => scrollFeatured('left')}
              type="button"
            >
              &#x2039;
            </button>
            <button
              aria-label="Scroll projects right"
              className="scroll-btn scroll-btn-right"
              onClick={() => scrollFeatured('right')}
              type="button"
            >
              &#x203A;
            </button>
          </div>
        </div>
        <div className="featured-scroll" ref={featuredScrollRef}>
          {featuredProjects.map((project) => (
            <article className="project-card featured-card" key={project.slug}>
              <img
                alt={`${project.name} highlight`}
                className="featured-card-image"
                loading="lazy"
                onError={handleProjectImageError}
                src={project.images[0]}
              />
              <h3>{project.name}</h3>
              <p>{project.zone}</p>
              <p>Price Band: {project.priceBand}</p>
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
                <option value="under-2">Up to &#8377;2 Cr</option>
                <option value="2-3">&#8377;2 Cr - &#8377;3 Cr</option>
                <option value="above-3">Above &#8377;3 Cr</option>
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

      <section className="section cta-strip">
        <h2 className="section-title">Talk to a Builder-Direct Advisor</h2>
        <p>
          Book a quick call and share your budget, preferred locations, and timeline. We&apos;ll shortlist
          approval-verified, builder-confirmed options and plan a curated site visit.
        </p>
        <div className="cta-panel">
          <Link className="button button-primary" to="/contact">
            Book a Call
          </Link>
          <a
            className="button button-secondary"
            href={getWhatsAppLink('Hi Sri Nestiva PropTech, I would like to book a consultation.')}
            rel="noreferrer"
            target="_blank"
          >
            WhatsApp Us
          </a>
          <Link className="button button-ghost" to="/contact">
            Schedule a Site Visit
          </Link>
        </div>
        <p className="form-note">No pressure. No spam. Just verified options.</p>
      </section>
    </div>
  )
}
