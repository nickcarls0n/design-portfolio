import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <h1>Here is the Portfolio page</h1>
      <NavLink to="/about">About</NavLink>
    </>
  );
};

export default Portfolio;
