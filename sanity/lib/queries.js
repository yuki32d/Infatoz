import { groq } from 'next-sanity';

// GROQ Query to fetch a single service by slug
export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    heroEyebrow,
    heroTitle,
    heroHighlight,
    heroSub,
    "heroImg1": heroImg1.asset->url,
    "heroImg2": heroImg2.asset->url,
    badgeNumber,
    badgeLabel,
    stats,
    overviewTitle,
    overviewHighlight,
    overviewDesc,
    overviewList,
    features,
    processTitle,
    processSteps,
    techTitle,
    faqs
  }
`;

// GROQ Query to fetch all services
export const allServicesQuery = groq`
  *[_type == "service"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    heroEyebrow,
    heroTitle,
    heroSub
  }
`;

// GROQ Query to fetch landing banner
export const landingHeroQuery = groq`
  *[_type == "landingHero"][0] {
    _id,
    eyebrow,
    headline,
    highlight,
    subtext,
    ctaText,
    ctaLink,
    "bgImage": bgImage.asset->url
  }
`;

// GROQ Query to fetch all FAQs
export const allFaqsQuery = groq`
  *[_type == "faq"] {
    _id,
    question,
    answer,
    category
  }
`;

// GROQ Query to fetch all testimonials
export const allTestimonialsQuery = groq`
  *[_type == "testimonial"] {
    _id,
    name,
    role,
    quote,
    "avatar": avatar.asset->url,
    rating
  }
`;
