import { useEffect, useRef } from "react";

export default function ThesisPage({ innerRef, resources, language }) {
  const textRef = useRef(null);
  const thesisPageInfo = resources[language]["thesis-pg"];

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const parts = thesisPageInfo["desc"].split(/(\s+)/);

    el.innerHTML = parts
      .map((part) => {
        if (part.includes("\n")) {
          return "<br /><br />";
        }

        if (part.includes("\t")) {
          return '<span class="tab-indent"></span>';
        }

        if (part.trim() === "") {
          return part;
        }

        return `<span class="word-dim">${part}</span>`;
      })
      .join("");

    const spans = Array.from(el.querySelectorAll(".word-dim"));

    const observer = new IntersectionObserver(
      ([entry]) => {
        spans.forEach((span, index) => {
          span.style.transitionDelay = entry.isIntersecting
            ? `${index * 50}ms`
            : "0ms";

          span.classList.toggle("word-reveal", entry.isIntersecting);
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [thesisPageInfo]);

  return (
    <section id="thesis-page" ref={innerRef} className="page">
      <div className="even min-vh-100 thesis-section">
        <h1 className="page-title">{thesisPageInfo["title"]}</h1>

        <div className="thesis-content">
          <p ref={textRef} className="lead thesis-text" />
        </div>
      </div>
    </section>
  );
}
