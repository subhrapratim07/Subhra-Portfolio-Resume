import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div id="works" style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap');

        .footer-top {
          max-width: 1280px;
          margin: 0 auto;
          padding: 4rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .footer-cta-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          color: #fff;
          letter-spacing: 0.03em;
          line-height: 1;
        }

        .footer-social-row {
          display: flex;
          gap: 2rem;
        }

        .footer-social-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          text-decoration: none;
          color: rgba(255,255,255,0.3);
          transition: color 0.2s;
        }

        .footer-social-link:hover {
          color: #fff;
        }

        .footer-social-link span {
          font-family: 'Space Mono', monospace;
          font-size: 0.55rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.05);
          max-width: 1280px;
          margin: 0 auto;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-copy {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.1em;
        }

        .footer-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.1rem;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.1em;
        }
      `}</style>

      <div className="footer-top">
        <div className="footer-cta-text">
          LET'S<br />TALK
        </div>
        <div className="footer-social-row">
          <a href="" className="footer-social-link">
            <FaTelegramPlane size={22} />
            <span>Telegram</span>
          </a>
          <a href="https://wa.link/xmihzz" className="footer-social-link">
            <IoLogoWhatsapp size={22} />
            <span>WhatsApp</span>
          </a>
          <a href="https://www.instagram.com/subhra74077/?next=%2F&hl=en" className="footer-social-link">
            <RiInstagramFill size={22} />
            <span>Instagram</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">© 2025 Subhra Pratim Mondal. All rights reserved.</span>
        <span className="footer-logo">SPM.dev</span>
      </div>
    </div>
  );
};

export default Footer;
