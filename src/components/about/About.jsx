import React from "react";
import styles from "./About.module.scss";
import { Button } from "../button/Button";

const About = () => {
  return (
    <div className={styles.about}>
      <div className="container">
        <div className="row position-relative">
          <div className={`col-lg-6 ${styles.textSection}`}>
            <h2>About Me</h2>
            <p>
              Throughout my career, I have lead projects in user interface
              design, web application design and development, brand identity,
              e-commerce design and implementation, illustration and art &
              creative direction.
            </p>
            <div className="row">
              <div className="col-6">
                <p className="subheading">Design Tools</p>
                <ul>
                  <li>Adobe PhotoShop</li>
                  <li>Adobe Illustrator</li>
                  <li>Adobe XD</li>
                  <li>Adobe InDesign</li>
                  <li>Figma</li>
                  <li>Afintiy Designer</li>
                </ul>
              </div>
              <div className="col-6">
                <p className="subheading">Development</p>
                <ul>
                  <li>React.js</li>
                  <li>HTML</li>
                  <li>Css / Scss</li>
                  <li>JavaScript</li>
                  <li>WordPress / PHP</li>
                </ul>
              </div>
            </div>
            <Button to="/about">More about me</Button>
          </div>
          <div className={`col-lg-6 ${styles.imgWrapper}`}>
            <img src="/images/headshot.jpg" alt="head shot" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
