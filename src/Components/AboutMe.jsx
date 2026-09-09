import "./AboutMe.css";
import { useReveal } from "../hooks/useReveal";

function AboutMe() {
const [headingRef, headingVisible] = useReveal();
const [profileRef, profileVisible] = useReveal();
const [infoRef, infoVisible] = useReveal();
const [detailsRef, detailsVisible] = useReveal({ threshold: 0.3 });

return ( <section className="about-me" id="aboutMe">

  {/* Section Heading */}
  <div
    ref={headingRef}
    className={`section-heading reveal ${
      headingVisible ? "is-visible" : ""
    }`}
  >
    <span className="section-tag">
      GET TO KNOW ME
    </span>

    <h2>ABOUT ME</h2>
  </div>

  {/* About Content */}
  <div className="about-content">

    {/* Profile */}
    <div
      ref={profileRef}
      className={`about-profile reveal-left ${
        profileVisible ? "is-visible" : ""
      }`}
    >

      <div className="profile-img">
        <img
          src="me.jpg"
          alt="Muhammad Humayoon - MERN Stack Developer"
        />
      </div>

      <h3 className="profile-name">M. HUMAYOON</h3>

      <span className="role section-tag">
        MERN STACK DEVELOPER
      </span>

      <div className="currently-building section-tag">
        <small>CURRENTLY BUILDING</small>
      </div>

      <div>
        <p>Modern & interactive web experiences</p>
      </div>

    </div>

    {/* About Information */}
    <div
      ref={infoRef}
      className={`about-info reveal-right ${
        infoVisible ? "is-visible" : ""
      }`}
    >

      <span className="about-label section-tag">
        WHO I AM
      </span>

      <h2>
        Turning ideas into{" "}
        <span className="important">
          modern web experiences.
        </span>
      </h2>

      <p>
        I'm Muhammad Humayoon, a MERN Stack Developer focused on
        building modern, responsive, and user-friendly web
        applications. I work with React.js, JavaScript, Node.js,
        Express.js, and MongoDB to create interactive digital
        experiences.
      </p>

      <p>
        I care about clean interfaces, maintainable code, responsive
        design, and thoughtful interactions that make web products
        feel simple, fast, and enjoyable to use. I'm continuously
        learning modern web technologies and improving my development
        skills through practical projects.
      </p>

      {/* Information Cards */}
      <div
        ref={detailsRef}
        className={`about-details reveal-stagger ${
          detailsVisible ? "is-visible" : ""
        }`}
      >

        <div className="about-detail">
          <span>BASED IN</span>
          <strong className="important">Pakistan</strong>
        </div>

        <div className="about-detail">
          <span>FOCUS</span>
          <strong className="important">MERN Stack Development</strong>
        </div>

        <div className="about-detail">
          <span>CURRENTLY LEARNING</span>
          <strong className="important">
            Modern Web Technologies
          </strong>
        </div>

      </div>

      <a
        href="/Muhammad-Humayoon-Resume.pdf"
        className="btn-primary"
        download
      >
        Download Resume
      </a>

    </div>

  </div>

</section>

);
}

export default AboutMe;
