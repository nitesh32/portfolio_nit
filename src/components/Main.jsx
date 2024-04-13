import React from "react";
import Home from "./Home";
import Resume from "./Resume";
import Specializations from "./Specializations";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function Main() {
  return (
    <div className="p-4">
      <Home />
      <Resume />
      <Specializations />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Main;
