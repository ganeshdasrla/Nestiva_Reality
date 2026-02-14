export type ProjectStatus = 'Ongoing' | 'Ready to Move' | 'Pre-Launch'
export type BudgetRange = 'under-2' | '2-3' | 'above-3'
export type ProjectAssetType = 'Apartment' | 'Villa' | 'Commercial'
import venetia1 from '../assets/projects/prr/venetia-1.jpg'
import venetia2 from '../assets/projects/prr/venetia-2.jpg'
import venetia3 from '../assets/projects/prr/venetia-3.jpg'
import venetia4 from '../assets/projects/prr/venetia-4.jpg'
import venetia5 from '../assets/projects/prr/venetia-5.jpg'

export interface Project {
  slug: string
  name: string
  sqftRange?: string
  numberOfFloors?: number
  totalUnits?: number
  nearbyPlaces?: {
    schools: string[]
    hospitals: string[]
    itCorridor: string[]
    malls: string[]
  }
  orrAccess?: {
    exitPoint: string
    distance: string
    travelTime: string
  }[]
  area: string
  zone: string
  assetType: ProjectAssetType
  configurations: string
  priceBand: string
  budgetRange: BudgetRange
  status: ProjectStatus
  amenitiesCount?: string
  keyAmenities?: string[]
  approvals: string
  highlights: string[]
  suitableFor: string
  notSuitableFor: string
  images: string[]
}

const belmondBrochureCover = `${import.meta.env.BASE_URL}projects/belmond/brochure-cover.png`
const belmondPriceSheet = `${import.meta.env.BASE_URL}projects/belmond/price-sheet.png`

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
  candeurLakescape: [
    'https://www.candeur.in/_next/image?q=75&url=https%3A%2F%2Fbackend.candeur.in%2Fuploads%2FRectangle_22_3_027700dfe6.png&w=1080',
    'https://www.candeur.in/_next/image?q=75&url=https%3A%2F%2Fbackend.candeur.in%2Fuploads%2FGroup_1000010630_2_f4d3174fd1.png&w=1920',
    'https://www.candeur.in/_next/image?q=75&url=https%3A%2F%2Fbackend.candeur.in%2Fuploads%2FEast_Elevation_shot_ani_00000_121d8f4569.jpg&w=1080',
    'https://www.candeur.in/_next/image?q=75&url=https%3A%2F%2Fbackend.candeur.in%2Fuploads%2FAerial_Day_shot_ani_00044_22980ddb13.jpg&w=1080',
    'https://www.candeur.in/_next/image?q=75&url=https%3A%2F%2Fbackend.candeur.in%2Fuploads%2FAerial_West_view_0374c072c0.jpg&w=1080',
  ],
  candeurSkyline: [
    'https://www.candeur.in/_next/image?q=75&url=https%3A%2F%2Fbackend.candeur.in%2Fuploads%2FRectangle_22_04c6a7bd9a.png&w=1080',
    'https://www.candeur.in/_next/image?q=75&url=https%3A%2F%2Fbackend.candeur.in%2Fuploads%2FGroup_1000010630_4e9c743e3a.png&w=1920',
    'https://www.candeur.in/_next/image?q=75&url=https%3A%2F%2Fbackend.candeur.in%2Fuploads%2FCS_028_Balcony_ORR_8_K_959c0749b0.jpg&w=1080',
    'https://www.candeur.in/_next/image?q=75&url=https%3A%2F%2Fbackend.candeur.in%2Fuploads%2FCS_020_Banquet_Hall_8_K_f2601cc7f6.jpg&w=1080',
    'https://www.candeur.in/_next/image?q=75&url=https%3A%2F%2Fbackend.candeur.in%2Fuploads%2FCS_019_Preview_Theater_8_K_af2488133a.jpg&w=1080',
  ],
  candeurCrescent: [
    'https://candeur.in/_next/image?q=75&url=https%3A%2F%2Fbackend.candeur.in%2Fuploads%2FRectangle_22_4_3a5c4e2067.png&w=1080',
    'https://candeur.in/_next/image?q=75&url=https%3A%2F%2Fbackend.candeur.in%2Fuploads%2Fmaster_plan_cercent_1_2_93a2157ae2.png&w=1920',
    'https://candeur.in/_next/image?q=75&url=https%3A%2F%2Fbackend.candeur.in%2Fuploads%2FGroup_1000010726_5_da6a530f86.png&w=750',
    'https://candeur.in/_next/image?q=75&url=https%3A%2F%2Fbackend.candeur.in%2Fuploads%2FGroup_1000010726_6_02ffa2573c.png&w=750',
  ],
  candeurTwins: [
    'https://www.candeur.in/_next/image?q=75&url=https%3A%2F%2Fbackend.candeur.in%2Fuploads%2FRectangle_22_2_85b73547d4.png&w=1080',
    'https://www.candeur.in/_next/image?q=75&url=https%3A%2F%2Fbackend.candeur.in%2Fuploads%2FGroup_1000010630_1_ef8dfb8c70.png&w=1920',
    'https://www.candeur.in/_next/image?q=75&url=https%3A%2F%2Fbackend.candeur.in%2Fuploads%2FGroup_1000010726_10_52073c5de1.png&w=750',
    'https://www.candeur.in/_next/image?q=75&url=https%3A%2F%2Fbackend.candeur.in%2Fuploads%2FGroup_1000010709_7ed38242ee.png&w=750',
  ],
  constella: [
    'https://constella.in/assets/images/gallery-image-13.webp',
    'https://constella.in/assets/images/gallery-image-14.webp',
    'https://constella.in/assets/images/gallery-image-1.webp',
    'https://constella.in/assets/images/gallery2.webp',
    'https://constella.in/assets/images/gallery-image-3.webp',
  ],
  anvaya: [
    'https://anvayavillas.com/wp-content/uploads/2024/10/slide1-1.jpg',
    'https://anvayavillas.com/wp-content/uploads/2024/10/slide2-1.jpg',
    'https://anvayavillas.com/wp-content/uploads/2024/10/slide3-1.jpg',
    'https://anvayavillas.com/wp-content/uploads/2024/10/slide9-1.jpg',
    'https://anvayavillas.com/wp-content/uploads/2024/10/slide12.jpg',
  ],
  venetia: [
    venetia1,
    venetia2,
    venetia3,
    venetia4,
    venetia5,
  ],
  belmondVillas: [belmondBrochureCover, belmondPriceSheet],
}

export const projects: Project[] = [
  {
    slug: 'candeur-lakescape-kondapur',
    name: 'Candeur Lakescape',
    sqftRange: '1296 SQ FT - 2415 SQ FT',
    numberOfFloors: 47,
    area: 'Kondapur',
    zone: 'West Hyderabad',
    assetType: 'Apartment',
    configurations: '2 / 2.5 / 3 / 3.5 BHK',
    priceBand: 'On Request',
    budgetRange: '2-3',
    status: 'Ongoing',
    amenitiesCount: '17',
    keyAmenities: [
      'Yoga Lawn',
      'Hammock Park',
      'Cycling Track',
      'Kids Play Area',
      'Outdoor Gym',
      'Multipurpose Court',
      'Pet Park',
      'Amphitheatre',
    ],
    approvals: 'RERA: P02400005724 | Permit: 4802/GHMC/SLP/2022-BP',
    nearbyPlaces: {
      schools: [
        'Chirec International School',
        'Sancta Maria International School',
        'University of Hyderabad',
      ],
      hospitals: ['Citizens Specialty Hospital', 'KIMS Hospital', 'Continental Hospital'],
      itCorridor: ['Genpact', 'TCS', 'Infosys', 'Microsoft'],
      malls: ['Sarath City Capital Mall', 'SLN Terminus', 'Atrium Mall'],
    },
    highlights: [
      '9.11-acre gated development overlooking Gopi Cheruvu lake',
      '47-floor towers planned for premium high-rise living',
      '1 lakh sq ft clubhouse at G+11 levels',
      'Strong access to Gachibowli and Kondapur social infrastructure',
    ],
    suitableFor: 'Ideal for families wanting a large amenity-rich gated community in Kondapur.',
    notSuitableFor: 'Not suitable for buyers focused only on low-rise inventory.',
    images: imageGallery.candeurLakescape,
  },
  {
    slug: 'candeur-skyline-puppalaguda',
    name: 'Candeur Skyline',
    numberOfFloors: 58,
    area: 'Puppalaguda',
    zone: 'West Hyderabad',
    assetType: 'Apartment',
    configurations: '3/4 BHK',
    priceBand: 'On Request',
    budgetRange: 'above-3',
    status: 'Ongoing',
    approvals: 'TS RERA: P02400003131',
    highlights: [
      'Premium high-rise project at Puppalaguda',
      '58-floor towers as listed on official project page',
      'Part of a large-format apartment community by Candeur',
      'West Hyderabad connectivity towards Financial District corridor',
    ],
    suitableFor: 'Ideal for buyers targeting premium high-rise apartments in the Puppalaguda micro-market.',
    notSuitableFor: 'Not suitable for buyers looking for low-rise or plotted formats.',
    images: imageGallery.candeurSkyline,
  },
  {
    slug: 'candeur-crescent-serilingampally',
    name: 'Candeur Crescent',
    sqftRange: '1333 SQ FT - 2656 SQ FT',
    numberOfFloors: 50,
    totalUnits: 1131,
    area: 'Serilingampally',
    zone: 'West Hyderabad',
    assetType: 'Apartment',
    configurations: '2/3 BHK',
    priceBand: 'Starts from ₹8,999 per sq ft*',
    budgetRange: '2-3',
    status: 'Ongoing',
    approvals: 'TS RERA: P02400002290',
    highlights: [
      '5 towers, each with 50 floors (as listed on official page)',
      '1,131 apartments in a large gated format',
      'Unit sizes from 1333 to 2656 sq ft',
      'Possession timeline listed as December 2025',
    ],
    suitableFor: 'Ideal for apartment buyers seeking large gated inventory in Serilingampally.',
    notSuitableFor: 'Not suitable for buyers requiring villa-only communities.',
    images: imageGallery.candeurCrescent,
  },
  {
    slug: 'candeur-twins-miyapur',
    name: 'Candeur Twins',
    area: 'Miyapur',
    zone: 'West Hyderabad',
    assetType: 'Apartment',
    configurations: '3 BHK',
    priceBand: 'On Request',
    budgetRange: '2-3',
    status: 'Ongoing',
    approvals: 'Approval and RERA details to be confirmed on official page',
    highlights: [
      'Twin-tower residential concept in Miyapur',
      'Official communication references a 3.5-acre integrated community',
      'Positioned in established West Hyderabad residential corridor',
      'Suitable for end-use apartment buyers',
    ],
    suitableFor: 'Ideal for buyers targeting established apartment locations in Miyapur.',
    notSuitableFor: 'Not suitable for buyers who need fully published unit-level pricing online.',
    images: imageGallery.candeurTwins,
  },
  {
    slug: 'constella-tukkuguda',
    name: 'Constella by Speed Infra',
    numberOfFloors: 3,
    totalUnits: 183,
    area: 'Tukkuguda',
    zone: 'South Hyderabad',
    assetType: 'Villa',
    configurations: '4 / 5 BHK Courtyard Villas',
    priceBand: 'From ₹4.7 Cr*',
    budgetRange: 'above-3',
    status: 'Ongoing',
    amenitiesCount: '15+',
    keyAmenities: [
      'Designer Clubhouse with spa, gym, pool and work lounge',
      '15 themed gardens',
      'Jogging trails and yoga zones',
      'Pet-friendly open spaces',
      'Children play and celebration lawns',
      'Indoor recreation and wellness areas',
    ],
    approvals: 'RERA: P02400005412',
    nearbyPlaces: {
      schools: ['ICFAI University belt (5-15 mins)'],
      hospitals: ['Meha Hospitals', 'Rainbow Children’s Hospital'],
      itCorridor: ['GMR Aerocity', 'TCS Adibatla', 'E-City', 'Aerospace SEZ'],
      malls: ['Ashoka One Mall'],
    },
    highlights: [
      '27-acre low-density gated villa community',
      'G+2 courtyard villa design with indoor-outdoor planning',
      'Approx. 10 minutes to RGIA and 1 minute from ORR Exit 14',
      'Planned as a premium airport corridor investment location',
    ],
    suitableFor: 'Ideal for buyers seeking large-format villas near the airport growth corridor.',
    notSuitableFor: 'Not suitable for apartment-first buyers or compact-budget requirements.',
    images: imageGallery.constella,
  },
  {
    slug: 'anvaya-villas-timmapur',
    name: 'Anvaya Villas',
    sqftRange: 'Plots: 200 & 400 Sq Yards',
    area: 'Timmapur, Kogarakalan',
    zone: 'West Hyderabad',
    assetType: 'Villa',
    configurations: 'Luxury Villas',
    priceBand: 'On Request',
    budgetRange: '2-3',
    status: 'Ongoing',
    amenitiesCount: '50+',
    keyAmenities: [
      'Meditation Space',
      'Swimming Pool',
      'Open Gym',
      'Children Play Area',
      'Multipurpose Court',
      'Cycle Track',
      'Jogging Track',
      'Club Anvaya',
    ],
    approvals: 'RERA: P02400008311',
    highlights: [
      '30+ acre gated villa community by GNR Infra Developers',
      '300+ villas with 200 and 400 sq yd configurations',
      '50K sq ft clubhouse planned with broad family amenities',
      'Designed for peaceful low-density residential living',
    ],
    suitableFor: 'Ideal for buyers looking for villa-led community living with a large amenity base.',
    notSuitableFor: 'Not suitable for buyers needing immediate high-rise apartment options.',
    images: imageGallery.anvaya,
  },
  {
    slug: 'praneeth-pranav-venetia-shankarpally',
    name: 'Praneeth Pranav Venetia',
    sqftRange: '4504 SQ FT - 5250 SQ FT',
    numberOfFloors: 3,
    totalUnits: 77,
    area: 'Mokila, Shankarpally',
    zone: 'West Hyderabad',
    assetType: 'Villa',
    configurations: '4 BHK Triplex Villas',
    priceBand: 'On Request',
    budgetRange: 'above-3',
    status: 'Ready to Move',
    amenitiesCount: '15+',
    keyAmenities: [
      '15,528 sq ft clubhouse',
      'Swimming Pool',
      'Air Conditioned Gymnasium',
      'Yoga and Meditation Hall',
      'Indoor Games Room',
      'Children Play Park',
      'Cricket Practice Nets',
      '24/7 Security',
    ],
    approvals: 'Developer approvals to be verified during site visit',
    nearbyPlaces: {
      schools: ['Schools within 5 km radius', 'ICFAI University corridor'],
      hospitals: ['Hospitals within 2 km radius', 'Meha Hospitals', 'Rainbow Children’s Hospital'],
      itCorridor: ['IT hubs within 25 mins', 'Gachibowli'],
      malls: ['Ashoka One Mall (approx. 9 mins)'],
    },
    highlights: [
      '9.02-acre gated community with 77 triplex villas',
      'Direct sales support available through Nestiva Realty',
      'Good connectivity to Mokila, Shankarpally and ORR growth belt',
      'Villa inventory aligned for premium end-use buyers',
    ],
    suitableFor: 'Ideal for premium villa buyers targeting Shankarpally-Mokila micro-market.',
    notSuitableFor: 'Not suitable for buyers looking for compact unit sizes or entry-level budgets.',
    images: imageGallery.venetia,
  },
  {
    slug: 'issara-belmond-villas-hyderabad',
    name: 'Issara Belmond Villas',
    area: 'Hyderabad',
    zone: 'West Hyderabad',
    assetType: 'Villa',
    configurations: 'Luxury Villas',
    priceBand: 'Base: ₹14,000 per SFT + additional charges',
    budgetRange: 'above-3',
    status: 'Ongoing',
    approvals: 'TS RERA: P02400006806 | HMDA LP No: 004245/LO/HMDA/0879/SMD/2023',
    highlights: [
      'Regular/Base Price per SFT: ₹14,000',
      'Corner charges: ₹10,00,000 | East-facing charges: ₹5,00,000',
      'Park view charges: ₹5,00,000 | Amenities & infrastructure: ₹12,00,000',
      'Club house: ₹12,00,000 | Debris removal: ₹1,00,000',
      'Corpus fund: ₹5,00,000 | Legal/documentation: ₹25,000',
    ],
    suitableFor: 'Ideal for buyers evaluating premium villa inventory with structured construction-linked payment schedule.',
    notSuitableFor: 'Not suitable for buyers looking only for ready-to-move resale inventory.',
    images: imageGallery.belmondVillas,
  },
  {
    slug: 'skyven-kokapet',
    name: 'Skyven',
    sqftRange: '5662 SQ FT - 6278 SQ FT',
    numberOfFloors: 63,
    totalUnits: 210,
    area: 'Kokapet',
    zone: 'West Hyderabad',
    assetType: 'Apartment',
    configurations: '4 BHK',
    priceBand: 'On Request',
    budgetRange: 'above-3',
    status: 'Ongoing',
    approvals: 'RERA: P02400009501',
    orrAccess: [
      {
        exitPoint: 'Kokapet ORR Exit',
        distance: 'Approx. 3 km',
        travelTime: 'Approx. 6-10 mins',
      },
      {
        exitPoint: 'Narsingi ORR Exit',
        distance: 'Approx. 5 km',
        travelTime: 'Approx. 10-15 mins',
      },
    ],
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
    sqftRange: '1375 SQ FT - 2205 SQ FT',
    numberOfFloors: 23,
    totalUnits: 526,
    area: 'Tellapur',
    zone: 'West Hyderabad',
    assetType: 'Apartment',
    configurations: '2/3 BHK',
    priceBand: 'On Request',
    budgetRange: 'under-2',
    status: 'Ongoing',
    approvals: 'RERA: P01100007243',
    orrAccess: [
      {
        exitPoint: 'Kollur ORR Exit',
        distance: 'Approx. 6 km',
        travelTime: 'Approx. 12-18 mins',
      },
      {
        exitPoint: 'Narsingi ORR Exit',
        distance: 'Approx. 12 km',
        travelTime: 'Approx. 20-28 mins',
      },
    ],
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
    sqftRange: '4054 SQ FT - 8564 SQ FT',
    numberOfFloors: 3,
    totalUnits: 182,
    area: 'Adibatla',
    zone: 'South-East Hyderabad',
    assetType: 'Villa',
    configurations: 'Triplex Villas',
    priceBand: 'On Request',
    budgetRange: 'above-3',
    status: 'Ongoing',
    approvals: 'RERA: P02400005578',
    orrAccess: [
      {
        exitPoint: 'Bongloor ORR Exit',
        distance: 'Approx. 12 km',
        travelTime: 'Approx. 20-30 mins',
      },
      {
        exitPoint: 'Tukkuguda ORR Exit',
        distance: 'Approx. 14 km',
        travelTime: 'Approx. 25-35 mins',
      },
    ],
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
    sqftRange: '700,000 SQ FT total | 470,000 SQ FT saleable',
    numberOfFloors: 21,
    area: 'Kokapet',
    zone: 'West Hyderabad',
    assetType: 'Commercial',
    configurations: 'Retail / Office',
    priceBand: 'On Request',
    budgetRange: 'above-3',
    status: 'Ongoing',
    approvals: 'RERA details not listed on official page',
    orrAccess: [
      {
        exitPoint: 'Kokapet ORR Exit',
        distance: 'Approx. 2.5 km',
        travelTime: 'Approx. 5-8 mins',
      },
      {
        exitPoint: 'Narsingi ORR Exit',
        distance: 'Approx. 4.5 km',
        travelTime: 'Approx. 8-14 mins',
      },
    ],
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
    sqftRange: '1400 SQ FT - 3950 SQ FT',
    numberOfFloors: 40,
    totalUnits: 2489,
    area: 'Kokapet',
    zone: 'West Hyderabad',
    assetType: 'Apartment',
    configurations: '3/4 BHK',
    priceBand: 'On Request',
    budgetRange: '2-3',
    status: 'Ongoing',
    approvals: 'RERA: P02400009267',
    orrAccess: [
      {
        exitPoint: 'Kokapet ORR Exit',
        distance: 'Approx. 4 km',
        travelTime: 'Approx. 8-12 mins',
      },
      {
        exitPoint: 'Narsingi ORR Exit',
        distance: 'Approx. 5.5 km',
        travelTime: 'Approx. 10-16 mins',
      },
    ],
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
