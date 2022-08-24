import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className={`col ${styles.logo}`}>
          <NavLink to="/">
            <img
              src="/images\carlson-design-wordmark.png"
              srcSet="\images\carlson-design-wordmark.png 1x, \images\carlson-design-wordmark@2x.png 2x"
              alt="site logo"
            />
          </NavLink>
        </div>
        <div className={`col ${styles.links}`}>
          <NavLink
            to={"/"}
            className={props.page == "portfolio" && styles.active}
          >
            Portfolio
          </NavLink>
          <NavLink
            to={"/about"}
            className={props.page == "about" && styles.active}
          >
            About
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
