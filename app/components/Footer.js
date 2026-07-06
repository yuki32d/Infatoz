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
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <a href="https://gramentheme.com/"><img
                                            src="wp-content/uploads/2024/04/white-logo.svg"
                                            alt="" /></a>
                                </div>
                                <div className="footer-content">
                                    <p>
                                        We design, develop, and deliver high-quality IT solutions that empower businesses to scale and lead in their industries. </p>
                                    <div className="social-icon d-flex align-items-center">
                                        <a href=""><i className="fa fa-facebook-f"></i></a><a href="#"><i
                                                className="fab fa-twitter"></i></a><a href="#"><i
                                                className="fab fa-linkedin-in"></i></a><a href="#"><i
                                                className="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".5s">

                            <div id="nav_menu-2" className="single-footer-widget widget_nav_menu">
                                <div className="widget-head">
                                    <h3>Quick Links</h3>
                                </div>
                                <div className="menu-footer-menu-1-container">
                                    <ul id="menu-footer-menu-1" className="menu">
                                        <li id="menu-item-1750"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1750">
                                            <a href="#">About Us</a></li>
                                        <li id="menu-item-1751"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1751">
                                            <a href="#">Our Services</a></li>
                                        <li id="menu-item-1748"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1748">
                                            <a href="#">Our Blogs</a></li>
                                        <li id="menu-item-1749"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1749">
                                            <a href="#">Faq&#8217;s</a></li>
                                        <li id="menu-item-1747"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1747">
                                            <a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="single-footer-widget style-margin">
                                <div className="widget-head">
                                    <h3>Recent Posts</h3>
                                </div>

                                <div className="recent-post-area">
                                    <div className="recent-post-items">
                                        <div className="thumb">
                                            <img width="150" height="89"
                                                src="wp-content/uploads/2024/04/blog-8.jpg"
                                                className="attachment-thumbnail size-thumbnail wp-post-image" alt=""
                                                decoding="async" />
                                        </div>
                                        <div className="content">
                                            <ul className="post-date">
                                                <li>
                                                    <i className="fa-solid fa-calendar-days me-2"></i>
                                                    April 27, 2024
                                                </li>
                                            </ul>
                                            <h6>
                                                <a
                                                    href="#">
                                                    Achieve goals with precision &#038; speed </a>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="recent-post-items">
                                        <div className="thumb">
                                            <img width="150" height="89"
                                                src="wp-content/uploads/2024/04/blog-7.jpg"
                                                className="attachment-thumbnail size-thumbnail wp-post-image" alt=""
                                                decoding="async" />
                                        </div>
                                        <div className="content">
                                            <ul className="post-date">
                                                <li>
                                                    <i className="fa-solid fa-calendar-days me-2"></i>
                                                    April 27, 2024
                                                </li>
                                            </ul>
                                            <h6>
                                                <a
                                                    href="#">
                                                    Clients achieve goals with precision </a>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".9s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Contact Us</h3>
                                </div>
                                <div className="footer-content">
                                    <ul className="contact-info">
                                        <li><i className="fas fa-map-marker-alt"></i><a href="#">6391 Elgin St. Celina,
                                                USA</a></li>
                                        <li><i className="fas fa-phone-volume"></i><a
                                                href="tel:2086660112">+208-666-0112</a></li>
                                        <li><i className="far fa-envelope"></i><a
                                                href="mailto:infotech@example.com">infotech@example.com</a></li>
                                    </ul>
                                    <a href="#" className="theme-btn hover-white mt-4">
                                        get A Quote <i className="fa-solid fa-arrow-right-long"></i>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-wrapper d-flex align-items-center justify-content-between">
                        <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                            Copyright © 2024 infatoz All Rights Reserved. </p>
                        <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                            <li><a href="#">Terms &amp; Condition</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
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
