"use client";

import React from "react";
import { ReactTyped } from "react-typed";

export const Banner = () => {
  return (
    <section
      id="hero"
      className="w-full min-h-screen relative flex items-center justify-start py-20 z-20"
    >
      {/* Background Image */}
      <img
        src="img/hero-bg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-10"
      />

      {/* Overlay */}
      <div className="absolute  bg-black/70 z-20 "></div>

      {/* Content */}
      <div className="relative z-30 text-start pl-4 ">
        <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Rohit Singh Negi
        </h2>
        <p className="text-white text-lg md:text-xl">
          I'm{" "}
          <span className="border-b-2 border-accent tracking-wide">
            <ReactTyped
              strings={["Designer", "Developer", "Freelancer", "Photographer"]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </span>
        </p>
      </div>
    </section>
  );
};
