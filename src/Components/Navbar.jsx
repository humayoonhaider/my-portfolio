import "./Navbar.css";
import { useState, useEffect } from "react";
import {
  UserRound,
  Code2,
  FolderKanban,
  BriefcaseBusiness,
  Mail,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navAnimation = () => {
    document.getElementById("drop").style.display = "flex"
    
     setTimeout(() => {
      document.getElementById("drop").style.display = "none"
          
    }, 2000);
  }
  const letsTalk = () => {
    document.getElementById("contactMe").scrollIntoView({ behavior: "smooth" });
    setIsMobileOpen(false);
    navAnimation()
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      "behavior" : "smooth"
    })
    setTimeout(() => {
      document.getElementById("drop").style.display = "none"
          
    }, 2000);
    document.querySelectorAll("a").forEach((b)=>{
      b.addEventListener("click",navAnimation)
    })
    document.getElementById("home").addEventListener("animationend",() =>  {
        document.getElementById("welcome").style.display = "flex"
    })
    const checkMobile = () => {
      if (window.innerWidth <= 1045) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    const activeLink = () => {
      let currentSection = "";

      const scrollPosition = window.scrollY + 150;

      const sections = [
        "aboutMe",
        "mySkills",
        "myProjects",
        "myExperience",
        "contactMe",
      ];

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);

        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = sectionId;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    checkMobile();
    activeLink();

    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", activeLink);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", activeLink);
    };
  }, []);
  

  return (
    <nav
      className="navbar"
      style={{
        height: isMobileOpen && isMobile ? "500px" : "80px",
        flexDirection: isMobileOpen && isMobile ? "column" : "row",
        padding: isMobile ? "10px 5%" : "0 5%",
        overflow : isMobileOpen ? "hidden" : "visible"
      }}
    >
     
      <a className="logo" href="#home"
              onClick={navAnimation}
      >
        M.HUMAYOON
      </a>
 <span className="" id="drop">
        <span className="drop drop1"></span>
        <span className="drop drop2"></span></span>
      {/* Mobile Menu Button */}

      {isMobile && (
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileOpen ? <X /> : <Menu />}
        </button>
      )}

      {/* Navigation */}

      {!isMobile && (
        <ul className="nav-links">
          <li>
            <a
              href="#aboutMe"
              className={activeSection === "aboutMe" ? "active" : ""}
              onClick={navAnimation}
            >
              <UserRound />
              About
            </a>
          </li>

          <li>
            <a
              href="#mySkills"
              className={activeSection === "mySkills" ? "active" : ""}
              onClick={navAnimation}

            >
              <Code2 />
              Skills
            </a>
          </li>

          <li>
            <a
              href="#myProjects"
              onClick={navAnimation}
              className={activeSection === "myProjects" ? "active" : ""}
            >
              <FolderKanban />
              Projects
            </a>
          </li>

          <li>
            <a
              href="#myExperience"
              className={activeSection === "myExperience" ? "active" : ""}
              onClick={navAnimation}
            >
              <BriefcaseBusiness />
              Experience
            </a>
          </li>

          <li>
            <a
              href="#contactMe"
              className={activeSection === "contactMe" ? "active" : ""}
              onClick={navAnimation}
            >
              <Mail />
              Contact
            </a>
          </li>
          <li>
            <button  className="nav-btn btn-primary" onClick={letsTalk}>
              Let's Talk
              <ArrowUpRight />
            </button>
          </li>
        </ul>
      )}

      {isMobile && isMobileOpen && (
        <ul className="nav-links-mobile">
          <li>
            <a
              href="#aboutMe"
              className={activeSection === "aboutMe" ? "active" : ""}
              onClick={() => isMobile && setIsMobileOpen(false)}
            >
              <UserRound />
              About
            </a>
          </li>

          <li>
            <a
              href="#mySkills"
              className={activeSection === "mySkills" ? "active" : ""}
              onClick={() => isMobile && setIsMobileOpen(false)}
            >
              <Code2 />
              Skills
            </a>
          </li>

          <li>
            <a
              href="#myProjects"
              className={activeSection === "myProjects" ? "active" : ""}
              onClick={() => isMobile && setIsMobileOpen(false)}
            >
              <FolderKanban />
              Projects
            </a>
          </li>

          <li>
            <a
              href="#myExperience"
              className={activeSection === "myExperience" ? "active" : ""}
              onClick={() => isMobile && setIsMobileOpen(false)}
            >
              <BriefcaseBusiness />
              Experience
            </a>
          </li>

          <li>
            <a
              href="#contactMe"
              className={activeSection === "contactMe" ? "active" : ""}
              onClick={() => isMobile && setIsMobileOpen(false)}
            >
              <Mail />
              Contact
            </a>
          </li>

          <li>
            <button className="mbl-btn" onClick={letsTalk}>
              Let's Talk
              <ArrowUpRight />
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
