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
          <NavLink to="/qualarc">
            <img
              src="/images/qualarc/qualarc-case-study.png"
              srcSet="/images/qualarc/qualarc-case-study@2x.png 2x"
              alt="Qualarc web mockup"
            />
          </NavLink>
        </div>
        <div className="col-sm-4 order-sm-1">
          <h3>Redesigning Qualarc</h3>
          <p>
            QualArc.com had not been updated in at least a decade. The original
            site was little more than an online brochure that had a list of
            product images and descriptions.
          </p>
          <Button to="/qualarc">More Info</Button>
        </div>
      </div>
      <div
        className={`row justify-content-between align-items-center ${styles.caseWrapper}`}
      >
        <div className="col-sm-7">
          <NavLink to="/cinic">
            <img
              src="/images/cinic/cinic-case-study.png"
              srcSet="/images/cinic/cinic-case-study@2x.png 2x"
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
          <NavLink to="/cha">
            <img
              src="\images\cha\cha-case-study.png"
              srcSet="\images\cha\cha-case-study@2x.png 2x"
              alt="Custom Home Accessories web mockup"
            />
          </NavLink>
        </div>
        <div className="col-sm-4 order-sm-1">
          <h3>Commercial & Home Accessories</h3>
          <p>
            Commercial & Home Accessories, an online retailer of mailbox, street
            signs and outdoor home items, needed a way to inform and advertise
            their expanding installation services to Northern California
            clients.
          </p>
          <Button to="/cha">More Info</Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
