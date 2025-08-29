import SkillsBox from "../components/SkillsBox";

const PLData = [
  { name: "Python", imageSrc: "/images/skills/PL/Python.png" },
  { name: "C++", imageSrc: "/images/skills/PL/Cpp.png" },
  { name: "C#", imageSrc: "/images/skills/PL/C_sharp.png" },
  { name: "C", imageSrc: "/images/skills/PL/C.png" },
  { name: "HTML", imageSrc: "/images/skills/PL/HTML.png" },
  { name: "CSS", imageSrc: "/images/skills/PL/CSS.png" },
  {
    name: "JavaScript",
    imageSrc: "/images/skills/PL/JavaScript.png",
  },
  { name: "Java", imageSrc: "/images/skills/PL/Java.png" },
  { name: "MySQL", imageSrc: "/images/skills/PL/MySQL.png" },
  { name: "Assembly", imageSrc: "/images/skills/PL/Assembly.png" },
];

const FWData = [
  { name: "Git", imageSrc: "/images/skills/FW/git.png" },
  { name: "Android", imageSrc: "/images/skills/FW/Android.png" },
  { name: "Bootstrap", imageSrc: "/images/skills/FW/Bootstrap.png" },
  { name: "Docker", imageSrc: "/images/skills/FW/Docker.png" },
  { name: "MongoDB", imageSrc: "/images/skills/FW/MongoDB.png" },
  { name: "NodeJS", imageSrc: "/images/skills/FW/Nodejs.png" },
  { name: "Spring", imageSrc: "/images/skills/FW/Spring.png" },
  { name: "ReactJS", imageSrc: "/images/skills/FW/Reactjs.png" },
  { name: "Langchain", imageSrc: "/images/skills/FW/langchain.png" },
  { name: "Selenium", imageSrc: "/images/skills/FW/selenium.png" },
  { name: "Pandas", imageSrc: "/images/skills/FW/pandas.png" },
  { name: "HuggingFace", imageSrc: "/images/skills/FW/huggingface.png" },
  { name: "NumPy", imageSrc: "/images/skills/FW/NumPy.png" },
];

export default function SkillsPage() {
  return (
    <section id="skills-page" className="page">
      <div className="even min-vh-100 d-flex flex-column">
        <h1 className="page-title">Skills / CV</h1>
        <p>
          Below are some of the programming languages and tools that I practiced
          with various projects and studies.
        </p>
        <div className="d-flex flex-column flex-lg-row justify-content-evenly">
          <SkillsBox skills={PLData} title={"Programming Languages"} />
          <SkillsBox
            skills={FWData}
            title={"Frameworks & Libraries & Technologies"}
          />
        </div>
        <p>
          You find my Curriculum Vitae (CV){" "}
          <a className="downloadCV" href="Goktug_Aygun_CV.pdf" target="_blank">
            here
          </a>{" "}
          as well.
        </p>
      </div>
    </section>
  );
}
