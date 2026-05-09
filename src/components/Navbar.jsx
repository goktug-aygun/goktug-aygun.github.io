import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import LanguageDropdown from "./LanguageDropdown";

export default function Navbar({
  resources,
  language,
  theme,
  onLanguageChange,
  onThemeToggle,
  sections,
}) {
  const navbarInfo = resources[language]["navbar"];

  const handleScrollClick = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }

    const x = window.matchMedia("(max-width: 992px)");
    if (x.matches) {
      const toggler = document.querySelector(".navbar-toggler");
      if (toggler) toggler.click();
    }
  };

  const handleLanguageChange = (lang) => {
    onLanguageChange(lang);
  };

  return (
    <nav className="navbar navbar-expand-lg position-fixed bg-body-tertiary">
      <div className="container-fluid nav-div">
        <a className="navbar-brand">
          <strong>{navbarInfo["name"]}</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-lg-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link scroll"
                aria-current="page"
                onClick={() => handleScrollClick(sections.experience)}
              >
                {navbarInfo["experience-btn"]}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link scroll"
                aria-current="page"
                onClick={() => handleScrollClick(sections.about)}
              >
                {navbarInfo["about-me-btn"]}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link scroll"
                aria-current="page"
                onClick={() => handleScrollClick(sections.projects)}
              >
                {navbarInfo["projects-btn"]}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link scroll"
                onClick={() => handleScrollClick(sections.skills)}
              >
                {navbarInfo["skills-btn"]}
              </a>
            </li>

            <LanguageDropdown onLanguageChange={handleLanguageChange} />

            {/* Reach Me Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {navbarInfo["contact-btn"]}
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item visitGithub"
                    href="https://github.com/goktug-aygun"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-github me-2"></i>
                    <span>{navbarInfo["contact-github"]}</span>
                  </a>
                  <a
                    className="dropdown-item visitLinkedin"
                    href="https://www.linkedin.com/in/goktugaygun/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-linkedin me-2"></i>
                    <span>{navbarInfo["contact-linkedin"]}</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item scroll"
                    onClick={() => handleScrollClick(sections.contact)}
                  >
                    <i className="bi bi-envelope me-2"></i>
                    <span>{navbarInfo["contact-page"]}</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="theme-toggle-wrapper">
            <button
              className="theme-toggle-switch"
              type="button"
              role="switch"
              aria-checked={theme === "dark"}
              onClick={onThemeToggle}
              aria-label={navbarInfo["theme-toggle-label"]}
              title={navbarInfo["theme-toggle-label"]}
            >
              <span className="theme-switch-track" aria-hidden="true">
                <span className="theme-switch-thumb">
                  <i
                    className={`bi ${theme === "dark" ? "bi-moon-stars" : "bi-sun"}`}
                  />
                </span>
              </span>
              <span className="theme-switch-label">
                {theme === "dark"
                  ? navbarInfo["theme-dark-btn"]
                  : navbarInfo["theme-light-btn"]}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
