export default function Card({ title, image, description, buttonText, interval }) {
  return (
    <div className="col-lg-3 col-md-4 mb-5">
      <div className="project-card box h-100 d-flex flex-column p-4 text-white">
        
        <div className="image-wrapper">
          <img src={image} alt={title} />
        </div>

        <div className="title-wrapper">
          <h4 className="project-title mt-3">{title}</h4>
        </div>

        <p>{description}</p>

        <div className="mt-auto">
          {buttonText && (
            <button className="btn btn-primary w-100">
              {buttonText}
            </button>
          )}
        </div>

        {interval && (
          <div className="card-footer">
            <p className="interval pt-auto text-muted text-center">{interval}</p>
          </div>
        )}
      </div>
    </div>
  );
}
