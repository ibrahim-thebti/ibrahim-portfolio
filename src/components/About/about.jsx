import "./about.css";

function About() {
  const aboutCards = [
    {title: "Web Development", description: "Building modern, responsive and user-friendly web experiences."},
    {title: "Problem Solving", description: "Enjoying algorithms, logical thinking and tackling challenging problems."},
    {title: "AI Enthusiast", description: "Exploring artificial intelligence and discovering how intelligent systems can solve real problems."}
  ];
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-heading">
          <p className="about-label">
            <span className="pink">//</span> about.me
          </p>
          <h2>
            A little bit
            <br />
            <span>about me.</span>
          </h2>
          <p className="about-description">
            I'm a Software Engineering student who enjoys building things
            for the web, solving challenging problems, and continuously
            learning new technologies.
          </p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              My journey in software development is driven by curiosity.
              I like understanding how things work, breaking difficult
              problems into smaller pieces, and turning ideas into useful
              applications.
            </p>
            <p>
              I'm particularly interested in{" "}
              <span className="yellow">web development</span>,{" "}
              <span className="blue">competitive programming</span>, and{" "}
              <span className="green">artificial intelligence</span>.
              I'm always looking for something new to learn and a problem
              worth solving.
            </p>
            <div className="about-code">
              <span className="pink">while</span>{" "}
              <span className="white">(</span>
              <span className="blue">learning</span>
              <span className="white">) {"{"}</span>
              <br />
              <span className="indent">
                <span className="yellow">build</span>();
              </span>
              <br />
              <span className="indent">
                <span className="yellow">solve</span>();
              </span>
              <br />
              <span className="indent">
                <span className="yellow">improve</span>();
              </span>
              <br />
              <span className="white">{"}"}</span>
            </div>
          </div>
          <div className="about-cards">
            {aboutCards.map((card, index) => (
              <div className="about-card" key={index}>
              <div className="card-number">0{index + 1}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;