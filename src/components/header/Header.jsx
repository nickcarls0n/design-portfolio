import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.column}>
        <div className={styles.textblock}>
          <span className={styles.heading}>Nicholas Carlson</span>
          <p className={styles.paragraph}>
            Talented UI/UX Designer with over 6 years of design and development
            experience skilled in asking the important questions to enhance user
            engagement and conversion.
          </p>
          <p className="subheading">
            Seeking remote opportunities or on site assignments
            <br />
            in the grater Sacramento area.
          </p>
        </div>
        <div className={styles.scroll}>
          <p className="subheading">Scroll To See Work</p>
          <img src="/images/scroll-arrow.png" alt="scroll arrow" />
        </div>
      </div>
    </div>
  );
};

export default Header;
