import React from "react";
import { data } from "../../data/data";

const Work = () => {
  return (
    <div id="works" style={{ background: "#0a0a0a", padding: "5rem 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap');

        .work-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .work-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .work-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 6rem);
          color: #fff;
          line-height: 1;
          letter-spacing: 0.02em;
        }

        .work-sub {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          color: rgba(255,255,255,0.25);
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .work-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .work-card {
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.01);
          overflow: hidden;
          position: relative;
          transition: border-color 0.25s;
          display: flex;
          flex-direction: column;
        }

        .work-card:hover {
          border-color: rgba(255,255,255,0.2);
        }

        .work-card:hover .work-img {
          transform: scale(1.04);
          filter: grayscale(60%) contrast(1.05);
        }

        .work-img-wrap {
          overflow: hidden;
          height: 200px;
          position: relative;
        }

        .work-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) contrast(1.1);
          transition: transform 0.4s ease, filter 0.4s ease;
          display: block;
        }

        .work-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(10,10,10,0.8) 100%);
          pointer-events: none;
        }

        .work-num {
          position: absolute;
          top: 1rem;
          left: 1rem;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.5rem;
          color: rgba(255,255,255,0.08);
          line-height: 1;
          pointer-events: none;
          z-index: 2;
        }

        .work-body {
          padding: 1.25rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1rem;
        }

        .work-card-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.4rem;
          color: #fff;
          letter-spacing: 0.04em;
          line-height: 1.1;
        }

        .work-links {
          display: flex;
          gap: 0.75rem;
        }

        .work-link {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 0.5rem 1rem;
          transition: all 0.2s;
        }

        .work-link-live {
          background: #fff;
          color: #0a0a0a;
          border: 1px solid #fff;
        }

        .work-link-live:hover {
          background: transparent;
          color: #fff;
        }

        .work-link-git {
          background: transparent;
          color: rgba(255,255,255,0.5);
          border: 1px solid rgba(255,255,255,0.12);
        }

        .work-link-git:hover {
          border-color: rgba(255,255,255,0.4);
          color: #fff;
        }

        @media (max-width: 768px) {
          .work-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="work-inner">
        <div className="work-header">
          <div className="work-title">Works</div>
          <div className="work-sub">Selected Projects</div>
        </div>

        <div className="work-grid">
          {data.map((project, index) => (
            <div key={project.id} className="work-card">
              <div className="work-img-wrap">
                <img src={project.img} alt={project.title} className="work-img" />
                <div className="work-img-overlay" />
                <div className="work-num">0{index + 1}</div>
              </div>
              <div className="work-body">
                <div className="work-card-title">{project.title}</div>
                <div className="work-links">
                  <a href={project.link} target="_blank" rel="noreferrer" className="work-link work-link-live">
                    Live ↗
                  </a>
                  <a href={project.git} target="_blank" rel="noreferrer" className="work-link work-link-git">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
