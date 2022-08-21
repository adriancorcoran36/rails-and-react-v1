import React from "react";
import { createRoot } from "react-dom/client";

export default function mount(components = {}) {
  document.addEventListener("DOMContentLoaded", () => {
    const mountPoints = document.querySelectorAll("[data-react-component]");

    mountPoints.forEach((mountPoint) => {
      const dataset = (mountPoint as HTMLElement).dataset;
      const componentName = dataset["reactComponent"];
      const Component = components[componentName];

      if (Component) {
        const props = JSON.parse(dataset["props"]);
        const rootElement = mountPoint;
        const root = createRoot(rootElement);
        root.render(<Component {...props} />);
      } else {
        console.log(
          "WARNING: No component found for: ",
          dataset.reactComponent,
          components
        );
      }
    });
  });
}
