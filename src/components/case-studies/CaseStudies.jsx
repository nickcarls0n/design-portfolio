import React from "react";
import { Button } from "../button/Button";
import styles from "./CaseStudies.module.scss";
import { NavLink } from "react-router-dom";

const CaseStudies = () => {
  return (
    <div className={`container ${styles.caseStudies}`}>
      <div className="row">
        <div className={`col ${styles.header}`}>
          <h2>UI/UX Design</h2>
          <p className="subheading">Case Studies</p>
        </div>
      </div>
      <div
        className={`row justify-content-between align-items-center ${styles.caseWrapper}`}
      >
        <div className="col-sm-7 order-sm-2">
          <a href="*">
            <img
              src="/images/qualarc-case-study.png"
              srcSet="/images/qualarc-case-study@2x.png 2x"
              alt="Qualarc web mockup"
            />
          </a>
        </div>
        <div className="col-sm-4 order-sm-1">
          <h3>Redesigning Qualarc</h3>
          <p>
            QualArc.com had not been updated in at least a decade. The original
            site was little more than an online brochure that had a list of
            product images and descriptions.
          </p>
          <Button to="/">More Info</Button>
        </div>
      </div>
      <div
        className={`row justify-content-between align-items-center ${styles.caseWrapper}`}
      >
        <div className="col-sm-7">
          <NavLink to="/cinic">
            <img
              src="/images/cinic-case-study.png"
              srcSet="/images/cinic-case-study@2x.png 2x"
              alt="Cinic Bike web mockup"
            />
          </NavLink>
        </div>
        <div className="col-sm-4">
          <h3>Cinic Bike</h3>
          <p>
            Cinic Bike Gear is a small mountain bike start up with ambitions to
            grow big. The brand needed a logo, web and e-commerce platform as
            well as printed material and apparel designs.
          </p>
          <Button to="/cinic">More Info</Button>
        </div>
      </div>
      <div className="row justify-content-between align-items-center">
        <div className="col-sm-7 order-sm-2">
          <a href="">
            <img
              src="/images/qualarc-case-study.png"
              srcSet="/images/qualarc-case-study@2x.png 2x"
              alt="Qualarc web mockup"
            />
          </a>
        </div>
        <div className="col-sm-4 order-sm-1">
          <h3>Redesigning Qualarc</h3>
          <p>
            QualArc.com had not been updated in at least a decade. The original
            site was little more than an online brochure that had a list of
            product images and descriptions.
          </p>
          <Button to="/">More Info</Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
