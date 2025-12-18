import React from "react";
import { createRoot } from "react-dom/client";
import App from "../src/App";

// IMPORTANTE: importe um CSS/SCSS (mesmo vazio)
import "../src/application.scss";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  const root = createRoot(container);
  root.render(<App />);
});
