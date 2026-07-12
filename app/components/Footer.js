'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="footer-section">
            <div className="footer-widgets-wrapper footer-bg">
                <div className="shape-1">
                    <img src="wp-content/uploads/2024/04/footer-shape-1.png"
                        alt="shape-img" />
                </div>
                <div className="shape-2">
                    <img src="wp-content/uploads/2024/04/footer-shape-2.png"
                        alt="shape-img" />
                </div>
                <div className="container">
                    <div className="row">

                        {/* Column 1: Brand Logo & Description — 3 cols */}
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <Link href="/" style={{ textDecoration: "none" }}>
                                        <span style={{ fontFamily: "'Kumbh Sans',sans-serif", fontSize: "28px", fontWeight: "800", color: "#ffffff", letterSpacing: "-0.5px", lineHeight: "1" }}>
                                            infatoz
                                            <span style={{ fontSize: "11px", fontWeight: "700", color: "#384BFF", letterSpacing: "2.5px", textTransform: "uppercase", display: "block", marginTop: "2px" }}>
                                                Technologies
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                                <div className="footer-content">
                                    <p>
                                        Building scalable software, web, and mobile solutions that help businesses grow, innovate, and succeed digitally.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Other Pages — 2 cols (fixed from col-xl-2 with ps-lg-5 that caused gap) */}
                        <div className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="single-footer-widget widget_nav_menu">
                                <div className="widget-head">
                                    <h3>Other Pages</h3>
                                </div>
                                <div className="menu-footer-menu-1-container">
                                    <ul className="menu">
                                        <li><Link href="/about">About</Link></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">Case Studies</a></li>
                                        <li><a href="#">Pricing</a></li>
                                        <li><a href="#">FAQ</a></li>
                                        <li><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Column 3: Support — 2 cols */}
                        <div className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="single-footer-widget widget_nav_menu">
                                <div className="widget-head">
                                    <h3>Support</h3>
                                </div>
                                <div className="menu-footer-menu-1-container">
                                    <ul className="menu">
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Term &amp; Conditions</a></li>
                                        <li><a href="#">Help Center</a></li>
                                        <li><a href="#">Features Request</a></li>
                                        <li><a href="#">Online Support</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Column 4: Company — 2 cols (NEW) */}
                        <div className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget widget_nav_menu">
                                <div className="widget-head">
                                    <h3>Company</h3>
                                </div>
                                <div className="menu-footer-menu-1-container">
                                    <ul className="menu">
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Careers</a></li>
                                        <li><a href="#">Case Studies</a></li>
                                        <li><a href="#">Testimonials</a></li>
                                        <li><a href="#">Partners</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Column 5: Contact Details & Action — 3 cols */}
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                            <div className="single-footer-widget">
                                <div className="footer-content">
                                    <h3 style={{ color: "#ffffff", fontSize: "16px", fontWeight: "700", marginBottom: "8px", fontFamily: "'Kumbh Sans', sans-serif" }}>Address</h3>
                                    <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                                        1-42, Takkimane, Mahabaleshwara Nandanavana, Kergal, Kundapura, Udupi, Karnataka - 576219.
                                    </p>

                                    <h3 style={{ color: "#ffffff", fontSize: "16px", fontWeight: "700", marginBottom: "5px", fontFamily: "'Kumbh Sans', sans-serif" }}>Phone</h3>
                                    <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "14px", marginBottom: "20px" }}>
                                        <a href="tel:+917019058591" style={{ color: "rgba(255, 255, 255, 0.7)", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = '#384BFF'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>+91 7019058591</a>
                                    </p>

                                    <h3 style={{ color: "#ffffff", fontSize: "16px", fontWeight: "700", marginBottom: "5px", fontFamily: "'Kumbh Sans', sans-serif" }}>Email</h3>
                                    <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "14px", marginBottom: "20px" }}>
                                        <a href="mailto:info@infatoz.com" style={{ color: "rgba(255, 255, 255, 0.7)", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = '#384BFF'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>info@infatoz.com</a>
                                    </p>

                                    <Link href="/contact" className="theme-btn hover-white mt-2">
                                        get A Quote <i className="fa-solid fa-arrow-right-long"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Footer Bottom: Copyright + Social Icons */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-wrapper d-flex align-items-center justify-content-between flex-wrap gap-3">
                        <p className="wow fadeInLeft color-2" data-wow-delay=".3s" style={{ textTransform: "uppercase", fontSize: "13px", letterSpacing: "0.5px", margin: 0 }}>
                            © 2026 INFATOZ TECHNOLOGIES. ALL RIGHTS RESERVED.
                        </p>
                        <div className="social-icon d-flex align-items-center gap-2 wow fadeInRight" data-wow-delay=".5s">
                            <a href="#" className="footer-social-link-bottom"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="footer-social-link-bottom"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="footer-social-link-bottom"><i className="fab fa-youtube"></i></a>
                            <a href="#" className="footer-social-link-bottom"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <a href="#" id="scrollUp" className="scroll-icon">
                    <i className="fas fa-arrow-up"></i>
                </a>
            </div>
        </footer>
    </>
  );
}
