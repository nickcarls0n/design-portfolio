import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-md-7 align-self-end">
            <div className={styles.textblock}>
              <span className={styles.heading}>Nicholas Carlson</span>
              <p className={styles.paragraph}>
                Talented UI/UX Designer with over 6 years of design and
                development experience skilled in asking the important questions
                to enhance user engagement and conversion.
              </p>
              <p className={styles.tagline}>
                Seeking remote opportunities or on site assignments in the
                grater Sacramento area.
              </p>
            </div>
          </div>

          <div className={styles.scroll}>
            <p>Scroll To See Work</p>
            <img src="/images/scroll-arrow.png" alt="scroll arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
