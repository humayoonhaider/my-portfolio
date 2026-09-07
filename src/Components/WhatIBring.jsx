import "./WhatIBring.css"
import { useReveal } from "../hooks/useReveal";
function WhatIBring() {
  const [headingRef, headingVisible] = useReveal();
  const [listRef, listVisible] = useReveal({ threshold: 0.1 });
  return (
    <section className="what-i-bring">

      {/* Section Heading */}
      <div
        ref={headingRef}
        className={`section-heading reveal ${headingVisible ? "is-visible" : ""}`}
      >

        <span className="section-tag">
           WHY WORK WITH ME
        </span>

        <h2>WHAT I BRING</h2>

        <p>
          Beyond technologies, I focus on building reliable,
          thoughtful, and enjoyable digital experiences.
        </p>

      </div>


      {/* What I Bring */}
      <div
        ref={listRef}
        className={`bring-list reveal-stagger ${listVisible ? "is-visible" : ""}`}
      >


        {/* 01 */}
        <article className="bring-card">

          <span className="bring-number section-tag">
            01{")"}
          </span>

          <div className="bring-content">

            <h3><span className="important"> CLEAN</span> CODE</h3>

            <p>
              I focus on writing clear, organized, and maintainable
              code that is easier to understand and improve.
            </p>

          </div>

        </article>


        {/* 02 */}
        <article className="bring-card">

          <span className="bring-number section-tag">
            02{")"}
          </span>

          <div className="bring-content">

            <h3><span className="important">RESPONSIVE</span>  EXPERIENCES</h3>

            <p>
              I build interfaces that adapt naturally across
              different screen sizes and devices.
            </p>

          </div>

        </article>


        {/* 03 */}
        <article className="bring-card">

          <span className="bring-number section-tag">
            03{")"}
          </span>

          <div className="bring-content">

            <h3><span className="important"> PROBLEM </span>SOLVING</h3>

            <p>
              I focus on understanding the problem first,
              then building a practical and effective solution.
            </p>

          </div>

        </article>


      </div>

    </section>
  );
}

export default WhatIBring;