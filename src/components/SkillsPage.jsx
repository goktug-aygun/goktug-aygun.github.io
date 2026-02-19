import SkillsBox from "../components/SkillsBox";

const PLData = [
  { name: "Python", imageSrc: "/images/skills/PL/Python.png" },
  { name: "C++", imageSrc: "/images/skills/PL/Cpp.png" },
  { name: "C#", imageSrc: "/images/skills/PL/C_sharp.png" },
  { name: "HTML", imageSrc: "/images/skills/PL/HTML.png" },
  { name: "CSS", imageSrc: "/images/skills/PL/CSS.png" },
  {
    name: "JavaScript",
    imageSrc: "/images/skills/PL/JavaScript.png",
  },
  { name: "Java", imageSrc: "/images/skills/PL/Java.png" },
  { name: "MySQL", imageSrc: "/images/skills/PL/MySQL.png" },
];

const FWData = [
  { name: "Bootstrap", imageSrc: "/images/skills/FW/Bootstrap.png" },
  { name: "i18next", imageSrc: "/images/skills/FW/i18next.png" },
  { name: "Spring", imageSrc: "/images/skills/FW/Spring.png" },
  { name: "Flask", imageSrc: "/images/skills/FW/Flask.png" },

  { name: "ReactJS", imageSrc: "/images/skills/FW/Reactjs.png" },
  { name: "Langchain", imageSrc: "/images/skills/FW/langchain.png" },
  { name: "Selenium", imageSrc: "/images/skills/FW/selenium.png" },
  { name: "Pandas", imageSrc: "/images/skills/FW/pandas.png" },
  { name: "NumPy", imageSrc: "/images/skills/FW/NumPy.png" },
  { name: "HuggingFace", imageSrc: "/images/skills/FW/huggingface.png" },
];

// Technologies / Tools
const TechData = [
  { name: "MongoDB", imageSrc: "/images/skills/FW/MongoDB.png" },
  { name: "NodeJS", imageSrc: "/images/skills/FW/Nodejs.png" },
  { name: "Git", imageSrc: "/images/skills/FW/git.png" },
  { name: "Docker", imageSrc: "/images/skills/FW/Docker.png" },
  {
    name: "Google Cloud",
    imageSrc: "/images/skills/FW/unnamed.png",
  },
];

export default function SkillsPage({ innerRef, resources, language }) {
  const skillsPageInfo = resources[language]["skills-pg"];

  return (
    <section id="skills-page" ref={innerRef} className="page">
      <div className="even min-vh-100 d-flex flex-column">
        <h1 className="page-title">{skillsPageInfo["title"]}</h1>
        <p className="lead">{skillsPageInfo["desc"]}</p>
        <div className="skills-sections">
          <SkillsBox skills={PLData} title={skillsPageInfo["pl-subtitle"]} />
          <SkillsBox skills={FWData} title={skillsPageInfo["fl-subtitle"]} />
          <SkillsBox
            skills={TechData}
            title={skillsPageInfo["tech-subtitle"]}
          />
        </div>
        <p className="lead">
          {skillsPageInfo["cv-pre"]}
          <a className="downloadCV" href="Goktug_Aygun_CV.pdf" target="_blank">
            {skillsPageInfo["cv-anchor"]}
          </a>
          {skillsPageInfo["cv-post"]}
        </p>
      </div>
    </section>
  );
}
