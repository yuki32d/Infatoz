'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const services = [
  {
    iconClass: 'fa-solid fa-globe',
    label: 'Web Design & CMS Development',
    desc: 'Custom corporate websites & robust content management platforms.',
    href: '#',
  },
  {
    iconClass: 'fa-solid fa-code',
    label: 'Custom Web Applications',
    desc: 'Scalable, performant, and secure enterprise web app solutions.',
    href: '#',
  },
  {
    iconClass: 'fa-solid fa-mobile-screen-button',
    label: 'Mobile App Development',
    desc: 'Native and cross-platform mobile apps for iOS and Android.',
    href: '#',
  },
  {
    iconClass: 'fa-solid fa-gears',
    label: 'ERP & Business Automation',
    desc: 'Streamline workflows with custom ERP, CRM, and automation systems.',
    href: '#',
  },
  {
    iconClass: 'fa-solid fa-cart-shopping',
    label: 'E-commerce Solutions',
    desc: 'High-conversion online stores and secure payment integrations.',
    href: '#',
  },
  {
    iconClass: 'fa-solid fa-compass-drafting',
    label: 'UI/UX Design & Branding',
    desc: 'User-centric interface designs and cohesive brand identities.',
    href: '#',
  },
  {
    iconClass: 'fa-solid fa-chart-line',
    label: 'Digital Marketing & Growth',
    desc: 'SEO, SEM, and performance-based digital marketing services.',
    href: '#',
  },
  {
    iconClass: 'fa-solid fa-robot',
    label: 'AI Application & Automation',
    desc: 'Integrate machine learning, NLP, and intelligent agents.',
    href: '#',
  },
  {
    iconClass: 'fa-solid fa-cloud',
    label: 'Cloud Application & Maintenance',
    desc: 'Secure cloud hosting setup, migrations, and ongoing maintenance.',
    href: '#',
  },
  {
    iconClass: 'fa-solid fa-database',
    label: 'Data Management & Migration',
    desc: 'Safe, structured, and compliant data systems and pipelines.',
    href: '#',
  },
];

const products = [
  { iconClass: 'fa-solid fa-users-gear', label: 'Infatoz CRM', desc: 'Manage relationships and accelerate pipeline growth.', href: '#' },
  { iconClass: 'fa-solid fa-chart-pie', label: 'Analytics Dashboard', desc: 'Real-time performance tracking and data insights.', href: '#' },
  { iconClass: 'fa-solid fa-shield-halved', label: 'Security Suite', desc: 'Enterprise-grade firewall, compliance, and auditing.', href: '#' },
  { iconClass: 'fa-solid fa-cloud-arrow-up', label: 'Cloud Platform', desc: 'Scalable deployment hosting and object storage.', href: '#' },
];

const industries = [
  { iconClass: 'fa-solid fa-heart-pulse', label: 'Healthcare', desc: 'HIPAA-compliant software, patient portals, and telehealth.', href: '#' },
  { iconClass: 'fa-solid fa-landmark', label: 'Finance & Banking', desc: 'Fintech platforms, secure transaction engines, and audits.', href: '#' },
  { iconClass: 'fa-solid fa-graduation-cap', label: 'Education', desc: 'LMS platforms, virtual classrooms, and student systems.', href: '#' },
  { iconClass: 'fa-solid fa-building', label: 'Real Estate', desc: 'Listing portals, broker CRM, and interactive maps.', href: '#' },
  { iconClass: 'fa-solid fa-basket-shopping', label: 'Retail & E-commerce', desc: 'Multi-store storefronts, inventory syncing, and POS.', href: '#' },
  { iconClass: 'fa-solid fa-industry', label: 'Manufacturing', desc: 'IoT integration, supply chain trackers, and factory ERP.', href: '#' },
];

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('services');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const closeTimer = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setDropdownOpen(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  const currentItems =
    activeCategory === 'services'
      ? services
      : activeCategory === 'products'
      ? products
      : industries;

  return (
    <>
      <style>{`
        /* ============================
           SERVICES MEGA DROPDOWN
           ============================ */
        .nav-services-wrapper {
          position: relative;
        }

        .nav-services-trigger {
          display: inline-flex !important;
          align-items: center !important;
          gap: 6px !important;
          font-size: 16px !important;
          font-weight: 600 !important;
          color: var(--header, #0F0D1D) !important;
          padding: 20px 0 !important;
          text-transform: capitalize !important;
          transition: all 0.3s ease-in-out !important;
          background: none !important;
          border: none !important;
          cursor: pointer !important;
          font-family: 'Kumbh Sans', sans-serif !important;
          line-height: 1 !important;
        }

        .nav-services-trigger:hover {
          color: var(--theme, #384BFF) !important;
        }

        .nav-services-trigger .chevron {
          display: inline-flex;
          font-size: 11px;
          transition: transform 0.28s cubic-bezier(.4,0,.2,1);
          color: inherit;
        }

        .nav-services-trigger .chevron.open {
          transform: rotate(180deg);
        }

        /* The mega dropdown panel */
        .services-mega-dropdown {
          position: absolute;
          top: calc(100% - 2px);
          left: 50%;
          transform: translateX(-50%) translateY(12px);
          display: flex;
          width: 820px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 24px 64px rgba(15, 13, 29, 0.15), 0 4px 16px rgba(56, 75, 255, 0.04);
          border: 1px solid rgba(56, 75, 255, 0.1);
          overflow: hidden;
          z-index: 9999;
          
          /* animation initial states */
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s cubic-bezier(.4,0,.2,1),
                      transform 0.25s cubic-bezier(.4,0,.2,1);
        }

        .services-mega-dropdown.is-open {
          opacity: 1;
          pointer-events: all;
          transform: translateX(-50%) translateY(0);
        }

        /* Left sidebar - categories */
        .dropdown-sidebar {
          width: 240px;
          flex-shrink: 0;
          background: #F7F8FC;
          border-right: 1px solid rgba(56, 75, 255, 0.08);
          padding: 24px 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .dropdown-sidebar-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 14px 24px;
          cursor: pointer;
          font-size: 15px;
          font-weight: 600;
          color: #4b5563;
          border-left: 3px solid transparent;
          transition: all 0.2s ease;
          font-family: 'Kumbh Sans', sans-serif;
          background: transparent;
          border-top: none;
          border-right: none;
          border-bottom: none;
          text-align: left;
          width: 100%;
        }

        .dropdown-sidebar-item:hover {
          background: rgba(56, 75, 255, 0.04);
          color: #384BFF;
          border-left-color: rgba(56, 75, 255, 0.25);
        }

        .dropdown-sidebar-item.active {
          background: #ffffff;
          color: #384BFF;
          border-left-color: #384BFF;
          box-shadow: 2px 0 8px rgba(15,13,29,0.02);
        }

        .dropdown-sidebar-item .sidebar-icon {
          font-size: 15px;
          width: 24px;
          text-align: center;
          color: inherit;
        }

        .dropdown-sidebar-item .sidebar-chevron {
          font-size: 9px;
          opacity: 0.6;
          transition: transform 0.2s ease;
        }
        .dropdown-sidebar-item.active .sidebar-chevron {
          transform: translateX(2px);
          opacity: 1;
        }

        /* Right panel - items list */
        .dropdown-panel {
          flex: 1;
          padding: 24px 16px;
          overflow-y: auto;
          max-height: 520px;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .dropdown-panel::-webkit-scrollbar {
          width: 5px;
        }
        .dropdown-panel::-webkit-scrollbar-track {
          background: transparent;
        }
        .dropdown-panel::-webkit-scrollbar-thumb {
          background: rgba(56,75,255,0.15);
          border-radius: 4px;
        }

        .dropdown-panel-header {
          padding: 0 12px 14px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #384BFF;
          font-family: 'Kumbh Sans', sans-serif;
          border-bottom: 1px solid rgba(0,0,0,0.04);
          margin-bottom: 8px;
        }

        .dropdown-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 12px 16px;
          border-radius: 8px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s ease;
          color: #0F0D1D;
          font-family: 'Kumbh Sans', sans-serif;
          position: relative;
        }

        .dropdown-item:hover {
          background: rgba(56, 75, 255, 0.04);
          transform: translateX(4px);
        }

        .dropdown-item .item-icon {
          font-size: 16px;
          flex-shrink: 0;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #F4F5FA;
          border-radius: 8px;
          color: #4b5563;
          transition: all 0.2s ease;
        }

        .dropdown-item:hover .item-icon {
          background: rgba(56, 75, 255, 0.08);
          color: #384BFF;
        }

        .dropdown-item-meta {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .dropdown-item-title {
          font-size: 14px;
          font-weight: 600;
          color: #0F0D1D;
          transition: color 0.2s ease;
          line-height: 1.3;
        }
        .dropdown-item:hover .dropdown-item-title {
          color: #384BFF;
        }

        .dropdown-item-desc {
          font-size: 12px;
          color: #6b7280;
          line-height: 1.4;
        }

        .dropdown-item .item-arrow {
          align-self: center;
          opacity: 0;
          transform: translateX(-8px);
          transition: all 0.2s ease;
          flex-shrink: 0;
          color: #384BFF;
          font-size: 11px;
        }

        .dropdown-item:hover .item-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* stagger animation for items list */
        .services-mega-dropdown.is-open .dropdown-item {
          animation: itemFadeIn 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes itemFadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .services-mega-dropdown.is-open .dropdown-item:nth-child(1)  { animation-delay: 0.02s; }
        .services-mega-dropdown.is-open .dropdown-item:nth-child(2)  { animation-delay: 0.04s; }
        .services-mega-dropdown.is-open .dropdown-item:nth-child(3)  { animation-delay: 0.06s; }
        .services-mega-dropdown.is-open .dropdown-item:nth-child(4)  { animation-delay: 0.08s; }
        .services-mega-dropdown.is-open .dropdown-item:nth-child(5)  { animation-delay: 0.10s; }
        .services-mega-dropdown.is-open .dropdown-item:nth-child(6)  { animation-delay: 0.12s; }
        .services-mega-dropdown.is-open .dropdown-item:nth-child(7)  { animation-delay: 0.14s; }
        .services-mega-dropdown.is-open .dropdown-item:nth-child(8)  { animation-delay: 0.16s; }
        .services-mega-dropdown.is-open .dropdown-item:nth-child(9)  { animation-delay: 0.18s; }
        .services-mega-dropdown.is-open .dropdown-item:nth-child(10) { animation-delay: 0.20s; }

        /* Mobile Styles */
        .mobile-menu-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(15, 13, 29, 0.4);
          z-index: 8888;
          backdrop-filter: blur(4px);
        }
        .mobile-menu-overlay.open { display: block; }

        .mobile-nav-drawer {
          display: none;
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 320px;
          background: #ffffff;
          z-index: 8889;
          padding: 24px;
          overflow-y: auto;
          box-shadow: -8px 0 40px rgba(15,13,29,0.15);
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(.4,0,.2,1);
        }

        @media (max-width: 991px) {
          .mobile-nav-drawer { display: block; }
          .services-mega-dropdown { display: none !important; }
        }

        .mobile-nav-drawer.open {
          transform: translateX(0);
        }

        .mobile-nav-link {
          display: block;
          padding: 14px 0;
          font-size: 16px;
          font-weight: 600;
          color: #0F0D1D;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          text-decoration: none;
          font-family: 'Kumbh Sans', sans-serif;
          transition: color 0.15s;
        }
        .mobile-nav-link:hover { color: #384BFF; }

        .mobile-services-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 0;
          font-size: 16px;
          font-weight: 600;
          color: #0F0D1D;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          cursor: pointer;
          font-family: 'Kumbh Sans', sans-serif;
          background: none;
          border-top: none;
          border-left: none;
          border-right: none;
          width: 100%;
          text-align: left;
        }

        .mobile-services-list {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.4s cubic-bezier(.4,0,.2,1);
        }
        .mobile-services-list.open { max-height: 800px; }

        .mobile-service-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 11px 16px;
          font-size: 14px;
          color: #374151;
          text-decoration: none;
          border-radius: 8px;
          margin: 4px 0;
          transition: all 0.2s;
          font-family: 'Kumbh Sans', sans-serif;
          font-weight: 500;
        }
        .mobile-service-item:hover {
          background: rgba(56,75,255,0.05);
          color: #384BFF;
        }

        .mobile-service-item i {
          color: #384BFF;
          font-size: 14px;
        }

        .hamburger-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          margin-left: 12px;
        }
        @media (max-width: 991px) {
          .hamburger-btn { display: flex; }
          .mean__menu-wrapper { display: none !important; }
          .consult-btn-wrapper { display: none !important; }
        }
      `}</style>

      <div className="search-wrap">
        <div className="search-inner">
          <i className="fas fa-times search-close" id="search-close"></i>
          <div className="search-cell">
            <form action="https://gramentheme.com/">
              <div className="search-field-holder">
                <input type="text" name="s" className="main-search-input" placeholder="Search...." />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>

      {/* Mobile drawer overlay */}
      <div
        className={`mobile-menu-overlay${mobileMenuOpen ? ' open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Nav Drawer */}
      <div className={`mobile-nav-drawer${mobileMenuOpen ? ' open' : ''}`}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <a href="/">
            <img src="/wp-content/uploads/2024/04/black-logo.svg" alt="Infatoz" style={{ height: 36 }} />
          </a>
          <button
            onClick={() => setMobileMenuOpen(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 22, color: '#0F0D1D' }}
            aria-label="Close menu"
          >
            <i className="fas fa-times" />
          </button>
        </div>

        <a href="/" className="mobile-nav-link">Home</a>
        <a href="/about" className="mobile-nav-link">About Us</a>

        {/* Mobile Services Accordion */}
        <button
          className="mobile-services-toggle"
          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
          aria-expanded={mobileServicesOpen}
        >
          Services
          <i
            className="fas fa-chevron-down"
            style={{
              fontSize: 12,
              transition: 'transform 0.28s ease',
              transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              color: '#384BFF',
            }}
          />
        </button>
        <div className={`mobile-services-list${mobileServicesOpen ? ' open' : ''}`}>
          {services.map((s, i) => (
            <a key={i} href={s.href} className="mobile-service-item">
              <i className={s.iconClass} />
              {s.label}
            </a>
          ))}
        </div>

        <a href="#" className="mobile-nav-link">Pages</a>
        <a href="#" className="mobile-nav-link">Blog</a>
        <a href="/contact" className="mobile-nav-link">Contact</a>

        <Link
          href="/contact"
          className="consult-btn"
          style={{ display: 'inline-block', marginTop: 24, width: '100%', textAlign: 'center' }}
        >
          Consultations
        </Link>
      </div>

      {/* Offcanvas */}
      <div className="fix-area">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <a className="d-inline-block site-logo" href="/">
                    <img src="/wp-content/uploads/2024/04/black-logo.svg" alt="Infatoz" />
                  </a>
                </div>
                <div className="offcanvas__close">
                  <button><i className="fas fa-times"></i></button>
                </div>
              </div>
              <p className="text d-none d-lg-block">
                We provide innovative IT solutions and services to help businesses accelerate their digital transformation and achieve sustainable growth.
              </p>
              <div className="mobile-menu fix mb-3"></div>
              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15"><i className="fas fa-map-marker-alt"></i></div>
                    <div className="offcanvas__contact-text"><a href="#">Main Street, Melbourne, Australia</a></div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15"><i className="far fa-envelope"></i></div>
                    <div className="offcanvas__contact-text"><a href="mailto:info@example.com">info@example.com</a></div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15"><i className="far fa-clock"></i></div>
                    <div className="offcanvas__contact-text"><a href="#">Mon-Friday, 09am -05pm</a></div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15"><i className="fas fa-phone-volume"></i></div>
                    <div className="offcanvas__contact-text"><a href="tel:+11002345909">+11002345909</a></div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <a href="#" className="theme-btn text-center">
                    <span>Get A Quote <i className="fa-solid fa-arrow-right-long"></i></span>
                  </a>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay"></div>

      <a className="skip-link screen-reader-text" href="#content">Skip to content</a>

      <header id="masthead" className="site-header">
        <div className="header-top-section fix">
          <div className="container-fluid">
            <div className="header-top-wrapper">
              <ul className="contact-list">
                <li><i className="far fa-envelope"></i><a href="mailto:info@example.com" className="link">info@example.com</a></li>
                <li><i className="fas fa-phone-volume"></i><a href="tel:+2086660112" className="link">+208-666-0112</a></li>
              </ul>
              <div className="top-right">
                <div className="social-icon d-flex align-items-center">
                  <span>Follow Us:</span>
                  <a href="#"><i className="fa fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="header-sticky" className="header-1">
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div className="header-main style-2">
                <div className="header-left">
                  <div className="logo">
                    <a className="d-inline-block site-logo" href="/">
                      <img src="/wp-content/uploads/2024/04/black-logo.svg" alt="Infatoz" />
                    </a>
                  </div>
                </div>

                <div className="header-right d-flex justify-content-end align-items-center">
                  {/* Desktop Nav */}
                  <div className="mean__menu-wrapper">
                    <div className="main-menu">
                      <div id="infatoz_main_menu" className="menu-main-menu-container">
                        <ul id="menu-main-menu" className="">
                          <li id="menu-item-19" className="menu-item menu-item-19">
                            <a href="/" aria-current="page">Home</a>
                          </li>
                          <li id="menu-item-1356" className="menu-item menu-item-1356">
                            <a href="/about">About Us</a>
                          </li>

                          {/* ===== Services Mega Menu ===== */}
                          <li
                            id="menu-item-1355"
                            className="menu-item menu-item-1355 nav-services-wrapper"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            <button
                              ref={triggerRef}
                              className="nav-services-trigger"
                              aria-haspopup="true"
                              aria-expanded={dropdownOpen}
                              onClick={() => setDropdownOpen((v) => !v)}
                              id="services-menu-trigger"
                            >
                              Services
                              <i
                                className={`fas fa-chevron-down chevron${dropdownOpen ? ' open' : ''}`}
                                style={{ marginLeft: 4 }}
                              />
                            </button>

                            {/* Mega Dropdown */}
                            <div
                              ref={dropdownRef}
                              className={`services-mega-dropdown${dropdownOpen ? ' is-open' : ''}`}
                              role="menu"
                              aria-label="Services menu"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            >
                              {/* Left sidebar */}
                              <div className="dropdown-sidebar">
                                <button
                                  className={`dropdown-sidebar-item${activeCategory === 'services' ? ' active' : ''}`}
                                  onClick={() => setActiveCategory('services')}
                                  onMouseEnter={() => setActiveCategory('services')}
                                  aria-selected={activeCategory === 'services'}
                                >
                                  <span>
                                    <i className="fa-solid fa-gears sidebar-icon" />
                                    Services
                                  </span>
                                  <i className="fa-solid fa-chevron-right sidebar-chevron" />
                                </button>

                                <button
                                  className={`dropdown-sidebar-item${activeCategory === 'products' ? ' active' : ''}`}
                                  onClick={() => setActiveCategory('products')}
                                  onMouseEnter={() => setActiveCategory('products')}
                                  aria-selected={activeCategory === 'products'}
                                >
                                  <span>
                                    <i className="fa-solid fa-laptop-code sidebar-icon" />
                                    Products & Platforms
                                  </span>
                                  <i className="fa-solid fa-chevron-right sidebar-chevron" />
                                </button>

                                <button
                                  className={`dropdown-sidebar-item${activeCategory === 'industries' ? ' active' : ''}`}
                                  onClick={() => setActiveCategory('industries')}
                                  onMouseEnter={() => setActiveCategory('industries')}
                                  aria-selected={activeCategory === 'industries'}
                                >
                                  <span>
                                    <i className="fa-solid fa-industry sidebar-icon" />
                                    Industries
                                  </span>
                                  <i className="fa-solid fa-chevron-right sidebar-chevron" />
                                </button>

                                {/* Bottom CTA */}
                                <div style={{
                                  marginTop: 'auto',
                                  padding: '16px 24px 12px',
                                  borderTop: '1px solid rgba(56,75,255,0.06)',
                                }}>
                                  <a
                                    href="/contact"
                                    style={{
                                      display: 'block',
                                      background: 'linear-gradient(135deg, #384BFF 0%, #5b6cff 100%)',
                                      color: '#fff',
                                      textAlign: 'center',
                                      padding: '10px 14px',
                                      borderRadius: 8,
                                      fontSize: 13,
                                      fontWeight: 700,
                                      textDecoration: 'none',
                                      transition: 'opacity 0.2s',
                                      fontFamily: "'Kumbh Sans', sans-serif",
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                                  >
                                    Get A Quote &nbsp;→
                                  </a>
                                </div>
                              </div>

                              {/* Right items panel */}
                              <div className="dropdown-panel">
                                <div className="dropdown-panel-header">
                                  {activeCategory === 'services' && 'Our Services'}
                                  {activeCategory === 'products' && 'Products & Platforms'}
                                  {activeCategory === 'industries' && 'Industries We Serve'}
                                </div>

                                {currentItems.map((item, idx) => (
                                  <a
                                    key={`${activeCategory}-${idx}`}
                                    href={item.href}
                                    className="dropdown-item"
                                    role="menuitem"
                                    onClick={() => setDropdownOpen(false)}
                                  >
                                    <div className="item-icon">
                                      <i className={item.iconClass} />
                                    </div>
                                    <div className="dropdown-item-meta">
                                      <span className="dropdown-item-title">{item.label}</span>
                                      <span className="dropdown-item-desc">{item.desc}</span>
                                    </div>
                                    <i className="fa-solid fa-chevron-right item-arrow" />
                                  </a>
                                ))}
                              </div>
                            </div>
                          </li>
                          {/* ============================= */}

                          <li id="menu-item-1497" className="menu-item menu-item-1497">
                            <a href="#">Pages</a>
                          </li>
                          <li id="menu-item-227" className="menu-item menu-item-227">
                            <a href="#">Blog</a>
                          </li>
                          <li id="menu-item-1719" className="menu-item menu-item-1719">
                            <Link href="/contact">Contact</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="consult-btn-wrapper" style={{ marginLeft: '20px' }}>
                    <Link href="/contact" className="consult-btn">
                      Consultations
                    </Link>
                  </div>

                  {/* Hamburger for mobile */}
                  <button
                    className="hamburger-btn"
                    onClick={() => setMobileMenuOpen(true)}
                    aria-label="Open menu"
                    aria-expanded={mobileMenuOpen}
                  >
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <rect y="4" width="26" height="2.5" rx="1.25" fill="#0F0D1D"/>
                      <rect y="11.75" width="26" height="2.5" rx="1.25" fill="#0F0D1D"/>
                      <rect y="19.5" width="18" height="2.5" rx="1.25" fill="#384BFF"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
