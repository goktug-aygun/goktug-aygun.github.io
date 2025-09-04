import Card from "./Card";

const image_path = "/images/projects/";

export default function Projects({ source }) {
  return (
    <div className="justify-content-center row p-0 p-lg-5">
      {Object.entries(source).map(([key, project]) => (
        <Card
          key={key}
          title={project.title}
          image={`${image_path}${project.image}`}
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
