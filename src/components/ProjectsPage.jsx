import Projects from "./Projects";

export default function ProjectsPage({ innerRef, resources, language }) {
  const projectsPageInfo = resources[language]["projects-pg"];

  return (
    <section id="projects-page" ref={innerRef} className="page">
      <div className="odd min-vw-100 min-vh-100 container">
        <div>
          <div className="col-12 col-md-11 col-lg-10 d-flex flex-column mx-auto">
            <h1 className="page-title">{projectsPageInfo["title"]}</h1>
            <p className="lead  p-3">{projectsPageInfo["desc"]}</p>
            <Projects source={projectsPageInfo["cards"]} />
          </div>
        </div>
      </div>
    </section>
  );
}
