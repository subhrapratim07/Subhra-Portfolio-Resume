import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8ctlo3r",
        "template_6ji7cg6",
        formRef.current,
        "wejhtCbjnnPIug6iA"
      )
      .then(
        () => { alert("Message sent successfully!"); e.target.reset(); },
        (error) => { alert("Failed to send message. Please try again."); console.error("Error:", error); }
      );
  };

  return (
    <div id="contact" style={{ background: '#111', padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap');

        .contact-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
        }

        .contact-left-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          color: rgba(255,255,255,0.25);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }

        .contact-big-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 6vw, 5.5rem);
          color: #fff;
          line-height: 1;
          letter-spacing: 0.02em;
          margin-bottom: 1rem;
        }

        .contact-big-text span {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
          color: transparent;
        }

        .contact-note {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          color: rgba(255,255,255,0.3);
          line-height: 1.8;
          max-width: 320px;
        }

        .contact-form-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 0.4rem;
          display: block;
        }

        .contact-input {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          color: #fff;
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          padding: 0.85rem 1rem;
          outline: none;
          transition: border-color 0.2s;
          box-sizing: border-box;
          margin-bottom: 1.25rem;
        }

        .contact-input:focus {
          border-color: rgba(255,255,255,0.3);
        }

        .contact-input::placeholder {
          color: rgba(255,255,255,0.2);
        }

        .contact-btn {
          width: 100%;
          background: #fff;
          color: #0a0a0a;
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 1rem;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .contact-btn:hover {
          background: rgba(255,255,255,0.85);
        }

        @media (max-width: 768px) {
          .contact-inner {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>

      <div className="contact-inner">
        <div>
          <div className="contact-left-label">// Let's connect</div>
          <div className="contact-big-text">
            YOU NEED<br />
            <span>A WEBSITE?</span>
          </div>
          <p className="contact-note">
            Looking for a beautiful, performant web experience?
            Leave a message and I'll get back to you shortly.
          </p>
        </div>

        <div>
          <form ref={formRef} onSubmit={sendEmail}>
            <label className="contact-form-label">Your Email</label>
            <input
              className="contact-input"
              type="email"
              placeholder="example@email.com"
              name="user_email"
              required
              autoComplete="off"
            />

            <label className="contact-form-label">Your Name</label>
            <input
              className="contact-input"
              type="text"
              name="user_name"
              required
              autoComplete="off"
              placeholder="John Doe"
            />

            <label className="contact-form-label">Message</label>
            <textarea
              className="contact-input"
              rows="4"
              placeholder="Tell me about your project..."
              name="message"
              required
              style={{ resize: 'vertical' }}
            ></textarea>

            <button className="contact-btn" type="submit">
              Send Message <RiSendPlaneFill />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
