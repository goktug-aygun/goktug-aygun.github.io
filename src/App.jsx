// import React, { useRef, useState } from "react";
// import i18n from "./i18n";
// import { useTranslation } from "react-i18next";

// import "bootstrap-icons/font/bootstrap-icons.css";

// import Navbar from "./components/Navbar";
// import ScrollIndicator from "./components/ScrollIndicator";
// import WelcomePage from "./components/WelcomePage";
// import AboutMePage from "./components/AboutMePage";
// import ProjectsPage from "./components/ProjectsPage";
// import SkillsPage from "./components/SkillsPage";
// import ContactPage from "./components/ContactPage";

// import SplashScreen from "./components/Splash";

// // Language Files
// import en from "./locales/en.json";
// import tr from "./locales/tr.json";

// function App() {
//   const { t, i18n } = useTranslation();
//   // English is the default language
//   const [language, setLanguage] = useState("en");

//   const resources = { en, tr };

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     setLanguage(lng);
//   };

//   const homeRef = useRef(null);
//   const aboutRef = useRef(null);
//   const projectsRef = useRef(null);
//   const skillsRef = useRef(null);
//   const contactRef = useRef(null);

//   // new state to control splash screen visibility
//   const [showSplash, setShowSplash] = useState(true);

//   // function to be called when splash finishes
//   const handleSplashFinish = () => {
//     setTimeout(() => {
//       setShowSplash(false);

//       if (homeRef.current) {
//         homeRef.current.scrollIntoView({ behavior: "smooth" });
//       }
//     }, 4000);
//   };

//   return (
//     <div className="root-container">
//       <div className="app-container">
//         {/* Show Navbar only after splash is gone */}
//         {!showSplash && (
//           <Navbar
//             sections={{
//               home: homeRef,
//               about: aboutRef,
//               projects: projectsRef,
//               skills: skillsRef,
//               contact: contactRef,
//             }}
//             resources={resources}
//             language={language}
//             onLanguageChange={(lang) => changeLanguage(lang)}
//           />
//         )}

//         {/* Splash screen */}
//         {showSplash && <SplashScreen onFinish={handleSplashFinish} />}

//         {/* The rest of the pages */}
//         <WelcomePage
//           innerRef={homeRef}
//           resources={resources}
//           language={language}
//         />
//         <AboutMePage
//           innerRef={aboutRef}
//           resources={resources}
//           language={language}
//         />
//         <ProjectsPage
//           innerRef={projectsRef}
//           resources={resources}
//           language={language}
//         />
//         <SkillsPage
//           innerRef={skillsRef}
//           resources={resources}
//           language={language}
//         />
//         <ContactPage
//           innerRef={contactRef}
//           resources={resources}
//           language={language}
//         />
//       </div>

//       {!showSplash && <ScrollIndicator />}
//     </div>
//   );
// }

// export default App;

// import React, { useRef, useState, useEffect } from "react";
// import i18n from "./i18n";
// import { useTranslation } from "react-i18next";

// import "bootstrap-icons/font/bootstrap-icons.css";

// import Navbar from "./components/Navbar";
// import ScrollIndicator from "./components/ScrollIndicator";
// import WelcomePage from "./components/WelcomePage";
// import AboutMePage from "./components/AboutMePage";
// import ProjectsPage from "./components/ProjectsPage";
// import SkillsPage from "./components/SkillsPage";
// import ContactPage from "./components/ContactPage";

// import SplashScreen from "./components/Splash";

// // Language Files
// import en from "./locales/en.json";
// import tr from "./locales/tr.json";

// function App() {
//   const { t, i18n } = useTranslation();
//   const [language, setLanguage] = useState("en");

//   const resources = { en, tr };

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     setLanguage(lng);
//   };

//   const homeRef = useRef(null);
//   const aboutRef = useRef(null);
//   const projectsRef = useRef(null);
//   const skillsRef = useRef(null);
//   const contactRef = useRef(null);

//   // control splash screen visibility
//   const [showSplash, setShowSplash] = useState(true);
//   const [scrollToHome, setScrollToHome] = useState(false); // flag to trigger scroll

//   const handleSplashFinish = () => {
//     // wait 4 seconds for the splash animation
//     setTimeout(() => {
//       setShowSplash(false); // hide splash
//     }, 4000);
//   };

//   // scroll to home after splash is gone and pages are rendered
//   useEffect(() => {
//     if (!showSplash && homeRef.current) {
//       // Use requestAnimationFrame to ensure DOM is updated
//       requestAnimationFrame(() => {
//         homeRef.current.scrollIntoView({ behavior: "smooth" });
//       });
//     }
//   }, [showSplash, homeRef]);

//   return (
//     <div className="root-container">
//       <div className="app-container">
//         {/* Navbar only visible after splash */}
//         {!showSplash && (
//           <Navbar
//             sections={{
//               home: homeRef,
//               about: aboutRef,
//               projects: projectsRef,
//               skills: skillsRef,
//               contact: contactRef,
//             }}
//             resources={resources}
//             language={language}
//             onLanguageChange={(lang) => changeLanguage(lang)}
//           />
//         )}

//         {/* Splash screen */}
//         {showSplash && <SplashScreen onFinish={handleSplashFinish} />}

//         {/* All main pages */}
//         <WelcomePage
//           innerRef={homeRef}
//           resources={resources}
//           language={language}
//         />
//         <AboutMePage
//           innerRef={aboutRef}
//           resources={resources}
//           language={language}
//         />
//         <ProjectsPage
//           innerRef={projectsRef}
//           resources={resources}
//           language={language}
//         />
//         <SkillsPage
//           innerRef={skillsRef}
//           resources={resources}
//           language={language}
//         />
//         <ContactPage
//           innerRef={contactRef}
//           resources={resources}
//           language={language}
//         />
//       </div>

//       {/* Scroll indicator only after splash */}
//       {!showSplash && <ScrollIndicator />}
//     </div>
//   );
// }

// export default App;

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

  const handleSplashFinish = () => {
    setTimeout(() => {
      // Smooth scroll to home during the pause while splash is still visible
      if (homeRef.current) {
        homeRef.current.scrollIntoView({ behavior: "smooth" });
      }

      // Hide splash after scroll finishes
      setTimeout(() => {
        setShowSplash(false);
      }, 900);
    }, 4000);
  };

  return (
    <div className="root-container">
      <div className="app-container">
        {!showSplash && (
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
        )}
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
      {!showSplash && <ScrollIndicator />}
    </div>
  );
}

export default App;
