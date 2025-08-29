import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function AboutMePage() {
  const images = [
    "images/carousel/diploma-img.jpg",
    "images/carousel/diploma-green.jpg",
    "images/carousel/la-img.jpg",
  ];

  return (
    <section id="about-me-page" className="page">
      <div className="even min-vh-100 row">
        <h1 className="page-title">About Me</h1>
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
          <span className="me-text px-3 px-md-5">
            Hi there! I am Goktug Aygun, a Computer Science and Engineering
            graduate from Sabancı University and currently pursuing my Master's
            degree at KU Leuven. I am specializing in Artificial Intelligence
            and Machine Learning, and I am eager to apply my expertise by
            contributing to innovative projects.
          </span>
        </div>
      </div>
    </section>
  );
}
