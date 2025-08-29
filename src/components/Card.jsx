export default function Card({
  title,
  image,
  description,
  buttonText,
  buttonTarget,
  buttonHRef,
  interval,
}) {
  return (
    <div className="col-lg-4 col-md-6 mb-5">
      <div className="project-card box h-100 d-flex flex-column p-4 text-white">
        <div className="image-wrapper">
          <img src={image} alt={title} />
        </div>
        <div className="title-wrapper">
          <h4 className="project-title mt-3">{title}</h4>
        </div>
        <p>{description}</p>
        {buttonText && (
          <a
            className="btn btn-dark bg-gradient mt-2 align-items-center visitGithub"
            href={buttonHRef}
            target={buttonTarget}
          >
            {buttonText}
          </a>
        )}
        <div className="card-footer">
          <p className="pt-auto text-muted text-center">{interval}</p>
        </div>
      </div>
    </div>
  );
}
