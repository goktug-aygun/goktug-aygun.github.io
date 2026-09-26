import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect, useRef } from "react";

export default function AboutMePage({ innerRef, resources, language }) {
  const textRef = useRef(null);

  const images = [
    "images/carousel/diploma-img.jpg",
    "images/carousel/diploma-green.jpg",
    "images/carousel/la-img.jpg",
    "images/carousel/ml6-black.jpeg",
  ];

  const aboutMePageInfo = resources[language]["about-pg"];
  const aboutDescription = aboutMePageInfo["desc"];

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    if (el._timeouts) {
      el._timeouts.forEach(clearTimeout);
      el._timeouts = [];
    }

    // Split the description into paragraphs using \n
    const paragraphs = aboutDescription.split(/\n/);

    // Create word spans for each paragraph
    el.innerHTML = paragraphs
      .map((paragraph, paragraphIndex) => {
        const words = paragraph.trim().split(/\s+/);

        const content = words
          .filter((word) => word.length > 0)
          .map((word) => `<span class="word-dim">${word} </span>`)
          .join("");

        // Add a clear line break between paragraphs
        return paragraphIndex < paragraphs.length - 1
          ? `${content}<br /><br />`
          : content;
      })
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
  }, [aboutDescription]);

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
