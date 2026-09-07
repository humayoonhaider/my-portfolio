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
        className={`section-heading reveal ${headingVisible ? "is-visible" : ""}`}
      >
        <span className="section-tag">MY JOURNEY</span>

        <h2>EXPERIENCE</h2>

        <p>
          A journey of learning, building, breaking, and improving through
          real-world development.
        </p>
      </div>

      {/* Journey */}
      <div className="journey">
        {/* Journey 01 */}
        <article
          ref={item1Ref}
          className={`journey-item reveal-left ${item1Visible ? "is-visible" : ""}`}
        >
          <div className="journey-count">
            <div className="journey-number">01</div>

            <div className="journey-marker">
              <span>●</span>
            </div>
          </div>

          <div className="journey-content">
            <span className="journey-label section-tag">FOUNDATION</span>

            <h3>LEARNING</h3>

            <p>
              Started building my foundation in web development by learning the
              core concepts of HTML, CSS, and JavaScript.
            </p>
          </div>
        </article>

        {/* Journey 02 */}
        <article
          ref={item2Ref}
          className={`journey-item reveal-right ${item2Visible ? "is-visible" : ""}`}
        >
          <div className="journey-count">
            <div className="journey-number">02</div>

            <div className="journey-marker">
              <span>●</span>
            </div>
          </div>

          <div className="journey-content">
            <span className="journey-label section-tag">DEVELOPMENT</span>

            <h3>BUILDING</h3>

            <p>
              Started turning what I learned into practical projects, focusing
              on responsive interfaces, reusable components, and real
              application functionality.
            </p>
          </div>
        </article>

        {/* Journey 03 */}
        <article
          ref={item3Ref}
          className={`journey-item reveal-left ${item3Visible ? "is-visible" : ""}`}
        >
          <div className="journey-count">
            <div className="journey-number">03</div>

            <div className="journey-marker">
              <span>●</span>
            </div>
          </div>

          <div className="journey-content">
            <span className="journey-label section-tag">REAL PROJECTS</span>

            <h3>EXPLORING</h3>

            <p>
              Expanded my development skills by working with React, APIs,
              backend technologies, and building projects that solve practical
              problems.
            </p>
          </div>
        </article>

        {/* Journey 04 */}
        <article
          ref={item4Ref}
          className={`journey-item reveal-right ${item4Visible ? "is-visible" : ""}`}
        >
          <div className="journey-count">
            <div className="journey-number">04</div>

            <div className="journey-marker">
              <span>●</span>
            </div>
          </div>

          <div className="journey-content">
            <span className="journey-label section-tag">CURRENT PHASE</span>

            <h3>GROWING</h3>

            <p>
              Continuously improving my development skills, exploring modern
              technologies, and focusing on building better digital experiences.
            </p>
          </div>
        </article>
      </div>

      {/* Developer Evolution */}
      <div
        ref={evolutionRef}
        className={`developer-evolution reveal-scale ${evolutionVisible ? "is-visible" : ""}`}
      >
        <div className="section-heading">
        <span className="section-tag">DEVELOPER EVOLUTION</span>
        <h2>WHOLE CYCLE</h2></div>

        <div className="evolution-flow">
          <span>
            LEARN
            <p className="evolution-description">
              I learn the fundamentals and understand how technologies work.
            </p>
          </span>

          <span>→</span>

          <span>
            BUILD
            <p className="evolution-description">
              I turn what I learn into practical projects and real interfaces.
            </p>
          </span>

          <span>→</span>

          <span>
            BREAK
            <p className="evolution-description">
              Problems are part of development. I learn from  mistakes.
            </p>
          </span>

          <span>→</span>

          <span>
            DEBUG
            <p className="evolution-description">
              I investigate problems, understand their cause, and fix them.
            </p>
          </span>

          <span>→</span>

          <span>
            IMPROVE
            <p className="evolution-description">
              I refine my code, interface, and overall user experience.
            </p>
          </span>

          <span>→</span>

          <span>
            SHIP
            <p className="evolution-description">
              I turn the finished work into something people can actually use.
            </p>
          </span>
        </div>
      </div>
    </section>
  );
}

export default MyExperience;
