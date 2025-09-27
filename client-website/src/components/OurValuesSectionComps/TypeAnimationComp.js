"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

function TypeAnimationComp() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "COMMITMENT",
        1000,
        "INNOVATION",
        1000,
        "REPUTATION",
        1000,
        "EXCELLENCE",
        1000,
      ]}
      speed={30}
      deletionSpeed={30}
      repeat={Infinity}
      wrapper="h2"
      className="text-white font-bold text-xl lg:text-7xl text-center"
    />
  );
}

export default TypeAnimationComp;
