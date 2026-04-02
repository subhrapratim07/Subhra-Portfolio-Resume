import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Subhra-Pratim-Mondal.pdf";

const Hero = () => {
  return (
    <div id="home" className="hero-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');

        .hero-section {
          background: #0a0a0a;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .hero-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        /* ── GIANT WATERMARK behind everything ── */
        .hero-watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 0.85;
          user-select: none;
          white-space: nowrap;
        }

        .hero-watermark-line {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(6rem, 17vw, 17rem);
          letter-spacing: 0.05em;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.06);
          display: block;
        }

        /* ── Main layout ── */
        .hero-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 6rem 2rem 4rem;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: center;
          position: relative;
          z-index: 3;
        }

        .hero-tag {
          display: inline-block;
          border: 1px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.5);
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 0.35rem 0.9rem;
          margin-bottom: 1.5rem;
        }

        .hero-name-big {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 6vw, 6.5rem);
          line-height: 0.92;
          color: #fff;
          letter-spacing: 0.02em;
          margin-bottom: 0.5rem;
        }

        .hero-name-big span {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
          color: transparent;
        }

        .hero-type-line {
          font-family: 'Space Mono', monospace;
          font-size: 0.95rem;
          color: #fff;
          margin: 1.25rem 0 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .hero-type-line::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: rgba(255,255,255,0.35);
          flex-shrink: 0;
        }

        .hero-desc {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 2rem;
        }

        .hero-cta-group {
          display: flex;
          gap: 1rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: #fff;
          color: #0a0a0a;
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.8rem 1.8rem;
          text-decoration: none;
          transition: all 0.2s;
          border: 2px solid #fff;
          display: inline-block;
        }

        .btn-primary:hover { background: transparent; color: #fff; }

        .btn-secondary {
          background: transparent;
          color: #fff;
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.8rem 1.8rem;
          text-decoration: none;
          border: 2px solid rgba(255,255,255,0.18);
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-secondary:hover { border-color: #fff; }

        .hero-socials {
          display: flex;
          gap: 1rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .hero-socials a {
          color: rgba(255,255,255,0.25);
          transition: color 0.2s;
          display: flex;
        }

        .hero-socials a:hover { color: #fff; }

        /* ═══════════════════════════════════════════
           RIGHT COLUMN — DESKTOP photo treatment
        ═══════════════════════════════════════════ */
        .hero-right {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          z-index: 3;
        }
@media (max-width: 768px) {
  .hero-right {
    margin-top: 70px; /* 👈 FIX: pushes image below navbar */
  }
}
        /* Atmospheric glow behind the photo — desktop */
        .hero-right::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 380px;
          height: 520px;
          background: radial-gradient(
            ellipse 60% 80% at 50% 80%,
            rgba(255,255,255,0.04) 0%,
            rgba(255,255,255,0.02) 40%,
            transparent 70%
          );
          z-index: 1;
          pointer-events: none;
        }

        /* Tilted name scripts */
        .hero-name-scripts {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-end;
          z-index: 0;
          pointer-events: none;
          user-select: none;
          padding: 1rem 0;
        }

        .hero-name-script-line {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(4rem, 10vw, 4.5rem);
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.055);
          letter-spacing: 0.04em;
          line-height: 1;
          white-space: nowrap;
          transform: rotate(-90deg);
          display: block;
        }

        /* Photo frame */
        .hero-img-frame {
          position: relative;
          width: 340px;
          max-width: 90%;
          z-index: 2;
        }

        /* Corner accent lines */
        .hero-img-frame::before,
        .hero-img-frame::after {
          content: '';
          position: absolute;
          width: 36px;
          height: 36px;
          z-index: 4;
        }

        .hero-img-frame::before {
          top: -8px; left: -8px;
          border-top: 1px solid rgba(255,255,255,0.22);
          border-left: 1px solid rgba(255,255,255,0.22);
        }

        .hero-img-frame::after {
          bottom: -8px; right: -8px;
          border-bottom: 1px solid rgba(255,255,255,0.22);
          border-right: 1px solid rgba(255,255,255,0.22);
        }

        .hero-img-frame img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          object-position: top center;
          filter: grayscale(100%) contrast(1.1);
          display: block;
          position: relative;
          z-index: 2;
        }

        /* Fade the bottom of the photo into the background — desktop */
        .hero-img-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 140px;
          background: linear-gradient(to bottom, transparent 0%, #0a0a0a 100%);
          z-index: 3;
          pointer-events: none;
        }

        /* Badge */
        .hero-badge {
          position: absolute;
          bottom: -1rem;
          left: -1.5rem;
          width: 105px;
          height: 105px;
          border: 1px solid rgba(255,255,255,0.12);
          background: #0a0a0a;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 5;
        }

        .hero-badge-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.2rem;
          color: #fff;
          line-height: 1;
        }

        .hero-badge-text {
          font-family: 'Space Mono', monospace;
          font-size: 0.52rem;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-align: center;
        }

        .hero-info-tag {
          position: absolute;
          top: 2.5rem;
          right: -2rem;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          z-index: 5;
        }

        .hero-info-tag span {
          font-family: 'Space Mono', monospace;
          font-size: 0.55rem;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .hero-info-tag strong {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem;
          color: rgba(255,255,255,0.7);
          letter-spacing: 0.06em;
          font-weight: 400;
        }

        /* Scroll cue */
        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          z-index: 5;
        }

        .scroll-indicator span {
          font-family: 'Space Mono', monospace;
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.2);
          text-transform: uppercase;
        }

        .scroll-line {
          width: 1px;
          height: 50px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.25), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        /* Animations */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .anim-1 { animation: fadeUp 0.6s 0.0s ease both; }
        .anim-2 { animation: fadeUp 0.6s 0.1s ease both; }
        .anim-3 { animation: fadeUp 0.6s 0.2s ease both; }
        .anim-4 { animation: fadeUp 0.6s 0.3s ease both; }
        .anim-5 { animation: fadeUp 0.6s 0.4s ease both; }
        .anim-6 { animation: fadeUp 0.6s 0.5s ease both; }

        /* ── MOBILE ── */
        @media (max-width: 900px) {
          .hero-info-tag { display: none; }
        }

        @media (max-width: 768px) {
          .hero-section { align-items: flex-start; }

          .hero-container {
            grid-template-columns: 1fr;
            padding: 0 0 4rem;
            gap: 0;
          }

          /* ── RIGHT (photo) on mobile — full-width cinematic treatment ── */
          .hero-right {
            order: -1;
            justify-content: center;
            width: 100%;
            /* no padding so image bleeds edge-to-edge */
          }

          /* Kill the desktop glow on mobile */
          .hero-right::before { display: none; }

          .hero-img-frame {
            width: 100%;
            max-width: 100%;
            /* remove frame corners on mobile — not needed at full width */
          }

          .hero-img-frame::before,
          .hero-img-frame::after { display: none; }

          .hero-img-frame img {
            width: 100%;
            height: 55vw;
            min-height: 240px;
            max-height: 340px;
            object-fit: cover;
            object-position: top center;
            display: block;
          }

          /* Stronger bottom fade on mobile — bleeds into the text area below */
          .hero-img-overlay {
            height: 60%;
            background: linear-gradient(
              to bottom,
              transparent 0%,
              rgba(10,10,10,0.5) 50%,
              #0a0a0a 100%
            );
          }

          /* Badge repositioned for mobile */
          .hero-badge {
            bottom: 1rem;
            left: 1rem;
            width: 75px;
            height: 75px;
          }

          .hero-badge-num { font-size: 1.6rem; }
          .hero-badge-text { font-size: 0.46rem; }

          /* LEFT (text) — add top padding so it doesn't crash into the photo */
          .hero-left {
            padding: 1.5rem 1.5rem 0;
          }

          .hero-name-big { font-size: clamp(2.8rem, 13vw, 4rem); }
          .hero-watermark-line { font-size: clamp(4rem, 22vw, 8rem); }
          .hero-name-script { display: none; }

          .hero-tag { margin-bottom: 1rem; }
          .hero-desc { margin-bottom: 1.25rem; }
          .hero-cta-group { margin-bottom: 1.5rem; gap: 0.75rem; }
          .btn-primary, .btn-secondary { padding: 0.65rem 1.2rem; font-size: 0.65rem; }
        }
      `}</style>

      <div className="hero-grid-bg" />

      {/* ── GIANT WATERMARK ── */}
      <div className="hero-watermark" aria-hidden="true">
        <span className="hero-watermark-line">SUBHRA</span>
        <span className="hero-watermark-line">PRATIM</span>
        <span className="hero-watermark-line">MONDAL</span>
      </div>

      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-left">
          <div className="hero-tag anim-1">// Available for work</div>

          <div className="anim-2">
            <div className="hero-name-big">
              SUBHRA<br />
              <span>PRATIM</span><br />
              MONDAL
            </div>
          </div>

          <div className="hero-type-line anim-3">
            <TypeAnimation
              sequence={["Web Developer", 2000, "Student", 2000, "Algo Coder", 2000, ""]}
              speed={35}
              wrapper="span"
              repeat={Infinity}
              style={{ color: '#fff' }}
            />
          </div>

          <p className="hero-desc anim-3">Kolkata, India — Full Stack Developer</p>

          <div className="hero-cta-group anim-4">
            <a href="https://www.linkedin.com/in/subhra-pratim-mondal-a522352a4/" className="btn-primary">
              Hire Me
            </a>
            <a href={resumePDF} className="btn-secondary" download>
              Resume <FiDownload size={13} />
            </a>
          </div>

          <ul className="hero-socials anim-5">
            <li><a href="https://github.com/subhrapratim07"><AiFillGithub size={20} /></a></li>
            <li><a href="https://www.linkedin.com/in/subhra-pratim-mondal-a522352a4/"><FaLinkedinIn size={20} /></a></li>
            <li><a href="https://www.instagram.com/subhra74077/?next=%2F&hl=en"><AiFillInstagram size={20} /></a></li>
            <li><a href="https://www.facebook.com/subhrapratim.mondal.7"><FaFacebook size={20} /></a></li>
            <li><a href="https://x.com/subhrapratim07"><AiFillTwitterCircle size={20} /></a></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="hero-right anim-6">

          {/* Tilted name behind photo — desktop only */}
          <div className="hero-name-scripts" aria-hidden="true">
            <span className="hero-name-script-line">subhrapratim</span>
            
          </div>

          <div className="hero-img-frame">
            <img
              src="https://i.ibb.co/ZRxXwhzg/hero.png"
              alt="Subhra Pratim Mondal"
            />
            {/* Bottom fade overlay — ties photo into dark background */}
            <div className="hero-img-overlay" />

            <div className="hero-badge">
              <span className="hero-badge-num">3+</span>
              <span className="hero-badge-text">Years of<br />Coding</span>
            </div>
          </div>

          {/* Floating label — desktop only */}
          <div className="hero-info-tag">
            <span>Name</span>
            <strong>Subhra</strong>
            <strong> Pratim</strong>
            <strong>Mondal</strong>
          </div>

        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </div>
  );
};

export default Hero;