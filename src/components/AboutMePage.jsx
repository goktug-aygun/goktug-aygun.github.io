import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect, useRef } from "react";

export default function AboutMePage({ innerRef, resources, language }) {
  const textRef = useRef(null);

  const images = [
    "images/carousel/diploma-img.jpg",
    "images/carousel/diploma-green.jpg",
    "images/carousel/la-img.jpg",
  ];
  const aboutMePageInfo = resources[language]["about-pg"];

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // Clear any pending timeouts
    if (el._timeouts) {
      el._timeouts.forEach(clearTimeout);
      el._timeouts = [];
    }

    // Split text into word spans
    const words = aboutMePageInfo["desc"].split(" ");
    el.innerHTML = words
      .map((word) => `<span class="word-dim">${word} </span>`)
      .join("");

    const spans = Array.from(el.querySelectorAll(".word-dim"));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timeouts = spans.map((span, index) => {
            return setTimeout(() => {
              span.style.transition = "color 0.4s ease";
              span.classList.add("word-reveal");
            }, index * 50);
          });
          el._timeouts = timeouts;
        } else {
          if (el._timeouts) {
            el._timeouts.forEach(clearTimeout);
            el._timeouts = [];
          }
          spans.forEach((span) => {
            span.style.transition = "color 0.1s ease";
            span.classList.remove("word-reveal");
          });
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (el._timeouts) {
        el._timeouts.forEach(clearTimeout);
        el._timeouts = [];
      }
    };
  }, [language]);

  return (
    <section id="about-me-page" ref={innerRef} className="page">
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
                  <div
                    className="repeating-background"
                    style={{ backgroundImage: `url(${src})` }}
                  ></div>
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
          <span ref={textRef} className="lead px-3 px-md-5" />
        </div>
      </div>
    </section>
  );
}
