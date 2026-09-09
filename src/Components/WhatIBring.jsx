import "./WhatIBring.css";
import { useReveal } from "../hooks/useReveal";

function WhatIBring() {
  const [headingRef, headingVisible] = useReveal();
  const [listRef, listVisible] = useReveal({ threshold: 0.1 });

  return (
    <section className="what-i-bring">

      {/* Section Heading */}
      <div
        ref={headingRef}
        className={`section-heading reveal ${
          headingVisible ? "is-visible" : ""
        }`}
      >
        <span className="section-tag">
          WHY WORK WITH ME
        </span>

        <h2>WHAT I BRING</h2>

        <p>
          Beyond technologies, I focus on writing maintainable code,
          building responsive interfaces, solving problems effectively,
          and creating enjoyable digital experiences.
        </p>
      </div>


      {/* What I Bring */}
      <div
        ref={listRef}
        className={`bring-list reveal-stagger ${
          listVisible ? "is-visible" : ""
        }`}
      >


        {/* ================= 01 ================= */}
        <article className="bring-card">

          <span className="bring-number section-tag">
            01)
          </span>

          <div className="bring-content">

            <h3>
              <span className="important">
                CLEAN
              </span>{" "}
              CODE
            </h3>

            <p>
              I focus on writing clear, organized, reusable, and
              maintainable code that is easier to understand, debug,
              and improve as a project grows.
            </p>

          </div>

        </article>


        {/* ================= 02 ================= */}
        <article className="bring-card">

          <span className="bring-number section-tag">
            02)
          </span>

          <div className="bring-content">

            <h3>
              <span className="important">
                RESPONSIVE
              </span>{" "}
              EXPERIENCES
            </h3>

            <p>
              I build responsive web interfaces that adapt naturally
              across desktops, tablets, and mobile devices while
              maintaining a consistent and user-friendly experience.
            </p>

          </div>

        </article>


        {/* ================= 03 ================= */}
        <article className="bring-card">

          <span className="bring-number section-tag">
            03)
          </span>

          <div className="bring-content">

            <h3>
              <span className="important">
                PROBLEM
              </span>{" "}
              SOLVING
            </h3>

            <p>
              I focus on understanding the problem first, breaking it
              into smaller parts, and using practical development
              approaches to build effective solutions.
            </p>

          </div>

        </article>


      </div>

    </section>
  );
}

export default WhatIBring;