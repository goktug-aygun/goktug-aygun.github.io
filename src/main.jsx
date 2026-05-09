import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import App from "./App.jsx";
import "./i18n";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // JS kısmı

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
