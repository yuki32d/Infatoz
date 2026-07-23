'use client';
import dynamic from 'next/dynamic';
const ServicePageTemplate = dynamic(() => import('../../services/ServicePageTemplate'), { ssr: false, loading: () => null });

export default function UIUXPage() {
  return (
    <ServicePageTemplate
      slug="ui-ux-design-branding"
      heroEyebrow="UI/UX DESIGN & BRANDING"
      heroTitle="Design That Captivates."
      heroHighlight="Brands That Endure."
      heroSub="We create research-driven user experiences and powerful brand identities that make your product unforgettable — from wireframes and design systems to complete visual brand overhauls."
      heroImg1="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
      heroImg2="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&q=80"
      badgeNumber="98%"
      badgeLabel="Design Approval Rate"
      stats={[
        { num: '400+', label: 'Screens Designed' },
        { num: '98%', label: 'Design Approval Rate' },
        { num: '2×', label: 'Avg Engagement Uplift' },
        { num: '50+', label: 'Brand Identities Created' },
      ]}
      overviewEyebrow="WHAT WE DESIGN"
      overviewTitle="User-Centred Design That"
      overviewHighlight="Drives Business Results"
      overviewDesc="Great design isn't just about aesthetics — it's about solving problems elegantly. Our UX designers research your users, map their journeys, and craft interfaces that guide them intuitively to conversion. Our brand strategists then ensure every touchpoint communicates trust, authority, and personality."
      overviewList={[
        'User research, persona development, and journey mapping',
        'Wireframing, information architecture, and prototyping',
        'High-fidelity UI design in Figma with component libraries',
        'Design systems and style guides for consistent product experiences',
        'Brand identity: logo, typography, colour palette, and guidelines',
        'Usability testing and iterative refinement based on real user data',
      ]}
      features={[
        { icon: 'eye', title: 'Research-Driven Design', desc: 'Every design decision is backed by user research, heatmaps, and behaviour data — not guesswork.', sectionHighlight: 'Design' },
        { icon: 'layers', title: 'Design Systems', desc: 'Scalable component libraries that keep your product consistent as it grows.' },
        { icon: 'palette', title: 'Brand Identity', desc: 'Logos, colour systems, typography, and brand guidelines that stand out in any market.' },
        { icon: 'mobile', title: 'Responsive Design', desc: 'Designs that are pixel-perfect on every device — from mobile to 4K desktop.' },
        { icon: 'users', title: 'Usability Testing', desc: 'Real users validate every design before development begins, reducing costly rework.' },
        { icon: 'zap', title: 'Developer Handoff', desc: 'Annotated Figma files with specs, tokens, and assets — no ambiguity for developers.' },
      ]}
      processTitle="Our Design & Branding Process"
      processSteps={[
        { title: 'Research', desc: 'User interviews, competitor analysis, and market positioning.' },
        { title: 'Strategy', desc: 'Define brand voice, UX principles, and design direction.' },
        { title: 'Wireframes', desc: 'Low-fidelity layouts validated with stakeholders and users.' },
        { title: 'Visual Design', desc: 'High-fidelity Figma designs across all screens and states.' },
        { title: 'Handoff', desc: 'Developer-ready files, design tokens, and a living style guide.' },
      ]}
      techTitle="Design Tools & Platforms"
      techStack={[
        { name: 'Figma', logo: 'https://cdn.simpleicons.org/figma/f24e1e' },
        { name: 'Adobe XD', logo: 'https://cdn.simpleicons.org/adobexd/ff26be' },
        { name: 'Illustrator', logo: 'https://cdn.simpleicons.org/adobeillustrator/ff9a00' },
        { name: 'Photoshop', logo: 'https://cdn.simpleicons.org/adobephotoshop/31a8ff' },
        { name: 'Framer', logo: 'https://cdn.simpleicons.org/framer/0055ff' },
        { name: 'Lottie', logo: 'https://cdn.simpleicons.org/lottiefiles/00ddb4' },
        { name: 'Maze', logo: 'https://cdn.simpleicons.org/maze/ff5c57' },
        { name: 'Hotjar', logo: 'https://cdn.simpleicons.org/hotjar/fd3a5c' },
        { name: 'Storybook', logo: 'https://cdn.simpleicons.org/storybook/ff4785' },
        { name: 'Zeplin', logo: 'https://cdn.simpleicons.org/zeplin/fdbd39' },
      ]}
      faqTitle="UI/UX Design & Branding Questions"
      faqs={[
        { q: 'What\'s the difference between UI and UX design?', a: 'UX (User Experience) covers the overall feel, flow, and usability of a product — how users navigate and complete tasks. UI (User Interface) covers the visual elements: colours, typography, buttons, and layouts. We deliver both together as a cohesive discipline.' },
        { q: 'Do you work with early-stage startups that have no brand identity yet?', a: 'Absolutely. We work with startups from day zero — helping define brand positioning, create logo systems, develop brand guidelines, and design the first version of their digital product.' },
        { q: 'How many design rounds are included?', a: 'Our standard process includes two rounds of revisions at each milestone. We find this sufficient for most projects; additional rounds can be purchased if needed.' },
        { q: 'Can you redesign an existing product without disrupting users?', a: 'Yes. We specialise in incremental redesigns — improving key flows one section at a time using A/B testing and analytics to measure impact, so you minimise risk while improving the experience.' },
        { q: 'Do you provide handoff files for our development team?', a: 'Yes. We deliver fully annotated Figma files with auto-layout, design tokens, component documentation, and exported assets — everything your developers need without ambiguity.' },
      ]}
      related={[
        { href: '/services/web-design-cms', title: 'Web Design & CMS Development', desc: 'Turn your designs into fully functional, managed websites built for performance.', img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80' },
        { href: '/services/mobile-app-development', title: 'Mobile App Development', desc: 'Native and cross-platform apps with the same care for UX as your web product.', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80' },
        { href: '/services/digital-marketing', title: 'Digital Marketing & Growth', desc: 'Put your brand in front of the right audience with data-driven marketing.', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&q=80' },
      ]}
    />
  );
}
