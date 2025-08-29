import React, { useState } from "react";
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
  const { i18n } = useTranslation();
  // English is the default language
  const [language, setLanguage] = useState("en");

  const resources = { en, tr };
  const projectsObj = resources[language]["projects-pg"]["cards"];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <Navbar
        language={language}
        onLanguageChange={(lang) => {
          setLanguage(lang);
        }}
      />
      <WelcomePage />
      <AboutMePage />
      <ProjectsPage resources={resources} language={language} />
      <SkillsPage />
      <ContactPage />
    </div>
  );
}

export default App;
