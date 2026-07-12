'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const countriesList = [
  { code: 'af', name: 'Afghanistan', dial: '+93' },
  { code: 'al', name: 'Albania', dial: '+355' },
  { code: 'dz', name: 'Algeria', dial: '+213' },
  { code: 'ad', name: 'Andorra', dial: '+376' },
  { code: 'ao', name: 'Angola', dial: '+244' },
  { code: 'ar', name: 'Argentina', dial: '+54' },
  { code: 'am', name: 'Armenia', dial: '+374' },
  { code: 'au', name: 'Australia', dial: '+61' },
  { code: 'at', name: 'Austria', dial: '+43' },
  { code: 'az', name: 'Azerbaijan', dial: '+994' },
  { code: 'bh', name: 'Bahrain', dial: '+973' },
  { code: 'bd', name: 'Bangladesh', dial: '+880' },
  { code: 'be', name: 'Belgium', dial: '+32' },
  { code: 'bo', name: 'Bolivia', dial: '+591' },
  { code: 'br', name: 'Brazil', dial: '+55' },
  { code: 'bg', name: 'Bulgaria', dial: '+359' },
  { code: 'kh', name: 'Cambodia', dial: '+855' },
  { code: 'ca', name: 'Canada', dial: '+1' },
  { code: 'cl', name: 'Chile', dial: '+56' },
  { code: 'cn', name: 'China', dial: '+86' },
  { code: 'co', name: 'Colombia', dial: '+57' },
  { code: 'cr', name: 'Costa Rica', dial: '+506' },
  { code: 'hr', name: 'Croatia', dial: '+385' },
  { code: 'cy', name: 'Cyprus', dial: '+357' },
  { code: 'cz', name: 'Czech Republic', dial: '+420' },
  { code: 'dk', name: 'Denmark', dial: '+45' },
  { code: 'do', name: 'Dominican Republic', dial: '+1' },
  { code: 'ec', name: 'Ecuador', dial: '+593' },
  { code: 'eg', name: 'Egypt', dial: '+20' },
  { code: 'sv', name: 'El Salvador', dial: '+503' },
  { code: 'ee', name: 'Estonia', dial: '+372' },
  { code: 'fi', name: 'Finland', dial: '+358' },
  { code: 'fr', name: 'France', dial: '+33' },
  { code: 'ge', name: 'Georgia', dial: '+995' },
  { code: 'de', name: 'Germany', dial: '+49' },
  { code: 'gr', name: 'Greece', dial: '+30' },
  { code: 'gt', name: 'Guatemala', dial: '+502' },
  { code: 'hn', name: 'Honduras', dial: '+504' },
  { code: 'hk', name: 'Hong Kong', dial: '+852' },
  { code: 'hu', name: 'Hungary', dial: '+36' },
  { code: 'is', name: 'Iceland', dial: '+354' },
  { code: 'in', name: 'India', dial: '+91' },
  { code: 'id', name: 'Indonesia', dial: '+62' },
  { code: 'ir', name: 'Iran', dial: '+98' },
  { code: 'iq', name: 'Iraq', dial: '+964' },
  { code: 'ie', name: 'Ireland', dial: '+353' },
  { code: 'il', name: 'Israel', dial: '+972' },
  { code: 'it', name: 'Italy', dial: '+39' },
  { code: 'jm', name: 'Jamaica', dial: '+1' },
  { code: 'jp', name: 'Japan', dial: '+81' },
  { code: 'jo', name: 'Jordan', dial: '+962' },
  { code: 'kz', name: 'Kazakhstan', dial: '+7' },
  { code: 'ke', name: 'Kenya', dial: '+254' },
  { code: 'kw', name: 'Kuwait', dial: '+965' },
  { code: 'lv', name: 'Latvia', dial: '+371' },
  { code: 'lb', name: 'Lebanon', dial: '+961' },
  { code: 'lt', name: 'Lithuania', dial: '+370' },
  { code: 'lu', name: 'Luxembourg', dial: '+352' },
  { code: 'my', name: 'Malaysia', dial: '+60' },
  { code: 'mt', name: 'Malta', dial: '+356' },
  { code: 'mx', name: 'Mexico', dial: '+52' },
  { code: 'mc', name: 'Monaco', dial: '+377' },
  { code: 'ma', name: 'Morocco', dial: '+212' },
  { code: 'np', name: 'Nepal', dial: '+977' },
  { code: 'nl', name: 'Netherlands', dial: '+31' },
  { code: 'nz', name: 'New Zealand', dial: '+64' },
  { code: 'ng', name: 'Nigeria', dial: '+234' },
  { code: 'no', name: 'Norway', dial: '+47' },
  { code: 'om', name: 'Oman', dial: '+968' },
  { code: 'pk', name: 'Pakistan', dial: '+92' },
  { code: 'pa', name: 'Panama', dial: '+507' },
  { code: 'py', name: 'Paraguay', dial: '+595' },
  { code: 'pe', name: 'Peru', dial: '+51' },
  { code: 'ph', name: 'Philippines', dial: '+63' },
  { code: 'pl', name: 'Poland', dial: '+48' },
  { code: 'pt', name: 'Portugal', dial: '+351' },
  { code: 'qa', name: 'Qatar', dial: '+974' },
  { code: 'ro', name: 'Romania', dial: '+40' },
  { code: 'ru', name: 'Russia', dial: '+7' },
  { code: 'sa', name: 'Saudi Arabia', dial: '+966' },
  { code: 'sg', name: 'Singapore', dial: '+65' },
  { code: 'sk', name: 'Slovakia', dial: '+421' },
  { code: 'si', name: 'Slovenia', dial: '+386' },
  { code: 'za', name: 'South Africa', dial: '+27' },
  { code: 'kr', name: 'South Korea', dial: '+82' },
  { code: 'es', name: 'Spain', dial: '+34' },
  { code: 'lk', name: 'Sri Lanka', dial: '+94' },
  { code: 'se', name: 'Sweden', dial: '+46' },
  { code: 'ch', name: 'Switzerland', dial: '+41' },
  { code: 'tw', name: 'Taiwan', dial: '+886' },
  { code: 'th', name: 'Thailand', dial: '+66' },
  { code: 'tr', name: 'Turkey', dial: '+90' },
  { code: 'ua', name: 'Ukraine', dial: '+380' },
  { code: 'ae', name: 'United Arab Emirates', dial: '+971' },
  { code: 'gb', name: 'United Kingdom', dial: '+44' },
  { code: 'us', name: 'United States', dial: '+1' },
  { code: 'uy', name: 'Uruguay', dial: '+598' },
  { code: 'uz', name: 'Uzbekistan', dial: '+998' },
  { code: 've', name: 'Venezuela', dial: '+58' },
  { code: 'vn', name: 'Vietnam', dial: '+84' },
];

export default function ContactContent() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [selectedCountry, setSelectedCountry] = useState({
    code: 'in',
    name: 'India',
    dial: '+91'
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const runInit = () => {
      const $ = window.jQuery;
      if (!$) return;

      if (window.WOW) {
        try { new window.WOW().init(); } catch (e) {}
      }
    };

    if (window.jQuery) {
      runInit();
    } else {
      const iv = setInterval(() => {
        if (window.jQuery) { clearInterval(iv); runInit(); }
      }, 50);
      return () => clearInterval(iv);
    }
  }, []);

  // Handle outside clicks to close the custom dropdown
  useEffect(() => {
    if (!isDropdownOpen) return;
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.ct-phone-select-custom') && !e.target.closest('.ct-phone-dropdown')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isDropdownOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const submissionData = {
      ...formData,
      fullPhone: `${selectedCountry.dial} ${formData.phone}`
    };
    
    console.log("Submitting form:", submissionData);

    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      setSelectedCountry({ code: 'in', name: 'India', dial: '+91' });
    }, 1500);
  };

  const filteredCountries = countriesList.filter((c) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    // Common abbreviation aliases
    const aliases = {
      usa: 'us', america: 'us',
      uk: 'gb', britain: 'gb', england: 'gb',
      uae: 'ae', dubai: 'ae',
    };
    const resolvedCode = aliases[q];
    if (resolvedCode && c.code === resolvedCode) return true;
    return (
      c.name.toLowerCase().includes(q) ||
      c.dial.includes(q) ||
      c.code.toLowerCase().includes(q) ||
      c.name.toLowerCase().replace(/\s+/g, '').includes(q.replace(/\s+/g, ''))
    );
  });

  const techStack = [
    { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
    { name: 'Microsoft Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
    { name: 'Shopify', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Shopify.svg' },
    { name: 'Frappe', logo: 'https://frappe.io/files/frappe-logo.png' },
  ];

  return (
    <div suppressHydrationWarning>
      <style>{`
        /* Hero Banner */
        .ct-hero {
          background: linear-gradient(120deg, #0a0f3d 0%, #1a237e 50%, #0d1554 100%);
          position: relative; 
          overflow: hidden; 
          padding: 130px 0 90px; 
          text-align: center;
        }
        .ct-hero::before {
          content: ''; 
          position: absolute; 
          inset: 0;
          background: url('/wp-content/uploads/2024/04/02-2.jpg') center/cover no-repeat; 
          opacity: .18;
          z-index: 1;
        }
        .ct-hero-inner { 
          position: relative; 
          z-index: 2; 
        }
        .ct-hero h1 { 
          font-size: clamp(2.4rem, 5vw, 4rem); 
          font-weight: 800; 
          color: #fff; 
          margin: 0 0 16px; 
          font-family: 'Kumbh Sans', sans-serif;
        }
        .ct-breadcrumb { 
          color: rgba(255, 255, 255, .7); 
          font-size: 15px; 
        }
        .ct-breadcrumb a { 
          color: #fff; 
          font-weight: 600; 
          text-decoration: none; 
          transition: color 0.3s;
        }
        .ct-breadcrumb a:hover {
          color: #384BFF;
        }
        .ct-breadcrumb span { 
          margin: 0 8px; 
        }

        /* Contact Main Content */
        .ct-section {
          padding: 120px 0;
          background: #ffffff;
        }
        .ct-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: flex-start;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        @media (max-width: 991px) {
          .ct-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }
        }

        /* Left Side Info Details */
        .ct-info-col {
          display: flex;
          flex-direction: column;
        }
        .ct-capsule {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #e2e8f0;
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
          color: #585858;
          width: fit-content;
          margin-bottom: 24px;
          background: #ffffff;
        }
        .ct-capsule i {
          color: #384BFF;
        }
        .ct-info-col h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #0f0d1d;
          line-height: 1.2;
          margin-bottom: 20px;
          font-family: 'Kumbh Sans', sans-serif;
        }
        .ct-info-col > p {
          font-size: 16px;
          color: #585858;
          line-height: 1.7;
          margin-bottom: 40px;
        }
        
        .ct-info-list {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .ct-info-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }
        .ct-icon-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #f0f4ff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ct-icon-circle i {
          font-size: 18px;
          color: #384BFF;
        }
        .ct-info-text {
          display: flex;
          flex-direction: column;
        }
        .ct-info-text span {
          font-size: 13px;
          color: #8A8A8A;
          margin-bottom: 4px;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        .ct-info-text p {
          font-size: 16px;
          color: #0f0d1d;
          font-weight: 700;
          line-height: 1.5;
          margin: 0;
        }
        .ct-info-text p a {
          color: #0f0d1d;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .ct-info-text p a:hover {
          color: #384BFF;
        }

        /* Right Side Form Card */
        .ct-form-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.02);
        }
        @media (max-width: 575px) {
          .ct-form-card {
            padding: 24px;
          }
        }
        .ct-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        @media (max-width: 575px) {
          .ct-form-row {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
        .ct-form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }
        .ct-form-group.no-margin {
          margin-bottom: 0;
        }
        .ct-form-group label {
          font-size: 14px;
          font-weight: 700;
          color: #0f0d1d;
        }
        .ct-input {
          width: 100%;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 12px 16px;
          font-size: 15px;
          color: #0f0d1d;
          transition: all 0.3s;
          background: #ffffff;
          font-family: inherit;
        }
        .ct-input:focus {
          outline: none;
          border-color: #384BFF;
          box-shadow: 0 0 0 3px rgba(56, 75, 255, 0.1);
        }
        .ct-textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .ct-phone-input-wrap {
          display: flex;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          overflow: visible;
          position: relative;
          transition: all 0.3s;
        }
        .ct-phone-input-wrap:focus-within {
          border-color: #384BFF;
          box-shadow: 0 0 0 3px rgba(56, 75, 255, 0.1);
        }
        
        /* Custom Dropdown Trigger */
        .ct-phone-select-custom {
          position: relative;
          background: #f8fafc;
          border: none;
          border-right: 1px solid #cbd5e1;
          display: flex;
          align-items: center;
          padding: 0 16px;
          cursor: pointer;
          user-select: none;
          gap: 8px;
          min-width: 115px;
          border-top-left-radius: 7px;
          border-bottom-left-radius: 7px;
        }
        .ct-phone-select-custom:hover {
          background: #f1f5f9;
        }
        .ct-selected-flag {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          object-fit: cover;
          display: inline-block;
          border: 1px solid rgba(0, 0, 0, 0.08);
          flex-shrink: 0;
        }
        .ct-selected-code {
          font-size: 14px;
          font-weight: 700;
          color: #0f0d1d;
          white-space: nowrap;
        }
        
        /* Dropdown custom lists */
        .ct-phone-dropdown {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          width: 320px;
          max-height: 280px;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          z-index: 999;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .ct-search-box {
          position: sticky;
          top: 0;
          background: #ffffff;
          padding: 8px;
          border-bottom: 1px solid #e2e8f0;
          z-index: 2;
        }
        .ct-search-input {
          width: 100%;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          padding: 8px 12px;
          font-size: 14px;
          outline: none;
          font-family: inherit;
          color: #0f0d1d !important;
          background: #ffffff !important;
          -webkit-text-fill-color: #0f0d1d !important;
        }
        .ct-search-input::placeholder {
          color: #94a3b8 !important;
          -webkit-text-fill-color: #94a3b8 !important;
          opacity: 1;
        }
        .ct-search-input:focus {
          border-color: #384BFF;
        }
        .ct-country-list {
          overflow-y: auto;
          flex-grow: 1;
          padding: 4px 0;
        }
        .ct-country-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 16px;
          cursor: pointer;
          transition: background 0.2s;
          font-size: 14px;
          color: #0f0d1d;
        }
        .ct-country-row:hover {
          background: #f1f5f9;
        }
        .ct-country-row-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .ct-country-name {
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 180px;
        }
        .ct-country-dial {
          font-weight: 700;
          color: #585858;
        }

        .ct-phone-input {
          border: none;
          border-radius: 0;
          padding: 12px 16px;
          flex-grow: 1;
          border-top-right-radius: 7px;
          border-bottom-right-radius: 7px;
        }
        .ct-phone-input:focus {
          box-shadow: none;
          border-color: transparent;
        }

        .ct-submit-btn {
          background: #384BFF;
          color: #ffffff;
          font-weight: 700;
          font-size: 15px;
          padding: 14px 28px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 4px 14px rgba(56, 75, 255, 0.2);
        }
        .ct-submit-btn:hover {
          background: #1e2ebe;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(56, 75, 255, 0.3);
        }
        .ct-submit-btn:active {
          transform: translateY(0);
        }
        .ct-submit-btn:disabled {
          background: #cbd5e1;
          color: #64748b;
          cursor: not-allowed;
          box-shadow: none;
        }

        /* Tech Stack Strip Section */
        .ct-tech-strip {
          background: #ffffff;
          padding: 100px 0;
          border-top: 1px solid #e8ecf0;
          border-bottom: 1px solid #e8ecf0;
        }
        .ct-tech-title {
          text-align: center;
          font-size: 15px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 48px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-family: 'Kumbh Sans', sans-serif;
        }
        .ct-tech-marquee-outer {
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
        }
        .ct-tech-marquee {
          display: flex;
          animation: ct-scroll 28s linear infinite;
          width: max-content;
        }
        .ct-tech-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes ct-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ct-tech-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          padding: 0 56px;
          cursor: default;
        }
        .ct-tech-item img {
          width: 56px;
          height: 56px;
          object-fit: contain;
          filter: none;
          transition: transform 0.35s;
        }
        .ct-tech-item:hover img {
          transform: scale(1.12);
        }
        .ct-tech-item span {
          font-size: 13px;
          font-weight: 600;
          color: #64748b;
          letter-spacing: 0.2px;
          transition: color 0.3s;
          font-family: 'Kumbh Sans', sans-serif;
          white-space: nowrap;
        }
        .ct-tech-item:hover span {
          color: #384BFF;
        }

        /* Alert Status Styling */
        .ct-status-alert {
          padding: 14px 18px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ct-status-success {
          background: #ecfdf5;
          color: #065f46;
          border: 1px solid #a7f3d0;
        }
      `}</style>

      <Header />

      <main>
        {/* Banner Hero Section */}
        <section className="ct-hero">
          <div className="container ct-hero-inner">
            <h1>Contact Us</h1>
            <div className="ct-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span style={{ color: "#384BFF", fontWeight: "600" }}>Contact</span>
            </div>
          </div>
        </section>

        {/* Form and Info Section */}
        <section className="ct-section">
          <div className="ct-grid">
            
            {/* Info details block */}
            <div className="ct-info-col wow fadeInLeft" data-wow-delay=".3s">
              <div className="ct-capsule">
                <i className="fa-solid fa-envelope"></i>
                <span>Contact</span>
              </div>
              <h2>How can we help<br />you today?</h2>
              <p>Our dedicated customer support and technical engineering teams are just a message or call away. Reach out to discuss your software project roadmap, cloud architectural audits, or general inquiries.</p>
              
              <div className="ct-info-list">
                <div className="ct-info-item">
                  <div className="ct-icon-circle">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="ct-info-text">
                    <span>Email</span>
                    <p><a href="mailto:info@infatoz.com">info@infatoz.com</a></p>
                  </div>
                </div>

                <div className="ct-info-item">
                  <div className="ct-icon-circle">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="ct-info-text">
                    <span>Phone</span>
                    <p><a href="tel:+917019058591">+91 7019058591</a></p>
                  </div>
                </div>

                <div className="ct-info-item">
                  <div className="ct-icon-circle">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="ct-info-text">
                    <span>Location</span>
                    <p style={{ fontWeight: "600" }}>1-42, Takkimane, Mahabaleshwara Nandanavana, Kergal, Kundapura, Udupi, Karnataka - 576219.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form details block */}
            <div className="ct-form-card wow fadeInRight" data-wow-delay=".3s">
              {status === 'success' && (
                <div className="ct-status-alert ct-status-success">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Thank you! Your message has been sent successfully. We will get back to you shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="ct-form-row">
                  <div className="ct-form-group no-margin">
                    <label htmlFor="firstName">First name*</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="e.g. Billy"
                      className="ct-input"
                      required
                    />
                  </div>
                  <div className="ct-form-group no-margin">
                    <label htmlFor="lastName">Last name*</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="e.g. Jhon"
                      className="ct-input"
                      required
                    />
                  </div>
                </div>

                <div className="ct-form-group">
                  <label htmlFor="email">Work email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className="ct-input"
                    required
                  />
                </div>

                <div className="ct-form-group">
                  <label htmlFor="phone">Phone number*</label>
                  <div className="ct-phone-input-wrap">
                    
                    {/* Custom State Dropdown Selector */}
                    <div 
                      className="ct-phone-select-custom" 
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <img 
                        src={`https://flagcdn.com/w40/${selectedCountry.code}.png`} 
                        alt={selectedCountry.name} 
                        className="ct-selected-flag" 
                      />
                      <span className="ct-selected-code">{selectedCountry.code.toUpperCase()} {selectedCountry.dial}</span>
                      <i className="fa-solid fa-chevron-down" style={{ fontSize: '11px', color: '#64748b' }}></i>
                    </div>

                    {/* Custom Dropdown Country Lists Panel */}
                    {isDropdownOpen && (
                      <div className="ct-phone-dropdown">
                        <div className="ct-search-box">
                          <input 
                            type="text" 
                            placeholder="Search country or code..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="ct-search-input"
                            onClick={(e) => e.stopPropagation()}
                            autoFocus
                          />
                        </div>
                        <div className="ct-country-list">
                          {filteredCountries.length > 0 ? (
                            filteredCountries.map((country) => (
                              <div 
                                key={country.code} 
                                className="ct-country-row"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedCountry(country);
                                  setIsDropdownOpen(false);
                                  setSearchQuery('');
                                }}
                              >
                                <div className="ct-country-row-left">
                                  <img 
                                    src={`https://flagcdn.com/w40/${country.code}.png`} 
                                    alt={country.name} 
                                    className="ct-selected-flag" 
                                  />
                                  <span className="ct-country-name">{country.name}</span>
                                </div>
                                <span className="ct-country-dial">{country.dial}</span>
                              </div>
                            ))
                          ) : (
                            <div style={{ padding: '12px 16px', color: '#64748b', fontSize: '14px', textAlign: 'center' }}>
                              No country found
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      className="ct-input ct-phone-input"
                      required
                    />
                  </div>
                </div>

                <div className="ct-form-group">
                  <label htmlFor="message">Message*</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter a question, feedback, or suggestions..."
                    className="ct-input ct-textarea"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="ct-submit-btn"
                >
                  {status === 'sending' ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin"></i> Sending...
                    </>
                  ) : (
                    <>
                      Submit <i className="fa-solid fa-arrow-right-long"></i>
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </section>

        {/* Next-Gen Tech Stack Strip */}
        <section className="ct-tech-strip">
          <p className="ct-tech-title">Next-Generation Development Technologies</p>
          <div className="ct-tech-marquee-outer">
            <div className="ct-tech-marquee">
              {[...techStack, ...techStack].map((tech, i) => (
                <div key={i} className="ct-tech-item">
                  <img src={tech.logo} alt={tech.name} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
