export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-image">
        <img
          src={`/images/projects/${project.image}`}
          alt=""
          aria-hidden="true"
        />
      </div>
      <div className="project-card-body">
        <header className="project-card-header">
          <h3>{project.title}</h3>
          <div className="project-tech-stack">
            {project.techStack.map((tech) => (
              <span className="project-tech-tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </header>
        <ul className="summary-list project-card-summary">
          {project.desc.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
