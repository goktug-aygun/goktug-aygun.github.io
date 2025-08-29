import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import LanguageDropdown from "./LanguageDropdown";

export default function Navbar({ resources, language, onLanguageChange }) {
  const navbarInfo = resources[language]["navbar"];
  useEffect(() => {
    const scrollButtons = document.getElementsByClassName("scroll");

    for (let i = 0; i < scrollButtons.length; i++) {
      scrollButtons[i].addEventListener("click", function () {
        const targetId = this.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);
        if (targetElement) targetElement.scrollIntoView({ behavior: "smooth" });

        const x = window.matchMedia("(max-width: 992px)");
        if (x.matches) {
          const toggler = document.querySelector(".navbar-toggler");
          if (toggler) toggler.click();
        }
      });
    }

    return () => {
      for (let i = 0; i < scrollButtons.length; i++) {
        scrollButtons[i].removeEventListener("click", () => {});
      }
    };
  }, []);

  const [currentLanguage, setCurrentLanguage] = useState("en");

  const handleLanguageChange = (lang) => {
    onLanguageChange(lang);
    console.log("Selected language:", lang);
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link scroll"
                data-target="home-page"
                aria-current="page"
              >
                {navbarInfo["home-btn"]}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link scroll"
                data-target="about-me-page"
                aria-current="page"
              >
                {navbarInfo["about-me-btn"]}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link scroll"
                data-target="projects-page"
                aria-current="page"
              >
                {navbarInfo["projects-exp-btn"]}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scroll" data-target="skills-page">
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
                    data-target="contact-page"
                  >
                    <i className="bi bi-envelope me-2"></i>
                    <span>{navbarInfo["contact-page"]}</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
