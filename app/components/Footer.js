'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ fontFamily: "'Kumbh Sans', sans-serif" }}>
      <style>{`
        /* ── Footer Main Body ── */
        .ft-wrap {
          background: #0b0f3d;
          position: relative;
          overflow: hidden;
          padding: 80px 0 0;
        }
        .ft-shape {
          position: absolute;
          pointer-events: none;
          opacity: .55;
        }
        .ft-shape-1 { top: 0; left: 0; }
        .ft-shape-2 { bottom: 0; right: 0; }

        .ft-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── Grid ── */
        .ft-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.85fr 0.85fr 0.85fr 1.1fr;
          gap: 40px;
          padding-bottom: 60px;
        }
        @media (max-width: 1024px) {
          .ft-grid { grid-template-columns: 1fr 1fr 1fr; }
        }
        @media (max-width: 640px) {
          .ft-grid { grid-template-columns: 1fr 1fr; }
          .ft-col-brand { grid-column: 1 / -1; }
        }

        /* ── Brand column ── */
        .ft-brand-name {
          font-size: 28px;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.5px;
          line-height: 1;
          text-decoration: none;
          display: inline-block;
          margin-bottom: 16px;
        }
        .ft-brand-sub {
          display: block;
          font-size: 11px;
          font-weight: 700;
          color: #384BFF;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-top: 3px;
        }
        .ft-brand-desc {
          color: rgba(255,255,255,.65);
          font-size: 14px;
          line-height: 1.75;
          margin: 0;
        }

        /* ── Nav columns ── */
        .ft-col-title {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 16px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(255,255,255,.12);
          position: relative;
        }
        .ft-col-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 36px;
          height: 2px;
          background: #384BFF;
          border-radius: 2px;
        }
        .ft-nav-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .ft-nav-list li {
          border-bottom: none;
          margin: 0;
          padding: 0;
        }
        .ft-nav-list a {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 7px 0;
          color: rgba(255,255,255,.65);
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: color .2s, gap .2s;
        }
        .ft-nav-list a::before {
          content: '›';
          font-size: 16px;
          color: #384BFF;
          line-height: 1;
          transition: transform .2s;
          flex-shrink: 0;
        }
        .ft-nav-list a:hover {
          color: #fff;
          gap: 12px;
        }
        .ft-nav-list a:hover::before {
          transform: translateX(3px);
        }

        /* ── Contact column ── */
        .ft-contact-label {
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 5px;
        }
        .ft-contact-val {
          font-size: 14px;
          color: rgba(255,255,255,.65);
          margin: 0 0 18px;
          line-height: 1.6;
        }
        .ft-contact-val a {
          color: rgba(255,255,255,.65);
          text-decoration: none;
          transition: color .2s;
        }
        .ft-contact-val a:hover { color: #384BFF; }
        .ft-quote-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #384BFF;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          padding: 13px 26px;
          border-radius: 8px;
          text-decoration: none;
          transition: background .25s, transform .25s;
          margin-top: 4px;
          letter-spacing: .3px;
        }
        .ft-quote-btn:hover {
          background: #2a3ce0;
          transform: translateY(-2px);
        }

        /* ── Bottom Bar ── */
        .ft-bottom {
          background: #384BFF;
          position: relative;
        }
        .ft-bottom-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 54px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .ft-copy {
          font-size: 12.5px;
          font-weight: 600;
          color: rgba(255,255,255,.85);
          letter-spacing: .5px;
          text-transform: uppercase;
          margin: 0;
        }
        .ft-socials {
          display: flex;
          gap: 10px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .ft-socials a {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(255,255,255,.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 13px;
          text-decoration: none;
          transition: background .2s, transform .2s;
        }
        .ft-socials a:hover {
          background: rgba(255,255,255,.35);
          transform: translateY(-2px);
        }

        /* ── Scroll-to-top ── */
        .ft-scroll-top {
          position: absolute;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #fff;
          border: 2px solid #384BFF;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #384BFF;
          font-size: 16px;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(56,75,255,.25);
          transition: all .25s;
          z-index: 10;
        }
        .ft-scroll-top:hover {
          background: #384BFF;
          color: #fff;
          transform: translateX(-50%) translateY(-50%) translateY(-3px);
        }
      `}</style>

      {/* ── Main footer body ── */}
      <div className="ft-wrap">
        {/* Background shapes */}
        <img
          className="ft-shape ft-shape-1"
          src="/wp-content/uploads/2024/04/footer-shape-1.png"
          alt=""
          aria-hidden="true"
        />
        <img
          className="ft-shape ft-shape-2"
          src="/wp-content/uploads/2024/04/footer-shape-2.png"
          alt=""
          aria-hidden="true"
        />

        <div className="ft-container">
          <div className="ft-grid">

            {/* Col 1 — Brand */}
            <div className="ft-col-brand">
              <Link href="/" className="ft-brand-name" style={{ textDecoration: 'none' }}>
                infatoz
                <span className="ft-brand-sub">Technologies</span>
              </Link>
              <p className="ft-brand-desc">
                Building scalable software, web, and mobile solutions that help businesses grow, innovate, and succeed digitally.
              </p>
            </div>

            {/* Col 2 — Other Pages */}
            <div>
              <h3 className="ft-col-title">Other Pages</h3>
              <ul className="ft-nav-list">
                <li><Link href="/about">About</Link></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">FAQ</a></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Col 3 — Support */}
            <div>
              <h3 className="ft-col-title">Support</h3>
              <ul className="ft-nav-list">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Term &amp; Conditions</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Features Request</a></li>
                <li><a href="#">Online Support</a></li>
              </ul>
            </div>

            {/* Col 4 — Company */}
            <div>
              <h3 className="ft-col-title">Company</h3>
              <ul className="ft-nav-list">
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Partners</a></li>
              </ul>
            </div>

            {/* Col 5 — Contact */}
            <div>
              <h3 className="ft-col-title" style={{ marginBottom: 20 }}>Contact Us</h3>

              <p className="ft-contact-label">Address</p>
              <p className="ft-contact-val">
                1-42, Takkimane, Mahabaleshwara Nandanavana,<br />
                Kergal, Kundapura, Udupi,<br />
                Karnataka – 576219.
              </p>

              <p className="ft-contact-label">Phone</p>
              <p className="ft-contact-val">
                <a href="tel:+917019058591">+91 7019058591</a>
              </p>

              <p className="ft-contact-label">Email</p>
              <p className="ft-contact-val">
                <a href="mailto:info@infatoz.com">info@infatoz.com</a>
              </p>

              <Link href="/contact" className="ft-quote-btn">
                Get A Quote &nbsp;→
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="ft-bottom">
        {/* Scroll to top button */}
        <a href="#" className="ft-scroll-top" aria-label="Scroll to top">
          <i className="fas fa-arrow-up" />
        </a>

        <div className="ft-bottom-inner">
          <p className="ft-copy">© 2026 Infatoz Technologies. All Rights Reserved.</p>
          <ul className="ft-socials">
            <li><a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a></li>
            <li><a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a></li>
            <li><a href="#" aria-label="YouTube"><i className="fab fa-youtube" /></a></li>
            <li><a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
