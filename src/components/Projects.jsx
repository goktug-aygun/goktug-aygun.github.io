import ProjectCard from "./ProjectCard";

export default function Projects({ source }) {
  return (
    <div className="project-card-grid">
      {source.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
