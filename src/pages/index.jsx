import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";

const Portfolio = () => {
  return (
    <>
      <Navbar page="portfolio" />
      <Header />
    </>
  );
};

export default Portfolio;
