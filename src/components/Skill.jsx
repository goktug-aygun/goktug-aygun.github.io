export default function Skill({ imageSrc, name, altText }) {
  return (
    <div className="skill-box">
      <img src={imageSrc} alt={altText || name} />
      <span className="skill-name">{name}</span>
    </div>
  );
}
