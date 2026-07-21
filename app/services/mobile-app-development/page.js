'use client';
import dynamic from 'next/dynamic';
const ServicePageTemplate = dynamic(() => import('../../services/ServicePageTemplate'), { ssr: false, loading: () => null });

export default function MobileAppPage() {
  return (
    <ServicePageTemplate
      heroEyebrow="MOBILE APP DEVELOPMENT"
      heroTitle="Mobile Apps That Users"
      heroHighlight="Love & Return To"
      heroSub="We build high-performance iOS, Android, and cross-platform mobile apps — from consumer apps to enterprise solutions — with intuitive UX and rock-solid engineering."
      heroImg1="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
      heroImg2="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80"
      badgeNumber="200+"
      badgeLabel="Apps Published"
      stats={[
        { num: '200+', label: 'Apps on App Stores' },
        { num: '10M+', label: 'End Users Served' },
        { num: '4.8★', label: 'Avg. App Store Rating' },
        { num: '98%', label: 'Crash-Free Sessions' },
      ]}
      overviewEyebrow="WHAT WE BUILD"
      overviewTitle="Native & Cross-Platform Apps"
      overviewHighlight="Built to Perform"
      overviewDesc="Whether you need a consumer app on the App Store, an enterprise mobile suite, or a cross-platform product that works seamlessly on iOS and Android, our mobile team delivers beautiful, performant apps that keep users engaged and coming back."
      overviewList={[
        'Native iOS (Swift/SwiftUI) and Android (Kotlin/Jetpack) development',
        'Cross-platform apps with Flutter or React Native',
        'Offline-first architecture with local data sync',
        'Push notifications, in-app purchases, and deep linking',
        'App Store and Google Play submission & optimisation (ASO)',
        'Ongoing monitoring, crash reporting, and iterative updates',
      ]}
      features={[
        { icon: 'mobile', title: 'Native Performance', desc: 'Platform-specific UI components and APIs for the fastest, most native-feeling experience.', sectionHighlight: 'Mobile Apps' },
        { icon: 'palette', title: 'Polished UI/UX', desc: 'Human Interface Guidelines and Material Design principles applied to every screen.' },
        { icon: 'shield', title: 'Secure by Design', desc: 'Biometric auth, encrypted local storage, certificate pinning, and OWASP Mobile compliance.' },
        { icon: 'zap', title: 'Optimised for Speed', desc: 'Smooth 60fps animations, minimal battery drain, and fast cold-start times.' },
        { icon: 'cloud', title: 'Backend Integration', desc: 'Seamless REST/GraphQL API integration with real-time WebSocket data.' },
        { icon: 'chart', title: 'Analytics & A/B Testing', desc: 'Firebase, Mixpanel, and Amplitude integrations for data-driven product decisions.' },
      ]}
      processTitle="From Concept to App Store in 5 Phases"
      processSteps={[
        { title: 'Strategy', desc: 'Market research, user persona definition, and feature prioritisation.' },
        { title: 'UX Design', desc: 'Wireframes and interactive Figma prototypes validated with real users.' },
        { title: 'Development', desc: 'Agile sprints with bi-weekly TestFlight/Beta builds for your review.' },
        { title: 'QA & Testing', desc: 'Device matrix testing, performance profiling, and security audits.' },
        { title: 'Launch', desc: 'App Store submission, ASO, and post-launch analytics setup.' },
      ]}
      techTitle="Platforms & Technologies"
      techStack={[
        { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Swift', logo: 'https://cdn.simpleicons.org/swift/f05138' },
        { name: 'Kotlin', logo: 'https://cdn.simpleicons.org/kotlin/7f52ff' },
        { name: 'Firebase', logo: 'https://cdn.simpleicons.org/firebase/ffca28' },
        { name: 'Supabase', logo: 'https://cdn.simpleicons.org/supabase/3ecf8e' },
        { name: 'Stripe', logo: 'https://cdn.simpleicons.org/stripe/008cdd' },
        { name: 'Figma', logo: 'https://cdn.simpleicons.org/figma/f24e1e' },
        { name: 'Mixpanel', logo: 'https://cdn.simpleicons.org/mixpanel/7856ff' },
        { name: 'Fastlane', logo: 'https://cdn.simpleicons.org/fastlane/00f200' },
      ]}
      faqTitle="Everything You Need to Know About Mobile App Development"
      faqs={[
        { q: 'Should I build a native app or a cross-platform app?', a: 'For most businesses, cross-platform with Flutter or React Native offers the best balance of performance and cost — a single codebase for iOS and Android. Native development (Swift/Kotlin) is ideal for apps requiring maximum platform-specific performance, like AR or intensive graphics.' },
        { q: 'How long does it take to build a mobile app?', a: 'A typical MVP takes 10–16 weeks. A full-featured app with complex integrations may take 5–9 months. We always scope the MVP first to get something in users\' hands quickly.' },
        { q: 'Who owns the source code after the project?', a: 'You do. 100%. We transfer full source code ownership and all associated assets upon final payment.' },
        { q: 'Can you update and maintain the app after launch?', a: 'Yes. We provide ongoing maintenance plans covering OS compatibility updates, bug fixes, feature additions, and performance monitoring through tools like Sentry and Firebase Crashlytics.' },
        { q: 'Do you help with App Store and Google Play submissions?', a: 'Absolutely. We handle the entire submission process — screenshots, descriptions, metadata, compliance checks — and also advise on App Store Optimisation (ASO) to improve discoverability.' },
      ]}
      related={[
        { href: '/services/custom-web-applications', title: 'Custom Web Application Development', desc: 'Full-stack web apps with modern frameworks, APIs, and cloud-native deployment.', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80' },
        { href: '/services/ui-ux-design-branding', title: 'UI/UX Design & Branding', desc: 'Research-driven design systems and prototypes that users love.', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80' },
        { href: '/services/ai-application-automation', title: 'AI Application Development', desc: 'Intelligent features like chatbots, recommendations, and predictive analytics.', img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80' },
      ]}
    />
  );
}
