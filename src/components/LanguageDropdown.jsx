import { useState } from "react";

export default function LanguageDropdown({ onLanguageChange }) {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const languages = {
    en: { name: "English", icon: "/images/flags/usa.png" },
    tr: { name: "Türkçe", icon: "/images/flags/turkey.png" },
  };

  const handleChange = (lang) => {
    setSelectedLanguage(lang);
    onLanguageChange(lang);
  };

  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          className="lang-icon"
          src={languages[selectedLanguage].icon}
          alt={languages[selectedLanguage].name}
        />
        {languages[selectedLanguage].name}
      </a>
      <ul className="dropdown-menu">
        {Object.keys(languages)
          .filter((lang) => lang !== selectedLanguage) // show the non-selected language option
          .map((lang) => (
            <li key={lang}>
              <button
                className="dropdown-item"
                onClick={() => handleChange(lang)}
              >
                <img
                  className="lang-icon"
                  src={languages[lang].icon}
                  alt={languages[lang].name}
                />
                {languages[lang].name}
              </button>
            </li>
          ))}
      </ul>
    </li>
  );
}
