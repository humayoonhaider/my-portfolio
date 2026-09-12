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
                src="project1.png"
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

  <a
    href="https://mis-for-school.vercel.app/"
    className="btn-primary"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View School Management Information System project"
  >
    VIEW PROJECT
    <span>   ↗</span>
  </a>

  <a
    href="https://github.com/humayoonhaider/MIS-FOR-SCHOOL"
    className="btn-secondary"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View School Management Information System source code on GitHub"
  >
    GITHUB
    <span>↗</span>
  </a>

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
                src="project2.png"
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

  <a
    href="https://e-commerece-shop.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-primary"
    aria-label="View E-Commerce shopping project"
  >
    VIEW PROJECT
    <span>↗</span>
  </a>

  <a
    href="https://github.com/humayoonhaider/E-COMMERECE-SHOP"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-secondary"
    aria-label="View E-Commerce project GitHub repository"
  >
    GITHUB
    <span>↗</span>
  </a>

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
      03) INTELLIGENCE TOOLKIT
    </span>

    <h3>
      <span className="important">
        INTELLIGENCE HUB
      </span>{" "}
      Smart Tools
    </h3>

    <div className="project-preview">
      <img
        src="project3.png"
        alt="Intelligence Hub browser-based productivity tools interface"
      />
    </div>

    <div className="project-tech">
      <span>React.js</span>
      <span>Vite</span>
      <span>JavaScript</span>
      <span>Browser APIs</span>
    </div>

    <p>
      A modern browser-based intelligence toolkit featuring smart text,
      developer, data, and utility tools. Built entirely with frontend
      technologies, with local processing, responsive interfaces, and
      no backend or external API dependency.
    </p>

    <div className="project-actions">

      <a
        href="https://intelligence-hub-drab.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
        aria-label="View Intelligence Hub project"
      >
        VIEW PROJECT
        <span>↗</span>
      </a>

      <a
        href="https://github.com/humayoonhaider/INTELLIGENCE-HUB"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary"
        aria-label="View Intelligence Hub GitHub repository"
      >
        GITHUB
        <span>↗</span>
      </a>

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
