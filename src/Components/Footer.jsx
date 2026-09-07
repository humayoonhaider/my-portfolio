import {
  ArrowUp,
  ArrowUpRight,
  GitFork,
  ExternalLink,
  Mail
} from "lucide-react";

import { useReveal } from "../hooks/useReveal";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const [mainRef, mainVisible] = useReveal();
  const [bottomRef, bottomVisible] = useReveal();

  return (
    <footer className="footer">
      <div
        ref={mainRef}
        className={`footer-main reveal ${mainVisible ? "is-visible" : ""}`}
      >
        <div className="footer-identity">
          <a href="#home" className="footer-logo">
            M. HUMAYOON
          </a>
          <span className="footer-role section-tag">MERN STACK DEVELOPER</span>
          <p>
            Building modern web experiences with clean code and thoughtful
            design.
          </p>
        </div>

        <div className="footer-navigation">
          <span className="footer-label">NAVIGATION</span>
          <nav>
            <a href="#aboutMe">ABOUT</a>
            <a href="#mySkills">SKILLS</a>
            <a href="#myProjects">PROJECTS</a>
            <a href="#myExperience">EXPERIENCE</a>
            <a href="#contactMe">CONTACT</a>
          </nav>
        </div>

        <div className="footer-connect">
          <span className="footer-label">CONNECT</span>
          <div className="footer-socials">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=humayoonkhan003@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Send me an email"
            >
              <Mail />
              <span>EMAIL</span>
              <ArrowUpRight />
            </a>
            <a
              href="https://github.com/humayoonhaider"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit my GitHub"
            >
              <GitFork />
              <span>GITHUB</span>
              <ArrowUpRight />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-humayoon-790437434/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit my LinkedIn"
            >
              <ExternalLink />
              <span>LINKEDIN</span>
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>

      <div
        ref={bottomRef}
        className={`footer-bottom reveal ${bottomVisible ? "is-visible" : ""}`}
      >
        <span>© 2026 M. HUMAYOON</span>
        <span>BUILT WITH REACT · JAVASCRIPT · CSS</span>
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <span className="btn-secondary">  
           BACK TO TOP{" "} <ArrowUp /></span>
        </button>
      </div>

      <div className="footer-closing">
        <span>BUILT TO LEARN. BUILT TO CREATE.</span>
      </div>
    </footer>
  );
}

export default Footer;
