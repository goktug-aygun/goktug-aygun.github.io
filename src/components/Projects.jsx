import Card from "./Card";

const image_path = "src/assets/images/projects/";

export default function Projects({ source }) {
  return (
    <div className="row">
      {Object.entries(source).map(([key, project]) => (
        <Card
          key={key}
          title={project.title}
          image={`${image_path}${project.image}`} // project key'i ile path oluşturduk
          description={project.desc}
          buttonText={project.btn}
          buttonTarget={project.target}
          buttonHRef={project.href}
          interval={project.date}
        />
      ))}
    </div>
  );
}
