import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import LanguageDropdown from "./LanguageDropdown";

export default function Navbar({ language, onLanguageChange }) {
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
    setCurrentLanguage(lang);
    // İstersen burada diğer dil değişikliği mantığını da ekleyebilirsin
    console.log("Selected language:", lang);
  };

  return (
    <nav className="navbar navbar-expand-lg position-fixed bg-body-tertiary">
      <div className="container-fluid nav-div">
        <a className="navbar-brand">
          <strong>Goktug Aygun</strong>
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
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link scroll"
                data-target="about-me-page"
                aria-current="page"
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link scroll"
                data-target="projects-page"
                aria-current="page"
              >
                Projects and Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scroll" data-target="skills-page">
                Skills / CV
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
                Reach Me
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
                    <span>Github Profile</span>
                  </a>
                  <a
                    className="dropdown-item visitLinkedin"
                    href="https://www.linkedin.com/in/goktugaygun/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-linkedin me-2"></i>
                    <span>Linkedin Profile</span>
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
                    <span>Get in Contact</span>
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
