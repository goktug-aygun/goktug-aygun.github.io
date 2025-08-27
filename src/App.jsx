import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Projects from "./components/Projects";

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
      <Projects source={projectsObj} />
    </div>
  );
}

export default App;
