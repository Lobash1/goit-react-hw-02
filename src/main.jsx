import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "modern-normalize";
import "./index.css";
import App from "./App/App";
// import App from "./components/App/App.js";
// import App from "./components/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
