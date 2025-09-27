"use client";

import ReactDOM from "react-dom";

export default function PreloadResources() {
  ReactDOM.preload(
    "https://the-breakdown.co.uk/wp-content/uploads/2019/08/To-combat-toxic-masculinity-men-need-to-learn-to-respect-each-other%E2%80%99s-boundaries.jpg",
    { as: "image" }
  );

  return null;
}
