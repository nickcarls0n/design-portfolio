import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>Here is the About page</h1>
      <NavLink to="/">Portfolio</NavLink>
    </div>
  );
};

export default About;
