import type { FormEvent } from 'react'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  getMailToLink,
  getSmsLink,
  getWhatsAppLink,
} from '../constants'
import { projectBySlug } from '../data/projects'

export default function ContactPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const projectSlug = searchParams.get('project')
  const selectedProject = projectSlug ? projectBySlug.get(projectSlug) : undefined
  const [message, setMessage] = useState(
    selectedProject ? `Interested in ${selectedProject.name}. Please share more details.` : '',
  )

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '')
    const phone = String(formData.get('phone') ?? '')
    const budget = String(formData.get('budget') ?? '')
    const location = String(formData.get('location') ?? '')
    const timeline = String(formData.get('timeline') ?? '')
    const enquiryMessage = String(formData.get('message') ?? '')

    const notificationText =
      `New enquiry from Sri Nestiva PropTech website\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Budget: ${budget}\n` +
      `Preferred Location: ${location}\n` +
      `Timeline: ${timeline}\n` +
      `Message: ${enquiryMessage || 'N/A'}`

    window.open(getMailToLink('New Website Enquiry', notificationText), '_blank', 'noopener,noreferrer')
    window.open(getSmsLink(notificationText), '_blank', 'noopener,noreferrer')
    navigate('/thank-you')
  }

  return (
    <div className="page">
      <header className="page-header">
        <h1>Talk to Sri Nestiva PropTech</h1>
        <p>Share your requirement and we'll shortlist the right options.</p>
      </header>

      <section className="section form-card">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="contact-name">
              Name
              <input id="contact-name" name="name" required type="text" />
            </label>

            <label htmlFor="contact-phone">
              Phone (WhatsApp)
              <input id="contact-phone" name="phone" required type="tel" />
            </label>
          </div>

          <div className="form-row">
            <label htmlFor="contact-budget">
              Budget Range
              <select id="contact-budget" name="budget" required>
                <option value="">Select budget range</option>
                <option value="under-2">Up to ₹2 Cr</option>
                <option value="2-3">₹2 Cr - ₹3 Cr</option>
                <option value="above-3">Above ₹3 Cr</option>
              </select>
            </label>

            <label htmlFor="contact-location">
              Preferred Location
              <input id="contact-location" name="location" required type="text" />
            </label>
          </div>

          <div className="form-row">
            <label htmlFor="contact-timeline">
              Timeline
              <select id="contact-timeline" name="timeline" required>
                <option value="">Select timeline</option>
                <option value="immediate">Immediate (0-3 months)</option>
                <option value="near">3-6 months</option>
                <option value="later">6-12 months</option>
              </select>
            </label>
          </div>

          <label htmlFor="contact-message">
            Message (optional)
            <textarea
              id="contact-message"
              name="message"
              onChange={(event) => setMessage(event.target.value)}
              value={message}
            />
          </label>

          <button className="button button-primary" type="submit">
            Submit
          </button>
        </form>

        <div className="alternate-contact">
          <div>
            Phone:{' '}
            <a className="text-link" href={`tel:+${CONTACT_PHONE_E164}`}>
              {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
          <div>
            Email:{' '}
            <a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </div>
          <div>
            WhatsApp:{' '}
            <a
              className="text-link"
              href={getWhatsAppLink('Hi Sri Nestiva PropTech, I want to discuss my requirement.')}
              rel="noreferrer"
              target="_blank"
            >
              Click to Chat
            </a>
          </div>
          <div>
            Instagram:{' '}
            <a className="text-link" href={INSTAGRAM_URL} rel="noreferrer" target="_blank">
              @{INSTAGRAM_HANDLE}
            </a>
          </div>
          <div>On submit, your email and SMS app will open with the enquiry details prefilled.</div>
          <div>Site Visits: Weekends (10 AM - 6 PM)</div>
        </div>
      </section>
    </div>
  )
}
