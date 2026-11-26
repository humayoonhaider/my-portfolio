import { ArrowDown, ArrowUpRight, Code2, Cpu, Layers } from "lucide-react";
import { useEffect } from "react";
import { useReveal } from "../hooks/useReveal";
import "./Hero.css";

function Hero() {
  useEffect(() => {
    const glow = document.querySelector(".glow");
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      if (glow) {
        glow.style.left = `${clientX}px`;
        glow.style.top = `${clientY}px`;
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const [welcomeRef, welcomeVisible] = useReveal({ threshold: 0.05 });
  const [titleRef, titleVisible] = useReveal({ threshold: 0.05 });
  const [descRef, descVisible] = useReveal({ threshold: 0.05 });
  const [btnsRef, btnsVisible] = useReveal({ threshold: 0.05 });
  const [scrollRef, scrollVisible] = useReveal({ threshold: 0.05 });

  return (
    <section className="hero" id="home">
      <div className="hero-centered-container">
        <span
          ref={welcomeRef}
          id="welcome"
          className={`welcome reveal ${welcomeVisible ? "is-visible" : ""}`}
        >
          WELCOME TO MY PORTFOLIO.
        </span>

        <h1
          ref={titleRef}
          className={`reveal ${titleVisible ? "is-visible" : ""}`}
        >
          Hi, I'm{" "}
          <span className="important">Muhammad Humayoon.</span>
          <br />
          I'm a{" "}
          <span className="important">MERN Stack Developer.</span>
        </h1>

        <p
          ref={descRef}
          className={`intro-description reveal ${descVisible ? "is-visible" : ""}`}
        >
          I build modern, responsive, and user-friendly web applications
          using React.js, JavaScript, Node.js, Express.js, and MongoDB,
          with a focus on clean interfaces, maintainable code, and exceptional
          user experiences.
        </p>

        <div className="hero-tech-badges">
          <span className="section-tag"><Code2 size={14} /> React &amp; Modern UI</span>
          <span className="section-tag"><Cpu size={14} /> MERN Stack</span>
          <span className="section-tag"><Layers size={14} /> Fully Responsive</span>
        </div>

        <div
          ref={btnsRef}
          className={`hero-btns reveal ${btnsVisible ? "is-visible" : ""}`}
        >
          <a href="#contactMe" className="hero-btn btn-primary">
            Hire Me <ArrowUpRight />
          </a>

          <a href="#myProjects" className="hero-btn btn-secondary">
            View My Work
          </a>
        </div>

        <a
          ref={scrollRef}
          href="#aboutMe"
          className={`btn-secondary scroll-about reveal ${scrollVisible ? "is-visible" : ""}`}
        >
          Scroll to Explore <ArrowDown />
        </a>
      </div>
    </section>
  );
}

export default Hero;
