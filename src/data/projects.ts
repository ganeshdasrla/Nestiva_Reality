export type ProjectStatus = 'Ongoing'
export type BudgetRange = 'under-2' | '2-3' | 'above-3'

export interface Project {
  slug: string
  name: string
  website?: string
  sqftRange?: string
  numberOfFloors?: number
  totalUnits?: number
  nearbyPlaces?: {
    schools: string[]
    hospitals: string[]
    itCorridor: string[]
    malls: string[]
  }
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
  nivasa: [
    'https://elegantnivasa.com/wp-content/uploads/2025/03/EN-G-1.webp',
    'https://elegantnivasa.com/wp-content/uploads/2025/03/EN-G-2.webp',
    'https://elegantnivasa.com/wp-content/uploads/2025/03/EN-G-13.webp',
    'https://elegantnivasa.com/wp-content/uploads/2025/03/1en.jpg',
    'https://elegantnivasa.com/wp-content/uploads/2025/03/7en.jpg',
  ],
  lacasa: [
    'https://cdn.prod.website-files.com/670fa8b1662cf86774e24a6e/6731b3a2ff40e81cdeac0554_lacasa.jpg',
    'https://cdn.prod.website-files.com/670fa8b1662cf86774e24a6e/672079c37f8ecb98208d91a6_lacasa%20project.jpg',
    'https://cdn.prod.website-files.com/670fa8b1662cf86774e24a6e/6729c9d2e756f0eb9980d472_Untitled%20design%20(7).jpg',
    'https://cdn.prod.website-files.com/670fa8b1662cf86774e24a6e/6729ca39e84ce2ea43437af0_Untitled%20design%20(8).jpg',
    'https://cdn.prod.website-files.com/671b792d5dde138cdfd5bf8f/6731ad5267a65adf0c79ff83_lacasa%20central%20park%20(1).jpg',
  ],
  oneDowntown: [
    'https://cdn.prod.website-files.com/670fa8b1662cf86774e24a6e/672b0ce529e5f9706173914d_home-gallery-01.jpg',
    'https://cdn.prod.website-files.com/670fa8b1662cf86774e24a6e/672a006a21d8aac90bb6bd4c_home-about_onedowntown.webp',
    'https://cdn.prod.website-files.com/670fa8b1662cf86774e24a6e/672b0d341ba414606cd8ae03_home-gallery-02.jpg',
    'https://cdn.prod.website-files.com/670fa8b1662cf86774e24a6e/6731b474c1f174911faf4742_home-contact.jpg',
  ],
  moonGlade: [
    'https://cdn.prod.website-files.com/670fa8b1662cf86774e24a6e/672b110597cebc5d6d9ffdab_70.jpg',
    'https://cdn.prod.website-files.com/670fa8b1662cf86774e24a6e/672b112324059a7f12688e95_WhatsApp%20Image%202024-10-23%20at%2011.02.44%20AM.jpeg',
    'https://cdn.prod.website-files.com/670fa8b1662cf86774e24a6e/672b10e5170d8c45ba97ef57_47%20(1).jpg',
    'https://cdn.prod.website-files.com/671b792d5dde138cdfd5bf8f/6731afa867a65adf0c7baf76_moonglade%20clubhouse.png',
    'https://cdn.prod.website-files.com/671b792d5dde138cdfd5bf8f/6731afa767a65adf0c7baf5a_moonglade%20%40e-infra.png',
  ],
  skyven: [
    'https://static.wixstatic.com/media/0405a1_bacf90079d7a4ab989e9e2509b369c05~mv2.jpg/v1/fill/w_100%2Ch_56%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/0405a1_bacf90079d7a4ab989e9e2509b369c05~mv2.jpg',
    'https://static.wixstatic.com/media/0405a1_9a75267af8f64ea1847485e52f815b2a~mv2.jpg/v1/crop/x_173%2Cy_374%2Cw_742%2Ch_1126/fill/w_742%2Ch_1126%2Cal_c%2Cq_85%2Cenc_avif%2Cquality_auto/SVN_004-Over_The_Clouds_Golden_S%20%281%29.jpg',
    'https://static.wixstatic.com/media/0405a1_448e975d5e2b488d97669961c607f139~mv2.png/v1/crop/x_0%2Cy_85%2Cw_424%2Ch_474/fill/w_424%2Ch_474%2Cal_c%2Cq_85%2Cenc_avif%2Cquality_auto/Untitled%20design%20%282%29.png',
  ],
}

export const projects: Project[] = [
  {
    slug: 'skyven-kokapet',
    name: 'Skyven',
    website: 'https://www.theskyven.com/',
    sqftRange: '5662 SQ FT - 6278 SQ FT',
    numberOfFloors: 63,
    totalUnits: 210,
    area: 'Kokapet',
    zone: 'West Hyderabad',
    configurations: '4 BHK',
    priceBand: 'On Request',
    budgetRange: 'above-3',
    status: 'Ongoing',
    approvals: 'RERA: P02400009501',
    nearbyPlaces: {
      schools: ['Oakridge International School', 'Rockwell International School'],
      hospitals: ['Continental Hospitals', 'AIG Hospitals'],
      itCorridor: ['Financial District', 'Nanakramguda IT Hub'],
      malls: ['Sarath City Capital Mall', 'Inorbit Mall'],
    },
    highlights: [
      'Iconic 63-storey luxury residential tower',
      '210 premium residences',
      'Corner units with expansive city views',
      '2-floor rooftop clubhouse with large amenity mix',
    ],
    suitableFor: 'Ideal for luxury homebuyers seeking large-format 4 BHK homes in Kokapet.',
    notSuitableFor: 'Not suitable for buyers looking for compact or entry-level inventory.',
    images: imageGallery.skyven,
  },
  {
    slug: 'nivasa-tellapur',
    name: 'Nivasa',
    website: 'https://elegantnivasa.com/',
    sqftRange: '1375 SQ FT - 2205 SQ FT',
    numberOfFloors: 23,
    totalUnits: 526,
    area: 'Tellapur',
    zone: 'West Hyderabad',
    configurations: '2/3 BHK',
    priceBand: 'On Request',
    budgetRange: 'under-2',
    status: 'Ongoing',
    approvals: 'RERA: P01100007243',
    nearbyPlaces: {
      schools: ['Manthan International School', 'Glendale International School'],
      hospitals: ['Citizens Specialty Hospital', 'Continental Hospitals'],
      itCorridor: ['Gachibowli IT Corridor', 'Financial District'],
      malls: ['Sarath City Capital Mall', 'GSM Mall'],
    },
    highlights: [
      'Premium apartment community',
      'Established location with city connectivity',
      'Family-focused layouts and amenities',
      'Suitable for end-use and long-hold buyers',
    ],
    suitableFor: 'Ideal for families looking for premium homes in Tellapur.',
    notSuitableFor: 'Not suitable for buyers who need immediate possession.',
    images: imageGallery.nivasa,
  },
  {
    slug: 'lacasa-adibatla',
    name: 'LaCasa',
    website: 'https://www.e-infra.in/lacasa-adibatla',
    sqftRange: '4054 SQ FT - 8564 SQ FT',
    numberOfFloors: 3,
    totalUnits: 182,
    area: 'Adibatla',
    zone: 'South-East Hyderabad',
    configurations: 'Triplex Villas',
    priceBand: 'On Request',
    budgetRange: 'above-3',
    status: 'Ongoing',
    approvals: 'RERA: P02400005578',
    nearbyPlaces: {
      schools: ['Sloka The School, Adibatla', 'Sanskriti The School'],
      hospitals: ['Sri Raghavendra Hospital, Adibatla', 'Sri Vijaya Sai Hospitals'],
      itCorridor: ['TCS Adibatla Campus', 'Aerospace & Hardware Park Corridor'],
      malls: ['DSL Virtue Mall', 'Aarambh Township Retail Zone'],
    },
    highlights: [
      'Gated plotted and villa development',
      'Low-density residential environment',
      'Growth corridor connectivity',
      'Designed for long-term residential value',
    ],
    suitableFor: 'Ideal for buyers seeking independent living formats in Adibatla.',
    notSuitableFor: 'Not suitable for buyers prioritizing central-city apartment living.',
    images: imageGallery.lacasa,
  },
  {
    slug: 'one-downtown-kokapet',
    name: 'One Downtown',
    website: 'https://www.e-infra.in/one-downtown-kokapet',
    sqftRange: '700,000 SQ FT total | 470,000 SQ FT saleable',
    numberOfFloors: 21,
    area: 'Kokapet',
    zone: 'West Hyderabad',
    configurations: 'Retail / Office',
    priceBand: 'On Request',
    budgetRange: 'above-3',
    status: 'Ongoing',
    approvals: 'RERA details not listed on official page',
    nearbyPlaces: {
      schools: ['Oakridge International School', 'Phoenix Greens School of Learning'],
      hospitals: ['Continental Hospitals', 'AIG Hospitals'],
      itCorridor: ['Financial District', 'HITEC City'],
      malls: ['Inorbit Mall', 'Sarath City Capital Mall'],
    },
    highlights: [
      'Commercial project at Kokapet',
      'High-visibility frontage and access',
      'Designed for retail and office formats',
      'Strong long-term rental potential',
    ],
    suitableFor: 'Ideal for investors evaluating commercial inventory in Kokapet.',
    notSuitableFor: 'Not suitable for buyers looking only for residential units.',
    images: imageGallery.oneDowntown,
  },
  {
    slug: 'moonglade-kokapet',
    name: 'MoonGlade',
    website: 'https://www.e-infra.in/moonglade-kokapet',
    sqftRange: '1400 SQ FT - 3950 SQ FT',
    numberOfFloors: 40,
    totalUnits: 2489,
    area: 'Kokapet',
    zone: 'West Hyderabad',
    configurations: '3/4 BHK',
    priceBand: 'On Request',
    budgetRange: '2-3',
    status: 'Ongoing',
    approvals: 'RERA: P02400009267',
    nearbyPlaces: {
      schools: ['Delhi School of Excellence, Narsingi', 'Scholars Academy, Narsingi'],
      hospitals: ['Care Hospitals, Gachibowli', 'Continental Hospitals'],
      itCorridor: ['Kokapet Financial District Belt', 'HITEC City Corridor'],
      malls: ['SBR Central Mall', 'Inorbit Mall'],
    },
    highlights: [
      'Urban apartment community near Kokapet-Narsingi belt',
      'Contemporary design language',
      'Strong road connectivity to IT corridors',
      'Balanced for end-use and investment',
    ],
    suitableFor: 'Ideal for buyers targeting West Hyderabad growth micro-markets.',
    notSuitableFor: 'Not suitable for buyers needing immediate OC-based possession.',
    images: imageGallery.moonGlade,
  },
]

export const projectBySlug = new Map(projects.map((project) => [project.slug, project]))
