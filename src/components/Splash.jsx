import React, { useEffect, useState, useRef } from "react";
import { animate, svg, stagger, splitText } from "animejs";
import "../styles/splash.css";
import { svgs } from "../svgs.jsx";

export default function MultiSvgSplash({ onFinish }) {
  const [exiting, setExiting] = useState(false);
  const sloganRef = useRef(null);

  useEffect(() => {
    // Animate all SVGs
    svgs.slice(0, 3).forEach((svgItem) => {
      const el = document.getElementById(svgItem.id);
      if (el) el.style.willChange = "transform, opacity";

      animate(svg.createDrawable(`#${svgItem.id} .line`), {
        draw: ["0 0", "0 1", "1 1"],
        duration: 3000,
        delay: stagger(100),
        loop: false,
        easing: "easeInOutQuad",
      });
    });

    // Animate slogan lines using splitText
    if (sloganRef.current) {
      const words = Array.from(
        sloganRef.current.querySelectorAll(".slogan-word"),
      );
      words.forEach((word, index) => {
        word.style.willChange = "transform, opacity";

        const split = splitText(word, {
          words: { wrap: "clip" },
        });

        split.words.forEach((w) => {
          w.style.willChange = "transform, opacity";
        });

        animate(split.words, {
          y: [
            { to: ["100%", "0%"] },
            { to: "-100%", delay: 1250, ease: "in(3)" },
          ],
          duration: 1500,
          ease: "out(3)",
          delay: index * 200,
          loop: false,
        });
      });
    }

    // Exit after everything is done
    setTimeout(() => {
      setExiting(true);
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 1000);
    }, 2500);
  }, []);

  return (
    <div
      className={`splash-wrapper ${exiting ? "exiting" : ""}`}
      style={{ willChange: "transform, opacity" }}
    >
      {svgs.slice(0, 3).map((svgItem, index) => (
        <div key={svgItem.id} className="splash-svg-row">
          <svg
            id={svgItem.id}
            viewBox={svgItem.viewBox}
            className={index === 0 ? "splash-svg" : "splash-svg-small"}
            preserveAspectRatio="xMidYMid meet"
          >
            <g fill="none" stroke="currentColor" strokeWidth="2">
              {svgItem.paths}
            </g>
          </svg>
        </div>
      ))}
      <div ref={sloganRef} className="splash-slogan-row">
        <span className="slogan-word">Bridging Worlds</span>
        <span className="slogan-word">Building Solutions</span>
      </div>
    </div>
  );
}
