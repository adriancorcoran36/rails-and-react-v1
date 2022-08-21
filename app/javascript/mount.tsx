import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

export default function mount() {
  document.addEventListener("DOMContentLoaded", () => {
    const mountPoint = document.getElementById("App");

    if (mountPoint) {
      // get props
      const dataset = (mountPoint as HTMLElement).dataset;
      const props = JSON.parse(dataset["props"]) || {};
      // mount react app
      const root = createRoot(mountPoint);
      root.render(<App {...props} />);
    } else {
      // emit mounting error to Javascript Error Logging Software (Bugsnag?)
    }
  });
}
