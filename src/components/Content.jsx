import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ScrollIndicator from "./ScrollIndicator";
import WelcomePage from "./WelcomePage";
import AboutMePage from "./AboutMePage";
import ProjectsPage from "./ProjectsPage";
import SkillsPage from "./SkillsPage";
import ContactPage from "./ContactPage";

export default function Content({
  refs,
  resources,
  language,
  onLanguageChange,
}) {
  const { homeRef, aboutRef, projectsRef, skillsRef, contactRef } = refs;
  const [showGoUp, setShowGoUp] = useState(false);

  useEffect(() => {
    const container = document.querySelector(".app-container");
    if (!container) return;
    const handleScroll = () => {
      setShowGoUp(container.scrollTop > window.innerHeight);
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const container = document.querySelector(".app-container");
    if (container) {
      container.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="content-fadein">
      <Navbar
        sections={{
          home: homeRef,
          about: aboutRef,
          projects: projectsRef,
          skills: skillsRef,
          contact: contactRef,
        }}
        resources={resources}
        language={language}
        onLanguageChange={onLanguageChange}
      />
      <div className="app-container">
        <WelcomePage
          innerRef={homeRef}
          resources={resources}
          language={language}
        />
        <AboutMePage
          innerRef={aboutRef}
          resources={resources}
          language={language}
        />
        <ProjectsPage
          innerRef={projectsRef}
          resources={resources}
          language={language}
        />
        <SkillsPage
          innerRef={skillsRef}
          resources={resources}
          language={language}
        />
        <ContactPage
          innerRef={contactRef}
          resources={resources}
          language={language}
        />
      </div>
      <ScrollIndicator />
      <button
        className={`go-up-btn ${showGoUp ? "go-up-visible" : "go-up-hidden"}`}
        onClick={scrollToTop}
      >
        <i className="bi bi-arrow-up" />
      </button>
    </div>
  );
}
