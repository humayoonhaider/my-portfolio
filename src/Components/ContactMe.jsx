import { ArrowUpRight, GitFork, ExternalLink, Mail, X } from "lucide-react";

import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import "./ContactMe.css";

function ContactMe() {
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  const [headingRef, headingVisible] = useReveal();
  const [ctaRef, ctaVisible] = useReveal();
  const [linksRef, linksVisible] = useReveal({ threshold: 0.1 });

  return (
    <section className="contact" id="contactMe">
      {/* ================= SECTION HEADING ================= */}
      <div
        ref={headingRef}
        className={`section-heading reveal ${
          headingVisible ? "is-visible" : ""
        }`}
      >
        <span className="section-tag">HAVE A PROJECT IN MIND?</span>

        <h2>LET'S BUILD SOMETHING GREAT.</h2>

        <p>
          Have an idea, web project, or development opportunity in mind? Let's
          turn it into a modern, responsive, and useful digital experience.
        </p>
      </div>

      {/* ================= CONTACT MAIN ================= */}
      <div className={`contact-main ${isMessageOpen ? "is-open" : ""}`}>
        {/* ================= CTA AREA ================= */}
        <div
          ref={ctaRef}
          className={`contact-cta reveal-scale ${
            ctaVisible ? "is-visible" : ""
          }`}
        >
          <span className="contact-label section-tag">READY TO BUILD?</span>

          <h3>Let's create something worth building.</h3>

          <p>
            I'm available for web development projects, React.js applications,
            and modern digital experiences.
          </p>

          {/* Quick Message Button */}
          <button
            type="button"
            className="quick-message-button"
            onClick={() => setIsMessageOpen(!isMessageOpen)}
            aria-expanded={isMessageOpen}
            aria-controls="quick-message-form"
          >
            {isMessageOpen ? (
              <>
                CLOSE MESSAGE
                <X aria-hidden="true" />
              </>
            ) : (
              <>
                QUICK MESSAGE
                <ArrowUpRight aria-hidden="true" />
              </>
            )}
          </button>
        </div>

        {/* ================= QUICK MESSAGE FORM ================= */}
        {isMessageOpen && (
          <div id="quick-message-form" className="quick-message-form">
            <div className="form-heading">
              <span className="section-tag">QUICK MESSAGE</span>

              <h3>Tell me about your idea.</h3>

              <p>
                Share a few details about your project and I'll get back to you.
              </p>
            </div>

            <form
              action="https://formsubmit.co/humayoonkhan003@gmail.com"
              method="POST"
            >
              {/* FormSubmit Settings */}
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Project Inquiry"
              />

              <input type="hidden" name="_template" value="table" />

              <input type="hidden" name="_captcha" value="false" />

              {/* ================= NAME ================= */}
              <div className="form-field">
                <label htmlFor="name">NAME</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </div>

              {/* ================= EMAIL ================= */}
              <div className="form-field">
                <label htmlFor="email">EMAIL</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              {/* ================= SUBJECT ================= */}
              <div className="form-field">
                <label htmlFor="subject">SUBJECT</label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What would you like to build?"
                  autoComplete="off"
                />
              </div>

              {/* ================= MESSAGE ================= */}
              <div className="form-field">
                <label htmlFor="message">MESSAGE</label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me a little about your project..."
                  required
                />
              </div>

              {/* ================= SUBMIT ================= */}
              <button type="submit" className="send-message-button">
                SEND MESSAGE
                <ArrowUpRight aria-hidden="true" />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* ================= DIRECT CONTACT LINKS ================= */}
      <div
        ref={linksRef}
        className={`contact-links reveal-stagger ${
          linksVisible ? "is-visible" : ""
        }`}
      >
        {/* ================= EMAIL ================= */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=humayoonkhan003@gmail.com"
          className="contact-link"
          aria-label="Send an email to Muhammad Humayoon"
        >
          <span className="contact-number">
            01 {")"}
            <Mail aria-hidden="true" />
            EMAIL
          </span>

          <div className="contact-link-content">
            <strong>humayoonkhan003@gmail.com</strong>

            <ArrowUpRight className="contact-link-arrow" aria-hidden="true" />
          </div>
        </a>

        {/* ================= GITHUB ================= */}
        <a
          href="https://github.com/humayoonhaider"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Muhammad Humayoon's GitHub profile"
        >
          <span className="contact-number">
            02 {")"}
            <GitFork aria-hidden="true" />
            GITHUB
          </span>

          <div className="btn-primary">
            <span>VIEW MY GITHUB</span>

            <ArrowUpRight className="contact-link-arrow" aria-hidden="true" />
          </div>
        </a>

        {/* ================= LINKEDIN ================= */}
        <a
          href="https://www.linkedin.com/in/muhammad-humayoon-790437434/"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect with Muhammad Humayoon on LinkedIn"
        >
          <span className="contact-number">
            03 {")"}
            <ExternalLink aria-hidden="true" />
            LINKEDIN
          </span>

          <div className="btn-secondary">
            <span>CONNECT ON LINKEDIN</span>

            <ArrowUpRight className="contact-link-arrow" aria-hidden="true" />
          </div>
        </a>
      </div>
    </section>
  );
}

export default ContactMe;
