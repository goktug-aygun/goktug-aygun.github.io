import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "bootstrap-icons/font/bootstrap-icons.css";
import SplashScreen from "./components/Splash";
import Content from "./components/Content";
import en from "./locales/en.json";
import tr from "./locales/tr.json";

export default function App() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("en");
  const [showSplash, setShowSplash] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "light";
  });
  const resources = { en, tr };

  const refs = {
    experienceRef: useRef(null),
    aboutRef: useRef(null),
    projectsRef: useRef(null),
    skillsRef: useRef(null),
    contactRef: useRef(null),
  };

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  const handleThemeToggle = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="root-container" data-theme={theme}>
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      {!showSplash && (
        <Content
          refs={refs}
          resources={resources}
          language={language}
          theme={theme}
          onLanguageChange={(lang) => {
            i18n.changeLanguage(lang);
            setLanguage(lang);
          }}
          onThemeToggle={handleThemeToggle}
        />
      )}
    </div>
  );
}
