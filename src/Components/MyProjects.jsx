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
        className={`section-heading reveal ${headingVisible ? "is-visible" : ""}`}
      >

        <span className="section-tag">
           SELECTED WORK
        </span>

        <h2>PROJECTS</h2>

        <p>
          A selection of projects I've built while exploring
          modern web development and creating practical digital experiences.
        </p>

      </div>


      {/* Projects List */}
      <div className="projects-list">


        {/* Project 01 */}
        <article
          ref={project1Ref}
          className={`project-card featured-project reveal-scale ${project1Visible ? "is-visible" : ""}`}
        >

          <div className="project-content">

            <span className="project-number section-tag">
              01{") "} 
            
              MANAGEMENT SYSTEM
            </span>

            <h3>
             <span className="important"> MIS MANAGEMENT</span> SYSTEM
            </h3>
 {/* Project Preview */}
          <div className="project-preview">

            <img
              src="p.jpg"
              alt="MIS Management System"
            />



          </div>
            {/* Technologies */}
            <div className="project-tech">

              <span>React</span>
              <span>JavaScript</span>
              <span>Axios</span>
              <span>JSON Server</span>

            </div>
            <p>
              A modern management system designed to handle
              students, courses, fees, certificates, and
              administrative workflows through an interactive interface.
            </p>


            {/* Actions */}
            <div className="project-actions">

              <a href="#1" className="btn-primary">
                VIEW PROJECT
                <span>↗</span>
              </a>

              <a href="#2" className="btn-secondary">
                GITHUB
                <span>↗</span>
              </a>

            </div>

          </div>


         

        </article>



        {/* Project 02 */}
        <article
          ref={project2Ref}
          className={`project-card reveal-left ${project2Visible ? "is-visible" : ""}`}
        >

          <div className="project-content">

            <span className="project-number section-tag">
              02{") "}
              E-COMMERCE
            </span>

            <h3>
              <span className="important">E-COMMERCE </span>
              SHOP
            </h3>


          <div className="project-preview">

            <img
              src="p.jpg"
              alt="Shop Project"
            />

          </div>  <div className="project-tech">

              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>

            </div>

            <p>
              A modern shopping experience focused on clean
              product presentation, intuitive navigation,
              and a smooth user interface.
            </p>


          

            <div className="project-actions">

              <a href="#1" className="btn-primary">
                VIEW PROJECT
                <span>↗</span>
              </a>

              <a href="#2" className="btn-secondary">
                GITHUB
                <span>↗</span>
              </a>

            </div>

          </div>


        </article>



        {/* Project 03 */}
        <article
          ref={project3Ref}
          className={`project-card reveal-right ${project3Visible ? "is-visible" : ""}`}
        >

          <div className="project-content">

            <span className="project-number section-tag">
              03{") "}
              TRADING PLATFORM
            </span>

            <h3>
              <span className="important">AURA-INTELLIGENCE </span>LIVE TRADE
            </h3>
<div className="project-preview">

            <img
              src="p.jpg"
              alt="AURA-INTELLIGENCE"
            />
  <div className="project-tech">

              <span>React</span>
              <span>JavaScript</span>
              <span>API</span>

            </div>
          </div>
            <p>
              A trading-focused digital experience designed
              around presenting financial information,
              market data, and interactive user experiences.
            </p>


          


            <div className="project-actions">

              <a href="#1" className="btn-primary">
                VIEW PROJECT
                <span>↗</span>
              </a>

              <a href="#2" className="btn-secondary">
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
        className={`projects-footer reveal ${footerVisible ? "is-visible" : ""}`}
      >

        <span className="section-tag">
          BUILD. LEARN. IMPROVE.
        </span>

        <p>
          Every project is an opportunity to turn an idea
          into something people can actually use.
        </p>

      </div>

    </section>
  );
}

export default MyProjects;