import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import "./about.css";

const STATEMENT =
<<<<<<< HEAD
  "I'm a Software Engineering student who enjoys turning ideas into useful things — building for the web, solving problems, and learning how technology can be pushed further.";
=======
  "I'm a Software Engineering student who enjoys turning ideas into useful things: building for the web, solving problems, and learning how technology can be pushed further.";
>>>>>>> d4519bc (style: update fonts to Geist, boost accent color contrast, add Vercel Analytics)
const START_OPACITY = 0.15;
const SPREAD = 0.8;
const WORD_DURATION = 0.2;

function getWordProgressRange(index, count) {
  const start = count <= 1 ? 0 : (index / (count - 1)) * SPREAD;

  return {
    start,
    end: Math.min(1, start + WORD_DURATION),
  };
}

function Word({ children, index, count, scrollYProgress, reducedMotion }) {
  const { start, end } = getWordProgressRange(index, count);
  const opacity = useTransform(
    scrollYProgress,
    [start, end],
    [START_OPACITY, 1],
  );

  return (
    <motion.span
      className="reveal-word"
      aria-hidden="true"
      style={{ opacity: reducedMotion ? 1 : opacity }}
    >
      {children}{" "}
    </motion.span>
  );
}

function About() {
  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const aboutCards = [
    { title: "Web Development", description: "Building modern, responsive and user-friendly web experiences." },
    { title: "Problem Solving", description: "Enjoying algorithms, logical thinking and tackling challenging problems." },
    { title: "AI Enthusiast", description: "Exploring artificial intelligence and discovering how intelligent systems can solve real problems." },
  ];
  const words = STATEMENT.split(" ");

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
        </div>
        <section className="about-reveal" ref={sectionRef}>
          <div className="about-reveal-stage">
            <div className="reveal-layout">
              <div className="reveal-content">
                <h3 className="reveal-heading" aria-label={STATEMENT}>
                  {words.map((word, index) => (
                    <Word
                      key={`${word}-${index}`}
                      index={index}
                      count={words.length}
                      scrollYProgress={scrollYProgress}
                      reducedMotion={reducedMotion}
                    >
                      {word}
                    </Word>
                  ))}
                </h3>
              </div>
            </div>
          </div>
        </section>
        <div className="about-support">
          <div className="about-text">
            <p>
              My approach is simple: understand how things work, break
              difficult problems into smaller pieces, and build something
              that actually works.
            </p>
            <p>
              I'm particularly interested in{" "}
              <span className="yellow">web development</span>,{" "}
              <span className="blue">competitive programming</span>, and{" "}
              <span className="green">artificial intelligence</span>.
              I enjoy exploring new technologies, experimenting with ideas,
              and finding problems worth solving.
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