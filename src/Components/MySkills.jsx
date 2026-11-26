import { useState } from "react";
import {
  ArrowLeftRight,
  ArrowUpRight,
  Atom,
  Braces,
  Code2,
  Database,
  GitBranch,
  GitFork,
  LucideCodeSquare,
  Monitor,
  Palette,
  Route,
  Server,
  ServerCog,
  Webhook,
  Wrench,
} from "lucide-react";

import { useReveal } from "../hooks/useReveal";
import "./MySkills.css";

const SKILL_CATEGORIES = [
  {
    id: "frontend",
    title: "FRONTEND DEVELOPMENT",
    description:
      "Building responsive, accessible, and interactive user interfaces with modern frontend technologies.",
    Icon: Monitor,
    skills: [
      {
        id: "html",
        name: "HTML",
        subtitle: "Structure & Semantics",
        description:
          "I use semantic HTML to create clean, accessible, and well-structured web pages with meaningful content structure.",
        Icon: Code2,
      },
      {
        id: "css",
        name: "CSS",
        subtitle: "Responsive UI & Styling",
        description:
          "I use CSS to create responsive layouts, polished interfaces, animations, transitions, and engaging visual experiences.",
        Icon: Palette,
      },
      {
        id: "javascript",
        name: "JavaScript",
        subtitle: "Logic & Interactions",
        description:
          "I use JavaScript to build application logic, dynamic functionality, interactive features, and modern web experiences.",
        Icon: Braces,
      },
      {
        id: "react",
        name: "React.js",
        subtitle: "Component-Based Interfaces",
        description:
          "I use React.js to build reusable, scalable, and interactive user interfaces using component-based architecture.",
        Icon: Atom,
      },
    ],
  },
  {
    id: "backend",
    title: "BACKEND DEVELOPMENT",
    description:
      "Building server-side logic and connecting frontend applications with APIs, databases, and backend services.",
    Icon: Server,
    skills: [
      {
        id: "nodejs",
        name: "Node.js",
        subtitle: "Server-Side JavaScript",
        description:
          "I use Node.js to build server-side applications, handle backend logic, and create scalable JavaScript-based services.",
        Icon: ServerCog,
      },
      {
        id: "expressjs",
        name: "Express.js",
        subtitle: "API Development",
        description:
          "I use Express.js to create structured, lightweight, and maintainable REST APIs for web applications.",
        Icon: Route,
      },
      {
        id: "mongodb",
        name: "MongoDB",
        subtitle: "NoSQL Database",
        description:
          "I use MongoDB to design flexible schemas, store application data reliably, and power full-stack MERN applications.",
        Icon: Database,
      },
      {
        id: "rest-apis",
        name: "REST APIs",
        subtitle: "Data & Service Integration",
        description:
          "I use REST APIs to connect frontend applications with backend services and exchange application data efficiently.",
        Icon: Webhook,
      },
    ],
  },
  {
    id: "tools",
    title: "TOOLS & WORKFLOW",
    description:
      "Development tools and technologies I use to build, manage, version, and maintain web projects.",
    Icon: Wrench,
    skills: [
      {
        id: "git",
        name: "Git",
        subtitle: "Version Control",
        description:
          "I use Git to track changes, manage versions, create branches, and keep development work organized.",
        Icon: GitBranch,
      },
      {
        id: "github",
        name: "GitHub",
        subtitle: "Code & Collaboration",
        description:
          "I use GitHub to host projects, manage repositories, track development work, and collaborate through version control.",
        Icon: GitFork,
      },
      {
        id: "axios",
        name: "Axios",
        subtitle: "API Requests",
        description:
          "I use Axios to communicate with REST APIs and handle HTTP requests between frontend applications and backend services.",
        Icon: ArrowLeftRight,
      },
      {
        id: "vscode",
        name: "VS Code",
        subtitle: "Development Environment",
        description:
          "I use VS Code as my primary development environment for writing, debugging, testing, and managing web projects.",
        Icon: LucideCodeSquare,
      },
    ],
  },
];

function SkillCard({ skill }) {
  const [isOpen, setIsOpen] = useState(false);
  const { Icon } = skill;

  return (
    <button
      type="button"
      className={`skill-card ${isOpen ? "is-open" : ""}`}
      aria-expanded={isOpen}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="skill-card-top">
        <div className="skill-icon">
          <Icon aria-hidden="true" />
        </div>
        <span className="skill-arrow" aria-hidden="true">
          <ArrowUpRight size={18} />
        </span>
      </div>

      <div className="skill-info">
        <h4>{skill.name}</h4>
        <span className="skill-subtitle">{skill.subtitle}</span>
      </div>

      <div className="skill-description-wrap">
        <div className="skill-description-inner">
          <p className="skill-description">{skill.description}</p>
        </div>
      </div>
    </button>
  );
}

function MySkills() {
  const [headingRef, headingVisible] = useReveal({ threshold: 0.05 });
  const [frontendRef, frontendVisible] = useReveal({ threshold: 0.05 });
  const [backendRef, backendVisible] = useReveal({ threshold: 0.05 });
  const [toolsRef, toolsVisible] = useReveal({ threshold: 0.05 });
  const [statementRef, statementVisible] = useReveal({ threshold: 0.05 });

  const categoryRefs = [
    [frontendRef, frontendVisible],
    [backendRef, backendVisible],
    [toolsRef, toolsVisible],
  ];

  return (
    <section className="skills" id="mySkills">
      {/* Section Heading */}
      <div
        ref={headingRef}
        className={`section-heading reveal ${headingVisible ? "is-visible" : ""}`}
      >
        <span className="section-tag">MY TOOLKIT</span>

        <h2>SKILLS</h2>

        <p>
          Technologies and tools I use as a MERN Stack Developer to build
          modern, responsive, interactive, and user-friendly web applications.
        </p>
      </div>

      {SKILL_CATEGORIES.map((category, index) => {
        const [ref, isVisible] = categoryRefs[index];
        const { Icon } = category;

        return (
          <div
            key={category.id}
            ref={ref}
            className={`skill-category reveal ${isVisible ? "is-visible" : ""}`}
          >
            <div className="category-heading">
              <span className="category-icon" aria-hidden="true">
                <Icon />
              </span>

              <div className="category-heading-text">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            </div>

            <div className="skills-grid reveal-stagger is-visible">
              {category.skills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        );
      })}

      {/* Bottom Statement */}
      <div
        ref={statementRef}
        className={`skills-statement reveal ${statementVisible ? "is-visible" : ""}`}
      >
        <span className="section-tag">DEVELOPER MINDSET</span>

        <p>
          I don't just learn technologies — I learn how to use them to solve
          problems and build better web experiences.
        </p>
      </div>
    </section>
  );
}

export default MySkills;
