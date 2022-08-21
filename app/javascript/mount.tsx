import React from "react";
import { createRoot } from "react-dom/client";
import Getty from "./Getty";

export default function mount() {
  document.addEventListener("DOMContentLoaded", () => {
    const mountPoint = document.getElementById("App");

    if (mountPoint) {
      // get props
      const dataset = (mountPoint as HTMLElement).dataset;
      const props = JSON.parse(dataset["props"]) || {};
      // mount react app
      const root = createRoot(mountPoint);
      root.render(<Getty {...props} />);
    } else {
      // emit mounting error to Javascript Error Logging Software (Bugsnag?)
    }
  });
}
