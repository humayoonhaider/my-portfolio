import { ArrowUpRight, GitFork, ExternalLink, Mail, X } from "lucide-react";
import { useState } from "react";

import { useReveal } from "../hooks/useReveal";
import "./ContactMe.css";

function ContactMe() {

  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [headingRef, headingVisible] = useReveal();
  const [ctaRef, ctaVisible] = useReveal();
  const [linksRef, linksVisible] = useReveal({ threshold: 0.1 });

  return (
    <section className="contact" id="contactMe">

      {/* Section Heading */}
      <div
        ref={headingRef}
        className={`section-heading reveal ${headingVisible ? "is-visible" : ""}`}
      >

        <span className="section-tag">
           HAVE A PROJECT IN MIND?
        </span>

        <h2>
          LET'S BUILD SOMETHING GREAT.
        </h2>

        <p>
          Have an idea, a project, or an opportunity in mind?
          Let's turn it into something useful, thoughtful, and impactful.
        </p>

      </div>


      {/* Contact Main */}
      <div className={`contact-main ${isMessageOpen ? "is-open" : ""}`}>


        {/* CTA Area */}
        <div
          ref={ctaRef}
          className={`contact-cta reveal-scale ${ctaVisible ? "is-visible" : ""}`}
        >

          <span className="contact-label section-tag">
            READY TO BUILD?
          </span>

          <h3>
            Let's create something worth building.
          </h3>


          {/* Quick Message Button */}
          <button
            className="quick-message-button"
            onClick={() => setIsMessageOpen(!isMessageOpen)}
          >

            {isMessageOpen ? (
              <>
                CLOSE MESSAGE
                <X />
              </>
            ) : (
              <>
                QUICK MESSAGE
                <ArrowUpRight />
              </>
            )}

          </button>

        </div>


        {/* Quick Message Form */}
        {isMessageOpen && (

          <div className="quick-message-form">

            <div className="form-heading">

              <span className="section-tag">
                 QUICK MESSAGE
              </span>

              <h3>
                Tell me about your idea.
              </h3>

              <p>
                Fill in the details below and I'll get back to you.
              </p>

            </div>


            <form
              action="https://formsubmit.co/humayoonkhan003@gmail.com"
              method="POST"
            >

              <input type="hidden" name="_subject" value="New portfolio message" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              {/* Name */}
              <div className="form-field">

                <label htmlFor="name">
                  NAME
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />

              </div>


              {/* Email */}
              <div className="form-field">

                <label htmlFor="email">
                  EMAIL
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />

              </div>


              {/* Subject */}
              <div className="form-field">

                <label htmlFor="subject">
                  SUBJECT
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What would you like to build?"
                />

              </div>


              {/* Message */}
              <div className="form-field">

                <label htmlFor="message">
                  MESSAGE
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me a little about your project..."
                  required
                />

              </div>


              {/* Submit */}
              <button
                type="submit"
                className="send-message-button"
              >
                SEND MESSAGE
                <ArrowUpRight />
              </button>

            </form>

          </div>

        )}

      </div>


      {/* Direct Contact Links */}
      <div
        ref={linksRef}
        className={`contact-links reveal-stagger ${linksVisible ? "is-visible" : ""}`}
      >


        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=humayoonkhan003@gmail.com"
          className="contact-link"
          target="_blank"
          rel="noreferrer"
        >

          <span className="contact-number">
            01 {")"} 
            <Mail />EMAIL
          </span>

        
          <div className="contact-link-content">

            <strong>
              humayoonkhan003@gmail.com
            </strong>

          

          <ArrowUpRight className="contact-link-arrow" />
</div>
        </a>


        {/* GitHub */}
        <a 
          href="https://github.com/humayoonhaider"
          className="contact-link "
          target="_blank"
          rel="noreferrer"
        >

          <span className="contact-number">
            02 {")"}
            <GitFork /> GITHUB
          </span>

          <div className=" btn-primary">

             


            <span>
              VIEW MY GITHUB
            </span>

         

          <ArrowUpRight className="contact-link-arrow" /> </div>

        </a>


        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/muhammad-humayoon-790437434/"
          className="contact-link"
          target="_blank"
          rel="noreferrer"
        >

          <span className="contact-number">
            03 {")"}
        
            <ExternalLink />     
              LINKEDIN
          </span>

          <div className="btn-secondary">

       

            <span>
              CONNECT ON LINKEDIN
            </span>
 <ArrowUpRight className="contact-link-arrow" />
          </div>

         

        </a>


      </div>


    </section>
  );
}

export default ContactMe;
