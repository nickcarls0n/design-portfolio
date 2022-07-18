import React from "react";
import styles from "./About.module.scss";
import Button from "../button/Button";

const About = () => {
  return (
    <div className={styles.about}>
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
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
                  <li>JasvaScript</li>
                  <li>WordPress / PHP</li>
                </ul>
              </div>
            </div>
            <Button to="/">More about me</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
