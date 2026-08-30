import ibrahimThebti from "../../images/pfp.png";
import "./home.css";
import { FaReact } from "react-icons/fa";
import SectionReveal from "../animations/SectionReveal";
import useSectionLoading from "../animations/useSectionLoading";
import Skeleton from "../animations/Skeleton";

function HomeSkeleton() {
  return (
    <section id="home" className="home home-skeleton">
      <div className="home-content">
        <div className="photo-section">
          <Skeleton className="skeleton-home-photo" />
          <Skeleton className="skeleton-home-caption" />
        </div>
        <div className="hero-text">
          <Skeleton className="skeleton-home-greeting" />
          <Skeleton className="skeleton-home-title" />
          <Skeleton className="skeleton-home-intro" />
          <Skeleton className="skeleton-home-line" />
          <div className="skeleton-home-skills"><Skeleton /><Skeleton /><Skeleton /><Skeleton /></div>
          <div className="skeleton-home-actions"><Skeleton /><Skeleton /></div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  const isLoaded = useSectionLoading();

  if (!isLoaded) return <HomeSkeleton />;

  return (
    <SectionReveal>
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
<<<<<<< HEAD
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
=======
          <div className="code-window">
            <div className="code-window-header">
              <span className="code-window-tab">hero.dev</span>
            </div>
            <div className="code-window-body">
              <div className="code-row">
                <span className="line-number">1</span>
                <span className="line-content">
                  <span className="pink">&lt;hello</span>{" "}
                  <span className="blue">name</span>
                  <span className="white">=</span>
                  <span className="yellow">"Ibrahim"</span>
                  <span className="pink">&gt;</span>
                </span>
              </div>
              <div className="code-row">
                <span className="line-number">2</span>
                <span className="line-content"></span>
              </div>
              <div className="code-row code-row-title">
                <span className="line-number">3</span>
                <span className="line-content">Software Engineering</span>
              </div>
              <div className="code-row code-row-title">
                <span className="line-number">4</span>
                <span className="line-content">
                  <span className="highlight">Student</span> &amp; Web Developer
                </span>
              </div>
              <div className="code-row">
                <span className="line-number">5</span>
                <span className="line-content"></span>
              </div>
              <div className="code-row">
                <span className="line-number">6</span>
                <span className="line-content intro">
                  I enjoy turning ideas into{" "}
                  <span className="yellow">real things</span> through code.
                  I'm passionate about web development,{" "}
                  <span className="blue">problem solving</span>, and exploring
                  the world of <span className="green">AI</span>.
                </span>
              </div>
              <div className="code-row">
                <span className="line-number">7</span>
                <span className="line-content">
                  <span className="pink">const</span>{" "}
                  <span className="blue">focus</span>{" "}
                  <span className="white">=</span>{" "}
                  <span className="yellow">
                    ["Web", "Problem Solving", "AI"]
                  </span>
                  <span className="white">;</span>
                </span>
              </div>
            </div>
          </div>
>>>>>>> d4519bc (style: update fonts to Geist, boost accent color contrast, add Vercel Analytics)

          <div className="skills stagger-list">
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
              <span className="skill-icon python">PY</span>
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
    </SectionReveal>
  );
}

export default Home;