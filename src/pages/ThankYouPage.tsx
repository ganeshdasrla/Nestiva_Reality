import { Link } from 'react-router-dom'

export default function ThankYouPage() {
  return (
    <section className="thankyou-card">
      <h1>Thank You!</h1>
      <p>We've received your details. You'll receive a curated shortlist on WhatsApp shortly.</p>
      <div className="thankyou-actions">
        <Link className="button button-primary" to="/projects">
          Browse Projects
        </Link>
        <Link className="button button-secondary" to="/">
          Back to Home
        </Link>
      </div>
    </section>
  )
}
