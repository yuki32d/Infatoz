'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// === Inline Lucide-style Outline Icons (18px, Stroke Width 2) ===
const IconGlobe = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const IconCode = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const IconSmartphone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

const IconCpu = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="16" height="16" x="4" y="4" rx="2" />
    <rect width="6" height="6" x="9" y="9" rx="1" />
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
  </svg>
);

const IconShoppingCart = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </svg>
);

const IconPenTool = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="m5 5 3.5 3.5M19 5l-3.5 3.5M5 19l3.5-3.5M19 19l-3.5-3.5" />
  </svg>
);

const IconTrendingUp = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const IconBrain = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22a7 7 0 0 0 7-7c0-2.3-1.5-4.5-3-5.5a4.5 4.5 0 0 0-8 0C6.5 10.5 5 12.7 5 15a7 7 0 0 0 7 7Z" />
    <path d="M12 2v4M12 18v2M8 11h8" />
  </svg>
);

const IconCloud = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19A5.5 5.5 0 0 0 18 8.02a1 1 0 0 1-.95-.66 7 7 0 0 0-13.43 2.1 1 1 0 0 1-.84.93A4.5 4.5 0 0 0 4 19Z" />
  </svg>
);

const IconDatabase = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

// Industries Icons
const IconBookOpen = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const IconMusic = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

const IconBriefcase = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const IconCoffee = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h1a4 4 0 1 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>
);

const IconHeart = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const IconTruck = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const IconShoppingBag = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const IconCompass = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const IconLandmark = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="2" y1="22" x2="22" y2="22" />
    <line x1="12" y1="2" x2="12" y2="2" />
    <polygon points="12 2 2 7 22 7" />
    <rect x="4" y="7" width="3" height="15" />
    <rect x="10" y="7" width="3" height="15" />
    <rect x="17" y="7" width="3" height="15" />
  </svg>
);

const IconBuilding = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="9" y1="22" x2="9" y2="16" />
    <line x1="15" y1="22" x2="15" y2="16" />
    <rect x="9" y="16" width="6" height="6" />
    <path d="M8 6h2M14 6h2M8 11h2M14 11h2" />
  </svg>
);

const IconCar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
  </svg>
);

const IconUsers = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// Products Outline Icons
const IconShield = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconChartBar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

// Sidebar Nav Icons
const SidebarServicesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const SidebarProductsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const SidebarIndustriesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 21H2V3l7 4 7-4 6 4v14z" />
    <path d="M9 10v11" />
    <path d="M16 10v11" />
  </svg>
);


// === Data Sets (10 Services, 4 Products, 12 Industries) ===
const services = [
  {
    icon: <IconGlobe />,
    label: 'Web Design & CMS Development Services',
    href: '#',
  },
  {
    icon: <IconCode />,
    label: 'Custom Web Application Development',
    href: '#',
  },
  {
    icon: <IconSmartphone />,
    label: 'Mobile App Development',
    href: '#',
  },
  {
    icon: <IconCpu />,
    label: 'ERP Software & Business Automation Systems',
    href: '#',
  },
  {
    icon: <IconShoppingCart />,
    label: 'E-commerce Development',
    href: '#',
  },
  {
    icon: <IconPenTool />,
    label: 'UI/UX Design & Branding',
    href: '#',
  },
  {
    icon: <IconTrendingUp />,
    label: 'Digital Marketing & Growth Services',
    href: '#',
  },
  {
    icon: <IconBrain />,
    label: 'AI Application Development & Automation',
    href: '#',
  },
  {
    icon: <IconCloud />,
    label: 'Cloud Application Development & Maintenance',
    href: '#',
  },
  {
    icon: <IconDatabase />,
    label: 'Data Management & Migration',
    href: '#',
  },
];

const products = [
  { icon: <IconUsers />, label: 'Infatoz CRM', href: '#' },
  { icon: <IconChartBar />, label: 'Analytics Dashboard', href: '#' },
  { icon: <IconShield />, label: 'Security Suite', href: '#' },
  { icon: <IconCloud />, label: 'Cloud Platform', href: '#' },
];

const industries = [
  {
    icon: <IconBookOpen />,
    label: 'Education & EdTech',
    href: '#',
  },
  {
    icon: <IconMusic />,
    label: 'Events & Entertainment',
    href: '#',
  },
  {
    icon: <IconBriefcase />,
    label: 'Professional Services',
    sub: 'Law, Consulting, HR',
    href: '#',
  },
  {
    icon: <IconCoffee />,
    label: 'Food & Beverage',
    sub: 'Restaurants / Cloud Kitchens',
    href: '#',
  },
  {
    icon: <IconHeart />,
    label: 'Healthcare',
    sub: 'Hospitals & Clinics',
    href: '#',
  },
  {
    icon: <IconTruck />,
    label: 'Manufacturing & Logistics',
    href: '#',
  },
  {
    icon: <IconShoppingBag />,
    label: 'Retail & E-Commerce',
    sub: 'D2C Brands',
    href: '#',
  },
  {
    icon: <IconCompass />,
    label: 'Hospitality & Travel',
    sub: 'Tourism',
    href: '#',
  },
  {
    icon: <IconLandmark />,
    label: 'BFSI',
    sub: 'Banking, Finance & Insurance',
    href: '#',
  },
  {
    icon: <IconBuilding />,
    label: 'Real Estate & Construction',
    href: '#',
  },
  {
    icon: <IconCar />,
    label: 'Automotive',
    sub: 'Dealerships & Service Centers',
    href: '#',
  },
  {
    icon: <IconUsers />,
    label: 'Non-Profits & NGOs',
    href: '#',
  },
];

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('services');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
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
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 24px 64px rgba(15, 13, 29, 0.15), 0 4px 16px rgba(56, 75, 255, 0.04);
          border: 1px solid rgba(56, 75, 255, 0.1);
          overflow: hidden;
          z-index: 9999;
          
          /* Dynamic width transitions based on tab category */
          width: 760px;
          transition: width 0.22s cubic-bezier(.4,0,.2,1),
                      opacity 0.22s cubic-bezier(.4,0,.2,1),
                      transform 0.22s cubic-bezier(.4,0,.2,1);
          
          /* animation initial states */
          opacity: 0;
          pointer-events: none;
        }

        .services-mega-dropdown.is-open {
          opacity: 1;
          pointer-events: all;
          transform: translateX(-50%) translateY(0);
        }

        .services-mega-dropdown.wide-mode {
          width: 930px;
        }

        /* Reset all inherited general 'a' styling for elements inside mega dropdown */
        .services-mega-dropdown a {
          display: inline-block !important;
          padding: 0 !important;
          margin: 0 !important;
          text-align: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          color: inherit !important;
          text-transform: none !important;
          transition: none !important;
        }
        .services-mega-dropdown a:hover {
          color: inherit !important;
        }

        /* Left sidebar - categories */
        .dropdown-sidebar {
          width: 190px;
          flex-shrink: 0;
          background: #F7F8FC;
          border-right: 1px solid rgba(56, 75, 255, 0.08);
          padding: 20px 0;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        .dropdown-sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 0 10px;
        }

        .dropdown-sidebar-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 550;
          color: #4b5563;
          transition: all 0.2s ease;
          font-family: 'Kumbh Sans', sans-serif;
          background: transparent;
          border: none;
          text-align: left;
          width: 100%;
          box-sizing: border-box;
        }

        .dropdown-sidebar-item:hover {
          background: rgba(56, 75, 255, 0.04);
          color: #384BFF;
        }

        .dropdown-sidebar-item.active {
          background-color: #E6F1FB;
          color: #042C53;
        }

        .dropdown-sidebar-item .sidebar-icon {
          font-size: 14px;
          margin-right: 10px;
          width: 18px;
          text-align: center;
          color: inherit;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          vertical-align: middle;
        }

        .dropdown-sidebar-item .sidebar-chevron {
          font-size: 10px;
          color: #9ca3af;
          transition: transform 0.2s ease;
        }
        .dropdown-sidebar-item.active .sidebar-chevron {
          color: #042C53;
          transform: translateX(1px);
        }

        .sidebar-cta-container {
          margin-top: auto;
          padding: 20px 14px 0;
          box-sizing: border-box;
        }

        /* Specific high specificity override to center Get a Quote button */
        .header-main .main-menu ul li .services-mega-dropdown .sidebar-cta-button {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          width: 100% !important;
          height: 42px !important;
          background-color: #3757EA !important;
          color: #ffffff !important;
          text-align: center !important;
          padding: 0 !important;
          border-radius: 8px !important;
          font-size: 13px !important;
          font-weight: 700 !important;
          text-decoration: none !important;
          font-family: 'Kumbh Sans', sans-serif !important;
          box-sizing: border-box !important;
          text-transform: none !important;
          border: none !important;
          line-height: 1 !important;
        }

        .header-main .main-menu ul li .services-mega-dropdown .sidebar-cta-button:hover {
          background-color: #2745c2 !important;
          color: #ffffff !important;
        }

        /* Right panel - items list */
        .dropdown-panel {
          flex: 1;
          padding: 20px 24px;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          overflow: visible; /* Prevents internal scrollbars */
        }

        .dropdown-panel-header {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #3757EA;
          font-family: 'Kumbh Sans', sans-serif;
          margin-bottom: 8px;
          padding-left: 4px;
        }

        .dropdown-divider {
          height: 0.5px;
          background-color: rgba(56, 75, 255, 0.12);
          border: none;
          margin-bottom: 16px;
          width: 100%;
        }

        /* Grid configurations */
        .dropdown-grid {
          display: grid;
          gap: 10px;
          width: 100%;
          align-items: stretch;
        }

        .dropdown-grid.cols-2 {
          grid-template-columns: repeat(2, 1fr);
        }

        .dropdown-grid.cols-3 {
          grid-template-columns: repeat(3, 1fr);
        }

        /* Explicit high-specificity rule to override display block/vertical stack in cards */
        .header-main .main-menu ul li .services-mega-dropdown .dropdown-card {
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          gap: 10px !important;
          padding: 11px 12px !important;
          background: #ffffff !important;
          border: 0.5px solid rgba(56, 75, 255, 0.12) !important;
          border-radius: 10px !important;
          text-decoration: none !important;
          box-sizing: border-box !important;
          height: 100% !important;
          text-align: left !important;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        .header-main .main-menu ul li .services-mega-dropdown .dropdown-card:hover {
          background-color: #E6F1FB !important;
          border-color: rgba(56, 75, 255, 0.3) !important;
          transform: translateY(-1px) !important;
        }

        .dropdown-card .card-icon-block {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background-color: #E6F1FB;
          color: #185FA5;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .dropdown-card .card-label-block {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          min-width: 0;
        }

        .dropdown-card .card-label-title {
          font-size: 13px;
          font-weight: 550;
          color: #0F0D1D;
          line-height: 1.35;
          word-break: break-word;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .dropdown-card .card-label-sub {
          font-size: 11px;
          color: #6b7280;
          line-height: 1.25;
          margin-top: 2px;
          word-break: break-word;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Mobile drawer overlay */
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

        .mobile-service-item .mobile-icon-span {
          color: #384BFF;
          display: inline-flex;
          align-items: center;
          justify-content: center;
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
              <span className="mobile-icon-span">{s.icon}</span>
              {s.label}
            </a>
          ))}
        </div>

        {/* Mobile Industries Accordion */}
        <button
          className="mobile-services-toggle"
          onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
          aria-expanded={mobileIndustriesOpen}
        >
          Industries
          <i
            className="fas fa-chevron-down"
            style={{
              fontSize: 12,
              transition: 'transform 0.28s ease',
              transform: mobileIndustriesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              color: '#384BFF',
            }}
          />
        </button>
        <div className={`mobile-services-list${mobileIndustriesOpen ? ' open' : ''}`}>
          {industries.map((ind, i) => (
            <a key={i} href={ind.href} className="mobile-service-item">
              <span className="mobile-icon-span">{ind.icon}</span>
              <span style={{ display: 'inline-flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: '600' }}>{ind.label}</span>
                {ind.sub && <span style={{ fontSize: 11, color: '#6b7280' }}>{ind.sub}</span>}
              </span>
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
                              className={`services-mega-dropdown${dropdownOpen ? ' is-open' : ''}${activeCategory === 'industries' ? ' wide-mode' : ''}`}
                              role="menu"
                              aria-label="Services menu"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            >
                              {/* Left sidebar */}
                              <div className="dropdown-sidebar">
                                <div className="dropdown-sidebar-nav">
                                  <button
                                    className={`dropdown-sidebar-item${activeCategory === 'services' ? ' active' : ''}`}
                                    onClick={() => setActiveCategory('services')}
                                    onMouseEnter={() => setActiveCategory('services')}
                                    aria-selected={activeCategory === 'services'}
                                  >
                                    <span>
                                      <span className="sidebar-icon">
                                        <SidebarServicesIcon />
                                      </span>
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
                                      <span className="sidebar-icon">
                                        <SidebarProductsIcon />
                                      </span>
                                      Products
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
                                      <span className="sidebar-icon">
                                        <SidebarIndustriesIcon />
                                      </span>
                                      Industries
                                    </span>
                                    <i className="fa-solid fa-chevron-right sidebar-chevron" />
                                  </button>
                                </div>

                                {/* Bottom CTA Pinned to Sidebar */}
                                <div className="sidebar-cta-container">
                                  <a
                                    href="/contact"
                                    className="sidebar-cta-button"
                                  >
                                    Get A Quote &nbsp;→
                                  </a>
                                </div>
                              </div>

                              {/* Right content panel */}
                              <div className="dropdown-panel">
                                <div className="dropdown-panel-header">
                                  {activeCategory === 'services' && 'Our Services'}
                                  {activeCategory === 'products' && 'Products & Platforms'}
                                  {activeCategory === 'industries' && 'Industries We Serve'}
                                </div>

                                <hr className="dropdown-divider" />

                                {/* Items Grid (dynamic column sizing) */}
                                <div className={`dropdown-grid${activeCategory === 'industries' ? ' cols-3' : ' cols-2'}`}>
                                  {currentItems.map((item, idx) => (
                                    <a
                                      key={`${activeCategory}-${idx}`}
                                      href={item.href}
                                      className="dropdown-card"
                                      role="menuitem"
                                      onClick={() => setDropdownOpen(false)}
                                    >
                                      <div className="card-icon-block">
                                        {item.icon}
                                      </div>
                                      <div className="card-label-block">
                                        <span className="card-label-title">{item.label}</span>
                                        {item.sub && <span className="card-label-sub">{item.sub}</span>}
                                      </div>
                                    </a>
                                  ))}
                                </div>
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
