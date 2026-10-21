import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineering Undergraduate",
          "Aspiring Full-Stack Developer",
          "Problem Solver & System Builder",
          "Cloud & Infrastructure Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay: 45,
      }}
    />
  );
}

export default Type;
