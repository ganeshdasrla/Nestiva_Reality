import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { CONTACT_PHONE_DISPLAY, getWhatsAppLink } from '../constants'

type NavigationItem =
  | { kind: 'route'; to: string; label: string }
  | { kind: 'external'; href: string; label: string }

const navigationItems: NavigationItem[] = [
  { kind: 'route', to: '/projects', label: 'Projects' },
  { kind: 'route', to: '/resale', label: 'Resale' },
  { kind: 'route', to: '/areas/hyderabad', label: 'Areas' },
  { kind: 'route', to: '/about', label: 'About' },
  { kind: 'route', to: '/contact', label: 'Contact' },
]

function getNavClassName(isActive: boolean): string {
  return isActive ? 'nav-link active' : 'nav-link'
}

export default function SiteLayout() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" to="/">
            <span className="brand-name">Sri Nestiva PropTech</span>
            <span className="brand-tagline">Curated Homes Across Hyderabad</span>
          </Link>

          <button
            aria-controls="site-nav"
            aria-expanded={isMenuOpen}
            className="nav-toggle"
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            <span className="nav-toggle-icon" />
            <span className="nav-toggle-label">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
          </button>

          <nav aria-label="Primary navigation" className={`site-nav${isMenuOpen ? ' is-open' : ''}`} id="site-nav">
            {navigationItems.map((item) => (
              item.kind === 'external' ? (
                <a
                  key={item.href}
                  className="nav-link"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  rel="noreferrer"
                  target="_blank"
                >
                  {item.label}
                </a>
              ) : (
                <NavLink
                  key={item.to}
                  className={({ isActive }) => getNavClassName(isActive)}
                  onClick={() => setIsMenuOpen(false)}
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              )
            ))}
          </nav>

          <div className="header-right">
            <Link className="button button-primary header-cta" to="/contact">
              Book a Site Visit
            </Link>
            <div className="header-contact" aria-label="Contact details">
              <a className="header-contact-link" href={`tel:${CONTACT_PHONE_DISPLAY.replace(/-/g, '')}`}>
                {CONTACT_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="site-main">
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">Sri Nestiva PropTech</div>
          <div className="footer-tagline">Curated Homes Across Hyderabad</div>
          <div className="footer-legal">
            Sri Nestiva PropTech is an independent real estate channel partner. All information is indicative and
            subject to verification.
          </div>
        </div>
      </footer>

      <a
        aria-label="Chat on WhatsApp"
        className="floating-whatsapp"
        href={getWhatsAppLink('Hi Sri Nestiva PropTech, I would like to know more about available projects.')}
        rel="noreferrer"
        target="_blank"
      >
        <svg aria-hidden="true" height="24" viewBox="0 0 24 24" width="24">
          <path
            d="M12.04 2C6.64 2 2.27 6.37 2.27 11.77c0 1.73.45 3.43 1.31 4.92L2 22l5.46-1.52a9.73 9.73 0 0 0 4.58 1.16h.01c5.4 0 9.77-4.37 9.77-9.77S17.44 2 12.04 2Zm5.7 13.92c-.24.68-1.4 1.3-1.94 1.39-.5.08-1.12.11-1.8-.1-.42-.13-.95-.3-1.64-.6-2.9-1.26-4.8-4.36-4.95-4.57-.14-.2-1.18-1.57-1.18-3 0-1.43.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.2 0 .4 0 .58.01.19 0 .44-.07.68.52.25.6.84 2.07.91 2.22.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.17-.31.38-.45.5-.15.13-.3.27-.13.53.17.27.74 1.21 1.59 1.96 1.09.97 2.01 1.27 2.28 1.42.27.13.43.11.59-.07.16-.18.68-.8.86-1.08.18-.28.36-.24.61-.14.25.1 1.59.75 1.86.88.27.14.45.2.52.3.07.1.07.6-.18 1.28Z"
            fill="currentColor"
          />
        </svg>
        <span className="sr-only">WhatsApp</span>
      </a>
    </div>
  )
}
