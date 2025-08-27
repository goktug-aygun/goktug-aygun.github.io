import Projects from "./Projects";

export default function ProjectsPage({ resources, language }) {
  const projectsObj = resources[language]["projects-pg"]["cards"];
  return (
    <div className="d-flex flex-column">
      <h1>Projects and Experience</h1>
      <p>
        Here are some of the projects to which I have contributed. During these
        projects, I was able to practice technical skills besides improving my
        social abilities. There are many more great projects to come...
      </p>
      <Projects source={projectsObj} />
    </div>
  );
}
