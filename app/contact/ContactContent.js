'use client';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactContent() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
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
    }, 1500);
  };

  const brands = [
    { name: 'INTERCOM', icon: 'fa-comments' },
    { name: 'Dropbox', icon: 'fa-dropbox', brand: true },
    { name: 'slack', icon: 'fa-slack', brand: true },
    { name: 'zendesk', icon: 'fa-life-ring' },
    { name: 'Revolut', icon: 'fa-credit-card' },
    { name: 'HubSpot', icon: 'fa-hubspot', brand: true }
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
          overflow: hidden;
          transition: all 0.3s;
        }
        .ct-phone-input-wrap:focus-within {
          border-color: #384BFF;
          box-shadow: 0 0 0 3px rgba(56, 75, 255, 0.1);
        }
        .ct-phone-select {
          background: #f8fafc;
          border: none;
          border-right: 1px solid #cbd5e1;
          padding: 0 12px;
          font-size: 14px;
          font-weight: 600;
          color: #0f0d1d;
          cursor: pointer;
          outline: none;
        }
        .ct-phone-input {
          border: none;
          border-radius: 0;
          padding: 12px 16px;
          flex-grow: 1;
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

        /* Brands Banner Section */
        .ct-brands-section {
          padding: 70px 0;
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
          text-align: center;
        }
        .ct-brands-title {
          font-size: 15px;
          font-weight: 600;
          color: #64748b;
          margin-bottom: 35px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .ct-brands-grid {
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-wrap: wrap;
          gap: 40px;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .ct-brand-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 22px;
          font-weight: 700;
          color: #94a3b8;
          transition: color 0.3s;
          user-select: none;
        }
        .ct-brand-item:hover {
          color: #475569;
        }
        .ct-brand-item i {
          font-size: 26px;
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
                    <select className="ct-phone-select" aria-label="Country Code">
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+49">🇩🇪 +49</option>
                    </select>
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

        {/* Brands Banner Section */}
        <section className="ct-brands-section">
          <div className="container">
            <div className="ct-brands-title">Trusted by exceptional brands around the world</div>
            <div className="ct-brands-grid">
              {brands.map((b, i) => (
                <div key={i} className="ct-brand-item">
                  <i className={`fa-brands ${b.icon}`}></i>
                  <span>{b.name}</span>
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
