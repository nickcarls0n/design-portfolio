import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Nicholas Carlson</h1>
      <p>
        Talented UI/UX Designer with over 6 years of design and development
        experience skilled in asking the important questions to enhance user
        engagement and conversion.
      </p>
      <p>
        Seeking romote opurtunities or on site assignments in the grater
        Sacramento area.
      </p>
      <p>Scroll To See Work</p>
      <img src="/images/scroll-arrow.png" />
    </div>
  );
};

export default Header;
