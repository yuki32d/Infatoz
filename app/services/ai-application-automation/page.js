'use client';
import dynamic from 'next/dynamic';
const ServicePageTemplate = dynamic(() => import('../../services/ServicePageTemplate'), { ssr: false, loading: () => null });

export default function AIPage() {
  return (
    <ServicePageTemplate
      heroEyebrow="AI APPLICATION DEVELOPMENT & AUTOMATION"
      heroTitle="Intelligent Software Powered by"
      heroHighlight="Real AI, Real Results"
      heroSub="We build production-ready AI applications — from intelligent chatbots and document processing to predictive analytics and custom LLM integrations — that automate work and create competitive advantages."
      heroImg1="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80"
      heroImg2="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80"
      badgeNumber="80%"
      badgeLabel="Avg. Task Automation Rate"
      stats={[
        { num: '80+', label: 'AI Projects Delivered' },
        { num: '80%', label: 'Avg. Task Automation Rate' },
        { num: '10×', label: 'Processing Speed Increase' },
        { num: '40%', label: 'Avg. Cost Reduction' },
      ]}
      overviewEyebrow="WHAT WE BUILD"
      overviewTitle="AI Solutions That Work in"
      overviewHighlight="the Real World"
      overviewDesc="We go beyond proof-of-concept AI demos. Our team builds production-grade AI systems integrated directly into your business processes — from intelligent document processing and conversational AI to demand forecasting models and AI-powered product recommendations."
      overviewList={[
        'Custom LLM applications using OpenAI GPT-4, Claude, and Gemini APIs',
        'AI chatbots and virtual assistants for customer support and internal use',
        'Intelligent document processing: extraction, classification, and summarisation',
        'Predictive analytics and machine learning models for business forecasting',
        'Computer vision applications for quality control and visual inspection',
        'RAG (Retrieval-Augmented Generation) systems for enterprise knowledge bases',
      ]}
      features={[
        { icon: 'brain', title: 'Large Language Models', desc: 'Custom LLM integrations with GPT-4, Claude, Gemini, and open-source models like LLaMA.', sectionHighlight: 'AI Solutions' },
        { icon: 'zap', title: 'Process Automation', desc: 'Automate document workflows, data entry, reporting, and repetitive decision-making.' },
        { icon: 'chart', title: 'Predictive Analytics', desc: 'ML models that forecast demand, churn, and revenue from your historical data.' },
        { icon: 'shield', title: 'Responsible AI', desc: 'Bias auditing, explainability layers, and privacy-preserving AI practices built in.' },
        { icon: 'search', title: 'Semantic Search', desc: 'Vector database-powered search that understands intent, not just keywords.' },
        { icon: 'refresh', title: 'MLOps & Monitoring', desc: 'Continuous model training, drift detection, and performance monitoring pipelines.' },
      ]}
      processTitle="How We Build AI Solutions"
      processSteps={[
        { title: 'Use Case Discovery', desc: 'Identify high-ROI automation opportunities in your business.' },
        { title: 'Data Assessment', desc: 'Audit available data, identify gaps, and define model training strategy.' },
        { title: 'Prototype & Validate', desc: 'Build a working prototype and validate accuracy benchmarks.' },
        { title: 'Production Build', desc: 'Scale to production with API integration, monitoring, and security.' },
        { title: 'Monitor & Improve', desc: 'Continuous model evaluation and retraining as your data grows.' },
      ]}
      techTitle="AI Frameworks & Infrastructure"
      techStack={[
        { name: 'OpenAI GPT-4', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
        { name: 'LangChain', logo: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'TensorFlow', logo: 'https://cdn.simpleicons.org/tensorflow/ff6f00' },
        { name: 'PyTorch', logo: 'https://cdn.simpleicons.org/pytorch/ee4c2c' },
        { name: 'Pinecone', logo: 'https://cdn.simpleicons.org/pinecone/000000' },
        { name: 'Hugging Face', logo: 'https://cdn.simpleicons.org/huggingface/FFD21E' },
        { name: 'FastAPI', logo: 'https://cdn.simpleicons.org/fastapi/009688' },
        { name: 'AWS SageMaker', logo: 'https://cdn.simpleicons.org/amazonaws/ff9900' },
        { name: 'Google Cloud AI', logo: 'https://cdn.simpleicons.org/googlecloud/4285f4' },
      ]}
      faqTitle="AI Development — Frequently Asked Questions"
      faqs={[
        { q: 'Do I need a lot of data to use AI?', a: 'It depends on the use case. Many AI features (like chatbots using GPT-4 or document extraction) work with little to no training data. Custom ML models for prediction do require historical data — typically 6–12 months minimum. We assess your data readiness in the discovery phase.' },
        { q: 'Is the AI you build specific to our business?', a: 'Yes. We don\'t just wrap public APIs — we build domain-specific AI by fine-tuning models, engineering effective prompts, building custom retrieval systems (RAG), and integrating with your existing data.' },
        { q: 'How do you ensure AI outputs are accurate and safe?', a: 'We implement output validation, human-in-the-loop review for critical decisions, hallucination mitigation strategies, and bias auditing. All AI systems are tested rigorously before production deployment.' },
        { q: 'Can AI integrate with our existing software?', a: 'Yes. We build AI as a microservice or API layer that integrates seamlessly with your existing ERP, CRM, e-commerce platform, or custom applications via REST or webhooks.' },
        { q: 'What\'s a realistic timeline for an AI project?', a: 'A proof-of-concept takes 3–6 weeks. A production-ready AI application typically takes 3–5 months depending on complexity, data availability, and integration requirements.' },
      ]}
      related={[
        { href: '/services/custom-web-applications', title: 'Custom Web Applications', desc: 'Embed AI capabilities into full-stack web products your users interact with daily.', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80' },
        { href: '/services/erp-business-automation', title: 'ERP & Business Automation', desc: 'Combine ERP power with AI to create self-optimising business processes.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80' },
        { href: '/services/data-management-migration', title: 'Data Management & Migration', desc: 'High-quality, well-structured data is the foundation of every AI system.', img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80' },
      ]}
    />
  );
}
