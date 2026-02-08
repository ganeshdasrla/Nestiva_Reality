import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import AboutPage from './pages/AboutPage'
import AreaPage from './pages/AreaPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import ProjectsPage from './pages/ProjectsPage'
import ResalePage from './pages/ResalePage'
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

export default function App() {
  return (
    <BrowserRouter basename="/Nestiva_Reality">
      <Routes>
        <Route element={<SiteLayout />}>
          <Route element={<HomePage />} index />
          <Route element={<ProjectsPage />} path="/projects" />
          <Route element={<ProjectDetailPage />} path="/projects/:slug" />
          <Route element={<ContactPage />} path="/contact" />
          <Route element={<ThankYouPage />} path="/thank-you" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<AreaPage />} path="/areas/hyderabad" />
          <Route element={<ResalePage />} path="/resale" />
          <Route element={<NotFoundPage />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
