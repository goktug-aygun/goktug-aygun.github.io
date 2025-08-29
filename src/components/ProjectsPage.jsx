import Projects from "./Projects";

export default function ProjectsPage({ resources, language }) {
  const projectsObj = resources[language]["projects-pg"]["cards"];
  return (
    <section id="projects-page" className="page">
      <div className="odd min-vw-100 min-vh-100 container">
        <div>
          <div className="col-12 col-md-11 col-lg-10 d-flex flex-column mx-auto">
            <h1 className="page-title">Projects and Experience</h1>
            <p className="p-3">
              Here are some of the projects to which I have contributed. During
              these projects, I was able to practice technical skills besides
              improving my social abilities. There are many more great projects
              to come...
            </p>
            <Projects source={projectsObj} />
          </div>
        </div>
      </div>
    </section>
  );
}
