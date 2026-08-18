import "./skills.css";
function Skills() {
  const technicalSkills = [
    { name: "Python", className: "python" },
    { name: "C", className: "c" },
    { name: "C#", className: "csharp" },
    { name: "Java", className: "java" },
    { name: "Java EE", className: "javaee" },
    { name: "HTML5", className: "html" },
    { name: "CSS3", className: "css" },
    { name: "JavaScript", className: "javascript" },
    { name: "SQL", className: "sql" },
    { name: "PL/SQL", className: "plsql" },
    { name: "PostgreSQL", className: "postgresql" },
    { name: "React", className: "react" },
    { name: "Vercel", className: "vercel" },
    { name: "Render", className: "render" },
    { name: "PHP", className: "php" },
    { name: "GitHub Actions", className: "github" },
    { name: "Git", className: "git" },
  ];
  const softSkills = [
    {
      title: "Teamwork",
      description:
        "Working effectively with others, sharing ideas, and contributing toward common goals.",
    },
    {
      title: "Problem Solving",
      description:
        "Breaking complex problems into smaller steps and finding practical solutions.",
    },
    {
      title: "Time Management",
      description:
        "Organizing tasks and priorities to stay productive and meet deadlines.",
    },
    {
      title: "Communication",
      description:
        "Expressing ideas clearly and listening effectively when working with others.",
    },
    {
      title: "Flexibility & Adaptability",
      description:
        "Adapting quickly to new technologies, environments, and changing requirements.",
    },
    {
      title: "Critical Thinking",
      description:
        "Analyzing information, questioning assumptions, and making thoughtful decisions.",
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        {/* Header */}
        <div className="skills-heading">
          <p className="skills-label">
            <span>//</span> my-skills
          </p>
          <h2>
            Tools I use
            <br />
            <span>&amp; skills I bring.</span>
          </h2>
          <p>
            A combination of technical knowledge and the soft skills
            I use to learn, build, and work with others.
          </p>
        </div>
        {/* Technical Skills */}
        <div className="technical-section">
          <div className="section-title">
            <span className="number">01</span>
            <h3>Technical Skills</h3>
          </div>
          <div className="technical-skills">
            {technicalSkills.map((skill) => (
              <div
                key={skill.name}
                className={`tech-badge ${skill.className}`}
              >
                <span className="tech-icon">
                  {skill.name.charAt(0)}
                </span>

                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Soft Skills */}
        <div className="soft-section">
          <div className="section-title">
            <span className="number">02</span>
            <h3>Soft Skills</h3>
          </div>
          <div className="soft-skills">
            {softSkills.map((skill, index) => (
              <div className="soft-card" key={skill.title}>
                <span className="soft-number">
                  0{index + 1}
                </span>
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;