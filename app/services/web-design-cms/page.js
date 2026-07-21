'use client';
import dynamic from 'next/dynamic';
const ServicePageTemplate = dynamic(() => import('../../services/ServicePageTemplate'), { ssr: false, loading: () => null });

export default function WebDesignCMSPage() {
  return (
    <ServicePageTemplate
      heroEyebrow="WEB DESIGN & CMS DEVELOPMENT"
      heroTitle="Build Stunning Websites That"
      heroHighlight="Convert & Scale"
      heroSub="From pixel-perfect corporate websites to powerful CMS-driven platforms — we design and develop digital experiences that captivate visitors and grow your business."
      heroImg1="https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80"
      heroImg2="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
      badgeNumber="500+"
      badgeLabel="Websites Delivered"
      stats={[
        { num: '500+', label: 'Websites Launched' },
        { num: '12+', label: 'Years Experience' },
        { num: '98%', label: 'Client Satisfaction' },
        { num: '48h', label: 'Avg Design Turnaround' },
      ]}
      overviewEyebrow="WHAT WE DO"
      overviewTitle="Web Experiences Engineered for"
      overviewHighlight="Performance & Growth"
      overviewDesc="We combine modern design principles with battle-tested CMS platforms — WordPress, Webflow, Sanity, and headless architectures — to build sites that are fast, secure, SEO-ready, and easy for your team to manage without technical knowledge."
      overviewList={[
        'Custom WordPress, Webflow & headless CMS development',
        'Mobile-first, responsive design for all screen sizes',
        'Lightning-fast Core Web Vitals & page speed optimisation',
        'On-page SEO foundations built into every page',
        'Role-based CMS dashboards for easy content management',
        'Ongoing maintenance, updates & security monitoring',
      ]}
      features={[
        { icon: 'palette', title: 'Custom UI Design', desc: 'Unique, brand-aligned designs crafted from scratch — no cookie-cutter templates.', sectionHighlight: 'Web Design' },
        { icon: 'zap', title: 'Speed Optimised', desc: 'Sub-2s load times using CDN, image optimisation, and lazy loading techniques.' },
        { icon: 'search', title: 'SEO-First Architecture', desc: 'Schema markup, semantic HTML, and technical SEO built in from day one.' },
        { icon: 'shield', title: 'Enterprise Security', desc: 'SSL, WAF, regular vulnerability scans, and secure coding practices.' },
        { icon: 'layers', title: 'Scalable CMS', desc: 'Manage content effortlessly — no developer needed for day-to-day updates.' },
        { icon: 'mobile', title: 'Responsive Across Devices', desc: 'Flawless rendering on mobile, tablet, and desktop from a single codebase.' },
      ]}
      processTitle="Our Web Design & Development Process"
      processSteps={[
        { title: 'Discovery', desc: 'Understand your goals, audience, and competitive landscape.' },
        { title: 'Wireframe & Design', desc: 'Create wireframes, mood boards, and pixel-perfect UI designs.' },
        { title: 'Development', desc: 'Build with clean, maintainable code on your chosen CMS.' },
        { title: 'QA & Testing', desc: 'Cross-browser testing, performance audits, and accessibility checks.' },
        { title: 'Launch & Support', desc: 'Go live with confidence — we provide 30-day post-launch support.' },
      ]}
      techTitle="Technologies & Platforms We Use"
      techStack={[
        { name: 'WordPress', logo: 'https://cdn.simpleicons.org/wordpress/21759b' },
        { name: 'Webflow', logo: 'https://cdn.simpleicons.org/webflow/4353ff' },
        { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/000000' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Sanity CMS', logo: 'https://cdn.simpleicons.org/sanity/f03e2f' },
        { name: 'Figma', logo: 'https://cdn.simpleicons.org/figma/f24e1e' },
        { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss/06b6d4' },
        { name: 'Cloudflare', logo: 'https://cdn.simpleicons.org/cloudflare/f48120' },
        { name: 'Vercel', logo: 'https://cdn.simpleicons.org/vercel/000000' },
        { name: 'AWS S3', logo: 'https://cdn.simpleicons.org/amazons3/569a31' },
      ]}
      faqTitle="Frequently Asked Questions"
      faqs={[
        { q: 'How long does a website project typically take?', a: 'Most brochure websites take 3–6 weeks from kickoff to launch. Larger CMS-driven sites or e-commerce platforms can take 8–14 weeks depending on scope and content readiness.' },
        { q: 'Will I be able to update the website myself?', a: 'Absolutely. We configure your CMS with an intuitive admin panel and provide training so your team can update text, images, blog posts, and more without any coding knowledge.' },
        { q: 'Do you offer website maintenance after launch?', a: 'Yes — we offer monthly retainer packages covering security patches, CMS updates, backups, uptime monitoring, and minor content changes.' },
        { q: 'Can you redesign or migrate our existing website?', a: 'Yes. We regularly migrate legacy WordPress sites, rebuild outdated websites, and upgrade CMS platforms while preserving SEO rankings and content history.' },
        { q: 'What if I only have a rough idea — do I need a brief?', a: 'Not at all. Our discovery sessions are designed to help you articulate your goals. We ask the right questions to create a strategy and design direction together.' },
      ]}
      related={[
        { href: '/services/ui-ux-design-branding', title: 'UI/UX Design & Branding', desc: 'Research-driven design systems and brand identities that resonate with your audience.', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80' },
        { href: '/services/ecommerce-development', title: 'E-commerce Development', desc: 'Scalable online stores with seamless checkout, inventory management and analytics.', img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80' },
        { href: '/services/digital-marketing', title: 'Digital Marketing & Growth', desc: 'SEO, paid ads, social media, and content strategies to drive qualified traffic.', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&q=80' },
      ]}
    />
  );
}
