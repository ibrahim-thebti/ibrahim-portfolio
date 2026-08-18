import "./projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "Project One",
      description:
        "A short description explaining what the project does, the problem it solves, and what you learned from building it.",
      technologies: ["React", "JavaScript", "CSS"],
      github: "#",
      demo: "#",
    },
    {
      number: "02",
      title: "Project Two",
      description:
        "A short description explaining the main idea of the project and the technologies you used to build it.",
      technologies: ["Java", "SQL", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
    {
      number: "03",
      title: "Project Three",
      description:
        "A project focused on solving a particular problem through software and applying your technical knowledge.",
      technologies: ["Python", "AI", "Machine Learning"],
      github: "#",
      demo: "#",
    },
    {
      number: "04",
      title: "Project Four",
      description:
        "Another project that demonstrates your ability to design, develop, and improve a software solution.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        {/* Heading */}
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

        {/* Projects */}
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>

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