import ibrahimThebti from "../../images/pfp.png";
import "./home.css";
import { FaReact } from "react-icons/fa";
function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="photo-section">
          <div className="photo-wrapper">
            <img
              src={ibrahimThebti}
              alt="Ibrahim Thebti"
              className="profile-photo"
            />
           <div className="photo-badge">
                <span>&lt;/&gt;</span>
            </div>
          </div>
          <p className="photo-caption">
            <span>//</span> building, learning, solving.
          </p>
        </div>
        <div className="hero-text">
          <div className="code-greeting">
            <span className="pink">&lt;hello</span>{" "}
            <span className="blue">name</span>
            <span className="white">=</span>
            <span className="yellow">"Ibrahim"</span>
            <span className="pink">&gt;</span>
          </div>
          <h1>
            Software Engineering
            <br />
            <span className="highlight">Student</span> &amp; Web Developer
          </h1>
          <p className="intro">
            I enjoy turning ideas into{" "}
            <span className="yellow">real things</span> through code.
            I'm passionate about web development,{" "}
            <span className="blue">problem solving</span>, and exploring
            the world of <span className="green">AI</span>.
          </p>
          <p className="code-line">
            <span className="pink">const</span>{" "}
            <span className="blue">focus</span>{" "}
            <span className="white">=</span>{" "}
            <span className="yellow">
              ["Web", "Problem Solving", "AI"]
            </span>
            <span className="white">;</span>
          </p>

          <div className="skills">
           <div className="skill">
              <span className="skill-icon react">
                <FaReact />
              </span>
              <span>React</span>
              </div>

            <div className="skill">
              <span className="skill-icon js">JS</span>
              <span>JavaScript</span>
            </div>

            <div className="skill">
              <span className="skill-icon python">Py</span>
              <span>Problem Solving</span>
            </div>

            <div className="skill">
              <span className="skill-icon ai">AI</span>
              <span>AI</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="primary-btn">
              Explore my work →
            </a>

            <a href="#contact" className="secondary-btn">
              Let's connect
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;