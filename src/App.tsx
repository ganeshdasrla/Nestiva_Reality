import { BrowserRouter, Link, Navigate, Route, Routes, useParams } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import AboutPage from './pages/AboutPage'
import AreaPage from './pages/AreaPage'
import BlogBestAreasHyderabad from './pages/BlogBestAreasHyderabad'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import ProjectsPage from './pages/ProjectsPage'
import ResalePage from './pages/ResalePage'
import ServicesPage from './pages/ServicesPage'
import ThankYouPage from './pages/ThankYouPage'

function NotFoundPage() {
  return (
    <section className="notfound-card">
      <h1>Page Not Found</h1>
      <p>The page you requested does not exist.</p>
      <div className="thankyou-actions">
        <Link className="button button-primary" to="/">
          Back to Home
        </Link>
      </div>
    </section>
  )
}

function LegacyProjectRedirect() {
  const { slug } = useParams()
  return <Navigate replace to={slug ? `/projects/${slug}` : '/projects'} />
}

export default function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<SiteLayout />}>
          <Route element={<HomePage />} index />
          <Route element={<ProjectsPage />} path="/projects" />
          <Route element={<ServicesPage />} path="/services" />
          <Route element={<ProjectDetailPage />} path="/projects/:slug" />
          <Route element={<LegacyProjectRedirect />} path="/project/:slug" />
          <Route element={<ContactPage />} path="/contact" />
          <Route element={<ThankYouPage />} path="/thank-you" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<AreaPage />} path="/areas/hyderabad" />
          <Route element={<BlogBestAreasHyderabad />} path="/blog/best-areas-to-buy-property-in-hyderabad" />
          <Route element={<ResalePage />} path="/resale" />
          <Route element={<NotFoundPage />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
