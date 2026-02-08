export type ProjectStatus = 'Ready' | 'Near-Ready'
export type BudgetRange = 'under-2' | '2-3' | 'above-3'

export interface Project {
  slug: string
  name: string
  area: string
  zone: string
  configurations: string
  priceBand: string
  budgetRange: BudgetRange
  status: ProjectStatus
  approvals: string
  highlights: string[]
  suitableFor: string
  notSuitableFor: string
  images: string[]
}

const imageGallery = {
  aurum: [
    'https://picsum.photos/seed/aurum-1/1000/700',
    'https://picsum.photos/seed/aurum-2/1000/700',
    'https://picsum.photos/seed/aurum-3/1000/700',
    'https://picsum.photos/seed/aurum-4/1000/700',
    'https://picsum.photos/seed/aurum-5/1000/700',
  ],
  grove: [
    'https://picsum.photos/seed/grove-1/1000/700',
    'https://picsum.photos/seed/grove-2/1000/700',
    'https://picsum.photos/seed/grove-3/1000/700',
    'https://picsum.photos/seed/grove-4/1000/700',
    'https://picsum.photos/seed/grove-5/1000/700',
  ],
  emerald: [
    'https://picsum.photos/seed/emerald-1/1000/700',
    'https://picsum.photos/seed/emerald-2/1000/700',
    'https://picsum.photos/seed/emerald-3/1000/700',
    'https://picsum.photos/seed/emerald-4/1000/700',
    'https://picsum.photos/seed/emerald-5/1000/700',
  ],
  lakefront: [
    'https://picsum.photos/seed/lakefront-1/1000/700',
    'https://picsum.photos/seed/lakefront-2/1000/700',
    'https://picsum.photos/seed/lakefront-3/1000/700',
    'https://picsum.photos/seed/lakefront-4/1000/700',
    'https://picsum.photos/seed/lakefront-5/1000/700',
  ],
  urbanCourt: [
    'https://picsum.photos/seed/urban-court-1/1000/700',
    'https://picsum.photos/seed/urban-court-2/1000/700',
    'https://picsum.photos/seed/urban-court-3/1000/700',
    'https://picsum.photos/seed/urban-court-4/1000/700',
    'https://picsum.photos/seed/urban-court-5/1000/700',
  ],
  sereneValley: [
    'https://picsum.photos/seed/serene-valley-1/1000/700',
    'https://picsum.photos/seed/serene-valley-2/1000/700',
    'https://picsum.photos/seed/serene-valley-3/1000/700',
    'https://picsum.photos/seed/serene-valley-4/1000/700',
    'https://picsum.photos/seed/serene-valley-5/1000/700',
  ],
}

export const projects: Project[] = [
  {
    slug: 'aurum-vistas-kokapet',
    name: 'Aurum Vistas',
    area: 'Kokapet',
    zone: 'West Hyderabad',
    configurations: '3/4 BHK',
    priceBand: '₹2.2 - ₹3.1 Cr',
    budgetRange: '2-3',
    status: 'Ready',
    approvals: 'RERA, OC available',
    highlights: [
      'Gated community',
      'Reputed developer',
      'Good road connectivity',
      'Suitable for end-use and long-hold investment',
    ],
    suitableFor: 'Ideal for families looking for a ready home near IT hubs.',
    notSuitableFor: 'Not suitable for short-term speculation.',
    images: imageGallery.aurum,
  },
  {
    slug: 'the-grove-financial-district',
    name: 'The Grove',
    area: 'Financial District',
    zone: 'West Hyderabad',
    configurations: '2/3 BHK',
    priceBand: '₹1.8 - ₹2.6 Cr',
    budgetRange: 'under-2',
    status: 'Near-Ready',
    approvals: 'RERA registered, OC in progress',
    highlights: [
      'Strong social infrastructure',
      'Access to IT corridor',
      'Community amenities in place',
      'Balanced for self-use and rental demand',
    ],
    suitableFor: 'Ideal for working professionals wanting near-ready possession.',
    notSuitableFor: 'Not suitable if immediate handover is non-negotiable.',
    images: imageGallery.grove,
  },
  {
    slug: 'emerald-heights-gachibowli',
    name: 'Emerald Heights',
    area: 'Gachibowli',
    zone: 'West Hyderabad',
    configurations: '3/4 BHK',
    priceBand: '₹2.9 - ₹4.2 Cr',
    budgetRange: 'above-3',
    status: 'Ready',
    approvals: 'RERA, OC available',
    highlights: [
      'Large-format homes',
      'Premium gated layout',
      'Well-connected to schools and offices',
      'Suitable for end-use buyers upgrading homes',
    ],
    suitableFor: 'Ideal for families seeking premium ready inventory.',
    notSuitableFor: 'Not suitable for investors targeting entry-level pricing.',
    images: imageGallery.emerald,
  },
  {
    slug: 'lakefront-residences-tellapur',
    name: 'Lakefront Residences',
    area: 'Tellapur',
    zone: 'West Hyderabad',
    configurations: '2/3 BHK',
    priceBand: '₹1.6 - ₹2.4 Cr',
    budgetRange: 'under-2',
    status: 'Near-Ready',
    approvals: 'RERA registered',
    highlights: [
      'Planned township environment',
      'Future growth corridor',
      'Weekend community living',
      'Practical options for first-time homebuyers',
    ],
    suitableFor: 'Ideal for buyers with a 6-12 month move-in timeline.',
    notSuitableFor: 'Not suitable for clients needing immediate OC-based handover.',
    images: imageGallery.lakefront,
  },
  {
    slug: 'urban-court-kondapur',
    name: 'Urban Court',
    area: 'Kondapur',
    zone: 'Central-West Hyderabad',
    configurations: '2/3 BHK',
    priceBand: '₹1.9 - ₹2.8 Cr',
    budgetRange: '2-3',
    status: 'Ready',
    approvals: 'RERA, OC available',
    highlights: [
      'Established neighborhood',
      'Strong everyday convenience',
      'Good metro and road access',
      'Suitable for end-users and long-term investors',
    ],
    suitableFor: 'Ideal for families wanting central access and immediate usability.',
    notSuitableFor: 'Not suitable for buyers looking only at peripheral micro-markets.',
    images: imageGallery.urbanCourt,
  },
  {
    slug: 'serene-valley-kompally',
    name: 'Serene Valley',
    area: 'Kompally',
    zone: 'North Hyderabad',
    configurations: '2/3/4 BHK',
    priceBand: '₹1.4 - ₹2.3 Cr',
    budgetRange: 'under-2',
    status: 'Near-Ready',
    approvals: 'RERA registered',
    highlights: [
      'Family-focused planning',
      'Lower-density living',
      'Good arterial road access',
      'Value-led options for spacious configurations',
    ],
    suitableFor: 'Ideal for families prioritizing space and budget efficiency.',
    notSuitableFor: 'Not suitable for buyers focused only on western IT hubs.',
    images: imageGallery.sereneValley,
  },
]

export const projectBySlug = new Map(projects.map((project) => [project.slug, project]))
