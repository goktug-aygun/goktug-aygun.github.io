import React, { useState } from "react";
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

  return (
    <div className="app-container">
      <Navbar
        resources={resources}
        language={language}
        onLanguageChange={(lang) => {
          changeLanguage(lang);
        }}
      />
      <WelcomePage resources={resources} language={language} />
      <AboutMePage resources={resources} language={language} />
      <ProjectsPage resources={resources} language={language} />
      <SkillsPage resources={resources} language={language} />
      <ContactPage resources={resources} language={language} />
    </div>
  );
}

export default App;
