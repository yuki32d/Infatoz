'use client';
import dynamic from 'next/dynamic';
const ServicePageTemplate = dynamic(() => import('../../services/ServicePageTemplate'), { ssr: false, loading: () => null });

export default function CustomWebAppPage() {
  return (
    <ServicePageTemplate
      slug="custom-web-applications"
      heroEyebrow="CUSTOM WEB APPLICATION DEVELOPMENT"
      heroTitle="Purpose-Built Web Applications That"
      heroHighlight="Solve Real Problems"
      heroSub="We engineer robust, scalable web applications tailored precisely to your business workflows — from SaaS platforms and portals to internal tools and customer-facing products."
      heroImg1="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
      heroImg2="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80"
      badgeNumber="150+"
      badgeLabel="Apps Deployed"
      stats={[
        { num: '150+', label: 'Apps Deployed' },
        { num: '99.9%', label: 'Uptime SLA' },
        { num: '40%', label: 'Avg. Cost Reduction' },
        { num: '12+', label: 'Years Experience' },
      ]}
      overviewEyebrow="WHAT WE BUILD"
      overviewTitle="Full-Stack Applications Built for"
      overviewHighlight="Scale & Reliability"
      overviewDesc="From idea to production, we design and develop custom web applications using modern frameworks and cloud-native architectures. Whether you need a multi-tenant SaaS product, a customer portal, or an internal business tool, we deliver software that performs under pressure."
      overviewList={[
        'SaaS product development with multi-tenant architecture',
        'Customer portals, dashboards, and admin panels',
        'RESTful APIs and microservices development',
        'Real-time features: live chat, notifications, and data feeds',
        'Role-based authentication and access control',
        'CI/CD pipelines for automated testing and deployment',
      ]}
      features={[
        { icon: 'code', title: 'Modern Tech Stack', desc: 'React, Next.js, Node.js, Python — built on frameworks that scale to millions of users.', sectionHighlight: 'Development' },
        { icon: 'shield', title: 'Enterprise Security', desc: 'OAuth 2.0, MFA, data encryption at rest & in transit, OWASP-compliant code.' },
        { icon: 'cloud', title: 'Cloud-Native Architecture', desc: 'Containerized deployments on AWS, GCP, or Azure with auto-scaling built in.' },
        { icon: 'zap', title: 'High Performance', desc: 'Sub-100ms API response times with caching, indexing, and query optimisation.' },
        { icon: 'users', title: 'Multi-Tenant Ready', desc: 'Isolated data environments for SaaS products serving thousands of clients.' },
        { icon: 'refresh', title: 'Agile Delivery', desc: '2-week sprint cycles with demos, feedback loops, and transparent progress.' },
      ]}
      processTitle="How We Deliver Your Application"
      processSteps={[
        { title: 'Requirements', desc: 'Deep-dive workshops to map every user journey and business rule.' },
        { title: 'Architecture', desc: 'Design system architecture, database schema, and API contracts.' },
        { title: 'Development', desc: 'Sprint-based development with regular demos and code reviews.' },
        { title: 'Testing & QA', desc: 'Unit, integration, and end-to-end tests for every critical path.' },
        { title: 'Deploy & Scale', desc: 'Launch on cloud infrastructure with monitoring and alerts.' },
      ]}
      techTitle="Our Technology Toolkit"
      techStack={[
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/000000' },
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Redis', logo: 'https://cdn.simpleicons.org/redis/dc382d' },
        { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker/2496ed' },
        { name: 'AWS', logo: 'https://cdn.simpleicons.org/amazonaws/ff9900' },
        { name: 'GraphQL', logo: 'https://cdn.simpleicons.org/graphql/e10098' },
      ]}
      faqTitle="Common Questions About Web App Development"
      faqs={[
        { q: 'How do you estimate the cost of a custom web application?', a: 'We estimate based on the number of user roles, features, integrations, and complexity of business logic. After an initial scoping session, we provide a detailed fixed-price or time-and-materials proposal.' },
        { q: 'Can you take over development of an existing application?', a: 'Yes. We regularly audit legacy codebases, refactor technical debt, and continue ongoing development — even for projects originally built by other teams.' },
        { q: 'What happens after the application is launched?', a: 'We offer tiered support packages covering bug fixes, feature enhancements, security updates, performance monitoring, and infrastructure management.' },
        { q: 'Do you sign NDAs and maintain code confidentiality?', a: 'Absolutely. We sign NDAs before any technical discussions and transfer full IP ownership to you upon project completion.' },
        { q: 'How do you handle scalability as our user base grows?', a: 'We architect applications for horizontal scaling from day one — using load balancers, auto-scaling groups, and database read replicas — so growth never breaks your product.' },
      ]}
      related={[
        { href: '/services/mobile-app-development', title: 'Mobile App Development', desc: 'Native iOS & Android apps with cross-platform Flutter and React Native.', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80' },
        { href: '/services/ai-application-automation', title: 'AI Application Development', desc: 'Intelligent automation, ML models, and AI-powered features for your products.', img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80' },
        { href: '/services/cloud-application-maintenance', title: 'Cloud Application Maintenance', desc: '24/7 monitoring, scaling, and continuous improvement for cloud-hosted apps.', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80' },
      ]}
    />
  );
}
