'use client';
import dynamic from 'next/dynamic';
const ServicePageTemplate = dynamic(() => import('../../services/ServicePageTemplate'), { ssr: false, loading: () => null });

export default function ERPPage() {
  return (
    <ServicePageTemplate
      slug="erp-business-automation"
      heroEyebrow="ERP SOFTWARE & BUSINESS AUTOMATION"
      heroTitle="Automate Your Business."
      heroHighlight="Eliminate Inefficiency."
      heroSub="We implement and customise enterprise-grade ERP systems — ERPNext, Odoo, SAP, and custom-built solutions — to unify your operations, reduce manual work, and give you real-time business intelligence."
      heroImg1="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
      heroImg2="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80"
      badgeNumber="60%"
      badgeLabel="Avg. Efficiency Gain"
      stats={[
        { num: '120+', label: 'ERP Implementations' },
        { num: '60%', label: 'Avg Efficiency Gain' },
        { num: '15+', label: 'Industries Served' },
        { num: '3×', label: 'ROI Delivered' },
      ]}
      overviewEyebrow="WHAT WE DELIVER"
      overviewTitle="End-to-End ERP That Runs"
      overviewHighlight="Your Entire Business"
      overviewDesc="From finance and HR to inventory, procurement, and sales — a well-implemented ERP system eliminates data silos, automates repetitive tasks, and gives every department a single source of truth. We scope, implement, customise, migrate, and train your team so adoption is smooth and ROI is fast."
      overviewList={[
        'ERPNext (Frappe), Odoo, SAP Business One implementation',
        'Custom module development for unique business workflows',
        'Legacy system migration with zero data loss',
        'Workflow automation: approvals, alerts, and scheduled tasks',
        'Multi-branch, multi-currency, and multi-warehouse support',
        'Post-go-live training, support, and continuous optimisation',
      ]}
      features={[
        { icon: 'layers', title: 'Unified Data Platform', desc: 'One system connecting finance, HR, inventory, sales, and operations — no more spreadsheets.', sectionHighlight: 'ERP Solutions' },
        { icon: 'chart', title: 'Real-Time Dashboards', desc: 'Custom KPI dashboards and reports available at any time from any device.' },
        { icon: 'zap', title: 'Process Automation', desc: 'Automate purchase orders, invoicing, payroll, and inter-department workflows.' },
        { icon: 'shield', title: 'Role-Based Access', desc: 'Granular permissions ensure each user sees only what they need.' },
        { icon: 'refresh', title: 'Seamless Integrations', desc: 'Connect your ERP with payment gateways, logistics APIs, CRMs, and marketplaces.' },
        { icon: 'users', title: 'Change Management', desc: 'Structured onboarding, training materials, and dedicated support during the transition.' },
      ]}
      processTitle="Our ERP Implementation Methodology"
      processSteps={[
        { title: 'Business Analysis', desc: 'Document every process, pain point, and automation opportunity.' },
        { title: 'System Design', desc: 'Map business processes to ERP modules and customisation plan.' },
        { title: 'Configuration', desc: 'Set up modules, workflows, and migrate master data.' },
        { title: 'UAT & Training', desc: 'User acceptance testing and role-based training for all staff.' },
        { title: 'Go-Live', desc: 'Cutover to the live system with dedicated hypercare support.' },
      ]}
      techTitle="ERP Platforms & Automation Tools"
      techStack={[
        { name: 'ERPNext', logo: 'https://frappe.io/files/frappe-logo.png' },
        { name: 'Odoo', logo: 'https://cdn.simpleicons.org/odoo/714B67' },
        { name: 'SAP', logo: 'https://cdn.simpleicons.org/sap/0FAAFF' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'Redis', logo: 'https://cdn.simpleicons.org/redis/dc382d' },
        { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker/2496ed' },
        { name: 'AWS', logo: 'https://cdn.simpleicons.org/amazonaws/ff9900' },
        { name: 'Zapier', logo: 'https://cdn.simpleicons.org/zapier/FF4A00' },
        { name: 'Make (Integromat)', logo: 'https://cdn.simpleicons.org/make/6d00cc' },
      ]}
      faqTitle="ERP & Business Automation — Common Questions"
      faqs={[
        { q: 'How long does an ERP implementation take?', a: 'A typical SMB ERP implementation takes 3–6 months. Large enterprises with complex customisations and multiple locations may take 6–12 months. We phase the rollout to minimise disruption.' },
        { q: 'Can you migrate data from our existing systems?', a: 'Yes. Data migration is a core part of every implementation. We clean, map, and import data from spreadsheets, legacy ERP systems, QuickBooks, Tally, and custom databases.' },
        { q: 'Is ERPNext/Frappe the right choice for us?', a: 'ERPNext is an excellent choice for most SMBs and mid-market companies — it\'s open-source, fully featured, and cost-effective. We recommend it alongside Odoo and SAP depending on your industry and scale.' },
        { q: 'What ongoing support do you provide after go-live?', a: 'We offer tiered support contracts including bug fixes, minor enhancements, system patches, performance monitoring, and quarterly business reviews.' },
        { q: 'Will our team be trained to use the system independently?', a: 'Yes. Training is included in every implementation. We provide role-based video guides, documentation, and live training sessions so your team can operate confidently.' },
      ]}
      related={[
        { href: '/services/custom-web-applications', title: 'Custom Web Applications', desc: 'Bespoke software engineered precisely for your unique business requirements.', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80' },
        { href: '/services/data-management-migration', title: 'Data Management & Migration', desc: 'Secure, accurate migration of your business data to any target system.', img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80' },
        { href: '/services/ai-application-automation', title: 'AI & Automation', desc: 'Layer intelligent automation and AI on top of your ERP for further efficiency.', img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80' },
      ]}
    />
  );
}
