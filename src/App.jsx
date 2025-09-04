import React, { useRef, useState } from "react";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";

import "bootstrap-icons/font/bootstrap-icons.css";

import Navbar from "./components/Navbar";
import WelcomePage from "./components/WelcomePage";
import AboutMePage from "./components/AboutMePage";
import ProjectsPage from "./components/ProjectsPage";
import SkillsPage from "./components/SkillsPage";
import ContactPage from "./components/ContactPage";

// Language Files
import en from "./locales/en.json";
import tr from "./locales/tr.json";

function App() {
  const { t, i18n } = useTranslation();
  // English is the default language
  const [language, setLanguage] = useState("en");

  const resources = { en, tr };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="app-container">
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
        onLanguageChange={(lang) => {
          changeLanguage(lang);
        }}
      />
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
  );
}

export default App;
