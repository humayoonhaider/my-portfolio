import {
ArrowLeftRight,
Atom,
Braces,
Code2,
GitBranch,
GitFork,
LucideCodeSquare,
Monitor,
Palette,
Route,
Server,
ServerCog,
Webhook,
Wrench
} from "lucide-react";

import { useReveal } from "../hooks/useReveal";
import "./MySkills.css";

function MySkills() {
const [headingRef, headingVisible] = useReveal();
const [frontendRef, frontendVisible] = useReveal();
const [backendRef, backendVisible] = useReveal();
const [toolsRef, toolsVisible] = useReveal();
const [statementRef, statementVisible] = useReveal();

return ( <section className="skills" id="mySkills">

  {/* Section Heading */}
  <div
    ref={headingRef}
    className={`section-heading reveal ${
      headingVisible ? "is-visible" : ""
    }`}
  >
    <span className="section-tag">
      MY TOOLKIT
    </span>

    <h2>SKILLS</h2>

    <p>
      Technologies and tools I use as a MERN Stack Developer to build
      modern, responsive, interactive, and user-friendly web applications.
    </p>
  </div>


  {/* Frontend */}
  <div
    ref={frontendRef}
    className={`skill-category reveal ${
      frontendVisible ? "is-visible" : ""
    }`}
  >

    <div className="category-heading">

      <span className="category-icon">
        <Monitor />
      </span>

      <div>
        <h3>FRONTEND DEVELOPMENT</h3>

        <p>
          Building responsive, accessible, and interactive user
          interfaces with modern frontend technologies.
        </p>
      </div>

    </div>


    <div className="skills-grid reveal-stagger is-visible">

      {/* HTML */}
      <div className="skill-card">

        <div className="skill-icon">
          <Code2 />
        </div>

        <div className="skill-info">
          <h4>HTML</h4>
          <span>Structure &amp; Semantics</span>
        </div>

        <p className="skill-description">
          I use semantic HTML to create clean, accessible, and
          well-structured web pages with meaningful content structure.
        </p>

        <span className="skill-arrow">
          →
        </span>

      </div>


      {/* CSS */}
      <div className="skill-card">

        <div className="skill-icon">
          <Palette />
        </div>

        <div className="skill-info">
          <h4>CSS</h4>
          <span>Responsive UI &amp; Styling</span>
        </div>

        <p className="skill-description">
          I use CSS to create responsive layouts, polished interfaces,
          animations, transitions, and engaging visual experiences.
        </p>

        <span className="skill-arrow">
          →
        </span>

      </div>


      {/* JavaScript */}
      <div className="skill-card">

        <div className="skill-icon">
          <Braces />
        </div>

        <div className="skill-info">
          <h4>JavaScript</h4>
          <span>Logic &amp; Interactions</span>
        </div>

        <p className="skill-description">
          I use JavaScript to build application logic, dynamic
          functionality, interactive features, and modern web
          experiences.
        </p>

        <span className="skill-arrow">
          →
        </span>

      </div>


      {/* React */}
      <div className="skill-card">

        <div className="skill-icon">
          <Atom />
        </div>

        <div className="skill-info">
          <h4>React.js</h4>
          <span>Component-Based Interfaces</span>
        </div>

        <p className="skill-description">
          I use React.js to build reusable, scalable, and interactive
          user interfaces using component-based architecture.
        </p>

        <span className="skill-arrow">
          →
        </span>

      </div>

    </div>

  </div>


  {/* Backend */}
  <div
    ref={backendRef}
    className={`skill-category reveal ${
      backendVisible ? "is-visible" : ""
    }`}
  >

    <div className="category-heading">

      <span className="category-icon">
        <Server />
      </span>

      <div>
        <h3>BACKEND DEVELOPMENT</h3>

        <p>
          Building server-side logic and connecting frontend
          applications with APIs and backend services.
        </p>
      </div>

    </div>


    <div className="skills-grid reveal-stagger is-visible">

      {/* Node.js */}
      <div className="skill-card">

        <div className="skill-icon">
          <ServerCog />
        </div>

        <div className="skill-info">
          <h4>Node.js</h4>
          <span>Server-Side JavaScript</span>
        </div>

        <p className="skill-description">
          I use Node.js to build server-side applications, handle
          backend logic, and create scalable JavaScript-based services.
        </p>

        <span className="skill-arrow">
          →
        </span>

      </div>


      {/* Express.js */}
      <div className="skill-card">

        <div className="skill-icon">
          <Route />
        </div>

        <div className="skill-info">
          <h4>Express.js</h4>
          <span>API Development</span>
        </div>

        <p className="skill-description">
          I use Express.js to create structured, lightweight, and
          maintainable REST APIs for web applications.
        </p>

        <span className="skill-arrow">
          →
        </span>

      </div>


      {/* REST APIs */}
      <div className="skill-card">

        <div className="skill-icon">
          <Webhook />
        </div>

        <div className="skill-info">
          <h4>REST APIs</h4>
          <span>Data &amp; Service Integration</span>
        </div>

        <p className="skill-description">
          I use REST APIs to connect frontend applications with
          backend services and exchange application data efficiently.
        </p>

        <span className="skill-arrow">
          →
        </span>

      </div>

    </div>

  </div>


  {/* Tools & Workflow */}
  <div
    ref={toolsRef}
    className={`skill-category reveal ${
      toolsVisible ? "is-visible" : ""
    }`}
  >

    <div className="category-heading">

      <span className="category-icon">
        <Wrench />
      </span>

      <div>
        <h3>TOOLS &amp; WORKFLOW</h3>

        <p>
          Development tools and technologies I use to build, manage,
          version, and maintain web projects.
        </p>
      </div>

    </div>


    <div className="skills-grid reveal-stagger is-visible">

      {/* Git */}
      <div className="skill-card">

        <div className="skill-icon">
          <GitBranch />
        </div>

        <div className="skill-info">
          <h4>Git</h4>
          <span>Version Control</span>
        </div>

        <p className="skill-description">
          I use Git to track changes, manage versions, create branches,
          and keep development work organized.
        </p>

        <span className="skill-arrow">
          →
        </span>

      </div>


      {/* GitHub */}
      <div className="skill-card">

        <div className="skill-icon">
          <GitFork />
        </div>

        <div className="skill-info">
          <h4>GitHub</h4>
          <span>Code &amp; Collaboration</span>
        </div>

        <p className="skill-description">
          I use GitHub to host projects, manage repositories, track
          development work, and collaborate through version control.
        </p>

        <span className="skill-arrow">
          →
        </span>

      </div>


      {/* Axios */}
      <div className="skill-card">

        <div className="skill-icon">
          <ArrowLeftRight />
        </div>

        <div className="skill-info">
          <h4>Axios</h4>
          <span>API Requests</span>
        </div>

        <p className="skill-description">
          I use Axios to communicate with REST APIs and handle HTTP
          requests between frontend applications and backend services.
        </p>

        <span className="skill-arrow">
          →
        </span>

      </div>


      {/* VS Code */}
      <div className="skill-card">

        <div className="skill-icon">
          <LucideCodeSquare />
        </div>

        <div className="skill-info">
          <h4>VS Code</h4>
          <span>Development Environment</span>
        </div>

        <p className="skill-description">
          I use VS Code as my primary development environment for
          writing, debugging, testing, and managing web projects.
        </p>

        <span className="skill-arrow">
          →
        </span>

      </div>

    </div>

  </div>


  {/* Bottom Statement */}
  <div
    ref={statementRef}
    className={`skills-statement reveal ${
      statementVisible ? "is-visible" : ""
    }`}
  >

    <span className="section-tag">
      DEVELOPER MINDSET
    </span>

    <p>
      I don't just learn technologies — I learn how to use them
      to solve problems and build better web experiences.
    </p>

  </div>

</section>


);
}

export default MySkills;
