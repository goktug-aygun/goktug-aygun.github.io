import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "bootstrap-icons/font/bootstrap-icons.css";
import SplashScreen from "./components/Splash";
import Content from "./components/Content";
import en from "./locales/en.json";
import tr from "./locales/tr.json";

export default function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");
  const [showSplash, setShowSplash] = useState(true);
  const resources = { en, tr };

  const refs = {
    homeRef: useRef(null),
    aboutRef: useRef(null),
    projectsRef: useRef(null),
    skillsRef: useRef(null),
    contactRef: useRef(null),
  };

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <div className="root-container">
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      {!showSplash && (
        <Content
          refs={refs}
          resources={resources}
          language={language}
          onLanguageChange={(lang) => {
            i18n.changeLanguage(lang);
            setLanguage(lang);
          }}
        />
      )}
    </div>
  );
}
