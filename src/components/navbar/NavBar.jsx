import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import AOS from 'aos';
import 'aos/dist/aos.css';

const navItems = [
  { id: 0, name: "home" },
  { id: 1, name: "skills" },
  { id: 2, name: "works" },
  { id: 3, name: "resume" },
  { id: 4, name: "contact" },
];

const NavBar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleNav = (name) => {
    setIsOpen(!isOpen);
    setActiveIndex(name === activeIndex ? null : name);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap');

        .navbar-wrap {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          transition: all 0.3s ease;
        }

        .navbar-wrap.scrolled {
          background: rgba(10,10,10,0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .navbar-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1.25rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.3rem;
          color: #fff;
          text-decoration: none;
          letter-spacing: 0.1em;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links a {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          transition: color 0.2s;
          position: relative;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 1px;
          background: #fff;
          transition: width 0.2s;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: #fff;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .nav-hire {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #0a0a0a;
          background: #fff;
          padding: 0.55rem 1.25rem;
          text-decoration: none;
          transition: all 0.2s;
          border: 1px solid #fff;
        }

        .nav-hire:hover {
          background: transparent;
          color: #fff;
        }

        .nav-hamburger {
          display: none;
          background: none;
          border: 1px solid rgba(255,255,255,0.15);
          padding: 0.4rem;
          cursor: pointer;
          color: #fff;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 75%;
          height: 100vh;
          background: #0a0a0a;
          border-left: 1px solid rgba(255,255,255,0.06);
          z-index: 200;
          padding: 5rem 2rem;
          transition: right 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .mobile-menu.open {
          right: 0;
        }

        .mobile-menu a {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: color 0.2s;
        }

        .mobile-menu a:hover {
          color: #fff;
        }

        .mobile-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: none;
          border: none;
          color: rgba(255,255,255,0.5);
          cursor: pointer;
        }

        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          z-index: 150;
          display: none;
        }

        .mobile-overlay.open {
          display: block;
        }

        @media (max-width: 768px) {
          .nav-links, .nav-hire {
            display: none;
          }
          .nav-hamburger {
            display: flex;
          }
        }
      `}</style>

      <div className={`navbar-wrap ${scrollPosition > 20 ? 'scrolled' : ''}`}>
        <nav className="navbar-inner">
          <Link onClick={() => window.scrollTo(0, 0)} to="/" className="nav-logo">
            SPM.dev
          </Link>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.name}`}
                  className={item.name === activeIndex ? 'active' : ''}
                  onClick={() => setActiveIndex(item.name)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <a href="https://www.linkedin.com/in/subhra-pratim-mondal-a522352a4/" className="nav-hire">
            Hire Me
          </a>

          <button className="nav-hamburger" onClick={() => setIsOpen(true)}>
            <HiMenu size={20} />
          </button>
        </nav>
      </div>

      <div className={`mobile-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)} />
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setIsOpen(false)}>
          <RxCross2 size={24} />
        </button>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.name}`}
            onClick={() => { setIsOpen(false); setActiveIndex(item.name); }}
          >
            {item.name}
          </a>
        ))}
        <a href="https://www.linkedin.com/in/subhra-pratim-mondal-a522352a4/" className="nav-hire" style={{ width: 'fit-content' }}>
          Hire Me
        </a>
      </div>
    </>
  );
};

export default NavBar;
