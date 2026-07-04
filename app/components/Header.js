'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <>
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
    

    <div className="fix-area">
        <div className="offcanvas__info">
            <div className="offcanvas__wrapper">
                <div className="offcanvas__content">
                    <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                        <div className="offcanvas__logo">
                            <a className="d-inline-block site-logo" href="/"><img
                                    src="/wp-content/uploads/2024/04/black-logo.svg"
                                    alt="Infatoz" /></a>
                        </div>
                        <div className="offcanvas__close">
                            <button>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <p className="text d-none d-lg-block">
                        Nullam dignissim, ante scelerisque the is euismod fermentum odio sem semper the is erat, a
                        feugiat leo urna eget eros. Duis Aenean a imperdiet risus. </p>
                    <div className="mobile-menu fix mb-3"></div>
                    <div className="offcanvas__contact">
                        <h4>Contact Info</h4>
                        <ul>
                            <li className="d-flex align-items-center">
                                <div className="offcanvas__contact-icon mr-15"><i className="fas fa-map-marker-alt"></i></div>
                                <div className="offcanvas__contact-text"><a href="#">Main Street, Melbourne, Australia</a>
                                </div>
                            </li>
                            <li className="d-flex align-items-center">
                                <div className="offcanvas__contact-icon mr-15"><i className="far fa-envelope"></i></div>
                                <div className="offcanvas__contact-text"><a
                                        href="mailto:info@example.com">info@example.com</a></div>
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
                                <span>
                                    Get A Quote <i className="fa-solid fa-arrow-right-long"></i>
                                </span>
                            </a>
                        </div>

                        <div className="social-icon d-flex align-items-center"><a href="#"><i
                                    className="fa fa-facebook"></i></a><a href="#"><i className="fab fa-twitter"></i></a><a
                                href="#"><i className="fab fa-linkedin-in"></i></a><a href="#"><i
                                    className="fab fa-instagram"></i></a></div>
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
                            <li><i className="far fa-envelope"></i><a href="mailto:info@example.com"
                                    className="link">info@example.com</a></li>
                            <li><i className="fas fa-phone-volume"></i><a href="tel:+2086660112"
                                    className="link">+208-666-0112</a></li>
                        </ul>
                        <div className="top-right">
                            <div className="social-icon d-flex align-items-center">
                                <span>Follow Us:</span>
                                <a href="#"><i className="fa fa-facebook-f"></i></a><a href="#"><i
                                        className="fab fa-twitter"></i></a><a href="#"><i
                                        className="fab fa-linkedin-in"></i></a><a href="#"><i
                                        className="fab fa-youtube"></i></a>
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
                                    <a className="d-inline-block site-logo" href="/"><img
                                            src="/wp-content/uploads/2024/04/black-logo.svg"
                                            alt="Infatoz" /></a>
                                </div>
                            </div>
                            <div className="header-right d-flex justify-content-end align-items-center">
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
                                                <li id="menu-item-1355" className="menu-item menu-item-1355">
                                                    <a href="#">Services</a>
                                                </li>
                                                <li id="menu-item-1497" className="menu-item menu-item-1497">
                                                    <a href="#">Pages</a>
                                                </li>
                                                <li id="menu-item-227" className="menu-item menu-item-227">
                                                    <a href="#">Blog</a>
                                                </li>
                                                <li id="menu-item-1719" className="menu-item menu-item-1719">
                                                    <a href="#">Contact</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <a href="#0" className="search-trigger search-icon"><i className="fal fa-search"></i></a>

                                <div className="header-button">
                                    <a href="/contact" className="theme-btn">
                                        <span>
                                            Get A Quote <i className="fa-solid fa-arrow-right-long"></i>
                                        </span>
                                    </a>
                                </div>


                                <div className="header__hamburger d-xl-block my-auto">
                                    <div className="sidebar__toggle">
                                        <i className="fas fa-bars"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  );
}
