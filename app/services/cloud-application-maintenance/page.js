'use client';
import dynamic from 'next/dynamic';
const ServicePageTemplate = dynamic(() => import('../../services/ServicePageTemplate'), { ssr: false, loading: () => null });

export default function CloudPage() {
  return (
    <ServicePageTemplate
      slug="cloud-application-maintenance"
      heroEyebrow="CLOUD APPLICATION DEVELOPMENT & MAINTENANCE"
      heroTitle="Cloud-Native Applications Built"
      heroHighlight="for Reliability & Scale"
      heroSub="We architect, migrate, and maintain cloud-native applications on AWS, Google Cloud, and Azure — delivering high availability, auto-scaling infrastructure, and DevOps practices that keep your systems fast and secure."
      heroImg1="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
      heroImg2="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80"
      badgeNumber="99.99%"
      badgeLabel="Uptime Delivered"
      stats={[
        { num: '99.99%', label: 'Uptime Delivered' },
        { num: '70%', label: 'Avg. Infrastructure Cost Reduction' },
        { num: '5×', label: 'Faster Deployment Cycles' },
        { num: '100+', label: 'Cloud Projects Managed' },
      ]}
      overviewEyebrow="WHAT WE DO"
      overviewTitle="Cloud Infrastructure That"
      overviewHighlight="Never Lets You Down"
      overviewDesc="From greenfield cloud-native builds to legacy application migrations, we handle the full cloud lifecycle. Our DevOps and cloud engineering team designs architectures that scale automatically under load, recover from failures in seconds, and cost significantly less to run than traditional on-premise infrastructure."
      overviewList={[
        'Cloud architecture design: AWS, Google Cloud Platform, and Microsoft Azure',
        'Application migration from on-premise to cloud (lift-and-shift and re-architecture)',
        'Kubernetes and Docker container orchestration and management',
        'CI/CD pipeline setup with GitHub Actions, GitLab CI, or AWS CodePipeline',
        '24/7 infrastructure monitoring, alerting, and incident response',
        'FinOps: cloud cost optimisation and resource right-sizing',
      ]}
      features={[
        { icon: 'cloud', title: 'Multi-Cloud Architecture', desc: 'Vendor-agnostic designs that leverage the best services from AWS, GCP, and Azure.', sectionHighlight: 'Cloud Services' },
        { icon: 'shield', title: 'Security & Compliance', desc: 'IAM policies, VPC isolation, WAF, encryption, and compliance (SOC 2, ISO 27001, GDPR).' },
        { icon: 'zap', title: 'Auto-Scaling', desc: 'Horizontal scaling that handles traffic spikes automatically without manual intervention.' },
        { icon: 'refresh', title: 'CI/CD & DevOps', desc: 'Automated testing, deployment pipelines, and infrastructure-as-code with Terraform.' },
        { icon: 'chart', title: 'Observability', desc: 'Full-stack monitoring with Datadog, CloudWatch, Prometheus, and Grafana dashboards.' },
        { icon: 'database', title: 'Managed Databases', desc: 'RDS, Cloud SQL, and managed NoSQL services — fully configured, backed up, and monitored.' },
      ]}
      processTitle="Our Cloud Delivery Approach"
      processSteps={[
        { title: 'Assessment', desc: 'Cloud readiness audit, workload analysis, and migration strategy.' },
        { title: 'Architecture', desc: 'Design scalable, secure cloud architecture with IaC templates.' },
        { title: 'Migration / Build', desc: 'Phased migration or greenfield development with zero-downtime cutover.' },
        { title: 'Automation', desc: 'CI/CD pipelines, auto-scaling policies, and monitoring setup.' },
        { title: 'Managed Support', desc: '24/7 NOC monitoring, incident response, and continuous optimisation.' },
      ]}
      techTitle="Cloud Platforms & DevOps Tools"
      techStack={[
        { name: 'AWS', logo: 'https://cdn.simpleicons.org/amazonaws/ff9900' },
        { name: 'Google Cloud', logo: 'https://cdn.simpleicons.org/googlecloud/4285f4' },
        { name: 'Azure', logo: 'https://cdn.simpleicons.org/microsoftazure/0078d4' },
        { name: 'Terraform', logo: 'https://cdn.simpleicons.org/terraform/7b42bc' },
        { name: 'Kubernetes', logo: 'https://cdn.simpleicons.org/kubernetes/326ce5' },
        { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker/2496ed' },
        { name: 'GitHub Actions', logo: 'https://cdn.simpleicons.org/githubactions/2088ff' },
        { name: 'Datadog', logo: 'https://cdn.simpleicons.org/datadog/632ca6' },
        { name: 'Nginx', logo: 'https://cdn.simpleicons.org/nginx/009639' },
        { name: 'Prometheus', logo: 'https://cdn.simpleicons.org/prometheus/e6522c' },
      ]}
      faqTitle="Cloud Development & Maintenance — FAQ"
      faqs={[
        { q: 'Should we use AWS, Google Cloud, or Azure?', a: 'The choice depends on your existing tech stack, team familiarity, compliance requirements, and specific service needs. AWS is the most mature with the broadest service catalogue. GCP excels for data and AI workloads. Azure is ideal if you\'re a Microsoft-heavy organisation. We provide an unbiased recommendation after assessing your needs.' },
        { q: 'Can you migrate our on-premise applications to the cloud?', a: 'Yes. We perform cloud migrations using lift-and-shift, re-platforming, and re-architecture strategies. We assess which approach delivers the best ROI for each workload and execute with minimal downtime.' },
        { q: 'How do you handle cloud security?', a: 'Security is built into every layer: network isolation (VPCs), least-privilege IAM policies, secrets management, encryption at rest and in transit, WAF, DDoS protection, and regular penetration testing.' },
        { q: 'What\'s included in your cloud maintenance service?', a: '24/7 monitoring, proactive alert response, OS and dependency patching, performance optimisation, database maintenance, backup verification, and monthly infrastructure reviews with our cloud team.' },
        { q: 'Can you reduce our existing cloud costs?', a: 'Yes. Our FinOps service typically reduces cloud spend by 30–60% through right-sizing, reserved instance planning, spot instance adoption, and eliminating unused resources — without compromising performance.' },
      ]}
      related={[
        { href: '/services/custom-web-applications', title: 'Custom Web Applications', desc: 'We build the applications and run them on the cloud infrastructure we design.', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80' },
        { href: '/services/ai-application-automation', title: 'AI Application Development', desc: 'Cloud-native AI and ML infrastructure for scalable intelligent applications.', img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80' },
        { href: '/services/data-management-migration', title: 'Data Management & Migration', desc: 'Migrate your databases to cloud-managed services with zero data loss.', img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80' },
      ]}
    />
  );
}
