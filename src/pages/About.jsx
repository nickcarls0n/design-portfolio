import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const About = () => {
  return (
    <div>
      <Navbar page="about" />
      <h1>Here is the About page</h1>
      <NavLink to="/">Portfolio</NavLink>
      <Footer />
    </div>
  );
};

export default About;
