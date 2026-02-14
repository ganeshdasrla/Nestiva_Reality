import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

type ResalePriceBucket = 'under-75l' | '75l-1cr' | 'above-1cr'

type ResaleListing = {
  id: string
  title: string
  type: 'Flat' | 'Villa'
  location: string
  price: string
  priceBucket: ResalePriceBucket
  details: string[]
  images: string[]
}

export default function ResalePage() {
  const [locationFilter, setLocationFilter] = useState('all')
  const [priceFilter, setPriceFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')
  const [lightboxListingId, setLightboxListingId] = useState<string | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const gopanapallyImageBase = `${import.meta.env.BASE_URL}resale/mujeeb-flat/`
  const gopanapallyFlatImages = Array.from(
    { length: 10 },
    (_, index) => `${gopanapallyImageBase}image-${String(index + 1).padStart(2, '0')}.jpeg`,
  )

  const amenpurImageBase = `${import.meta.env.BASE_URL}resale/narendra-flat/`
  const amenpurFlatImages = Array.from(
    { length: 8 },
    (_, index) => `${amenpurImageBase}image-${String(index + 1).padStart(2, '0')}.jpeg`,
  )

  const listings: ResaleListing[] = [
    {
      id: 'gopanapally-flat',
      title: 'Resale Gopanapally Flat',
      type: 'Flat',
      location: 'Gopanapally',
      price: '₹1.05 Cr',
      priceBucket: 'above-1cr',
      details: [
        'Layout: 2 BHK, 2 Baths',
        'Ownership: Freehold',
        'Built-up Area: 1280 sq.ft (118.92 sq.m)',
        'Overlooking: Park/Garden, Main Road',
        'Facing Road Width: 40 ft',
        'Floor Number: 3',
        'Flooring: Ceramic',
        'Water Source: Municipal corporation, Borewell/Tank, 24x7 Water',
        'Furnishing: Semifurnished',
        'Facing: West',
      ],
      images: gopanapallyFlatImages,
    },
    {
      id: 'amenpur-flat',
      title: 'Amenpur Flat Resale',
      type: 'Flat',
      location: 'Amenpur',
      price: '₹58 Lakhs',
      priceBucket: 'under-75l',
      details: ['Built-up Area: 1000 sft'],
      images: amenpurFlatImages,
    },
  ]

  const locations = useMemo(() => Array.from(new Set(listings.map((listing) => listing.location))), [listings])
  const types = useMemo(() => Array.from(new Set(listings.map((listing) => listing.type))), [listings])

  const filteredListings = listings.filter((listing) => {
    const locationMatch = locationFilter === 'all' || listing.location === locationFilter
    const priceMatch = priceFilter === 'all' || listing.priceBucket === priceFilter
    const typeMatch = typeFilter === 'all' || listing.type === typeFilter
    return locationMatch && priceMatch && typeMatch
  })

  const lightboxListing = lightboxListingId ? listings.find((listing) => listing.id === lightboxListingId) : undefined

  const openLightbox = (listingId: string, index: number) => {
    setLightboxListingId(listingId)
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxListingId(null)
    setLightboxIndex(0)
  }

  const showPreviousImage = () => {
    if (!lightboxListing) return
    setLightboxIndex((current) => (current === 0 ? lightboxListing.images.length - 1 : current - 1))
  }

  const showNextImage = () => {
    if (!lightboxListing) return
    setLightboxIndex((current) => (current === lightboxListing.images.length - 1 ? 0 : current + 1))
  }

  useEffect(() => {
    if (!lightboxListing) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowLeft') showPreviousImage()
      if (event.key === 'ArrowRight') showNextImage()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightboxListing])

  return (
    <div className="page">
      <header className="page-header">
        <h1>Resale Properties</h1>
        <p>Verified resale inventory curated by Sri Nestiva PropTech.</p>
      </header>

      <section className="section">
        <h2 className="section-title">Filters</h2>
        <div className="filters">
          <label htmlFor="resale-location-filter">
            Location
            <select
              id="resale-location-filter"
              onChange={(event) => setLocationFilter(event.target.value)}
              value={locationFilter}
            >
              <option value="all">All locations</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="resale-price-filter">
            Price
            <select id="resale-price-filter" onChange={(event) => setPriceFilter(event.target.value)} value={priceFilter}>
              <option value="all">All prices</option>
              <option value="under-75l">Up to ₹75 Lakhs</option>
              <option value="75l-1cr">₹75 Lakhs - ₹1 Cr</option>
              <option value="above-1cr">Above ₹1 Cr</option>
            </select>
          </label>

          <label htmlFor="resale-type-filter">
            Type
            <select id="resale-type-filter" onChange={(event) => setTypeFilter(event.target.value)} value={typeFilter}>
              <option value="all">All types</option>
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>

      {filteredListings.length === 0 ? (
        <section className="section">
          <p>No resale properties match the selected filters.</p>
        </section>
      ) : (
        filteredListings.map((listing) => (
          <section className="section" key={listing.id}>
            <h2 className="section-title">{listing.title}</h2>
            <p>Resale apartment listing with image walkthrough available.</p>
            <ul className="highlight-list">
              <li>Listing Type: {listing.type}</li>
              <li>Property Name: {listing.title}</li>
              <li>Location: {listing.location}</li>
              <li>Photo Count: {listing.images.length} images</li>
              <li>Price: {listing.price}</li>
              {listing.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>

            <h3>{listing.title} Gallery</h3>
            <div className="gallery">
              {listing.images.map((image, index) => (
                <button
                  className="gallery-image-button"
                  key={image}
                  onClick={() => openLightbox(listing.id, index)}
                  type="button"
                >
                  <img alt={`${listing.title} photo ${index + 1}`} loading="lazy" src={image} />
                </button>
              ))}
            </div>
          </section>
        ))
      )}

      <section className="section">
        <p>Share your budget, area preference, and timeline to receive complete resale details and schedule a visit.</p>
        <div className="card-actions">
          <Link className="button button-primary" to="/contact">
            Share Requirement
          </Link>
        </div>
      </section>

      {lightboxListing ? (
        <div className="resale-lightbox" onClick={closeLightbox} role="presentation">
          <div className="resale-lightbox-content" onClick={(event) => event.stopPropagation()} role="presentation">
            <button aria-label="Previous image" className="resale-lightbox-arrow left" onClick={showPreviousImage} type="button">
              ‹
            </button>
            <img
              alt={`${lightboxListing.title} preview ${lightboxIndex + 1}`}
              className="resale-lightbox-image"
              src={lightboxListing.images[lightboxIndex]}
            />
            <button aria-label="Next image" className="resale-lightbox-arrow right" onClick={showNextImage} type="button">
              ›
            </button>
            <button aria-label="Close image preview" className="resale-lightbox-close" onClick={closeLightbox} type="button">
              ✕
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
