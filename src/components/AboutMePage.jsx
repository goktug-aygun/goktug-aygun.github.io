import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function AboutMePage({ resources, language }) {
  const images = [
    "images/carousel/diploma-img.jpg",
    "images/carousel/diploma-green.jpg",
    "images/carousel/la-img.jpg",
  ];

  const aboutMePageInfo = resources[language]["about-pg"];

  return (
    <section id="about-me-page" className="page">
      <div className="even min-vh-100 row">
        <h1 className="page-title">{aboutMePageInfo["title"]}</h1>
        <div className="carousel-container col-xl-6">
          <div
            id="photoCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  {/* Blur background */}
                  <div
                    className="repeating-background"
                    style={{ backgroundImage: `url(${src})` }}
                  ></div>

                  {/* Main Picture */}
                  <img src={src} alt={`Foto ${index + 1}`} />
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#photoCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#photoCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="landing-box col-xl-6 py-3 py-md-5 d-flex align-items-start">
          <span className="lead px-3 px-md-5">{aboutMePageInfo["desc"]}</span>
        </div>
      </div>
    </section>
  );
}
