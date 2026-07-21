'use client';
import dynamic from 'next/dynamic';
const ServicePageTemplate = dynamic(() => import('../../services/ServicePageTemplate'), { ssr: false, loading: () => null });

export default function EcommercePage() {
  return (
    <ServicePageTemplate
      heroEyebrow="E-COMMERCE DEVELOPMENT"
      heroTitle="Online Stores Built to"
      heroHighlight="Sell More, Effortlessly"
      heroSub="We build conversion-optimised e-commerce platforms on Shopify, WooCommerce, and custom frameworks — with seamless checkout, inventory management, and analytics that drive revenue growth."
      heroImg1="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
      heroImg2="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
      badgeNumber="300+"
      badgeLabel="Stores Launched"
      stats={[
        { num: '300+', label: 'Stores Launched' },
        { num: '2.3×', label: 'Avg. Revenue Growth' },
        { num: '35%', label: 'Avg. Cart Conversion Lift' },
        { num: '50M+', label: 'Orders Processed' },
      ]}
      overviewEyebrow="WHAT WE BUILD"
      overviewTitle="E-commerce Platforms Engineered"
      overviewHighlight="for Conversion"
      overviewDesc="Your online store needs more than a pretty design — it needs lightning-fast load times, frictionless checkout, bulletproof payment processing, and real-time inventory sync. We build e-commerce solutions that work as hard as your team does, whether you're a D2C startup or an enterprise retailer."
      overviewList={[
        'Shopify, WooCommerce, Magento, and custom e-commerce development',
        'Headless commerce with Next.js and Hydrogen storefronts',
        'Multi-currency, multi-language, and multi-warehouse support',
        'Abandoned cart recovery, upsell, and cross-sell automation',
        'Payment gateway integration: Razorpay, Stripe, PayPal, UPI',
        'Real-time inventory sync across channels: Amazon, Flipkart, website',
      ]}
      features={[
        { icon: 'cart', title: 'Frictionless Checkout', desc: 'One-page checkout, saved cards, guest checkout — every step optimised for conversion.', sectionHighlight: 'E-commerce' },
        { icon: 'zap', title: 'Blazing Fast Storefront', desc: 'Core Web Vitals optimised for sub-2s load times — proven to increase conversions.' },
        { icon: 'chart', title: 'Revenue Analytics', desc: 'Real-time dashboards tracking AOV, LTV, conversion rate, and product performance.' },
        { icon: 'shield', title: 'PCI-DSS Compliant', desc: 'Fully compliant payment handling with tokenisation and 3D Secure authentication.' },
        { icon: 'mobile', title: 'Mobile Commerce', desc: 'App-like mobile experience with progressive web app (PWA) capabilities.' },
        { icon: 'link', title: 'Omnichannel Integration', desc: 'Sync products, orders, and inventory across all your sales channels in real-time.' },
      ]}
      processTitle="How We Build Your Online Store"
      processSteps={[
        { title: 'Strategy', desc: 'Competitor analysis, audience research, and platform selection.' },
        { title: 'Design', desc: 'Brand-aligned storefront design with conversion rate optimisation (CRO).' },
        { title: 'Development', desc: 'Platform setup, theme customisation, and feature development.' },
        { title: 'Integration', desc: 'Payment gateways, logistics, ERP, and marketing tools.' },
        { title: 'Launch & Grow', desc: 'QA, go-live, and ongoing performance optimisation.' },
      ]}
      techTitle="E-commerce Platforms & Tools"
      techStack={[
        { name: 'Shopify', logo: 'https://cdn.simpleicons.org/shopify/96bf48' },
        { name: 'WooCommerce', logo: 'https://cdn.simpleicons.org/woocommerce/96588a' },
        { name: 'Magento', logo: 'https://cdn.simpleicons.org/magento/ee672f' },
        { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/000000' },
        { name: 'Stripe', logo: 'https://cdn.simpleicons.org/stripe/008cdd' },
        { name: 'Razorpay', logo: 'https://cdn.simpleicons.org/razorpay/02042B' },
        { name: 'Algolia', logo: 'https://cdn.simpleicons.org/algolia/003dff' },
        { name: 'Klaviyo', logo: 'https://cdn.simpleicons.org/klaviyo/231F20' },
        { name: 'AWS', logo: 'https://cdn.simpleicons.org/amazonaws/ff9900' },
        { name: 'Cloudflare', logo: 'https://cdn.simpleicons.org/cloudflare/f48120' },
      ]}
      faqTitle="E-commerce Development — FAQ"
      faqs={[
        { q: 'Shopify or WooCommerce — which should I choose?', a: 'Shopify is ideal if you want fast setup, minimal maintenance, and a fully managed platform. WooCommerce gives more flexibility and lower transaction fees, but requires hosting management. We guide you based on your volume, team size, and budget.' },
        { q: 'Can you migrate my existing store to a new platform?', a: 'Yes. We migrate products, customer data, order history, SEO metadata, and URL structures with zero downtime, preserving your search rankings throughout.' },
        { q: 'How do you handle high traffic events like sales?', a: 'We configure auto-scaling infrastructure, CDN caching, and load testing protocols so your store handles Black Friday-level spikes without going down.' },
        { q: 'Do you integrate with logistics and shipping providers?', a: 'Yes — we integrate with Shiprocket, Delhivery, FedEx, DHL, EasyPost, and custom logistics APIs for automated order fulfilment and real-time tracking.' },
        { q: 'What\'s the typical timeline for an e-commerce build?', a: 'A standard Shopify store takes 4–8 weeks. Custom e-commerce platforms with complex integrations take 12–20 weeks. We prioritise getting an MVP live early so you can start selling.' },
      ]}
      related={[
        { href: '/services/digital-marketing', title: 'Digital Marketing & Growth', desc: 'Drive qualified traffic to your store with SEO, performance ads, and email marketing.', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&q=80' },
        { href: '/services/ui-ux-design-branding', title: 'UI/UX Design & Branding', desc: 'Conversion-focused product pages and brand identity for your store.', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80' },
        { href: '/services/erp-business-automation', title: 'ERP & Business Automation', desc: 'Sync your e-commerce operations with ERP for automated fulfilment and finance.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80' },
      ]}
    />
  );
}
