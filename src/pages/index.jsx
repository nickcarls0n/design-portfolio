import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import CaseStudies from "../components/case-studies/CaseStudies";
import MoreWork from "../components/more-work/MoreWork";

const Portfolio = () => {
  return (
    <>
      <Navbar page="portfolio" />
      <Header />
      <CaseStudies />
      <MoreWork />
    </>
  );
};

export default Portfolio;
