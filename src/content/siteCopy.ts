export type CtaLink = {
  label: string
  href: string
  isExternal?: boolean
}

export type AudienceSegment = {
  title: string
  bullets: string[]
}

export const siteCopy = {
  hero: {
    headline: 'Builder-Direct Property Advisory in Hyderabad',
    subheadline:
      'Get direct managing-partner guidance, curated projects only, and transparent support from discovery to booking.',
    ctas: [
      {
        label: 'Book a Consultation',
        href: '/contact',
      },
      {
        label: 'Explore Projects',
        href: '/projects',
      },
    ] satisfies CtaLink[],
  },
  whyChooseUs: {
    title: 'Trust',
    bullets: [
      'Direct Managing Partner Access (no mediator layers)',
      'Transparent Pricing (no inflated quotes / no hidden charges)',
      'RERA-aware listings + approval verification',
      'OC-first / handover-ready focus',
      'Loan + legal + documentation support',
      'Weekend curated site visits',
      'Verified availability & builder-confirmed inventory (no guesswork)',
    ],
    shortlistingGuarantee: "We shortlist properties so you don't waste weekends visiting unsuitable options.",
    builderDirectAdvantage: {
      title: 'Builder-Direct Advantage',
      description:
        'We work directly with builder managing partners to get verified inventory, real-time availability, and faster closures - without intermediary layers.',
    },
  },
  audience: {
    title: 'Who We Help',
    subtitle: 'Focused support across premium, villa, investor, and first-time buyer journeys.',
    segments: [
      {
        title: 'Premium Apartments (\u20B91Cr+)',
        bullets: [
          'Premium inventory and best stack options (subject to availability)',
          'Builder-level negotiation support',
          'Smooth closing and end-to-end coordination',
        ],
      },
      {
        title: 'Villas & Gated Communities',
        bullets: [
          'Title/approval checks and documentation guidance',
          'Community and livability focus (approach roads, amenities, future infra)',
          'Curated visits, not random site hopping',
        ],
      },
      {
        title: 'Investors',
        bullets: [
          'ROI/rental-yield oriented shortlisting',
          'Entry-price vs appreciation potential comparison',
          'Exit-friendly project selection support',
        ],
      },
      {
        title: 'First-time Home Buyers',
        bullets: [
          'Budget and EMI planning guidance',
          'Transparent cost sheet breakdown',
          'Guided booking, legal, and loan support',
        ],
      },
    ] satisfies AudienceSegment[],
  },
  ctaStrip: {
    title: 'Book a consultation',
    subtitle: 'Talk to Sri Nestiva PropTech for a curated builder-direct shortlist in Hyderabad.',
    whatsappLabel: 'WhatsApp Placeholder',
    callLabel: 'Call Placeholder',
  },
} as const
