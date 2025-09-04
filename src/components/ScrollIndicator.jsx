import React, { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".app-container");
    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      setProgress(scrolled);
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-bar-container">
      <div className="scroll-bar-progress" style={{ height: `${progress}%` }} />
    </div>
  );
}
