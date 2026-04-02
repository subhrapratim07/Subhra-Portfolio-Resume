import React from "react";

const Resume = () => {
  return (
    <div id="resume" style={{ background: '#0a0a0a', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');

        .resume-section {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .resume-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 4rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .resume-title-big {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 6rem);
          color: #fff;
          line-height: 1;
          letter-spacing: 0.02em;
        }

        .resume-subtitle {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .resume-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .resume-col-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          color: rgba(255,255,255,0.25);
          letter-spacing: 0.25em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .resume-col-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.08);
        }

        .timeline-item {
          position: relative;
          padding: 1.5rem;
          border: 1px solid rgba(255,255,255,0.07);
          margin-bottom: 1rem;
          transition: border-color 0.2s;
          background: rgba(255,255,255,0.01);
        }

        .timeline-item:hover {
          border-color: rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.03);
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(255,255,255,0.15);
        }

        .timeline-item:hover::before {
          background: #fff;
        }

        .timeline-date {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .timeline-role {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.4rem;
          color: #fff;
          letter-spacing: 0.05em;
          line-height: 1.1;
          margin-bottom: 0.25rem;
        }

        .timeline-org {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          color: rgba(255,255,255,0.4);
          margin-bottom: 0.75rem;
        }

        .timeline-desc {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          color: rgba(255,255,255,0.3);
          line-height: 1.8;
        }

        .timeline-tag {
          display: inline-block;
          font-family: 'Space Mono', monospace;
          font-size: 0.55rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.2rem 0.5rem;
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.3);
          margin-top: 0.75rem;
          margin-right: 0.25rem;
        }

        @media (max-width: 768px) {
          .resume-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="resume-section">
        <div className="resume-header">
          <div>
            <div className="resume-title-big">Resume</div>
          </div>
          <div className="resume-subtitle">Experiences &amp; Qualifications</div>
        </div>

        <div className="resume-grid">
          {/* Experience Column */}
          <div>
            <div className="resume-col-label">01 — Experience</div>

            <div className="timeline-item">
              <div className="timeline-date">Jan 2024 — May 2024</div>
              <div className="timeline-role">Main Coder</div>
              <div className="timeline-org">Fr Global Macro Private Limited</div>
              <div className="timeline-desc">
                Internship role involving Pine Script coding and algorithm creation in TD ADL.
                Focused on manipulating TradingView indicators to optimize trading strategies,
                deepening understanding of algorithmic trading and financial markets.
              </div>
              <span className="timeline-tag">Pine Script</span>
              <span className="timeline-tag">TD ADL</span>
              <span className="timeline-tag">TradingView</span>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">22 Dec 2024</div>
              <div className="timeline-role">Participant</div>
              <div className="timeline-org">ICDMAI 2025 Hackathon</div>
              <div className="timeline-desc">
                Team Ctrl+Alt+Elite. Presented "Instant Micro-Credit Scoring from
                Digital Footprints" — a topic we are deeply passionate about.
              </div>
              <span className="timeline-tag">AI/ML</span>
              <span className="timeline-tag">FinTech</span>
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="resume-col-label">02 — Education</div>

            <div className="timeline-item">
              <div className="timeline-date">2024 — 2026</div>
              <div className="timeline-role">M.Sc, Computer Science</div>
              <div className="timeline-org">University of Calcutta, Technology Campus</div>
              <div className="timeline-desc">
                Currently pursuing M.Sc. in Computer Science, further strengthening
                knowledge and skills in advanced computing and research areas.
              </div>
              <span className="timeline-tag">Ongoing</span>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2021 — 2024</div>
              <div className="timeline-role">B.Sc, Computer Science</div>
              <div className="timeline-org">Asutosh College, University of Calcutta</div>
              <div className="timeline-desc">
                Developed proficiency in Python, Java, C, Shell, HTML, and CSS.
                Gained knowledge in DBMS, deep learning, machine learning,
                data structures, and computer architecture.
              </div>
              <span className="timeline-tag">Python</span>
              <span className="timeline-tag">Java</span>
              <span className="timeline-tag">ML/DL</span>
              <span className="timeline-tag">DBMS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
