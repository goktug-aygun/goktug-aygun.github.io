import React, { useRef, useState, useEffect } from "react";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar";
import ScrollIndicator from "./components/ScrollIndicator";
import WelcomePage from "./components/WelcomePage";
import AboutMePage from "./components/AboutMePage";
import ProjectsPage from "./components/ProjectsPage";
import SkillsPage from "./components/SkillsPage";
import ContactPage from "./components/ContactPage";
import SplashScreen from "./components/Splash";
// Language Files
import en from "./locales/en.json";
import tr from "./locales/tr.json";

function App() {
  const { t, i18n } = useTranslation();
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

  const [showSplash, setShowSplash] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleSplashFinish = () => {
    setShowSplash(false);
    // Small timeout to let the DOM update before triggering fade
    setTimeout(() => {
      setVisible(true);
      setShowNav(true);
    }, 50);
  };

  return (
    <div className="root-container">
      {showNav && (
        <div className="navbar-fadein">
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
            onLanguageChange={(lang) => changeLanguage(lang)}
          />
        </div>
      )}
      <div className="app-container">
        {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
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
      {showNav && <ScrollIndicator />}
    </div>
  );
}

export default App;
