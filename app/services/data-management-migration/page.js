'use client';
import dynamic from 'next/dynamic';
const ServicePageTemplate = dynamic(() => import('../../services/ServicePageTemplate'), { ssr: false, loading: () => null });

export default function DataManagementPage() {
  return (
    <ServicePageTemplate
      heroEyebrow="DATA MANAGEMENT & MIGRATION"
      heroTitle="Your Data. Secure. Accurate."
      heroHighlight="Always Available."
      heroSub="We design robust data architectures, migrate critical business data between systems with zero loss, and build data pipelines that turn raw information into actionable business intelligence."
      heroImg1="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80"
      heroImg2="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80"
      badgeNumber="100%"
      badgeLabel="Data Accuracy Guarantee"
      stats={[
        { num: '500+', label: 'Migrations Completed' },
        { num: '100%', label: 'Data Accuracy Delivered' },
        { num: '0', label: 'Recorded Data Loss Incidents' },
        { num: '10TB+', label: 'Data Migrated Successfully' },
      ]}
      overviewEyebrow="WHAT WE DO"
      overviewTitle="Data Solutions That Power"
      overviewHighlight="Better Decisions"
      overviewDesc="Whether you're migrating from an old ERP to a modern platform, consolidating databases after a merger, or building a data warehouse for analytics — we execute data projects with military precision. Our methodology eliminates data loss risk, validates accuracy at every step, and ensures business continuity throughout the migration."
      overviewList={[
        'Database migration: SQL Server, MySQL, PostgreSQL, Oracle, and NoSQL',
        'ETL/ELT pipeline design and development with dbt, Airbyte, and Apache Airflow',
        'Data warehouse and data lake architecture (BigQuery, Redshift, Snowflake)',
        'Data quality audits, deduplication, and master data management',
        'Business intelligence dashboards with Power BI, Looker, and Metabase',
        'GDPR/PDPA compliance auditing and data governance framework setup',
      ]}
      features={[
        { icon: 'database', title: 'Zero-Loss Migration', desc: 'Multi-phase validation, checksums, and parallel running ensure every record arrives intact.', sectionHighlight: 'Data Management' },
        { icon: 'shield', title: 'Data Security', desc: 'End-to-end encryption, access controls, and audit trails throughout the migration process.' },
        { icon: 'refresh', title: 'Automated ETL Pipelines', desc: 'Scheduled data pipelines that extract, transform, and load data reliably and on time.' },
        { icon: 'chart', title: 'Business Intelligence', desc: 'Turn your raw data into interactive dashboards executives and teams actually use.' },
        { icon: 'layers', title: 'Data Governance', desc: 'Define data ownership, quality standards, and lineage tracking across your organisation.' },
        { icon: 'zap', title: 'Real-Time Data Sync', desc: 'CDC (change data capture) and streaming pipelines for real-time data availability.' },
      ]}
      processTitle="Our Data Migration & Management Process"
      processSteps={[
        { title: 'Data Audit', desc: 'Profile source data, identify quality issues, and map to target schema.' },
        { title: 'Design', desc: 'Design ETL logic, transformation rules, and validation criteria.' },
        { title: 'Dry Run', desc: 'Full trial migration in a staging environment with accuracy verification.' },
        { title: 'Go-Live', desc: 'Production cutover with rollback plan and real-time monitoring.' },
        { title: 'Validation', desc: 'Post-migration audit, reconciliation reports, and sign-off.' },
      ]}
      techTitle="Data Tools & Platforms"
      techStack={[
        { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MySQL', logo: 'https://cdn.simpleicons.org/mysql/4479a1' },
        { name: 'BigQuery', logo: 'https://cdn.simpleicons.org/googlebigquery/669df6' },
        { name: 'Snowflake', logo: 'https://cdn.simpleicons.org/snowflake/29b5e8' },
        { name: 'dbt', logo: 'https://cdn.simpleicons.org/dbt/ff694b' },
        { name: 'Apache Airflow', logo: 'https://cdn.simpleicons.org/apacheairflow/017cee' },
        { name: 'Airbyte', logo: 'https://cdn.simpleicons.org/airbyte/615eff' },
        { name: 'Power BI', logo: 'https://cdn.simpleicons.org/powerbi/f2c811' },
        { name: 'Looker', logo: 'https://cdn.simpleicons.org/looker/4285f4' },
        { name: 'Redis', logo: 'https://cdn.simpleicons.org/redis/dc382d' },
      ]}
      faqTitle="Data Management & Migration — FAQ"
      faqs={[
        { q: 'How do you guarantee no data will be lost during migration?', a: 'We use a three-layer validation approach: row count reconciliation, field-level checksums, and business logic validation. We always run a full dry-run migration first and never cut over until validation passes 100%.' },
        { q: 'Can you migrate data while our old system is still running?', a: 'Yes. We specialise in live migrations using change data capture (CDC) techniques that replicate data incrementally, so your old system remains live until the final cutover — which takes minutes, not hours.' },
        { q: 'What databases and systems can you migrate from and to?', a: 'We work with all major relational databases (MySQL, PostgreSQL, SQL Server, Oracle), NoSQL systems (MongoDB, DynamoDB, Cassandra), cloud data warehouses (BigQuery, Redshift, Snowflake), and legacy ERP/CRM systems.' },
        { q: 'Do you help clean and improve our data quality before migration?', a: 'Yes. Data cleansing is part of every migration engagement. We deduplicate records, standardise formats, fill missing values, and flag anomalies — so you move to the new system with clean data, not just all of it.' },
        { q: 'How long does a data migration project take?', a: 'Small migrations (under 1M records, simple schema) take 2–4 weeks. Large enterprise migrations with complex transformations and multiple source systems can take 2–6 months. We always phase the work to prioritise the most critical data first.' },
      ]}
      related={[
        { href: '/services/erp-business-automation', title: 'ERP & Business Automation', desc: 'Migrate your data to a modern ERP and automate your core business processes.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80' },
        { href: '/services/cloud-application-maintenance', title: 'Cloud Application Maintenance', desc: 'Host your data on managed cloud databases with 99.99% uptime.', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80' },
        { href: '/services/ai-application-automation', title: 'AI Application Development', desc: 'Well-structured data is the fuel that powers every AI model we build.', img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80' },
      ]}
    />
  );
}
