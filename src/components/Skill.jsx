export default function Skill({ imageSrc, name, altText }) {
  return (
    <div className="p-2 skill-box d-flex flex-column align-items-center mx-0">
      <img
        src={imageSrc}
        alt={altText || name}
        style={{ objectFit: "contain" }}
      />
      <span className="skill-name">{name}</span>
    </div>
  );
}
