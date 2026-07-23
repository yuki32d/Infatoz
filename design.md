# Infatoz Design System & System Architecture (`design.md`)

Welcome to the comprehensive design system and architecture guide for **Infatoz Technologies** (`infatoz.vercel.app`). This document outlines the visual tokens, typography guidelines, component hierarchy, responsive specifications, Headless CMS integration, and live widget interactions.

---

## 🎨 1. Color Palette & Design Tokens

### **Primary Brand Colors**
* **Theme Blue**: `#384BFF` (`hsl(234, 100%, 61%)`) — Used for primary buttons, active link states, accents, and brand highlights.
* **Deep Royal Blue**: `#2a3ce0` — Used for hover states and button focus states.
* **Dark Navy / Background**: `#0F0D1D` & `#0b0f3d` — Core dark background for footers, mega-menus, and high-contrast section backgrounds.
* **Indigo Glow / Accent**: `#818cf8` — Subtitle pills, glows, and gradient highlights.

### **Neutral Colors**
* **Surface White**: `#ffffff` — Card backgrounds, input fields, modal windows.
* **Light Gray Surface**: `#f8faff` & `#f4f6fb` — Alternate section background, FAQ container, and subtle hover states.
* **Border Gray**: `#e8ecf4` & `#dde3f0` — Subtle card borders, dividers, and tab bars.
* **Text Dark**: `#0F0D1D` — Primary headings, titles, and high-contrast copy.
* **Text Body / Muted**: `#64748b` & `#475569` — Paragraph copy, subtitles, and list item descriptions.
* **Text Subtle**: `#94a3b8` — Timestamps, article counts, and micro-copy.

---

## 🔤 2. Typography & Hierarchy

* **Primary Font Family**: `'Kumbh Sans', sans-serif` (Google Fonts).
* **Secondary System Fallback**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`.

### **Type Scale**
| Element | Desktop Size | Mobile Size | Weight | Line Height |
| :--- | :--- | :--- | :--- | :--- |
| **Hero H1** | `clamp(2.2rem, 4.5vw, 3.6rem)` | `clamp(1.7rem, 7vw, 2.6rem)` | `800 (ExtraBold)` | `1.15` |
| **Section H2** | `clamp(1.9rem, 3.2vw, 2.7rem)` | `clamp(1.5rem, 5.5vw, 2rem)` | `800 (ExtraBold)` | `1.2` |
| **Card H3 / H4** | `17px – 20px` | `15px – 17px` | `700 (Bold)` | `1.35` |
| **Body Paragraph** | `16px` | `15px` | `400 (Regular) / 500` | `1.8` |
| **Eyebrow Pill** | `12px` | `10px` | `600 (SemiBold)` | `1.0` (Uppercase, 2px letter-spacing) |

---

## 🧩 3. Component Architecture

### **3.1 Header & Mega-Menu (`Header.js`)**
* **Sticky Navigation**: Stays fixed at the top with clean transition on scroll.
* **Services Mega Dropdown**: 2-column layout (10 services) with SVG icons, hover blue backgrounds, and descriptive sub-labels.
* **Industries Mega Dropdown**: 2-column grid featuring 12 industry verticals.
* **Mobile Drawer**: Triggered by hamburger button (`<991px`), features full accordion menus and auto-closes on link selection.

### **3.2 Footer (`Footer.js`)**
* **Self-Contained 5-Column Grid**:
  1. **Brand Info**: Logo, tagline, and mission.
  2. **Other Pages**: Quick internal links with blue `›` chevron hover indicators.
  3. **Support**: Privacy, Terms, Help Center, Online Support.
  4. **Company**: Blog, Careers, Case Studies, Partners.
  5. **Contact Us**: Address, phone, email, and "Get A Quote" action button.
* **Bottom Bar**: Copyright text, social media links (Facebook, Twitter, YouTube, Instagram), and floating scroll-to-top button.

### **3.3 Shared Service Page Template (`ServicePageTemplate.js`)**
Used across all 10 service pages (`/services/[slug]`):
1. **Hero Section**: Full cover background image with multi-layer dark gradient overlay, category eyebrow pill, H1 title, subtext, and breadcrumbs.
2. **Stats Grid**: 4 key performance metric boxes.
3. **Overview Section**: Two-column layout with visual image stack, badge counter, description, and bulleted check list.
4. **Key Features**: 3-column card grid with custom SVG icons.
5. **Process Steps**: Numbered sequential workflow cards (`01`, `02`, `03`...).
6. **Tech Stack**: Pill badges displaying technology logos (React, Next.js, Sanity, Python, AWS, etc.).
7. **FAQ Accordion**: Custom cards with a left blue accent bar (`#384BFF`), bold question text, and double-chevron (`»`) toggle.
8. **CTA Banner**: Full-width gradient conversion section with primary buttons.

### **3.4 Live Chatbot Widget (`ChatWidget.js`)**
Modeled after Intercom/Respondent customer support widgets:
* **Floating Trigger**: Bottom-right blue circular button (`#384BFF`) with hover scaling.
* **3-Tab Navigation Bar**:
  - 🏠 **Home**: Greeting ("Hi there 👋 How can we help?"), "Send us a message" card, search box, and quick FAQs.
  - 💬 **Messages**: Recent conversations list and new message trigger.
  - ❓ **Help**: 5 Help Collections cards with article count badges and search filtering.
* **Interactive Chat Thread**: Live support header ("James • AI Agent"), automated welcome message, and **Interactive Quick Option Pills** for instant automated responses.

---

## 🛠️ 4. Sanity.io Headless CMS Architecture

* **Embedded Studio Route**: Accessible at `https://infatoz.vercel.app/studio`.
* **Credentials**:
  - `Project ID`: `6l09h8lt`
  - `Dataset`: `production`
* **Schemas Defined**:
  - `service`: Full document schema for dynamic service pages.
  - `faq`: Standalone & service FAQ documents.
  - `landingHero`: Homepage hero banner text, CTA links, and background images.
  - `testimonial`: Client reviews, ratings, roles, and avatars.
* **Fallback System**: If Sanity data is empty or offline, all pages seamlessly fall back to local hardcoded defaults, guaranteeing **100% uptime**.

---

## 📱 5. Responsive Design Breakpoints

```css
/* Desktop Large */
@media (min-width: 1200px) { ... }

/* Tablet / Medium Desktop */
@media (max-width: 1024px) { ... }

/* Mobile Tablet / Large Mobile */
@media (max-width: 768px) {
  /* Containers switch to 18px padding */
  /* Grid layouts collapse to single-column */
  /* Hero typography switches to clamp dynamic scaling */
  /* Mega-menus hide and mobile drawer activates */
}

/* Small Mobile */
@media (max-width: 480px) {
  /* Compact paddings (14px) */
  /* Full-width drawer overlays */
  /* Stacked action buttons */
}
```

---

## 🚀 6. File & Directory Map

```
INFATOZZ/
├── app/
│   ├── components/
│   │   ├── Header.js          # Main navigation & mega-menu
│   │   ├── Footer.js          # Self-contained 5-column footer
│   │   └── ChatWidget.js      # Intercom-style live chat widget
│   ├── services/
│   │   ├── ServicePageTemplate.js  # Dynamic service page master template
│   │   ├── [slug]/page.js          # 10 individual service routes
│   │   └── layout.js
│   ├── studio/[[...tool]]/
│   │   └── page.js            # Embedded Sanity Studio CMS
│   ├── HomeContent.js         # Homepage connected to Sanity hero query
│   ├── layout.js              # Global RootLayout
│   └── globals.css
├── sanity/
│   ├── schemas/               # Sanity content schemas
│   ├── lib/
│   │   ├── client.js          # Sanity client with sanitized API version
│   │   ├── image.js           # Sanity CDN URL builder
│   │   ├── queries.js         # GROQ queries
│   │   └── seed.js            # Initial dataset seed helper
│   └── config.js              # Sanity Studio config
├── design.md                  # Comprehensive Design Documentation
├── .env.local                 # Sanity credentials
└── package.json               # Next.js 16, React 19, next-sanity
```
