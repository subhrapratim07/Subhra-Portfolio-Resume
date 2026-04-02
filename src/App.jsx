import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import Home from "./pages/Home";

const Loader = () => (
  <div style={{
    position: "fixed",
    inset: 0,
    background: "#0a0a0a",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    gap: "2rem",
  }}>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap');

      .loader-grid-bg {
        position: absolute;
        inset: 0;
        background-image:
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
        background-size: 60px 60px;
        pointer-events: none;
      }

      .loader-logo {
        font-family: 'Bebas Neue', sans-serif;
        font-size: 3.5rem;
        color: #fff;
        letter-spacing: 0.15em;
        position: relative;
        z-index: 2;
        animation: logoPulse 1.5s ease-in-out infinite;
      }

      @keyframes logoPulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.4; }
      }

      .loader-bar-wrap {
        position: relative;
        z-index: 2;
        width: 200px;
        height: 1px;
        background: rgba(255,255,255,0.08);
        overflow: hidden;
      }

      .loader-bar-fill {
        height: 100%;
        background: #fff;
        animation: barSlide 1.2s ease-in-out infinite;
        transform-origin: left;
      }

      @keyframes barSlide {
        0%   { transform: translateX(-100%) scaleX(0.3); }
        50%  { transform: translateX(0%)    scaleX(1); }
        100% { transform: translateX(100%)  scaleX(0.3); }
      }

      .loader-tag {
        font-family: 'Space Mono', monospace;
        font-size: 0.58rem;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: rgba(255,255,255,0.2);
        position: relative;
        z-index: 2;
      }

      .loader-dots span {
        display: inline-block;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: rgba(255,255,255,0.3);
        margin: 0 3px;
        animation: dotBounce 1.2s ease-in-out infinite;
      }

      .loader-dots span:nth-child(2) { animation-delay: 0.2s; }
      .loader-dots span:nth-child(3) { animation-delay: 0.4s; }

      @keyframes dotBounce {
        0%, 100% { opacity: 0.2; transform: translateY(0); }
        50%       { opacity: 1;   transform: translateY(-4px); }
      }
    `}</style>

    <div className="loader-grid-bg" />
    <div className="loader-logo">SPM.dev</div>
    <div className="loader-bar-wrap">
      <div className="loader-bar-fill" />
    </div>
    <div className="loader-dots">
      <span /><span /><span />
    </div>
    <div className="loader-tag">Loading portfolio...</div>
  </div>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      {loading ? <Loader /> : <Home />}
    </Suspense>
  );
};

export default App;
