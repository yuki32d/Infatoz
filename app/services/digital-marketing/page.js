'use client';
import dynamic from 'next/dynamic';
const ServicePageTemplate = dynamic(() => import('../../services/ServicePageTemplate'), { ssr: false, loading: () => null });

export default function DigitalMarketingPage() {
  return (
    <ServicePageTemplate
      slug="digital-marketing"
      heroEyebrow="DIGITAL MARKETING & GROWTH SERVICES"
      heroTitle="Grow Your Business with"
      heroHighlight="Measurable Digital Marketing"
      heroSub="From SEO and paid advertising to social media and content — we design data-driven growth strategies that attract qualified audiences, nurture leads, and convert them into loyal customers."
      heroImg1="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80"
      heroImg2="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
      badgeNumber="3.5×"
      badgeLabel="Avg. ROAS Delivered"
      stats={[
        { num: '250+', label: 'Campaigns Managed' },
        { num: '3.5×', label: 'Avg. Return on Ad Spend' },
        { num: '180%', label: 'Avg. Organic Traffic Growth' },
        { num: '₹50Cr+', label: 'Revenue Generated for Clients' },
      ]}
      overviewEyebrow="WHAT WE DO"
      overviewTitle="Full-Funnel Marketing That"
      overviewHighlight="Moves the Needle"
      overviewDesc="Digital marketing isn't about running ads — it's about building a system that consistently attracts, engages, and converts your ideal customers. We build integrated strategies across SEO, paid media, email, and social that compound over time and deliver measurable revenue impact."
      overviewList={[
        'Search Engine Optimisation (SEO): technical, on-page, and link building',
        'Google Ads, Meta Ads, and programmatic advertising management',
        'Social media strategy and content creation (Instagram, LinkedIn, YouTube)',
        'Email marketing and marketing automation (Klaviyo, HubSpot, Mailchimp)',
        'Conversion Rate Optimisation (CRO) and landing page testing',
        'Monthly reporting with attribution models and ROI analysis',
      ]}
      features={[
        { icon: 'search', title: 'SEO & Organic Growth', desc: 'Technical SEO audits, keyword strategy, content creation, and authority link building.', sectionHighlight: 'Marketing' },
        { icon: 'chart', title: 'Paid Performance Ads', desc: 'ROI-focused Google, Meta, and YouTube campaigns managed by certified specialists.' },
        { icon: 'trending', title: 'Social Media Marketing', desc: 'Brand-building content, influencer campaigns, and community management across platforms.' },
        { icon: 'users', title: 'Email & CRM Automation', desc: 'Lifecycle email sequences that nurture leads and increase customer lifetime value.' },
        { icon: 'eye', title: 'Conversion Optimisation', desc: 'A/B testing, heatmap analysis, and landing page redesigns to turn more visitors into buyers.' },
        { icon: 'zap', title: 'Marketing Analytics', desc: 'GA4, Google Tag Manager, and custom attribution models so you know exactly what works.' },
      ]}
      processTitle="Our Growth Marketing Framework"
      processSteps={[
        { title: 'Audit & Research', desc: 'Analyse your current position, competitors, and growth opportunities.' },
        { title: 'Strategy', desc: 'Build a 90-day growth plan with channel mix, budgets, and KPIs.' },
        { title: 'Campaign Launch', desc: 'Set up tracking, create content, and launch campaigns.' },
        { title: 'Optimise', desc: 'Weekly optimisation based on data — kill what doesn\'t work, scale what does.' },
        { title: 'Report & Scale', desc: 'Monthly performance reports and quarterly strategy reviews.' },
      ]}
      techTitle="Marketing Platforms & Tools We Use"
      techStack={[
        { name: 'Google Ads', logo: 'https://cdn.simpleicons.org/googleads/4285f4' },
        { name: 'Meta Ads', logo: 'https://cdn.simpleicons.org/meta/0082fb' },
        { name: 'Google Analytics', logo: 'https://cdn.simpleicons.org/googleanalytics/e37400' },
        { name: 'HubSpot', logo: 'https://cdn.simpleicons.org/hubspot/ff7a59' },
        { name: 'Klaviyo', logo: 'https://cdn.simpleicons.org/klaviyo/231F20' },
        { name: 'Semrush', logo: 'https://cdn.simpleicons.org/semrush/ff642d' },
        { name: 'Ahrefs', logo: 'https://cdn.simpleicons.org/ahrefs/ff7f3f' },
        { name: 'Hotjar', logo: 'https://cdn.simpleicons.org/hotjar/fd3a5c' },
        { name: 'Mailchimp', logo: 'https://cdn.simpleicons.org/mailchimp/ffe01b' },
        { name: 'Zapier', logo: 'https://cdn.simpleicons.org/zapier/FF4A00' },
      ]}
      faqTitle="Digital Marketing Questions Answered"
      faqs={[
        { q: 'How long before I see results from SEO?', a: 'SEO is a long-term investment. Most businesses see meaningful organic traffic growth within 3–6 months. Highly competitive industries may take 9–12 months for significant ranking improvements, but early wins (featured snippets, long-tail keywords) typically appear within 60 days.' },
        { q: 'What budget do I need for paid advertising?', a: 'We work with budgets from ₹50,000/month upward. We recommend starting with a test budget for 60 days to gather data, then scaling what works. Our management fee is a percentage of ad spend, so we\'re incentivised by your results.' },
        { q: 'Do you provide content writing as part of the service?', a: 'Yes. Our team includes SEO content strategists and writers who create blogs, landing pages, social posts, and ad copy — all aligned with your brand voice and search intent.' },
        { q: 'How do you measure return on marketing investment?', a: 'We set up comprehensive tracking via GA4, Meta Pixel, and Google Tag Manager — measuring leads, revenue, ROAS, CAC, and LTV. You get a transparent monthly dashboard showing exactly where every rupee went and what it returned.' },
        { q: 'Can you take over from our existing agency or in-house team?', a: 'Yes. We regularly audit and take over accounts from previous agencies. Our onboarding process includes a full audit of existing campaigns, tracking, and strategies before we make any changes.' },
      ]}
      related={[
        { href: '/services/ui-ux-design-branding', title: 'UI/UX Design & Branding', desc: 'A strong brand and optimised user experience amplifies every marketing campaign.', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80' },
        { href: '/services/ecommerce-development', title: 'E-commerce Development', desc: 'Build the store — we\'ll drive the traffic and conversions to make it profitable.', img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80' },
        { href: '/services/web-design-cms', title: 'Web Design & CMS Development', desc: 'Your marketing needs a high-converting website as its foundation.', img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80' },
      ]}
    />
  );
}
