'use client';
import { useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

export default function HomeContent() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const runInit = () => {
      const $ = window.jQuery;
      if (!$) return;

      console.log("jQuery found, running initialization scripts...");

      // 1. Initialize Global WordPress Configs
      
      
      

      // 2. Setup Lazyload Background Observer
      try {
        const lazyloadRunObserver = () => {
          const lazyloadBackgrounds = document.querySelectorAll('.e-con.e-parent:not(.e-lazyloaded)');
          const lazyloadBackgroundObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                let lazyloadBackground = entry.target;
                if (lazyloadBackground) {
                  lazyloadBackground.classList.add('e-lazyloaded');
                }
                lazyloadBackgroundObserver.unobserve(entry.target);
              }
            });
          }, { rootMargin: '200px 0px 200px 0px' });
          lazyloadBackgrounds.forEach((lazyloadBackground) => {
            lazyloadBackgroundObserver.observe(lazyloadBackground);
          });
        };
        
        lazyloadRunObserver();
        
        const events = ['DOMContentLoaded', 'elementor/lazyload/observe'];
        events.forEach((event) => {
          document.addEventListener(event, lazyloadRunObserver);
        });
      } catch (err) {
        console.warn("Lazyload observer error:", err);
      }

      // 3. Initialize Swiper Sliders
      try {
        const Swiper = window.Swiper;
        if (Swiper) {
          // Brand Slider
          new Swiper(".brand-slider", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
            },
            breakpoints: {
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            },
          });

          // Service Slider
          new Swiper(".service-slider", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
            },
            breakpoints: {
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            },
          });

          // Project Slider
          new Swiper(".project-slider", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
            },
            pagination: {
              el: ".dot-3",
              clickable: true,
            },
            breakpoints: {
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            },
          });

          // Testimonial Slider
          new Swiper(".testimonial-slider", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            speed: 1500,
            autoplay: {
              delay: 1500,
              disableOnInteraction: false,
            },
            pagination: {
              el: ".dot-2",
              clickable: true,
            },
          });

          // Team Slider
          new Swiper(".team-slider", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
            },
            breakpoints: {
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            },
          });

          // News Slider
          new Swiper(".news-slider", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
            },
            breakpoints: {
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            },
          });
        }
      } catch (err) {
        console.warn("Swiper initialization error:", err);
      }

      // 4. Initialize WOW Animations
      try {
        if (window.WOW) {
          console.log("Initializing WOW.js animations...");
          new window.WOW().init();
        }
      } catch (err) {
        console.warn("WOW initialization error:", err);
      }
    };

    // Poll for jQuery loading
    if (window.jQuery && window.Swiper && window.WOW) {
      runInit();
    } else {
      const interval = setInterval(() => {
        if (window.jQuery && window.Swiper && window.WOW) {
          clearInterval(interval);
          runInit();
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div style={{ minHeight: "100vh" }} suppressHydrationWarning>
      <Header />
      <div id="content" className="site-content">
            <div data-elementor-type="wp-page" data-elementor-id="12" className="elementor elementor-12">
                <div className="elementor-element elementor-element-92fd0c6 e-con-full e-flex e-con e-parent"
                    data-id="92fd0c6" data-element_type="container" data-e-type="container">
                    <div className="elementor-element elementor-element-2050637 elementor-widget elementor-widget-infatoz-banner-with-image-widget"
                        data-id="2050637" data-element_type="widget" data-e-type="widget"
                        data-widget_type="infatoz-banner-with-image-widget.default">
                        <div className="elementor-widget-container">


                            


                            
                            <section className="hero-section fix hero-1 bg-cover"
                                style={{backgroundImage: "url('/wp-content/uploads/2024/04/hero-bg.jpg')"}}>
                                <div className="text-transparent">
                                    <h2>Technology</h2>
                                </div>
                                <div className="line-shape">

                                    <img decoding="async"
                                        src="wp-content/uploads/2024/04/line-shape-1.png"
                                        alt="" />
                                </div>
                                <div className="dot-shape">

                                    <img decoding="async"
                                        src="wp-content/uploads/2024/04/dot-shape.png"
                                        alt="" />
                                </div>
                                <div className="frame-shape">

                                    <img decoding="async"
                                        src="wp-content/uploads/2024/04/frame.png"
                                        alt="" />
                                </div>
                                <div className="mask-shape wow fadeInRight" data-wow-delay=".7s">

                                    <img decoding="async"
                                        src="wp-content/uploads/2024/04/mask-shape.png"
                                        alt="" />
                                </div>
                                <div className="container">
                                    <div className="row g-4 align-items-center">
                                        <div className="col-lg-8">
                                            <div className="hero-content">
                                                <div className="hero-subtitle">
                                                    <svg width="40" height="16" viewBox="0 0 40 16" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.5" y="0.5" width="25.6667" height="15" rx="7.5"
                                                            stroke="#384BFF" />
                                                        <rect x="13.3334" width="26.6667" height="16" rx="8"
                                                            fill="#384BFF" />
                                                    </svg>
                                                    <h6 className="wow fadeInUp" data-wow-delay=".2s">Best it Solution
                                                        Provider</h6>
                                                </div>
                                                <h1 className="wow fadeInUp" data-wow-delay=".4s">
                                                    Excellent It Services for Your Success </h1>
                                                 <p className="wow fadeInUp" data-wow-delay=".6s">
                                                     We provide specialized IT solutions and consulting services to help your business <br /> streamline operations, enhance security, and drive digital innovation. </p>
                                                <div className="hero-button">
                                                    <a href="/contact" className="theme-btn wow fadeInUp"
                                                        data-wow-delay=".8s">
                                                        Explore More <i className="fa-solid fa-arrow-right-long"></i>
                                                    </a>
                                                    <span className="button-text wow fadeInUp" data-wow-delay=".9s">
                                                        <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                                                            className="video-btn ripple video-popup">
                                                            <i className="fa-solid fa-play"></i>
                                                        </a>
                                                        <span className="ms-4 d-line"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="hero-image wow fadeInUp" data-wow-delay=".4s">

                                                <img decoding="async"
                                                    src="wp-content/uploads/2024/04/hero.png"
                                                    alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>





                        </div>
                    </div>
                </div>
                <div className="elementor-element elementor-element-d6aca3b e-con-full e-flex e-con e-parent"
                    data-id="d6aca3b" data-element_type="container" data-e-type="container">
                    <div className="elementor-element elementor-element-4985465 elementor-widget elementor-widget-infatoz-text-slide-widget"
                        data-id="4985465" data-element_type="widget" data-e-type="widget"
                        data-widget_type="infatoz-text-slide-widget.default">
                        <div className="elementor-widget-container">


                            


                            <div className="marque-section">
                                <div className="marquee-wrapper text-slider">
                                    <div className="marquee-inner to-left">
                                        <ul className="marqee-list d-flex">
                                            <li className="marquee-item">

                                                <span className="text-slider">Business</span><span className="text-slider"><img
                                                        decoding="async"
                                                        src="wp-content/uploads/2024/04/star.svg"
                                                        alt="" /></span>

                                                <span className="text-slider">IT Solution</span><span
                                                    className="text-slider"><img decoding="async"
                                                        src="wp-content/uploads/2024/04/star.svg"
                                                        alt="" /></span>

                                                <span className="text-slider">Work Process</span><span
                                                    className="text-slider"><img decoding="async"
                                                        src="wp-content/uploads/2024/04/star.svg"
                                                        alt="" /></span>

                                                <span className="text-slider">Technology</span><span
                                                    className="text-slider"><img decoding="async"
                                                        src="wp-content/uploads/2024/04/star.svg"
                                                        alt="" /></span>

                                                <span className="text-slider">Business</span><span className="text-slider"><img
                                                        decoding="async"
                                                        src="wp-content/uploads/2024/04/star.svg"
                                                        alt="" /></span>

                                                <span className="text-slider">IT Solution</span><span
                                                    className="text-slider"><img decoding="async"
                                                        src="wp-content/uploads/2024/04/star.svg"
                                                        alt="" /></span>

                                                <span className="text-slider">Technology</span><span
                                                    className="text-slider"><img decoding="async"
                                                        src="wp-content/uploads/2024/04/star.svg"
                                                        alt="" /></span>

                                                <span className="text-slider">Work Process</span><span
                                                    className="text-slider"><img decoding="async"
                                                        src="wp-content/uploads/2024/04/star.svg"
                                                        alt="" /></span>

                                                <span className="text-slider">Business</span><span className="text-slider"><img
                                                        decoding="async"
                                                        src="wp-content/uploads/2024/04/star.svg"
                                                        alt="" /></span>

                                                <span className="text-slider">IT Solution</span><span
                                                    className="text-slider"><img decoding="async"
                                                        src="wp-content/uploads/2024/04/star.svg"
                                                        alt="" /></span>

                                                <span className="text-slider">Technology</span><span
                                                    className="text-slider"><img decoding="async"
                                                        src="wp-content/uploads/2024/04/star.svg"
                                                        alt="" /></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
                <div className="elementor-element elementor-element-ab5ac23 e-grid e-con-boxed e-con e-parent"
                    data-id="ab5ac23" data-element_type="container" data-e-type="container">
                    <div className="e-con-inner">
                        <div className="elementor-element elementor-element-e669c77 elementor-widget elementor-widget-infatoz-about-image-widget"
                            data-id="e669c77" data-element_type="widget" data-e-type="widget"
                            data-widget_type="infatoz-about-image-widget.default">
                            <div className="elementor-widget-container">


                                


                                <div className="about-wrapper">
                                    <div className="about-image-items">
                                        <div className="counter-shape float-bob-y">
                                            <div className="icon">

                                                <img decoding="async"
                                                    src="wp-content/uploads/2024/04/icon-1.svg"
                                                    alt="" />
                                            </div>
                                            <div className="content">
                                                <h3><span className="count">6,561 </span>+</h3>
                                            </div>
                                        </div>
                                        <div className="video-box">
                                            <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                                                className="video-buttton video-popup">
                                                <i className="fa-solid fa-play"></i>

                                                <img decoding="async" className="text-circle"
                                                    src="wp-content/uploads/2024/04/circle-text.png"
                                                    alt="" />
                                            </a>
                                        </div>
                                        <div className="about-image-1 bg-cover wow fadeInLeft" data-wow-delay=".3s"
                                            style={{backgroundImage: "url('/wp-content/uploads/2024/04/01.jpg')"}}>
                                            <div className="about-image-2 wow fadeInUp" data-wow-delay=".5s">

                                                <img decoding="async" className="text-circle"
                                                    src="wp-content/uploads/2024/04/02.jpg"
                                                    alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>




                            </div>
                        </div>
                        <div className="elementor-element elementor-element-c95b2e2 elementor-widget elementor-widget-infatoz-about-content-widget"
                            data-id="c95b2e2" data-element_type="widget" data-e-type="widget"
                            data-widget_type="infatoz-about-content-widget.default">
                            <div className="elementor-widget-container">


                                

                                <div className="about-wrapper">
                                    <div className="about-content">
                                        <div className="section-title">
                                            <span className="wow fadeInUp">ABOUT INFATOZ</span>
                                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                                We Are Increasing Business Success With <span>Technology</span> </h2>
                                        </div>
                                        <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                            It is a long established fact that a reader will be distracted the readable
                                            <br /> content of a page when looking at layout the point. </p>
                                        <div className="about-icon-items">

                                            <div className="icon-items wow fadeInUp" data-wow-delay=".7s">
                                                <div className="icon">
                                                    <img decoding="async"
                                                        src="wp-content/uploads/2024/04/icon-2.svg"
                                                        alt="" />
                                                </div>
                                                <div className="content">
                                                    <h4>Problem Solving</h4>
                                                    <p>
                                                        Providing creative solutions to complex business problems. </p>
                                                </div>
                                            </div>

                                            <div className="icon-items wow fadeInUp" data-wow-delay=".7s">
                                                <div className="icon">
                                                    <img decoding="async"
                                                        src="wp-content/uploads/2024/04/icon-3.svg"
                                                        alt="" />
                                                </div>
                                                <div className="content">
                                                    <h4>Mission &amp; Vision</h4>
                                                    <p>
                                                        Committed to driving global success through technology. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="about-author">
                                            <div className="about-button wow fadeInUp" data-wow-delay=".5s">
                                                <a href="/about" className="theme-btn">
                                                    Explore More <i className="fa-solid fa-arrow-right-long"></i>
                                                </a>
                                            </div>
                                            <div className="author-image wow fadeInUp" data-wow-delay=".7s">

                                                <img decoding="async"
                                                    src="wp-content/uploads/2024/04/author.png"
                                                    alt="" />
                                                <div className="content">
                                                    <h6>Ronald Richards</h6>
                                                    <p>Co, Founder</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>
                </div>
                <div className="elementor-element elementor-element-fa06c01 e-con-full e-flex e-con e-parent"
                    data-id="fa06c01" data-element_type="container" data-e-type="container">
                    <div className="elementor-element elementor-element-e589eef elementor-widget elementor-widget-infatoz-brands-widget"
                        data-id="e589eef" data-element_type="widget" data-e-type="widget"
                        data-widget_type="infatoz-brands-widget.default">
                        <div className="elementor-widget-container">


                            


                            
                            <section style={{background:'#ffffff',padding:'100px 0',borderTop:'1px solid #e8ecf0',borderBottom:'1px solid #e8ecf0'}}>
                              <style>{`
                                @keyframes hc-scroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
                                .hc-section-title{text-align:center;font-size:15px;font-weight:700;color:#111827;margin-bottom:48px;text-transform:uppercase;letter-spacing:1.5px;font-family:'Kumbh Sans',sans-serif}
                                .hc-marquee-outer{overflow:hidden;mask-image:linear-gradient(to right,transparent 0%,black 6%,black 94%,transparent 100%);-webkit-mask-image:linear-gradient(to right,transparent 0%,black 6%,black 94%,transparent 100%)}
                                .hc-marquee{display:flex;animation:hc-scroll 28s linear infinite;width:max-content}
                                .hc-marquee:hover{animation-play-state:paused}
                                .hc-tech-item{display:flex;flex-direction:column;align-items:center;gap:14px;padding:0 56px;cursor:default}
                                .hc-tech-item img{width:56px;height:56px;object-fit:contain;filter:none;transition:transform 0.35s}
                                .hc-tech-item:hover img{transform:scale(1.12)}
                                .hc-tech-item span{font-size:13px;font-weight:600;color:#64748b;letter-spacing:0.2px;transition:color 0.3s;font-family:'Kumbh Sans',sans-serif;white-space:nowrap}
                                .hc-tech-item:hover span{color:#384BFF}
                              `}</style>
                              <p className="hc-section-title">Next-Generation Development Technologies</p>
                              <div className="hc-marquee-outer">
                                <div className="hc-marquee">
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
                                    <div key={i} className="hc-tech-item">
                                      <img src={tech.logo} alt={tech.name} />
                                      <span>{tech.name}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </section>




                        </div>
                    </div>
                </div>
                <div className="elementor-element elementor-element-c9a10a0 e-con-full e-flex e-con e-parent"
                    data-id="c9a10a0" data-element_type="container" data-e-type="container"
                    data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-element elementor-element-5a90316 e-flex e-con-boxed e-con e-child"
                        data-id="5a90316" data-element_type="container" data-e-type="container">
                        <div className="e-con-inner">
                            <div className="elementor-element elementor-element-acba39f elementor-widget elementor-widget-infatoz-heading-with-button-widget"
                                data-id="acba39f" data-element_type="widget" data-e-type="widget"
                                data-widget_type="infatoz-heading-with-button-widget.default">
                                <div className="elementor-widget-container">


                                    

                                    <div className="section-title-area">
                                        <div className="section-title">
                                            <span className="wow fadeInUp">IT SERVICES</span>
                                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                                We Solve IT Problems<br />
                                                With Technology </h2>
                                        </div>
                                        <div className="array-button">
                                            <button className="array-prev"><i className="fal fa-arrow-right"></i></button>
                                            <button className="array-next"><i className="fal fa-arrow-left"></i></button>
                                        </div>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="elementor-element elementor-element-8b5c6ec elementor-widget elementor-widget-infatoz-service-grid-list-widget"
                        data-id="8b5c6ec" data-element_type="widget" data-e-type="widget"
                        data-widget_type="infatoz-service-grid-list-widget.default">
                        <div className="elementor-widget-container">



                            

                            <section className="service-section fix">
                                <div className="container">
                                    <div className="service-wrapper">
                                        <div className="swiper service-slider">
                                            <div className="swiper-wrapper">


                                                <div className="swiper-slide">
                                                    <div className="service-box-items">
                                                        <div className="line-shape">
                                                            <img decoding="async"
                                                                src="wp-content/uploads/2024/04/line-shape-3.png"
                                                                alt="icon-img" />
                                                        </div>
                                                        <div className="icon">
                                                            <img decoding="async"
                                                                src="wp-content/uploads/2024/04/s-icon-1.svg"
                                                                alt="icon-img" />
                                                            <div className="icon-1">
                                                                <img decoding="async"
                                                                    src="wp-content/uploads/2024/04/shape-2-1.png"
                                                                    alt="icon-img" />
                                                            </div>
                                                            <div className="icon-2">
                                                                <img decoding="async"
                                                                    src="wp-content/uploads/2024/04/service-white-shape.png"
                                                                    alt="icon-img" />
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4>
                                                                <a
                                                                    href="#">Database
                                                                    Security</a>
                                                            </h4>
                                                            <p>
                                                                Protecting systems and databases against modern security threats. </p>
                                                            <a href="#"
                                                                className="theme-btn-2 mt-3">
                                                                Read More <i className="fa-solid fa-arrow-right-long"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="swiper-slide">
                                                    <div className="service-box-items">
                                                        <div className="line-shape">
                                                            <img decoding="async"
                                                                src="wp-content/uploads/2024/04/line-shape-3.png"
                                                                alt="icon-img" />
                                                        </div>
                                                        <div className="icon">
                                                            <img decoding="async"
                                                                src="wp-content/uploads/2024/04/s-icon-2.svg"
                                                                alt="icon-img" />
                                                            <div className="icon-1">
                                                                <img decoding="async"
                                                                    src="wp-content/uploads/2024/04/shape-2-1.png"
                                                                    alt="icon-img" />
                                                            </div>
                                                            <div className="icon-2">
                                                                <img decoding="async"
                                                                    src="wp-content/uploads/2024/04/service-white-shape.png"
                                                                    alt="icon-img" />
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4>
                                                                <a
                                                                    href="#">IT
                                                                    Consultancy</a>
                                                            </h4>
                                                            <p>
                                                                Guiding digital strategies and workflow optimizations. </p>
                                                            <a href="#"
                                                                className="theme-btn-2 mt-3">
                                                                Read More <i className="fa-solid fa-arrow-right-long"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="swiper-slide">
                                                    <div className="service-box-items">
                                                        <div className="line-shape">
                                                            <img decoding="async"
                                                                src="wp-content/uploads/2024/04/line-shape-3.png"
                                                                alt="icon-img" />
                                                        </div>
                                                        <div className="icon">
                                                            <img decoding="async"
                                                                src="wp-content/uploads/2024/04/s-icon-3.svg"
                                                                alt="icon-img" />
                                                            <div className="icon-1">
                                                                <img decoding="async"
                                                                    src="wp-content/uploads/2024/04/shape-2-1.png"
                                                                    alt="icon-img" />
                                                            </div>
                                                            <div className="icon-2">
                                                                <img decoding="async"
                                                                    src="wp-content/uploads/2024/04/service-white-shape.png"
                                                                    alt="icon-img" />
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4>
                                                                <a
                                                                    href="#">Cyber
                                                                    Security</a>
                                                            </h4>
                                                            <p>
                                                                Implementing robust defenses to safeguard critical infrastructure. </p>
                                                            <a href="#"
                                                                className="theme-btn-2 mt-3">
                                                                Read More <i className="fa-solid fa-arrow-right-long"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="swiper-slide">
                                                    <div className="service-box-items">
                                                        <div className="line-shape">
                                                            <img decoding="async"
                                                                src="wp-content/uploads/2024/04/line-shape-3.png"
                                                                alt="icon-img" />
                                                        </div>
                                                        <div className="icon">
                                                            <img decoding="async"
                                                                src="wp-content/uploads/2024/04/s-icon-4.svg"
                                                                alt="icon-img" />
                                                            <div className="icon-1">
                                                                <img decoding="async"
                                                                    src="wp-content/uploads/2024/04/shape-2-1.png"
                                                                    alt="icon-img" />
                                                            </div>
                                                            <div className="icon-2">
                                                                <img decoding="async"
                                                                    src="wp-content/uploads/2024/04/service-white-shape.png"
                                                                    alt="icon-img" />
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4>
                                                                <a
                                                                    href="#">App
                                                                    Development</a>
                                                            </h4>
                                                            <p>
                                                                Building responsive and high-performance native applications. </p>
                                                            <a href="#"
                                                                className="theme-btn-2 mt-3">
                                                                Read More <i className="fa-solid fa-arrow-right-long"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="service-text wow fadeInUp" data-wow-delay=".4s">
                                            <h6>
                                                Need Any Kind Of IT Solution For Your Business. <a
                                                    href="/services">View Services</a>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </section>




                        </div>
                    </div>
                </div>
                <div className="elementor-element elementor-element-d2d2c2a e-con-full e-flex e-con e-parent"
                    data-id="d2d2c2a" data-element_type="container" data-e-type="container">
                    <div className="elementor-element elementor-element-8363697 elementor-widget elementor-widget-infatoz-counters-widget"
                        data-id="8363697" data-element_type="widget" data-e-type="widget"
                        data-widget_type="infatoz-counters-widget.default">
                        <div className="elementor-widget-container">


                            


                            
                            <section className="achievement-section fix ">
                                <div className="container">
                                    <div className="achievement-wrapper">
                                        <div className="section-title mb-0">
                                            <span className="text-white wow fadeInUp">achievement</span>
                                            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                                We Are Increasing <br /> Business Success </h2>
                                        </div>
                                        <div className="counter-area">

                                            <div className="counter-items wow fadeInUp" data-wow-delay=".3s">
                                                <div className="icon">
                                                    <img decoding="async"
                                                        src="wp-content/uploads/2024/04/01.svg"
                                                        alt="" />
                                                </div>
                                                <div className="content">
                                                    <h2><span className="count">6,561</span>+</h2>
                                                    <p>Satisfied Clients</p>
                                                </div>
                                            </div>

                                            <div className="counter-items wow fadeInUp" data-wow-delay=".3s">
                                                <div className="icon">
                                                    <img decoding="async"
                                                        src="wp-content/uploads/2024/04/02.svg"
                                                        alt="" />
                                                </div>
                                                <div className="content">
                                                    <h2><span className="count">600</span>+</h2>
                                                    <p>Finished Projects</p>
                                                </div>
                                            </div>

                                            <div className="counter-items wow fadeInUp" data-wow-delay=".3s">
                                                <div className="icon">
                                                    <img decoding="async"
                                                        src="wp-content/uploads/2024/04/03.svg"
                                                        alt="" />
                                                </div>
                                                <div className="content">
                                                    <h2><span className="count">250</span>+</h2>
                                                    <p>Skilled Experts</p>
                                                </div>
                                            </div>

                                            <div className="counter-items wow fadeInUp" data-wow-delay=".3s">
                                                <div className="icon">
                                                    <img decoding="async"
                                                        src="wp-content/uploads/2024/04/04.svg"
                                                        alt="" />
                                                </div>
                                                <div className="content">
                                                    <h2><span className="count">1,001</span>+</h2>
                                                    <p>Media Posts</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>




                        </div>
                    </div>
                </div>
                <div className="elementor-element elementor-element-ae9149f e-con-full e-flex e-con e-parent"
                    data-id="ae9149f" data-element_type="container" data-e-type="container">
                    <div className="elementor-element elementor-element-f1be432 elementor-widget elementor-widget-infatoz-project-post-widget"
                        data-id="f1be432" data-element_type="widget" data-e-type="widget"
                        data-widget_type="infatoz-project-post-widget.default">
                        <div className="elementor-widget-container">


                            


                            
                            <section className="project-section fix">
                                <div className="swiper project-slider">
                                    <div className="swiper-wrapper">

                                        <div className="swiper-slide">
                                            <div className="project-items">
                                                <div className="project-image">
                                                    <img decoding="async"
                                                        src="wp-content/uploads/2024/04/01-2.jpg"
                                                        alt="" />
                                                    <div className="project-content">
                                                        <p>Technology</p>
                                                        <h4>
                                                            <a
                                                                href="#">Platform
                                                                Integration</a>
                                                        </h4>
                                                        <a href="#"
                                                            className="icon">
                                                            <i className="fa-solid fa-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="project-items">
                                                <div className="project-image">
                                                    <img decoding="async"
                                                        src="wp-content/uploads/2024/04/04-2.jpg"
                                                        alt="" />
                                                    <div className="project-content">
                                                        <p>Security</p>
                                                        <h4>
                                                            <a
                                                                href="#">Network
                                                                Security</a>
                                                        </h4>
                                                        <a href="#"
                                                            className="icon">
                                                            <i className="fa-solid fa-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="project-items">
                                                <div className="project-image">
                                                    <img decoding="async"
                                                        src="wp-content/uploads/2024/04/03-1.jpg"
                                                        alt="" />
                                                    <div className="project-content">
                                                        <p>Solution</p>
                                                        <h4>
                                                            <a
                                                                href="#">Web
                                                                Development</a>
                                                        </h4>
                                                        <a href="#"
                                                            className="icon">
                                                            <i className="fa-solid fa-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="project-items">
                                                <div className="project-image">
                                                    <img decoding="async"
                                                        src="wp-content/uploads/2024/04/02-2.jpg"
                                                        alt="" />
                                                    <div className="project-content">
                                                        <p>Management</p>
                                                        <h4>
                                                            <a
                                                                href="#">IT
                                                                Management</a>
                                                        </h4>
                                                        <a href="#"
                                                            className="icon">
                                                            <i className="fa-solid fa-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="swiper-dot-2">
                                        <div className="dot-3"></div>
                                    </div>
                                </div>
                            </section>



                        </div>
                    </div>
                </div>
                <div className="elementor-element elementor-element-6c74069 e-con-full e-flex e-con e-parent"
                    data-id="6c74069" data-element_type="container" data-e-type="container">
                    <div className="elementor-element elementor-element-9c88555 elementor-widget elementor-widget-infatoz-text-slide-widget"
                        data-id="9c88555" data-element_type="widget" data-e-type="widget"
                        data-widget_type="infatoz-text-slide-widget.default">
                        <div className="elementor-widget-container">


                            

                            
                            <div className="marque-section">
                                <div className="container-fluid">
                                    <div className="marquee-wrapper style-2 text-slider">
                                        <div className="marquee-inner to-left">
                                            <ul className="marqee-list d-flex">
                                                <li className="marquee-item style-2">

                                                    <span className="text-slider"><img decoding="async"
                                                            src="wp-content/uploads/2024/04/asterisk.svg"
                                                            alt="" /></span><span className="text-slider text-style">Cyber
                                                        Security</span>

                                                    <span className="text-slider"><img decoding="async"
                                                            src="wp-content/uploads/2024/04/asterisk.svg"
                                                            alt="" /></span><span className="text-slider text-style">IT
                                                        Solution</span>

                                                    <span className="text-slider"><img decoding="async"
                                                            src="wp-content/uploads/2024/04/asterisk.svg"
                                                            alt="" /></span><span
                                                        className="text-slider text-style">Technology</span>

                                                    <span className="text-slider"><img decoding="async"
                                                            src="wp-content/uploads/2024/04/asterisk.svg"
                                                            alt="" /></span><span className="text-slider text-style">Data
                                                        Security</span>

                                                    <span className="text-slider"><img decoding="async"
                                                            src="wp-content/uploads/2024/04/asterisk.svg"
                                                            alt="" /></span><span className="text-slider text-style">Cyber
                                                        Security</span>

                                                    <span className="text-slider"><img decoding="async"
                                                            src="wp-content/uploads/2024/04/asterisk.svg"
                                                            alt="" /></span><span className="text-slider text-style">IT
                                                        Solution</span>

                                                    <span className="text-slider"><img decoding="async"
                                                            src="wp-content/uploads/2024/04/asterisk.svg"
                                                            alt="" /></span><span
                                                        className="text-slider text-style">Technology</span>

                                                    <span className="text-slider"><img decoding="async"
                                                            src="wp-content/uploads/2024/04/asterisk.svg"
                                                            alt="" /></span><span className="text-slider text-style">Data
                                                        Security</span>

                                                    <span className="text-slider"><img decoding="async"
                                                            src="wp-content/uploads/2024/04/asterisk.svg"
                                                            alt="" /></span><span className="text-slider text-style">Cyber
                                                        Security</span>

                                                    <span className="text-slider"><img decoding="async"
                                                            src="wp-content/uploads/2024/04/asterisk.svg"
                                                            alt="" /></span><span className="text-slider text-style">Data
                                                        Security</span>

                                                    <span className="text-slider"><img decoding="async"
                                                            src="wp-content/uploads/2024/04/asterisk.svg"
                                                            alt="" /></span><span
                                                        className="text-slider text-style">Technology</span>

                                                    <span className="text-slider"><img decoding="async"
                                                            src="wp-content/uploads/2024/04/asterisk.svg"
                                                            alt="" /></span><span className="text-slider text-style">IT
                                                        Solution</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
                <div className="elementor-element elementor-element-c6e7ad5 e-con-full e-flex e-con e-parent"
                    data-id="c6e7ad5" data-element_type="container" data-e-type="container"
                    data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-element elementor-element-3ab6c53 elementor-widget elementor-widget-infatoz-testimonials-widget"
                        data-id="3ab6c53" data-element_type="widget" data-e-type="widget"
                        data-widget_type="infatoz-testimonials-widget.default">
                        <div className="elementor-widget-container">


                            


                            
                            <section className="testimonial-section fix">
                                <div className="container">
                                    <div className="section-title-area text-center mb-50">
                                        <div className="section-title">
                                            <span className="wow fadeInUp">TESTIMONIALS</span>
                                            <h2 className="wow fadeInUp" data-wow-delay=".3s">What’s Clients Say</h2>
                                        </div>
                                    </div>
                                    <div className="testimonial-wrapper">
                                        <div className="swiper testimonial-slider">
                                            <div className="swiper-wrapper">

                                                <div className="swiper-slide">
                                                    <div className="testimonial-items">
                                                        <div className="tesimonial-image bg-cover"
                                                            style={{backgroundImage: "url('/wp-content/uploads/2024/04/01-5.jpg')"}}>
                                                            <div className="star">
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                            </div>
                                                        </div>
                                                        <div className="testimonial-content">
                                                            <p className="mt-3 mt-md-0">
                                                                "Infatoz completely transformed our workflow. Their team delivered a robust, secure web application that helped us increase our client engagement by 40%. Their technical expertise is truly top-notch!" </p>
                                                            <div className="author-details">
                                                                <h5>Kathryn Murphy</h5>
                                                                <span>Web Designer</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="swiper-slide">
                                                    <div className="testimonial-items">
                                                        <div className="tesimonial-image bg-cover"
                                                            style={{backgroundImage: "url('/wp-content/uploads/2024/04/01-5.jpg')"}}>
                                                            <div className="star">
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="far fa-star"></i>
                                                            </div>
                                                        </div>
                                                        <div className="testimonial-content">
                                                            <p className="mt-3 mt-md-0">
                                                                "The cybersecurity solutions implemented by Infatoz have given us complete peace of mind. Their professionalism, constant communication, and attention to detail made the entire collaboration seamless." </p>
                                                            <div className="author-details">
                                                                <h5>Henri Mack</h5>
                                                                <span>Web Designer</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="swiper-slide">
                                                    <div className="testimonial-items">
                                                        <div className="tesimonial-image bg-cover"
                                                            style={{backgroundImage: "url('/wp-content/uploads/2024/04/01-5.jpg')"}}>
                                                            <div className="star">
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                            </div>
                                                        </div>
                                                        <div className="testimonial-content">
                                                            <p className="mt-3 mt-md-0">
                                                                "From architecture design to mobile app development, Infatoz proved to be an outstanding IT partner. They delivered our project on time and with excellent code quality. Highly recommended!" </p>
                                                            <div className="author-details">
                                                                <h5>Joseph Bert</h5>
                                                                <span>Web Designer</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-dot-2">
                                            <div className="dot-2"></div>
                                        </div>
                                    </div>
                                </div>
                            </section>




                        </div>
                    </div>
                </div>
                <div className="elementor-element elementor-element-403c666 e-con-full e-flex e-con e-parent"
                    data-id="403c666" data-element_type="container" data-e-type="container"
                    data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-element elementor-element-1780cb4 elementor-widget elementor-widget-team-post"
                        data-id="1780cb4" data-element_type="widget" data-e-type="widget"
                        data-widget_type="team-post.default">
                        <div className="elementor-widget-container">





                            

                            
                            <section className="team-section">
                                <div className="line-shape">

                                    <img decoding="async"
                                        src="wp-content/uploads/2024/04/line-shape-4.png"
                                        alt="" />
                                </div>
                                <div className="mask-shape">

                                    <img decoding="async"
                                        src="wp-content/uploads/2024/04/mask-shape-1.png"
                                        alt="" />
                                </div>
                                <div className="container">
                                    <div className="section-title-area">
                                        <div className="section-title">
                                            <span className="text-white wow fadeInUp">EXPERT PEOPLE</span>
                                            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">Dedicated Team
                                                Members</h2>
                                        </div>
                                        <a href="/team" className="theme-btn hover-white wow fadeInUp"
                                            data-wow-delay=".5s">
                                            All Member <i className="fa-solid fa-arrow-right-long"></i>
                                        </a>
                                    </div>
                                    <div className="team-wrapper">
                                        <div className="team-items bor-bottom wow fadeInUp" data-wow-delay=".3s">
                                            <div className="team-avatar-static">
                                                <img src="/wp-content/uploads/2024/04/13-1.jpg" alt="Cameron Williamson" style={{width:'72px',height:'72px',borderRadius:'50%',objectFit:'cover',border:'3px solid #1253f8',flexShrink:0}} />
                                            </div>
                                            <div className="team-title">
                                                <span>Scrum Master</span>
                                                <h4><a href="#">Cameron Williamson</a></h4>
                                            </div>
                                            <p>
                                                Facilitating agile workflows and team alignment for successful delivery. </p>
                                            <div className="social-profile">
                                                <ul>
                                                    <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                </ul>
                                                <span className="plus-btn"><i className="fa-solid fa-plus"></i></span>
                                            </div>
                                        </div>
                                        <div className="team-items bor-bottom wow fadeInUp" data-wow-delay=".3s">
                                            <div className="team-avatar-static">
                                                <img src="/wp-content/uploads/2024/04/02-4.jpg" alt="Leslie Alexander" style={{width:'72px',height:'72px',borderRadius:'50%',objectFit:'cover',border:'3px solid #1253f8',flexShrink:0}} />
                                            </div>
                                            <div className="team-title">
                                                <span>Engineering</span>
                                                <h4><a href="#">Leslie Alexander</a></h4>
                                            </div>
                                            <p>
                                                Designing scalable architectures and writing clean, robust backend code. </p>
                                            <div className="social-profile">
                                                <ul>
                                                    <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                </ul>
                                                <span className="plus-btn"><i className="fa-solid fa-plus"></i></span>
                                            </div>
                                        </div>
                                        <div className="team-items bor-bottom wow fadeInUp" data-wow-delay=".3s">
                                            <div className="team-avatar-static">
                                                <img src="/wp-content/uploads/2024/04/03-3.jpg" alt="Ronald Richards" style={{width:'72px',height:'72px',borderRadius:'50%',objectFit:'cover',border:'3px solid #1253f8',flexShrink:0}} />
                                            </div>
                                            <div className="team-title">
                                                <span>UI/UX Designer</span>
                                                <h4><a href="#">Ronald Richards</a></h4>
                                            </div>
                                            <p>
                                                Creating intuitive, user-centered interfaces and visual design systems. </p>
                                            <div className="social-profile">
                                                <ul>
                                                    <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                                </ul>
                                                <span className="plus-btn"><i className="fa-solid fa-plus"></i></span>
                                            </div>
                                        </div>
                                        <div className="team-items bor-bottom wow fadeInUp" data-wow-delay=".3s">
                                            <div className="team-avatar-static">
                                                <img src="/wp-content/uploads/2024/04/01-4.jpg" alt="Darrell Steward" style={{width:'72px',height:'72px',borderRadius:'50%',objectFit:'cover',border:'3px solid #1253f8',flexShrink:0}} />
                                            </div>
                                            <div className="team-title">
                                                <span>Web Designer</span>
                                                <h4><a href="#">Darrell Steward</a></h4>
                                            </div>
                                            <p>
                                                Developing pixel-perfect, responsive frontend layouts and templates. </p>
                                            <div className="social-profile">
                                                <ul>
                                                    <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                </ul>
                                                <span className="plus-btn"><i className="fa-solid fa-plus"></i></span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </section>




                        </div>
                    </div>
                </div>
                <div className="elementor-element elementor-element-9c55e67 e-con-full e-flex e-con e-parent"
                    data-id="9c55e67" data-element_type="container" data-e-type="container"
                    data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-element elementor-element-0eb6750 elementor-widget elementor-widget-infatoz-pricing-widget"
                        data-id="0eb6750" data-element_type="widget" data-e-type="widget"
                        data-widget_type="infatoz-pricing-widget.default">
                        <div className="elementor-widget-container">

                            <section className="why-infatoz-section">
                                <div className="container">
                                    <div className="why-infatoz-wrapper">
                                        <div className="section-title-area text-center mb-5">
                                            <div className="section-title">
                                                <span className="wow fadeInUp" style={{ color: "#384BFF", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", fontSize: "14px", display: "block", marginBottom: "10px" }}>THE DIFFERENCE</span>
                                                <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{ fontSize: "42px", fontWeight: "700", color: "#0f0d1d", marginBottom: "15px", fontFamily: "'Kumbh Sans', sans-serif" }}>
                                                    Why Infatoz Technologies?
                                                </h2>
                                                <p className="wow fadeInUp" data-wow-delay=".5s" style={{ color: "#585858", fontSize: "16px", maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
                                                    Our result-oriented, transparent model compared directly to traditional IT agencies and outsourcing models.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="comparison-table-container wow fadeInUp" data-wow-delay=".3s">
                                            <div className="comparison-table">
                                                {/* Header Row */}
                                                <div className="comp-row comp-header">
                                                    <div className="comp-cell comp-criterion-header">Criterion</div>
                                                    <div className="comp-cell comp-traditional-header">Traditional Outsourcing / Freelancers</div>
                                                    <div className="comp-cell comp-infatoz-header-col">
                                                        <div className="comp-infatoz-badge">The Infatoz Model</div>
                                                    </div>
                                                </div>

                                                {/* Row 1 */}
                                                <div className="comp-row">
                                                    <div className="comp-cell comp-criterion">
                                                        <h3>Project Discovery</h3>
                                                        <p>How the scope and requirements are defined.</p>
                                                    </div>
                                                    <div className="comp-cell comp-traditional">
                                                        <div className="mobile-label">Traditional Outsourcing:</div>
                                                        <div className="comp-text-wrapper">
                                                            <span className="comp-icon comp-cross">✕</span>
                                                            <p>Vague agreements and quick quotes that lead to unexpected scope creep, budget extensions, and delayed timelines midway through development.</p>
                                                        </div>
                                                    </div>
                                                    <div className="comp-cell comp-infatoz">
                                                        <div className="mobile-label">The Infatoz Model:</div>
                                                        <div className="comp-text-wrapper">
                                                            <span className="comp-icon comp-check">✓</span>
                                                            <p><strong>Fixed Specifications.</strong> We create a comprehensive roadmap, detailed user stories, and interactive wireframes prior to contract signing to guarantee price and timeline accuracy.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Row 2 */}
                                                <div className="comp-row">
                                                    <div className="comp-cell comp-criterion">
                                                        <h3>Engineering Talent</h3>
                                                        <p>Who designs and builds your code.</p>
                                                    </div>
                                                    <div className="comp-cell comp-traditional">
                                                        <div className="mobile-label">Traditional Outsourcing:</div>
                                                        <div className="comp-text-wrapper">
                                                            <span className="comp-icon comp-cross">✕</span>
                                                            <p>High developer turnover with juniors learning on your budget. Lack of architectural standards and peer code reviews, leading to technical debt.</p>
                                                        </div>
                                                    </div>
                                                    <div className="comp-cell comp-infatoz">
                                                        <div className="mobile-label">The Infatoz Model:</div>
                                                        <div className="comp-text-wrapper">
                                                            <span className="comp-icon comp-check">✓</span>
                                                            <p><strong>Elite Tech Leads.</strong> Hand-picked senior developers assigned to your project. Standardized pull request reviews, strict styling rules, and professional DevOps practices.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Row 3 */}
                                                <div className="comp-row">
                                                    <div className="comp-cell comp-criterion">
                                                        <h3>Communication</h3>
                                                        <p>How progress is updated and reported.</p>
                                                    </div>
                                                    <div className="comp-cell comp-traditional">
                                                        <div className="mobile-label">Traditional Outsourcing:</div>
                                                        <div className="comp-text-wrapper">
                                                            <span className="comp-icon comp-cross">✕</span>
                                                            <p>Intermittent emails, delayed follow-ups, and a lack of real-time visibility. Major bugs or misalignment are often only noticed during final delivery.</p>
                                                        </div>
                                                    </div>
                                                    <div className="comp-cell comp-infatoz">
                                                        <div className="mobile-label">The Infatoz Model:</div>
                                                        <div className="comp-text-wrapper">
                                                            <span className="comp-icon comp-check">✓</span>
                                                            <p><strong>Direct Slack &amp; Demos.</strong> Continuous deployment with weekly builds. You have direct access to your dedicated lead developer via Slack, JIRA, and live check-ins.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Row 4 */}
                                                <div className="comp-row">
                                                    <div className="comp-cell comp-criterion">
                                                        <h3>Code &amp; IP Security</h3>
                                                        <p>Who owns the intellectual property and code.</p>
                                                    </div>
                                                    <div className="comp-cell comp-traditional">
                                                        <div className="mobile-label">Traditional Outsourcing:</div>
                                                        <div className="comp-text-wrapper">
                                                            <span className="comp-icon comp-cross">✕</span>
                                                            <p>Confusing contract terms on ownership, zero penetration testing, and heavy reliance on proprietary pre-built platforms that lock you in.</p>
                                                        </div>
                                                    </div>
                                                    <div className="comp-cell comp-infatoz">
                                                        <div className="mobile-label">The Infatoz Model:</div>
                                                        <div className="comp-text-wrapper">
                                                            <span className="comp-icon comp-check">✓</span>
                                                            <p><strong>100% IP Handover.</strong> Clean, self-documenting code fully transferred to you. We perform industry-standard security linting and OWASP top-10 security screening.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Row 5 */}
                                                <div className="comp-row">
                                                    <div className="comp-cell comp-criterion">
                                                        <h3>Post-Launch Support</h3>
                                                        <p>What happens after the product goes live.</p>
                                                    </div>
                                                    <div className="comp-cell comp-traditional">
                                                        <div className="mobile-label">Traditional Outsourcing:</div>
                                                        <div className="comp-text-wrapper">
                                                            <span className="comp-icon comp-cross">✕</span>
                                                            <p>No SLA guarantees. Expensive ad-hoc hourly pricing for bugs, and long response delays during critical system outages.</p>
                                                        </div>
                                                    </div>
                                                    <div className="comp-cell comp-infatoz">
                                                        <div className="mobile-label">The Infatoz Model:</div>
                                                        <div className="comp-text-wrapper">
                                                            <span className="comp-icon comp-check">✓</span>
                                                            <p><strong>Dedicated SLA Support.</strong> Proactive security patching, database optimization, cloud cost monitoring, and rapid SLA-guaranteed emergency responses.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
                <div className="elementor-element elementor-element-b9aa769 e-con-full e-flex e-con e-parent"
                    data-id="b9aa769" data-element_type="container" data-e-type="container">
                    <div className="elementor-element elementor-element-f67ebff elementor-widget elementor-widget-infatoz-faq-with-image-widget"
                        data-id="f67ebff" data-element_type="widget" data-e-type="widget"
                        data-widget_type="infatoz-faq-with-image-widget.default">
                        <div className="elementor-widget-container">


                            


                            <section className="faq-section fix section-padding">
                                <div className="right-shape">

                                    <img decoding="async"
                                        src="wp-content/uploads/2024/04/right-shape.png"
                                        alt="" />
                                </div>
                                <div className="faq-shape-box">
                                    <div className="faq-shape">

                                        <img decoding="async"
                                            src="wp-content/uploads/2024/04/shape-2.png"
                                            alt="" />
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="faq-wrapper">
                                        <div className="row g-4">
                                            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                                                <div className="faq-image">

                                                    <img decoding="async"
                                                        src="wp-content/uploads/2024/04/faq.png"
                                                        alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="faq-content">
                                                    <div className="section-title">
                                                        <span className="wow fadeInUp">See Our Faq's</span>
                                                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                                            Keep Your Business Safe & <br /> Ensure High Availability
                                                        </h2>
                                                    </div>
                                                    <div className="faq-accordion mt-4 mt-md-0">
                                                        <div className="accordion"
                                                            id="accordionExample-st-2subtitlefaq-1686685122">
                                                            <div className="bd-faq-group">
                                                                <div className="accordion-item mb-3">
                                                                    <h5 className="accordion-header"
                                                                        id="heading9d7f7da-st-2">
                                                                        <button className="accordion-button " type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#collapse9d7f7da-st-2"
                                                                            aria-expanded="true"
                                                                            aria-controls="collapse9d7f7da-st-2">

                                                                            How long should a business plan be?
                                                                        </button>
                                                                    </h5>
                                                                    <div id="collapse9d7f7da-st-2"
                                                                        className="accordion-collapse collapse show"
                                                                        aria-labelledby="heading9d7f7da-st-2"
                                                                        data-bs-parent="#accordionExample-st-2subtitlefaq-1686685122">
                                                                        <div className="accordion-body">

                                                                            There are many variations of passages Lorem
                                                                            Ipsum but the majority have suffered
                                                                            alteration in some form, by injected humor.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item mb-3">
                                                                    <h5 className="accordion-header"
                                                                        id="heading4200330-st-2">
                                                                        <button className="accordion-button collapsed"
                                                                            type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#collapse4200330-st-2"
                                                                            aria-expanded="true"
                                                                            aria-controls="collapse4200330-st-2">

                                                                            What is included in your services?
                                                                        </button>
                                                                    </h5>
                                                                    <div id="collapse4200330-st-2"
                                                                        className="accordion-collapse collapse "
                                                                        aria-labelledby="heading4200330-st-2"
                                                                        data-bs-parent="#accordionExample-st-2subtitlefaq-1686685122">
                                                                        <div className="accordion-body">

                                                                            There are many variations of passages Lorem
                                                                            Ipsum but the majority have suffered
                                                                            alteration in some form, by injected humor.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item mb-3">
                                                                    <h5 className="accordion-header"
                                                                        id="heading369399a-st-2">
                                                                        <button className="accordion-button collapsed"
                                                                            type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#collapse369399a-st-2"
                                                                            aria-expanded="true"
                                                                            aria-controls="collapse369399a-st-2">

                                                                            What type of company is measured?
                                                                        </button>
                                                                    </h5>
                                                                    <div id="collapse369399a-st-2"
                                                                        className="accordion-collapse collapse "
                                                                        aria-labelledby="heading369399a-st-2"
                                                                        data-bs-parent="#accordionExample-st-2subtitlefaq-1686685122">
                                                                        <div className="accordion-body">

                                                                            There are many variations of passages Lorem
                                                                            Ipsum but the majority have suffered
                                                                            alteration in some form, by injected humor.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>




                        </div>
                    </div>
                </div>
                  <div className="elementor-element elementor-element-6207eda e-con-full e-flex e-con e-parent"
                    data-id="6207eda" data-element_type="container" data-e-type="container">
                    <div className="elementor-element elementor-element-1276a73 elementor-widget elementor-widget-infatoz-heading-with-button-widget"
                        data-id="1276a73" data-element_type="widget" data-e-type="widget"
                        data-widget_type="infatoz-heading-with-button-widget.default">
                        <div className="elementor-widget-container">

                            <section className="founders-section fix">
                                <div className="container">
                                    <div className="section-title text-center mb-5">
                                        <span className="wow fadeInUp" style={{ color: "#384BFF", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", fontSize: "14px", display: "block", marginBottom: "10px" }}>OUR LEADERSHIP</span>
                                        <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{ fontSize: "42px", fontWeight: "700", color: "#0f0d1d", marginBottom: "15px", fontFamily: "'Kumbh Sans', sans-serif" }}>
                                            Meet Our Founders
                                        </h2>
                                        <p className="wow fadeInUp" data-wow-delay=".5s" style={{ color: "#585858", fontSize: "16px", maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
                                            The visionary team leading Infatoz Technologies toward digital innovation and enterprise engineering excellence.
                                        </p>
                                    </div>

                                    <div className="row g-4 justify-content-center">
                                        {/* Founder 1 */}
                                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                            <div className="founder-card">
                                                <div className="founder-image-wrapper">
                                                    <img src="/wp-content/uploads/2024/04/13-1.jpg" alt="Alex Carter" className="founder-image" />
                                                    <div className="founder-socials">
                                                        <a href="#" className="founder-social-link"><i className="fab fa-linkedin-in"></i></a>
                                                        <a href="#" className="founder-social-link"><i className="fab fa-twitter"></i></a>
                                                        <a href="#" className="founder-social-link"><i className="fab fa-github"></i></a>
                                                    </div>
                                                </div>
                                                <div className="founder-info">
                                                    <h3>Alex Carter</h3>
                                                    <span>Co-Founder &amp; CEO</span>
                                                    <p>Ex-Google Lead Engineer with 12+ years of experience building scalable enterprise software and leading cross-functional teams.</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Founder 2 */}
                                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                            <div className="founder-card">
                                                <div className="founder-image-wrapper">
                                                    <img src="/wp-content/uploads/2024/04/02-4.jpg" alt="Sarah Jenkins" className="founder-image" />
                                                    <div className="founder-socials">
                                                        <a href="#" className="founder-social-link"><i className="fab fa-linkedin-in"></i></a>
                                                        <a href="#" className="founder-social-link"><i className="fab fa-twitter"></i></a>
                                                        <a href="#" className="founder-social-link"><i className="fab fa-github"></i></a>
                                                    </div>
                                                </div>
                                                <div className="founder-info">
                                                    <h3>Sarah Jenkins</h3>
                                                    <span>Co-Founder &amp; CTO</span>
                                                    <p>Full stack architect specializing in cloud infrastructure, high-availability databases, and secure backend systems engineering.</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Founder 3 */}
                                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                            <div className="founder-card">
                                                <div className="founder-image-wrapper">
                                                    <img src="/wp-content/uploads/2024/04/03-3.jpg" alt="David Vance" className="founder-image" />
                                                    <div className="founder-socials">
                                                        <a href="#" className="founder-social-link"><i className="fab fa-linkedin-in"></i></a>
                                                        <a href="#" className="founder-social-link"><i className="fab fa-twitter"></i></a>
                                                        <a href="#" className="founder-social-link"><i className="fab fa-github"></i></a>
                                                    </div>
                                                </div>
                                                <div className="founder-info">
                                                    <h3>David Vance</h3>
                                                    <span>Co-Founder &amp; Chief Architect</span>
                                                    <p>UI/UX strategist and frontend system designer dedicated to crafting highly responsive, user-centric web applications.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
                <div className="elementor-element elementor-element-00ec3d7 e-con-full e-flex e-con e-parent"
                    data-id="00ec3d7" data-element_type="container" data-e-type="container">
                    <div className="elementor-element elementor-element-7fc2049 elementor-widget elementor-widget-infatoz-cta-with-image-widget"
                        data-id="7fc2049" data-element_type="widget" data-e-type="widget"
                        data-widget_type="infatoz-cta-with-image-widget.default">
                        <div className="elementor-widget-container">


                            


                            <section className="cta-section">
                                <div className="container">
                                    <div className="cta-wrapper">
                                        <div className="mask-shape">

                                            <img decoding="async"
                                                src="wp-content/uploads/2024/04/cta-mask.png"
                                                alt="" />
                                        </div>
                                        <div className="circle-shape">

                                            <img decoding="async"
                                                src="wp-content/uploads/2024/04/circle.png"
                                                alt="" />
                                        </div>
                                        <div className="cta-image wow fadeInUp" data-wow-delay=".3s">

                                            <img decoding="async"
                                                src="wp-content/uploads/2024/04/cta.png"
                                                alt="" />
                                        </div>
                                        <div className="cta-items">
                                            <h3 className="wow fadeInUp" data-wow-delay=".5s">Stay Connected With <br />
                                                Cutting Edge IT</h3>
                                            <a href="/contact" className="theme-btn bg-white wow fadeInUp"
                                                data-wow-delay=".7s">
                                                get A Quote <i className="fa-solid fa-arrow-right-long"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>




                        </div>
                    </div>
                </div>
            </div>

        </div>
      <Footer />


      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </div>
  );
}
