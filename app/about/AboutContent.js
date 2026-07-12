'use client';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutContent() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const runInit = () => {
      const $ = window.jQuery;
      if (!$) return;

      if (window.WOW) {
        try { new window.WOW().init(); } catch (e) {}
      }

      const Swiper = window.Swiper;
      if (Swiper) {
        try {
          new Swiper('.ab-project-slider', {
            spaceBetween: 24,
            speed: 800,
            loop: true,
            autoplay: { delay: 3000, disableOnInteraction: false },
            navigation: { nextEl: '.ab-array-next', prevEl: '.ab-array-prev' },
            breakpoints: {
              1199: { slidesPerView: 3 },
              767:  { slidesPerView: 2 },
              0:    { slidesPerView: 1 },
            },
          });
        } catch (e) {}

        try {
          new Swiper('.ab-brand-slider', {
            spaceBetween: 40,
            loop: true,
            speed: 2000,
            autoplay: { delay: 0, disableOnInteraction: false },
            freeMode: true,
            breakpoints: {
              1199: { slidesPerView: 5 },
              767:  { slidesPerView: 4 },
              0:    { slidesPerView: 3 },
            },
          });
        } catch (e) {}
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

  const offerings = [
    { icon: '/wp-content/uploads/2024/04/s-icon-1.svg', label: 'Website' },
    { icon: '/wp-content/uploads/2024/04/s-icon-2.svg', label: 'Android' },
    { icon: '/wp-content/uploads/2024/04/s-icon-3.svg', label: 'iOS' },
    { icon: '/wp-content/uploads/2024/04/s-icon-4.svg', label: 'Watch' },
    { icon: '/wp-content/uploads/2024/04/01.svg',       label: 'TV' },
    { icon: '/wp-content/uploads/2024/04/02.svg',       label: 'IoT' },
  ];

  const projects = [
    { img: '/wp-content/uploads/2024/04/blog-7.jpg', cat: 'Technology', title: 'Cyber Security Test' },
    { img: '/wp-content/uploads/2024/04/blog-8.jpg', cat: 'Solution',   title: 'Backup & Recovery' },
    { img: '/wp-content/uploads/2024/04/blog-2.jpg', cat: 'Security',   title: 'Data Analysis' },
    { img: '/wp-content/uploads/2024/04/blog-1.jpg', cat: 'Technology', title: 'Cloud Computing' },
  ];

  const team = [
    { img: '/wp-content/uploads/2024/04/13-1.jpg', name: 'Cameron Williamson', role: 'Scrum Master' },
    { img: '/wp-content/uploads/2024/04/02-4.jpg', name: 'Leslie Alexander',   role: 'Engineering' },
    { img: '/wp-content/uploads/2024/04/03-3.jpg', name: 'Ronald Richards',    role: 'UI/UX Designer' },
    { img: '/wp-content/uploads/2024/04/01-4.jpg', name: 'Darrell Steward',    role: 'Web Designer' },
  ];

  const marqueeItems = ['Cyber Security', 'IT Solution', 'Technology', 'Data Security'];

  return (
    <div suppressHydrationWarning>
      <style>{`
        .ab-hero {
          background: linear-gradient(120deg,#0a0f3d 0%,#1a237e 50%,#0d1554 100%);
          position: relative; overflow: hidden; padding: 130px 0 90px; text-align: center;
        }
        .ab-hero::before {
          content:''; position:absolute; inset:0;
          background:url('/wp-content/uploads/2024/04/02-2.jpg') center/cover no-repeat; opacity:.18;
        }
        .ab-hero-inner { position:relative; z-index:2; }
        .ab-hero h1 { font-size:clamp(2.4rem,5vw,4rem); font-weight:800; color:#fff; margin:0 0 16px; }
        .ab-breadcrumb { color:rgba(255,255,255,.7); font-size:15px; }
        .ab-breadcrumb a { color:#fff; font-weight:600; text-decoration:none; }
        .ab-breadcrumb span { margin:0 8px; }

        .ab-container { max-width:1200px; margin:0 auto; padding:0 24px; }
        .ab-label { display:inline-block; color:#4f46e5; font-size:13px; font-weight:700; letter-spacing:2px; text-transform:uppercase; margin-bottom:12px; }
        .ab-btn { display:inline-flex; align-items:center; gap:10px; background:#4f46e5; color:#fff; padding:14px 32px; border-radius:50px; font-weight:600; font-size:15px; text-decoration:none; transition:background .3s; }
        .ab-btn:hover { background:#3730a3; color:#fff; }

        /* About 2-col */
        .ab-about-section { padding:100px 0; background:#fff; }
        .ab-about-grid { display:grid; grid-template-columns:1fr 1fr; gap:70px; align-items:center; }
        @media(max-width:900px){ .ab-about-grid{ grid-template-columns:1fr; gap:50px; } }

        .ab-img-wrap { position:relative; min-height:460px; }
        .ab-img-main { width:70%; height:460px; object-fit:cover; border-radius:16px; display:block; box-shadow:0 20px 60px rgba(0,0,0,.15); }
        .ab-img-overlay { position:absolute; bottom:0; right:0; width:55%; height:300px; object-fit:cover; border-radius:16px; border:6px solid #fff; box-shadow:0 16px 40px rgba(0,0,0,.18); }
        .ab-circle-shape { position:absolute; top:20px; right:10%; width:90px; opacity:.4; }
        .ab-counter-badge { position:absolute; bottom:30px; left:0; background:#4f46e5; color:#fff; border-radius:12px; padding:16px 24px; display:flex; align-items:center; gap:14px; box-shadow:0 8px 30px rgba(79,70,229,.4); z-index:3; }
        .ab-counter-badge .ab-cnt-icon img { width:40px; height:40px; filter:brightness(0) invert(1); }
        .ab-counter-badge h3 { font-size:22px; font-weight:800; margin:0; color:#fff; }
        .ab-counter-badge p { font-size:13px; margin:2px 0 0; color:rgba(255,255,255,.8); }

        .ab-about-content h2 { font-size:clamp(1.8rem,3vw,2.6rem); font-weight:800; color:#0f172a; line-height:1.25; margin:0 0 20px; }
        .ab-about-content h2 span { color:#4f46e5; }
        .ab-about-content > p { color:#64748b; font-size:16px; line-height:1.8; margin-bottom:32px; }
        .ab-icon-list { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:36px; }
        .ab-icon-item { display:flex; align-items:flex-start; gap:14px; }
        .ab-icon-circle { width:54px; height:54px; border-radius:50%; background:#ede9fe; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .ab-icon-circle img { width:28px; height:28px; filter:invert(30%) sepia(80%) saturate(2000%) hue-rotate(220deg); }
        .ab-icon-item h4 { font-size:15px; font-weight:700; color:#0f172a; margin:0 0 4px; }
        .ab-icon-item p  { font-size:13px; color:#64748b; margin:0; }
        .ab-author-row { display:flex; align-items:center; gap:20px; margin-top:8px; flex-wrap:wrap; }
        .ab-author-img { width:52px; height:52px; border-radius:50%; object-fit:cover; border:3px solid #4f46e5; }
        .ab-author-info h6 { font-size:15px; font-weight:700; color:#0f172a; margin:0; }
        .ab-author-info p  { font-size:13px; color:#64748b; margin:0; }

        /* Offerings */
        .ab-offering-section { background:#06082e; padding:90px 0 100px; position:relative; overflow:hidden; }
        .ab-offering-section::after { content:''; position:absolute; right:0; top:0; width:300px; height:100%; background:url('/wp-content/uploads/2024/04/mask-shape-1.png') right center/contain no-repeat; opacity:.07; }
        .ab-offering-header { text-align:center; margin-bottom:50px; }
        .ab-offering-header .ab-label { color:#818cf8; }
        .ab-offering-header h2 { font-size:clamp(1.8rem,3vw,2.5rem); font-weight:800; color:#fff; margin:0; }
        .ab-offering-grid { display:grid; grid-template-columns:repeat(6,1fr); gap:16px; }
        @media(max-width:992px){ .ab-offering-grid{ grid-template-columns:repeat(3,1fr); } }
        @media(max-width:576px){ .ab-offering-grid{ grid-template-columns:repeat(2,1fr); } }
        .ab-offer-card { background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.1); border-radius:14px; padding:30px 16px 24px; text-align:center; cursor:pointer; transition:all .3s ease; }
        .ab-offer-card:hover, .ab-offer-card.ab-active { background:#4f46e5; border-color:#4f46e5; transform:translateY(-6px); box-shadow:0 16px 40px rgba(79,70,229,.35); }
        .ab-offer-icon { width:60px; height:60px; background:rgba(255,255,255,.08); border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 16px; transition:background .3s; }
        .ab-offer-card:hover .ab-offer-icon, .ab-offer-card.ab-active .ab-offer-icon { background:rgba(255,255,255,.2); }
        .ab-offer-icon img { width:30px; height:30px; filter:brightness(0) invert(1); }
        .ab-offer-card h5 { color:#fff; font-size:14px; font-weight:700; margin:0; }

        /* Projects */
        .ab-project-section { padding:100px 0; background:#f8fafc; position:relative; overflow:hidden; }
        .ab-project-header { display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:48px; flex-wrap:wrap; gap:20px; }
        .ab-project-header h2 { font-size:clamp(1.8rem,3vw,2.5rem); font-weight:800; color:#0f172a; margin:0; }
        .ab-nav-btns { display:flex; gap:12px; }
        .ab-nav-btn { width:48px; height:48px; border-radius:50%; border:2px solid #4f46e5; background:transparent; color:#4f46e5; font-size:18px; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all .3s; }
        .ab-nav-btn:hover { background:#4f46e5; color:#fff; }
        .ab-project-item { position:relative; border-radius:16px; overflow:hidden; box-shadow:0 8px 30px rgba(0,0,0,.1); }
        .ab-project-item img { width:100%; height:300px; object-fit:cover; display:block; transition:transform .5s ease; }
        .ab-project-item:hover img { transform:scale(1.05); }
        .ab-project-overlay { position:absolute; bottom:0; left:0; right:0; background:linear-gradient(transparent,rgba(10,15,61,.9)); padding:60px 24px 24px; }
        .ab-project-overlay p { color:#818cf8; font-size:13px; font-weight:600; text-transform:uppercase; letter-spacing:1px; margin:0 0 6px; }
        .ab-project-overlay h4 { color:#fff; font-size:18px; font-weight:700; margin:0; }
        .ab-project-arrow { position:absolute; top:20px; right:20px; width:38px; height:38px; background:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#4f46e5; font-size:14px; text-decoration:none; transition:background .3s; }
        .ab-project-arrow:hover { background:#4f46e5; color:#fff; }

        /* Marquee */
        .ab-marquee-section { background:#fff; padding:40px 0; border-top:1px solid #e2e8f0; border-bottom:1px solid #e2e8f0; overflow:hidden; }
        .ab-marquee-track { display:flex; gap:60px; animation:ab-scroll 20s linear infinite; white-space:nowrap; }
        @keyframes ab-scroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .ab-marquee-item { display:flex; align-items:center; gap:16px; flex-shrink:0; }
        .ab-marquee-item img { width:20px; opacity:.6; }
        .ab-marquee-item span { font-size:20px; font-weight:700; color:#0f172a; text-transform:uppercase; letter-spacing:2px; }
        .ab-marquee-item span.ab-colored { color:#4f46e5; }

        /* Team */
        .ab-team-section { padding:100px 0; background:#0b0f3d; }
        .ab-team-header { display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:50px; flex-wrap:wrap; gap:20px; }
        .ab-team-header h2 { font-size:clamp(1.8rem,3vw,2.5rem); font-weight:800; color:#fff; margin:0; }
        .ab-team-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:24px; }
        @media(max-width:992px){ .ab-team-grid{ grid-template-columns:repeat(2,1fr); } }
        @media(max-width:576px){ .ab-team-grid{ grid-template-columns:1fr; } }
        .ab-team-card { border-radius:16px; overflow:hidden; background:#12175e; box-shadow:0 8px 30px rgba(0,0,0,.3); transition:transform .3s; }
        .ab-team-card:hover { transform:translateY(-8px); }
        .ab-team-img-wrap { position:relative; overflow:hidden; }
        .ab-team-img-wrap img { width:100%; height:280px; object-fit:cover; object-position:center top; display:block; transition:transform .5s; }
        .ab-team-card:hover .ab-team-img-wrap img { transform:scale(1.05); }
        .ab-team-social { position:absolute; inset:0; background:rgba(79,70,229,.85); display:flex; align-items:center; justify-content:center; gap:14px; opacity:0; transition:opacity .3s; }
        .ab-team-card:hover .ab-team-social { opacity:1; }
        .ab-team-social a { width:38px; height:38px; background:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#4f46e5; font-size:14px; text-decoration:none; transition:all .3s; }
        .ab-team-social a:hover { background:#4f46e5; color:#fff; }
        .ab-team-info { padding:20px; text-align:center; }
        .ab-team-info h3 { font-size:17px; font-weight:700; color:#fff; margin:0 0 6px; }
        .ab-team-info p  { font-size:13px; color:#a5b4fc; margin:0; }

        /* Brands */
        .ab-brands-section { padding:60px 0; background:#fff; border-top:1px solid #e2e8f0; }
        .ab-brands-label { text-align:center; font-size:15px; font-weight:600; color:#64748b; margin-bottom:32px; }
        .swiper.ab-brand-slider .swiper-slide { display:flex; align-items:center; justify-content:center; opacity:.5; transition:opacity .3s; }
        .swiper.ab-brand-slider .swiper-slide:hover { opacity:1; }
        .swiper.ab-brand-slider img { max-height:40px; width:auto; }
      `}</style>

      <Header />

      {/* ── HERO ── */}
      <section className="ab-hero">
        <div className="ab-hero-inner">
          <h1>About Us</h1>
          <nav className="ab-breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            About Us
          </nav>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="ab-about-section">
        <div className="ab-container">
          <div className="ab-about-grid">

            {/* Image column */}
            <div className="ab-img-wrap">
              <img className="ab-img-main" src="/wp-content/uploads/2024/04/03-1.jpg" alt="About Infatoz" />
              <img className="ab-img-overlay" src="/wp-content/uploads/2024/04/04-2.jpg" alt="Team" />
              <img className="ab-circle-shape" src="/wp-content/uploads/2024/04/circle.png" alt="" />
              <div className="ab-counter-badge">
                <div className="ab-cnt-icon">
                  <img src="/wp-content/uploads/2024/04/icon-1.svg" alt="" />
                </div>
                <div>
                  <h3>25 Years</h3>
                  <p>Of Experience</p>
                </div>
              </div>
            </div>

            {/* Content column */}
            <div className="ab-about-content">
              <span className="ab-label">ABOUT INFATOZ</span>
              <h2>We Are Increasing Business Success With <span>Technology</span></h2>
              <p>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum.
              </p>
              <div className="ab-icon-list">
                <div className="ab-icon-item">
                  <div className="ab-icon-circle">
                    <img src="/wp-content/uploads/2024/04/icon-2.svg" alt="" />
                  </div>
                  <div>
                    <h4>Problem Solving</h4>
                    <p>Providing creative solutions to complex business problems.</p>
                  </div>
                </div>
                <div className="ab-icon-item">
                  <div className="ab-icon-circle">
                    <img src="/wp-content/uploads/2024/04/icon-3.svg" alt="" />
                  </div>
                  <div>
                    <h4>Mission &amp; Vision</h4>
                    <p>Committed to driving global success through technology.</p>
                  </div>
                </div>
              </div>
              <div className="ab-author-row">
                <a href="#" className="ab-btn">Explore More <i className="fa-solid fa-arrow-right-long"></i></a>
                <img className="ab-author-img" src="/wp-content/uploads/2024/04/author.png" alt="Ronald Richards" />
                <div className="ab-author-info">
                  <h6>Ronald Richards</h6>
                  <p>Co, Founder</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── OFFERINGS ── */}
      <section className="ab-offering-section">
        <div className="ab-container">
          <div className="ab-offering-header">
            <span className="ab-label">OUR OFFERING</span>
            <h2>Enhance And Pioneer Using <br />Technology Trends</h2>
          </div>
          <div className="ab-offering-grid">
            {offerings.map((o, i) => (
              <div key={i} className={`ab-offer-card${i === 2 ? ' ab-active' : ''}`}>
                <div className="ab-offer-icon">
                  <img src={o.icon} alt={o.label} />
                </div>
                <h5>{o.label}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="ab-project-section">
        <div className="ab-container">
          <div className="ab-project-header">
            <div>
              <span className="ab-label">PROJECTS</span>
              <h2>Our Latest Incredible <br />Client&apos;s Projects</h2>
            </div>
            <div className="ab-nav-btns">
              <button className="ab-nav-btn ab-array-prev"><i className="fal fa-arrow-left"></i></button>
              <button className="ab-nav-btn ab-array-next"><i className="fal fa-arrow-right"></i></button>
            </div>
          </div>
          <div className="swiper ab-project-slider">
            <div className="swiper-wrapper">
              {projects.map((p, i) => (
                <div key={i} className="swiper-slide">
                  <div className="ab-project-item">
                    <img src={p.img} alt={p.title} />
                    <div className="ab-project-overlay">
                      <p>{p.cat}</p>
                      <h4>{p.title}</h4>
                    </div>
                    <a href="#" className="ab-project-arrow"><i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="ab-marquee-section">
        <div className="ab-marquee-track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="ab-marquee-item">
              <img src="/wp-content/uploads/2024/04/asterisk.svg" alt="" />
              <span className={i % 3 === 1 ? 'ab-colored' : ''}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="ab-team-section">
        <div className="ab-container">
          <div className="ab-team-header">
            <div>
              <span className="ab-label" style={{ color: '#818cf8' }}>Team Members</span>
              <h2>Our Dedicated Team <br />Members</h2>
            </div>
            <a href="#" className="ab-btn">All Members <i className="fa-solid fa-arrow-right-long"></i></a>
          </div>
          <div className="ab-team-grid">
            {team.map((m, i) => (
              <div key={i} className="ab-team-card">
                <div className="ab-team-img-wrap">
                  <img src={m.img} alt={m.name} />
                  <div className="ab-team-social">
                    <a href="#"><i className="fa fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
                <div className="ab-team-info">
                  <h3>{m.name}</h3>
                  <p>{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEXT-GEN TECH STRIP ── */}
      <section style={{background:'#ffffff',padding:'100px 0',borderTop:'1px solid #e8ecf0',borderBottom:'1px solid #e8ecf0'}}>
        <style>{`
          @keyframes ab-scroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
          .ab-section-title{text-align:center;font-size:15px;font-weight:700;color:#111827;margin-bottom:48px;text-transform:uppercase;letter-spacing:1.5px;font-family:'Kumbh Sans',sans-serif}
          .ab-marquee-outer{overflow:hidden;mask-image:linear-gradient(to right,transparent 0%,black 6%,black 94%,transparent 100%);-webkit-mask-image:linear-gradient(to right,transparent 0%,black 6%,black 94%,transparent 100%)}
          .ab-marquee{display:flex;animation:ab-scroll 28s linear infinite;width:max-content}
          .ab-marquee:hover{animation-play-state:paused}
          .ab-tech-item{display:flex;flex-direction:column;align-items:center;gap:14px;padding:0 56px;cursor:default}
          .ab-tech-item img{width:56px;height:56px;object-fit:contain;filter:none;transition:transform 0.35s}
          .ab-tech-item:hover img{transform:scale(1.12)}
          .ab-tech-item span{font-size:13px;font-weight:600;color:#64748b;letter-spacing:0.2px;transition:color 0.3s;font-family:'Kumbh Sans',sans-serif;white-space:nowrap}
          .ab-tech-item:hover span{color:#384BFF}
        `}</style>
        <p className="ab-section-title">Next-Generation Development Technologies</p>
        <div className="ab-marquee-outer">
          <div className="ab-marquee">
            {[
              {name:'React Native',logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'},
              {name:'Flutter',logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg'},
              {name:'Node.js',logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg'},
              {name:'Python',logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'},
              {name:'Google Cloud',logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg'},
              {name:'AWS',logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg'},
              {name:'Microsoft Azure',logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'},
              {name:'OpenAI',logo:'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg'},
              {name:'Shopify',logo:'https://cdn.simpleicons.org/shopify/96bf48'},
              {name:'Frappe',logo:'https://frappe.io/files/frappe-logo.png'},
              {name:'React Native',logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'},
              {name:'Flutter',logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg'},
              {name:'Node.js',logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg'},
              {name:'Python',logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'},
              {name:'Google Cloud',logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg'},
              {name:'AWS',logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg'},
              {name:'Microsoft Azure',logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'},
              {name:'OpenAI',logo:'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg'},
              {name:'Shopify',logo:'https://cdn.simpleicons.org/shopify/96bf48'},
              {name:'Frappe',logo:'https://frappe.io/files/frappe-logo.png'},
            ].map((tech, i) => (
              <div key={i} className="ab-tech-item">
                <img src={tech.logo} alt={tech.name} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
