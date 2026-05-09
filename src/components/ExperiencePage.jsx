export default function ExperiencePage({ innerRef, resources, language }) {
  const experiencePageInfo = resources[language]["experience-pg"];
  const renderSummary = (summary) => {
    if (Array.isArray(summary)) {
      return (
        <ul className="summary-list">
          {summary.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    }

    return <p>{summary}</p>;
  };
  const getDateEntries = (experience) => {
    return experience.dates || [experience.date];
  };

  return (
    <section id="experience-page" ref={innerRef} className="page">
      <div className="odd min-vh-100 experience-section">
        <div className="container experience-container">
          <h1 className="page-title">{experiencePageInfo["title"]}</h1>

          <div className="experience-layout">
            <div className="timeline-panel">
              <div className="experience-timeline">
                {experiencePageInfo["experiences"].map((experience) => (
                  <article className="timeline-item" key={experience.id}>
                    <div className="timeline-left-dates">
                      {getDateEntries(experience).map((date) => (
                        <span
                          className="timeline-date timeline-date-left"
                          key={date}
                        >
                          {date}
                        </span>
                      ))}
                    </div>
                    <div className="timeline-marker" aria-hidden="true" />
                    <div className="timeline-card">
                      <div className="timeline-card-header">
                        <div className="timeline-title-group">
                          <h3>{experience.role}</h3>
                          {experience.organizationHref ? (
                            <a
                              className="timeline-organization"
                              href={experience.organizationHref}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {experience.organization}
                            </a>
                          ) : (
                            <p className="timeline-organization">
                              {experience.organization}
                            </p>
                          )}
                        </div>
                      </div>
                      {renderSummary(experience.desc)}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="education-panel">
              <div className="experience-memoji-wrap">
                <img
                  className="experience-memoji"
                  src="/images/memojis/memoji-wave-1.png"
                  alt="Goktug memoji"
                />
              </div>
              <h2 className="visually-hidden">
                {experiencePageInfo["education-title"]}
              </h2>
              <div className="education-list">
                {experiencePageInfo["education"].map((education) => (
                  <article className="education-item" key={education.id}>
                    <div className="education-meta">
                      <span className="education-degree">
                        {education.degree}
                      </span>
                      <span className="education-date">{education.date}</span>
                    </div>
                    <h3>{education.institution}</h3>
                    <div className="education-location">
                      <span>{education.location}</span>
                      <img
                        className="lang-icon"
                        src={`/images/flags/${education.flag}`}
                        alt=""
                        aria-hidden="true"
                      />
                    </div>
                    <p>{education.focus}</p>
                    {education.gpa && (
                      <p className="education-gpa">{education.gpa}</p>
                    )}
                  </article>
                ))}
              </div>
              <a
                className="experience-cv-button"
                href="Goktug_Aygun_CV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                {resources[language]["home-pg"]["cv-btn"]}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
