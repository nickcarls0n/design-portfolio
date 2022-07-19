import React from "react";
import styles from "./Footer.module.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  console.log(year);

  return (
    <div className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Contact</h2>
            <a href="mailto:contactncarlson@gmail.com">
              contactncarlson@gmail.com
            </a>
          </div>
          <div className="col-md-4 d-flex flex-column">
            <h2>Navigation</h2>
            <NavLink to="/">Portfolio</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
          <div className="col-md-4">
            <h2>Good Design</h2>
            <p>
              Good design is a matter of discipline. It starts by looking at the
              problem and collecting all the available information about it. If
              you understand the problem, you have the solution. It’s really
              more about logic than imagination.
            </p>
            <p>-Massimo Vignelli</p>
          </div>
        </div>
        <div>
          <p>&copy; Nicholas Carlson {year}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
