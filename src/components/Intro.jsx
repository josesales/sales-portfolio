import React from "react";
import { intro } from "../data/stack";
import Profile from "./Profile";
import StackLoop from "./StackLoop";

const Intro = () => {
  return (
    <div id="intro" className="intro">
      <StackLoop array={intro} />

      <h1 className="section-title heading-primary-animation">
        <span>Software</span>
        <span> Engineer</span>
      </h1>

      <div className="intro__description section-margin-2 secondary-background">
        <p>
          Hi, I'm Sales, a dedicated Full Stack Developer with 15+ years of
          professional experience and a Bachelor's Degree in Computer Science.
        </p>
        <p>
          I've worked on projects for companies and clients in the U.S, Europe,
          and South America, with extensive experience in remote, distributed
          teams.
        </p>
      </div>

      <Profile />
    </div>
  );
};

export default Intro;
