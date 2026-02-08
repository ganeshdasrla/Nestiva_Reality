import { Link, NavLink, Outlet } from 'react-router-dom'

const navigationItems = [
  { to: '/projects', label: 'Projects' },
  { to: '/resale', label: 'Resale' },
  { to: '/areas/hyderabad', label: 'Areas' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function getNavClassName(isActive: boolean): string {
  return isActive ? 'nav-link active' : 'nav-link'
}

export default function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" to="/">
            <span className="brand-name">Nestiva Realty</span>
            <span className="brand-tagline">Curated Homes Across Hyderabad</span>
          </Link>

          <nav aria-label="Primary navigation" className="site-nav">
            {navigationItems.map((item) => (
              <NavLink key={item.to} className={({ isActive }) => getNavClassName(isActive)} to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link className="button button-primary header-cta" to="/contact">
            Book a Site Visit
          </Link>
        </div>
      </header>

      <main className="site-main">
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">Nestiva Realty</div>
          <div className="footer-tagline">Curated Homes Across Hyderabad</div>
          <div className="footer-legal">
            Nestiva Realty is an independent real estate channel partner. All information is indicative and
            subject to verification.
          </div>
        </div>
      </footer>
    </div>
  )
}
