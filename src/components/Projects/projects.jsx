import "./projects.css";

import project1 from "../../images/projects/image.png";
import project2 from "../../images/projects/image2.png";
import project3 from "../../images/projects/image3.png";
import project4 from "../../images/projects/image4.png";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "BacTN Calculator",
      image: project1,
      description:
        "A web application that calculates BAC averages and scores, helping students quickly evaluate their baccalaureate results through a simple and user-friendly interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ibrahim-thebti/TN-BAC-Average-and-Score-Calculate",
      demo: "https://ibrahim-thebti.github.io/TN-BAC-Average-and-Score-Calculate/",
    },
    {
      number: "02",
      title: "Emotion detection",
      image: project2,
      description:
        "Emotion detection is a web application that uses the Gemini API to analyze facial expressions and infer emotions.",
      technologies: ["Python", "API", "React"],
      github: "https://github.com/ibrahim-thebti/emotion-detection-frontend",
      demo: "https://emotion-detection-bt.vercel.app/",
    },
    {
      number: "03",
      title: "Weather Forecasts",
      image: project3,
      description:
        "A responsive weather forecast app that uses an API to fetch real-time weather data and display current conditions, temperature, and forecasts for different locations.",
      technologies: ["HTML", "CSS", "API","JavaScript"],
      github: "https://github.com/ibrahim-thebti/Weather-Forecasts",
      demo: "https://weatherapp.freedev.app/",
    },
    {
      number: "04",
      title: "Calculator",
      image: project4,
      description:
        "A simple and responsive calculator built with HTML, CSS, and JavaScript, supporting basic arithmetic operations with a clean and intuitive interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ibrahim-thebti/Calculator",
      demo: "https://ibrahim-thebti.github.io/Calculator/",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <p className="projects-label">
            <span>//</span> selected-projects
          </p>

          <h2>
            Things I've
            <br />
            <span>built.</span>
          </h2>

          <p>
            A collection of projects where I put my knowledge into practice,
            experiment with new technologies, and solve real problems.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>

              {/* Project image */}
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <div className="project-links">
                  <a href={project.github}>GitHub ↗</a>
                  <a href={project.demo}>Live ↗</a>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;