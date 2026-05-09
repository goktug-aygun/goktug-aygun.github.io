import { useState } from "react";

export default function WelcomePage({ innerRef, resources, language }) {
  const welcomePageInfo = resources[language]["home-pg"];

  const [randomMemoji] = useState(() => {
    return Math.random() < 0.5
      ? "/images/memojis/memoji-wave-1.png"
      : "/images/memojis/memoji-wave-2.png";
  });

  return (
    <section id="home-page" ref={innerRef} className="page odd pt-5">
      <div className="welcome-box container-fluid d-flex flex-xl-row flex-column">
        {/* Memoji */}
        <div className="col-xl-6 d-flex justify-content-center align-items-center ">
          <img className="memoji-img" src={randomMemoji} alt="Goktug waving" />
        </div>

        {/* Landing box */}
        <div className="landing-box col-xl-6 d-flex flex-column align-items-center justify-content-center">
          <span
            style={{ fontSize: "50px" }}
            id="landing-text"
            className="landing-text p-4"
          >
            {welcomePageInfo["landing-text"]}
          </span>

          <a
            href="Goktug_Aygun_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="downloadCV home_button"
          >
            {welcomePageInfo["cv-btn"]}
          </a>

          {/* Education Box*/}
          <div className="education-box mt-4">
            <div className="education-box mt-4 w-100">
              {/* MEng */}
              <div className="education-item p-3 mb-3 border rounded bg-light w-100">
                <h5>MEng</h5>
                <p className="fw-bold mb-1">
                  {welcomePageInfo["education-meng"]["univ"]}
                </p>
                <div className="d-flex justify-content-center">
                  <p className="fw-bold mb-1 me-2">
                    {`${welcomePageInfo["education-meng"]["city"]}, ${welcomePageInfo["education-meng"]["country"]}`}
                  </p>
                  <img
                    className="lang-icon"
                    src={"/images/flags/belgium.png"}
                    alt={"belgian Flag"}
                  />
                </div>
                <p className="mb-1">
                  {welcomePageInfo["education-meng"]["focus"]}
                </p>
                <p className="text-muted mb-1">
                  {welcomePageInfo["education-meng"]["date"]}
                </p>
                {/* <p className="mb-0">GPA: —</p> N/A */}
              </div>

              {/* BSc */}
              <div className="education-item p-3 mb-3 border rounded bg-light w-100">
                <h5>BSc</h5>
                <p className="fw-bold mb-1">
                  {welcomePageInfo["education-bsc"]["univ"]}
                </p>
                <div className="d-flex justify-content-center">
                  <p className="fw-bold mb-1 me-2">
                    {`${welcomePageInfo["education-bsc"]["city"]}, ${welcomePageInfo["education-bsc"]["country"]}`}
                  </p>
                  <img
                    className="lang-icon"
                    src={"/images/flags/turkey.png"}
                    alt={"Turkish Flag"}
                  />
                </div>
                <p className="mb-1">
                  {welcomePageInfo["education-bsc"]["focus"]}
                </p>
                <p className="text-muted mb-1">
                  {welcomePageInfo["education-bsc"]["date"]}
                </p>
                <p className="mb-0">{`${welcomePageInfo["education-bsc"]["gpa"]}: 3.78 / 4.00`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
