import Skill from "../components/Skill";

function SkillsBox({ skills, title }) {
  return (
    <div className="skills-container m-2 p-4 d-flex flex-column align-items-center">
      <h2 className="mb-4 text-center">{title}</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <Skill key={skill.name} imageSrc={skill.imageSrc} name={skill.name} />
        ))}
      </div>
    </div>
  );
}

export default SkillsBox;
