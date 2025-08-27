import Skill from "../components/Skill";

function SkillsBox({ skills, title }) {
  return (
    <div className="skills-container bg-primary m-2 p-4 d-flex flex-column align-items-center">
      {/* Başlık */}
      <h2 className="mb-4 text-center">{title}</h2>

      {/* Skill listesi */}
      <div className="d-flex flex-wrap justify-content-evenly">
        {skills.map((skill) => (
          <Skill key={skill.name} imageSrc={skill.imageSrc} name={skill.name} />
        ))}
      </div>
    </div>
  );
}

export default SkillsBox;
