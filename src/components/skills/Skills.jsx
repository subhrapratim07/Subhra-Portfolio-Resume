import React from "react";

// Skill data — update percentages / add more as needed
const skills = [
  { name: "React.js", level: 85, category: "Frontend" },
  { name: "JavaScript", level: 88, category: "Frontend" },
  { name: "HTML & CSS", level: 92, category: "Frontend" },
  { name: "Tailwind CSS", level: 80, category: "Frontend" },
  { name: "Python", level: 82, category: "Backend" },
  { name: "Java", level: 75, category: "Backend" },
  { name: "Pine Script", level: 78, category: "Algo" },
  { name: "Machine Learning", level: 70, category: "AI/ML" },
  { name: "Deep Learning", level: 65, category: "AI/ML" },
  { name: "DBMS / SQL", level: 78, category: "Backend" },
  { name: "Git & GitHub", level: 85, category: "Tools" },
  { name: "C / Shell", level: 72, category: "Backend" },
];

const categories = ["All", "Frontend", "Backend", "AI/ML", "Algo", "Tools"];

const Skills = () => {
  const [active, setActive] = React.useState("All");

  const filtered = active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <div id="skills" style={{ background: "#111", padding: "5rem 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap');

        .skills-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .skills-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .skills-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 6rem);
          color: #fff;
          line-height: 1;
          letter-spacing: 0.02em;
        }

        .skills-sub {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          color: rgba(255,255,255,0.25);
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .skills-filter {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }

        .filter-btn {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 0.4rem 1rem;
          border: 1px solid rgba(255,255,255,0.1);
          background: transparent;
          color: rgba(255,255,255,0.35);
          cursor: pointer;
          transition: all 0.2s;
        }

        .filter-btn:hover {
          border-color: rgba(255,255,255,0.3);
          color: rgba(255,255,255,0.7);
        }

        .filter-btn.active {
          background: #fff;
          color: #0a0a0a;
          border-color: #fff;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1rem;
        }

        .skill-card {
          border: 1px solid rgba(255,255,255,0.07);
          padding: 1.25rem 1.25rem 1rem;
          background: rgba(255,255,255,0.01);
          transition: all 0.2s;
          position: relative;
          overflow: hidden;
        }

        .skill-card:hover {
          border-color: rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.03);
        }

        .skill-card-top {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 0.8rem;
        }

        .skill-name {
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.05em;
        }

        .skill-pct {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.4rem;
          color: rgba(255,255,255,0.25);
          letter-spacing: 0.05em;
          line-height: 1;
        }

        .skill-bar-bg {
          height: 2px;
          background: rgba(255,255,255,0.07);
          position: relative;
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          background: #fff;
          transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .skill-cat-tag {
          display: inline-block;
          font-family: 'Space Mono', monospace;
          font-size: 0.52rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          margin-top: 0.6rem;
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="skills-inner">
        <div className="skills-header">
          <div className="skills-title">Skills</div>
          <div className="skills-sub">Tools &amp; Technologies</div>
        </div>

        <div className="skills-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filtered.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-card-top">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-pct">{skill.level}</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
              </div>
              <span className="skill-cat-tag">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
