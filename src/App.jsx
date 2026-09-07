import "./App.css";
import { useEffect } from "react";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import MyExperience from "./Components/MyExperience";
import MyProjects from "./Components/MyProjects";
import MySkills from "./Components/MySkills";
import Navbar from "./Components/Navbar";
import WhatIBring from "./Components/WhatIBring";

function App() {
  useEffect(() => {
    const portfolio = document.querySelector(".my-portfolio");
    const revealItems = portfolio?.querySelectorAll("section, footer") || [];
    portfolio?.classList.add("has-scroll-reveal");

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return () => portfolio?.classList.remove("has-scroll-reveal");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      portfolio?.classList.remove("has-scroll-reveal");
    };
  }, []);

  return (
    <div className="my-portfolio">
        <div className="glow"></div>

      <Navbar />
      <Hero />
      <AboutMe />
      <MySkills />
      <MyProjects />
      <MyExperience />
      <WhatIBring />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
