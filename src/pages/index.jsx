import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import CaseStudies from "../components/case-studies/CaseStudies";
import MoreWork from "../components/more-work/MoreWork";
import About from "../components/about/About";

const Portfolio = () => {
  return (
    <>
      <Navbar page="portfolio" />
      <Header />
      <CaseStudies />
      <MoreWork />
      <About />
    </>
  );
};

export default Portfolio;
