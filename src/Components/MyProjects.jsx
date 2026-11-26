import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import "./MyProjects.css";
import { useReveal } from "../hooks/useReveal";
import { PORTFOLIO_PROJECTS, computeCardTilt } from "../data/projectsMeta";

import schoolMisImg from "../assets/images/school_mis_wallpaper_1795679487017.jpg";
import meridianMdcatImg from "../assets/images/meridian_mdcat_wallpaper_1795679487111.jpg";
import aureliaHotelImg from "../assets/images/aurelia_hotel_wallpaper_1795679487927.jpg";
import novaRoboticsImg from "../assets/images/nova_robotics_wallpaper_1795679488621.jpg";
import zenvexAiImg from "../assets/images/zenvex_ai_wallpaper_1795679489674.jpg";

const WALLPAPER_MAP = {
  schoolMis: schoolMisImg,
  meridianMdcat: meridianMdcatImg,
  aureliaHotel: aureliaHotelImg,
  novaRobotics: novaRoboticsImg,
  zenvexAi: zenvexAiImg,
};

function ProjectCard({ project, index }) {
  const [cardRef, cardVisible] = useReveal({ threshold: 0.05 });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, active: false });

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;
    const next = computeCardTilt(relX, relY, 5);
    setTilt({ ...next, active: true });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, active: false });
  };

  const revealClass =
    project.featured
      ? "reveal-scale"
      : index % 2 === 1
      ? "reveal-left"
      : "reveal-right";

  return (
    <article
      ref={cardRef}
      data-testid={`project-card-${project.id}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`project-card ${project.featured ? "featured-project" : ""} ${revealClass} ${
        cardVisible ? "is-visible" : ""
      }`}
      style={{
        transform: tilt.active
          ? `perspective(1100px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateY(-6px)`
          : undefined,
      }}
    >
      <div className="project-preview">
        <img
          loading="lazy"
          src={WALLPAPER_MAP[project.wallpaperKey]}
          alt={project.alt}
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="project-content">
        <span className="project-number section-tag">{project.number}</span>

        <h3>
          <span className="important">{project.titleHighlight}</span>{" "}
          {project.titleRest}
        </h3>

        <div className="project-tech">
          {project.tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <p>{project.description}</p>

        <div className="project-actions">
          <a
            href={project.liveUrl}
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.titleHighlight} ${project.titleRest} live project`}
          >
            VIEW PROJECT
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.titleHighlight} source code on GitHub`}
            >
              GITHUB
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function MyProjects() {
  const [headingRef, headingVisible] = useReveal({ threshold: 0.05 });
  const [footerRef, footerVisible] = useReveal({ threshold: 0.05 });

  return (
    <section className="projects" id="myProjects">
      {/* Section Heading */}
      <div
        ref={headingRef}
        className={`section-heading reveal ${headingVisible ? "is-visible" : ""}`}
      >
        <span className="section-tag">SELECTED WORK</span>

        <h2>PROJECTS</h2>

        <p>
          A curated showcase of modern 3D, AI, hospitality, and full-stack web
          applications crafted with React.js, Three.js, and responsive design.
        </p>
      </div>

      {/* Projects List */}
      <div className="projects-list" data-testid="projects-grid">
        {PORTFOLIO_PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Bottom Statement */}
      <div
        ref={footerRef}
        className={`projects-footer reveal ${footerVisible ? "is-visible" : ""}`}
      >
        <span className="section-tag">BUILD. LEARN. IMPROVE.</span>

        <p>
          Every project is an opportunity to turn an idea into something useful,
          while pushing the boundaries of 3D interfaces, React.js, APIs, and
          responsive UI engineering.
        </p>
      </div>
    </section>
  );
}

export default MyProjects;
