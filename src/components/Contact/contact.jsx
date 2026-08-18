import "./contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <p className="contact-label">
          <span>//</span> get-in-touch
        </p>

        <h2>
          Let's build
          <br />
          <span>something together.</span>
        </h2>

        <p className="contact-description">
          Have an idea, an opportunity, or just want to talk
          about software and technology? Feel free to reach out.
        </p>

        <div className="contact-options">

          <a
            href="https://www.linkedin.com/in/ibrahim-thebti"
            target="_blank"
            rel="noreferrer"
            className="contact-card linkedin"
          >
            <div className="contact-icon">
              in
            </div>

            <div className="contact-info">
              <span className="contact-type">
                LinkedIn
              </span>

              <span className="contact-value">
                Let's connect professionally
              </span>
            </div>

            <span className="contact-arrow">
              ↗
            </span>
          </a>

          <a
            href="mailto:ibrahimthebty@gmail.com"
            className="contact-card email"
          >
            <div className="contact-icon">
              @
            </div>

            <div className="contact-info">
              <span className="contact-type">
                Email
              </span>

              <span className="contact-value">
                Send me a message
              </span>
            </div>

            <span className="contact-arrow">
              ↗
            </span>
          </a>

        </div>

        <div className="contact-footer">
          <span>console.log(</span>
          <strong>"Thanks for visiting!"</strong>
          <span>);</span>
        </div>

      </div>
    </section>
  );
}

export default Contact;