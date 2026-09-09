import "./MyExperience.css";
import { useReveal } from "../hooks/useReveal";

function MyExperience() {
  const [headingRef, headingVisible] = useReveal();
  const [item1Ref, item1Visible] = useReveal();
  const [item2Ref, item2Visible] = useReveal();
  const [item3Ref, item3Visible] = useReveal();
  const [item4Ref, item4Visible] = useReveal();
  const [evolutionRef, evolutionVisible] = useReveal();

  return (
    <section className="experience" id="myExperience">

      {/* Section Heading */}
      <div
        ref={headingRef}
        className={`section-heading reveal ${
          headingVisible ? "is-visible" : ""
        }`}
      >
        <span className="section-tag">
          MY JOURNEY
        </span>

        <h2>EXPERIENCE &amp; GROWTH</h2>

        <p>
          My journey as a MERN Stack Developer — learning fundamentals,
          building practical projects, solving problems, and continuously
          improving my development skills.
        </p>
      </div>


      {/* Journey */}
      <div className="journey">

        {/* Journey 01 */}
        <article
          ref={item1Ref}
          className={`journey-item reveal-left ${
            item1Visible ? "is-visible" : ""
          }`}
        >
          <div className="journey-count">
            <div className="journey-number">
              01
            </div>

            <div className="journey-marker">
              <span>●</span>
            </div>
          </div>

          <div className="journey-content">
            <span className="journey-label section-tag">
              FOUNDATION
            </span>

            <h3>LEARNING</h3>

            <p>
              Built my foundation in web development by learning HTML,
              CSS, and JavaScript, while understanding how modern websites
              are structured, styled, and made interactive.
            </p>
          </div>
        </article>


        {/* Journey 02 */}
        <article
          ref={item2Ref}
          className={`journey-item reveal-right ${
            item2Visible ? "is-visible" : ""
          }`}
        >
          <div className="journey-count">
            <div className="journey-number">
              02
            </div>

            <div className="journey-marker">
              <span>●</span>
            </div>
          </div>

          <div className="journey-content">
            <span className="journey-label section-tag">
              DEVELOPMENT
            </span>

            <h3>BUILDING</h3>

            <p>
              Started turning my knowledge into practical web projects,
              focusing on responsive interfaces, reusable React components,
              clean layouts, and interactive functionality.
            </p>
          </div>
        </article>


        {/* Journey 03 */}
        <article
          ref={item3Ref}
          className={`journey-item reveal-left ${
            item3Visible ? "is-visible" : ""
          }`}
        >
          <div className="journey-count">
            <div className="journey-number">
              03
            </div>

            <div className="journey-marker">
              <span>●</span>
            </div>
          </div>

          <div className="journey-content">
            <span className="journey-label section-tag">
              PRACTICAL PROJECTS
            </span>

            <h3>EXPLORING</h3>

            <p>
              Expanded my development skills through practical projects
              using React.js, JavaScript, APIs, Axios, Node.js, Express.js,
              and other modern web development technologies.
            </p>
          </div>
        </article>


        {/* Journey 04 */}
        <article
          ref={item4Ref}
          className={`journey-item reveal-right ${
            item4Visible ? "is-visible" : ""
          }`}
        >
          <div className="journey-count">
            <div className="journey-number">
              04
            </div>

            <div className="journey-marker">
              <span>●</span>
            </div>
          </div>

          <div className="journey-content">
            <span className="journey-label section-tag">
              CURRENT PHASE
            </span>

            <h3>GROWING</h3>

            <p>
              Continuing to grow as a MERN Stack Developer by exploring
              modern technologies, improving code quality, strengthening
              problem-solving skills, and building better user experiences.
            </p>
          </div>
        </article>

      </div>


      {/* Developer Evolution */}
      <div
        ref={evolutionRef}
        className={`developer-evolution reveal-scale ${
          evolutionVisible ? "is-visible" : ""
        }`}
      >

        <div className="section-heading">
          <span className="section-tag">
            DEVELOPER EVOLUTION
          </span>

          <h2>WHOLE CYCLE</h2>
        </div>


        <div className="evolution-flow">

          {/* Learn */}
          <span>
            LEARN

            <p className="evolution-description">
              I learn the fundamentals and understand how technologies
              work before applying them.
            </p>
          </span>

          <span>→</span>


          {/* Build */}
          <span>
            BUILD

            <p className="evolution-description">
              I turn what I learn into practical projects, reusable
              components, and real web interfaces.
            </p>
          </span>

          <span>→</span>


          {/* Break */}
          <span>
            BREAK

            <p className="evolution-description">
              Problems are part of development, and mistakes help me
              understand what needs to improve.
            </p>
          </span>

          <span>→</span>


          {/* Debug */}
          <span>
            DEBUG

            <p className="evolution-description">
              I investigate problems, understand their causes, and
              work toward reliable solutions.
            </p>
          </span>

          <span>→</span>


          {/* Improve */}
          <span>
            IMPROVE

            <p className="evolution-description">
              I refine my code, interface, performance, and overall
              user experience.
            </p>
          </span>

          <span>→</span>


          {/* Ship */}
          <span>
            SHIP

            <p className="evolution-description">
              I turn completed work into usable digital experiences
              that solve practical problems.
            </p>
          </span>

        </div>
      </div>

    </section>
  );
}

export default MyExperience;