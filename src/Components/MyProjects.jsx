import "./MyProjects.css";
import { useReveal } from "../hooks/useReveal";

function MyProjects() {
  const [headingRef, headingVisible] = useReveal();
  const [footerRef, footerVisible] = useReveal();
  const [project1Ref, project1Visible] = useReveal();
  const [project2Ref, project2Visible] = useReveal();
  const [project3Ref, project3Visible] = useReveal();

  return (
    <section className="projects" id="myProjects">

      {/* Section Heading */}
      <div
        ref={headingRef}
        className={`section-heading reveal ${
          headingVisible ? "is-visible" : ""
        }`}
      >
        <span className="section-tag">
          SELECTED WORK
        </span>

        <h2>PROJECTS</h2>

        <p>
          A selection of web development projects built with React.js,
          JavaScript, APIs, and modern frontend technologies to create
          practical, responsive, and user-friendly digital experiences.
        </p>
      </div>

      {/* Projects List */}
      <div className="projects-list">

        {/* ================= PROJECT 01 ================= */}
        <article
          ref={project1Ref}
          className={`project-card featured-project reveal-scale ${
            project1Visible ? "is-visible" : ""
          }`}
        >
          <div className="project-content">

            <span className="project-number section-tag">
              01) MANAGEMENT SYSTEM
            </span>

            <h3>
              <span className="important">
                School MIS
              </span>{" "}
              Management System
            </h3>

            <div className="project-preview">
              <img
                src="p.jpg"
                alt="School Management Information System dashboard"
              />
            </div>

            <div className="project-tech">
              <span>React.js</span>
              <span>JavaScript</span>
              <span>Axios</span>
              <span>JSON Server</span>
              <span>CRUD</span>
            </div>

            <p>
              A modern School Management Information System built with
              React.js for managing students, courses, fees, certificates,
              enrollments, and administrative workflows through a
              responsive and interactive interface.
            </p>

            <div className="project-actions">

              <button
                type="button"
                className="btn-primary"
                aria-label="School Management Information System project coming soon"
                disabled
              >
                VIEW PROJECT
                <span>↗</span>
              </button>

              <button
                type="button"
                className="btn-secondary"
                aria-label="School Management Information System GitHub repository coming soon"
                disabled
              >
                GITHUB
                <span>↗</span>
              </button>

            </div>

          </div>
        </article>

        {/* ================= PROJECT 02 ================= */}
        <article
          ref={project2Ref}
          className={`project-card reveal-left ${
            project2Visible ? "is-visible" : ""
          }`}
        >
          <div className="project-content">

            <span className="project-number section-tag">
              02) E-COMMERCE
            </span>

            <h3>
              <span className="important">
                E-Commerce
              </span>{" "}
              Shopping Website
            </h3>

            <div className="project-preview">
              <img
                src="p.jpg"
                alt="Modern e-commerce shopping website interface"
              />
            </div>

            <div className="project-tech">
              <span>React.js</span>
              <span>JavaScript</span>
              <span>CSS</span>
              <span>Responsive UI</span>
            </div>

            <p>
              A modern e-commerce shopping experience built with React.js,
              focusing on responsive design, clean product presentation,
              intuitive navigation, reusable components, and a smooth
              user interface.
            </p>

            <div className="project-actions">

              <button
                type="button"
                className="btn-primary"
                aria-label="E-Commerce shopping project coming soon"
                disabled
              >
                VIEW PROJECT
                <span>↗</span>
              </button>

              <button
                type="button"
                className="btn-secondary"
                aria-label="E-Commerce project GitHub repository coming soon"
                disabled
              >
                GITHUB
                <span>↗</span>
              </button>

            </div>

          </div>
        </article>

        {/* ================= PROJECT 03 ================= */}
        <article
          ref={project3Ref}
          className={`project-card reveal-right ${
            project3Visible ? "is-visible" : ""
          }`}
        >
          <div className="project-content">

            <span className="project-number section-tag">
              03) TRADING PLATFORM
            </span>

            <h3>
              <span className="important">
                AURA-INTELLIGENCE
              </span>{" "}
              Live Trade
            </h3>

            <div className="project-preview">
              <img
                src="p.jpg"
                alt="AURA-INTELLIGENCE live trading platform interface"
              />
            </div>

            <div className="project-tech">
              <span>React.js</span>
              <span>JavaScript</span>
              <span>REST API</span>
              <span>API Integration</span>
            </div>

            <p>
              A trading-focused web experience built around presenting
              financial information, market data, API-driven content,
              and interactive user interfaces in a modern responsive
              application.
            </p>

            <div className="project-actions">

              <button
                type="button"
                className="btn-primary"
                aria-label="AURA-INTELLIGENCE Live Trade project coming soon"
                disabled
              >
                VIEW PROJECT
                <span>↗</span>
              </button>

              <button
                type="button"
                className="btn-secondary"
                aria-label="AURA-INTELLIGENCE GitHub repository coming soon"
                disabled
              >
                GITHUB
                <span>↗</span>
              </button>

            </div>

          </div>
        </article>

      </div>

      {/* Bottom Statement */}
      <div
        ref={footerRef}
        className={`projects-footer reveal ${
          footerVisible ? "is-visible" : ""
        }`}
      >
        <span className="section-tag">
          BUILD. LEARN. IMPROVE.
        </span>

        <p>
          Every project is an opportunity to turn an idea into something
          useful, while improving my skills in modern web development,
          React.js, JavaScript, APIs, and responsive UI development.
        </p>
      </div>

    </section>
  );
}

export default MyProjects;
