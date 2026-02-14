import { Link } from 'react-router-dom'

export default function ResalePage() {
  const imageBase = `${import.meta.env.BASE_URL}resale/mujeeb-flat/`
  const mujeebFlatImages = Array.from({ length: 10 }, (_, index) => `${imageBase}image-${String(index + 1).padStart(2, '0')}.jpeg`)

  return (
    <div className="page">
      <header className="page-header">
        <h1>Resale Properties</h1>
        <p>Verified resale inventory curated by Nestiva Realty.</p>
      </header>

      <section className="section">
        <h2 className="section-title">Flat Near Gopanapally</h2>
        <p>Resale apartment listing with image walkthrough available.</p>
        <ul className="highlight-list">
          <li>Listing Type: Resale Flat</li>
          <li>Property Name: Flat Near Gopanapally</li>
          <li>Photo Count: 10 images</li>
          <li>Price: Not visible in provided price details image</li>
          <li>Layout: 2 BHK, 2 Baths</li>
          <li>Ownership: Freehold</li>
          <li>Built-up Area: 1280 sq.ft (118.92 sq.m)</li>
          <li>Overlooking: Park/Garden, Main Road</li>
          <li>Facing Road Width: 40 ft</li>
          <li>Floor Number: 3</li>
          <li>Flooring: Ceramic</li>
          <li>Water Source: Municipal corporation, Borewell/Tank, 24x7 Water</li>
          <li>Furnishing: Semifurnished</li>
          <li>Facing: West</li>
        </ul>
      </section>

      <section className="section">
        <h3>Property Gallery</h3>
        <div className="gallery">
          {mujeebFlatImages.map((image, index) => (
            <img alt={`Flat near Gopanapally photo ${index + 1}`} key={image} loading="lazy" src={image} />
          ))}
        </div>
      </section>

      <section className="section">
        <p>Share your budget, area preference, and timeline to receive complete resale details and schedule a visit.</p>
        <div className="card-actions">
          <Link className="button button-primary" to="/contact">
            Share Requirement
          </Link>
        </div>
      </section>
    </div>
  )
}
