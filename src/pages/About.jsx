import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const About = () => {
  return (
    <div>
      <Navbar page="about" />
      <h1>Here is the About page</h1>
      <NavLink to="/">Portfolio</NavLink>
    </div>
  );
};

export default About;
